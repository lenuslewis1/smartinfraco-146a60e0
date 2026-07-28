<?php
/**
 * Smart Infraco theme setup and React application loader.
 *
 * @package Smart_Infraco
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'SMART_INFRACO_THEME_VERSION', '1.0.0' );

/**
 * Register core WordPress theme features.
 */
function smart_infraco_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'script', 'style', 'gallery', 'caption' ) );
	add_theme_support( 'custom-logo' );
}
add_action( 'after_setup_theme', 'smart_infraco_theme_setup' );

/**
 * Return the Vite entry from the generated manifest.
 *
 * @return array<string, mixed>|null
 */
function smart_infraco_vite_entry() {
	$manifest_path = get_template_directory() . '/app/.vite/manifest.json';

	if ( ! file_exists( $manifest_path ) ) {
		return null;
	}

	$manifest = json_decode( file_get_contents( $manifest_path ), true );

	if ( ! is_array( $manifest ) || empty( $manifest['index.html'] ) ) {
		return null;
	}

	return $manifest['index.html'];
}

/**
 * Load the compiled application and theme fallback styles.
 */
function smart_infraco_enqueue_assets() {
	$theme_uri = get_template_directory_uri();
	$entry     = smart_infraco_vite_entry();

	wp_enqueue_style(
		'smart-infraco-theme',
		get_stylesheet_uri(),
		array(),
		SMART_INFRACO_THEME_VERSION
	);

	if ( ! $entry || empty( $entry['file'] ) ) {
		return;
	}

	if ( ! empty( $entry['css'] ) && is_array( $entry['css'] ) ) {
		foreach ( $entry['css'] as $index => $css_file ) {
			wp_enqueue_style(
				'smart-infraco-app-' . $index,
				$theme_uri . '/app/' . ltrim( $css_file, '/' ),
				array(),
				SMART_INFRACO_THEME_VERSION
			);
		}
	}

	wp_enqueue_script(
		'smart-infraco-app',
		$theme_uri . '/app/' . ltrim( $entry['file'], '/' ),
		array(),
		SMART_INFRACO_THEME_VERSION,
		true
	);
}
add_action( 'wp_enqueue_scripts', 'smart_infraco_enqueue_assets' );

/**
 * Mark the Vite entry as an ES module.
 *
 * @param string $tag    Generated script element.
 * @param string $handle Registered script handle.
 * @return string
 */
function smart_infraco_module_script( $tag, $handle ) {
	if ( 'smart-infraco-app' !== $handle ) {
		return $tag;
	}

	return str_replace( '<script ', '<script type="module" ', $tag );
}
add_filter( 'script_loader_tag', 'smart_infraco_module_script', 10, 2 );

/**
 * Register the application routes so WordPress serves the React shell with a
 * successful response instead of a 404.
 */
function smart_infraco_add_rewrite_rules() {
	$routes = array(
		'about',
		'connectivity',
		'data-centres',
		'cloud-services',
		'cybersecurity',
		'contact',
		'news',
		'articles',
		'videos',
		'pictures',
		'events',
		'awards',
		'webinars',
	);

	foreach ( $routes as $route ) {
		add_rewrite_rule(
			'^' . preg_quote( $route, '/' ) . '/?$',
			'index.php?smart_infraco_app=1',
			'top'
		);
	}

	add_rewrite_rule( '^articles/[^/]+/?$', 'index.php?smart_infraco_app=1', 'top' );
	add_rewrite_rule( '^webinars/[^/]+/?$', 'index.php?smart_infraco_app=1', 'top' );
}
add_action( 'init', 'smart_infraco_add_rewrite_rules' );

/**
 * Expose the internal application route flag.
 *
 * @param string[] $vars Public query variables.
 * @return string[]
 */
function smart_infraco_query_vars( $vars ) {
	$vars[] = 'smart_infraco_app';
	return $vars;
}
add_filter( 'query_vars', 'smart_infraco_query_vars' );

/**
 * Use the application shell for registered virtual routes.
 *
 * @param string $template Selected WordPress template.
 * @return string
 */
function smart_infraco_route_template( $template ) {
	if ( get_query_var( 'smart_infraco_app' ) ) {
		status_header( 200 );
		return get_template_directory() . '/index.php';
	}

	return $template;
}
add_filter( 'template_include', 'smart_infraco_route_template' );

/**
 * Flush route rules only when the theme is activated.
 */
function smart_infraco_after_switch_theme() {
	smart_infraco_add_rewrite_rules();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'smart_infraco_after_switch_theme' );

/**
 * Add the website metadata used by the original design.
 */
function smart_infraco_meta_tags() {
	?>
	<meta name="description" content="Ghana's national digital infrastructure company providing fibre connectivity, data centre services, cloud infrastructure, and managed IT solutions for government and enterprise.">
	<meta name="author" content="Smart Infraco">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Smart Infraco – Powering Ghana's Digital Backbone">
	<meta property="og:description" content="Ghana's national digital infrastructure company providing fibre connectivity, data centre services, cloud infrastructure, and managed IT solutions for government and enterprise.">
	<meta name="twitter:card" content="summary_large_image">
	<?php
}
add_action( 'wp_head', 'smart_infraco_meta_tags', 5 );

