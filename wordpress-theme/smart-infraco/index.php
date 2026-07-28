<?php
/**
 * Main application shell.
 *
 * @package Smart_Infraco
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="root">
	<div class="smart-infraco-loading"><?php esc_html_e( 'Loading Smart Infraco…', 'smart-infraco' ); ?></div>
</div>
<noscript><?php esc_html_e( 'JavaScript is required to view this website.', 'smart-infraco' ); ?></noscript>
<?php wp_footer(); ?>
</body>
</html>

