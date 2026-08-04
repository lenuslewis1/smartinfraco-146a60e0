import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Clock, Share2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Eyebrow from "@/components/ui-system/Eyebrow";
import GridBackdrop from "@/components/ui-system/GridBackdrop";
import { Reveal } from "@/components/ui-system/RevealOnScroll";
import { articles, findArticleBySlug } from "@/data/articles";
import NotFound from "./NotFound";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = findArticleBySlug(slug);

  if (!article) {
    return <NotFound />;
  }

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <Layout>
      <article className="relative overflow-hidden bg-background">
        <section className="relative min-h-[92svh] overflow-hidden bg-secondary text-white">
          <img
            src={article.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(225_50%_8%_/_0.94)_0%,hsl(225_50%_8%_/_0.82)_42%,hsl(225_50%_8%_/_0.52)_72%,hsl(225_50%_8%_/_0.34)_100%)]" />
          <GridBackdrop variant="lines" className="opacity-25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1500px] flex-col justify-end px-5 pb-14 pt-36 sm:px-8 lg:px-12 lg:pb-20">
            <Reveal className="max-w-5xl">
              <Link to="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition hover:text-primary">
                <ArrowLeft className="h-4 w-4" />
                Back to articles
              </Link>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
                <Eyebrow tone="accent">{article.category}</Eyebrow>
                <span>{article.date}</span>
                <span className="flex items-center gap-2 normal-case tracking-normal text-white/68">
                  <Clock className="h-4 w-4" />
                  {article.read}
                </span>
              </div>
              <h1 className="mt-7 font-display text-[clamp(3rem,7vw,7.4rem)] font-semibold leading-[0.94] tracking-normal">
                {article.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 lg:text-xl lg:leading-9">
                {article.hero}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/58">
                <span>By {article.author}</span>
                <span className="h-px w-10 bg-white/25" />
                <button className="inline-flex items-center gap-2 text-white/70 transition hover:text-primary">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative py-20 lg:py-28">
          <GridBackdrop variant="dots" className="opacity-35" />
          <div className="relative mx-auto grid w-full max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.28fr)] lg:px-12">
            <Reveal className="min-w-0">
              <div className="space-y-14">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-3xl font-semibold leading-tight text-foreground lg:text-5xl">
                      {section.heading}
                    </h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground lg:text-lg lg:leading-9">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </Reveal>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-hairline bg-white p-7 shadow-[0_18px_70px_hsl(225_50%_12%_/_0.08)]">
                <Eyebrow tone="primary">Key takeaways</Eyebrow>
                <ul className="mt-7 space-y-5">
                  {article.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-primary" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow tone="muted">More thinking</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground lg:text-6xl">
                Related articles
              </h2>
            </div>
            <Link to="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary">
              View all articles
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/articles/${item.slug}`}
                className="group border border-hairline bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-secondary/35 hover:bg-white hover:shadow-[0_18px_60px_hsl(225_50%_12%_/_0.10)]"
              >
                <Eyebrow tone="primary">{item.category}</Eyebrow>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.excerpt}</p>
                <div className="mt-7 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.read}</span>
                  <ArrowUpRight className="h-4 w-4 text-secondary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
