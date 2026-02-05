import { PrismicImage, PrismicRichText, PrismicText } from "@prismicio/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import { createClient } from "prismicio";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const client = createClient();
  try {
    const posts = await client.getAllByType("blog_post");
    return posts.map((post) => ({ slug: post.uid }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const client = createClient();

  try {
    const post = await client.getByUID("blog_post", slug);
    return {
      title: `${post.data.title?.[0]?.text ?? "Blog Post"} | TutorCruncher AI Blog`,
      description: post.data.excerpt?.[0]?.text ?? "",
    };
  } catch {
    return {};
  }
}

function formatDate(dateString: string | null) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function estimateReadTime(wordCount: number) {
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const client = createClient();

  let post;
  try {
    post = await client.getByUID("blog_post", slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen text-primary">
      <Header />

      <article className="px-4 pt-24 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-dark hover:text-primary transition-colors mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              {post.data.category && (
                <>
                  <span className="text-xs font-medium uppercase tracking-wider text-link">
                    {post.data.category}
                  </span>
                  <span className="text-muted">·</span>
                </>
              )}
              <span className="text-sm text-muted-dark">
                {estimateReadTime(post.data.content?.length ?? 0)}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <PrismicText field={post.data.title} />
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-dark">
              {post.data.author && <span>{post.data.author}</span>}
              {post.data.author && post.data.publication_date && (
                <span className="text-muted">·</span>
              )}
              {post.data.publication_date && (
                <time dateTime={post.data.publication_date}>
                  {formatDate(post.data.publication_date)}
                </time>
              )}
            </div>
          </div>

          {/* Featured image */}
          {post.data.featured_image?.url && (
            <div className="aspect-[2/1] rounded-2xl overflow-hidden mb-12">
              <PrismicImage
                field={post.data.featured_image}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose-content">
            <PrismicRichText
              field={post.data.content}
              components={{
                heading2: ({ children }) => (
                  <h2 className="font-heading text-2xl font-bold mt-10 mb-4">{children}</h2>
                ),
                heading3: ({ children }) => (
                  <h3 className="font-heading text-xl font-bold mt-8 mb-3">{children}</h3>
                ),
                paragraph: ({ children }) => (
                  <p className="text-muted-dark leading-relaxed mb-4">{children}</p>
                ),
                listItem: ({ children }) => (
                  <li className="text-muted-dark leading-relaxed">{children}</li>
                ),
                oListItem: ({ children }) => (
                  <li className="text-muted-dark leading-relaxed">{children}</li>
                ),
                list: ({ children }) => (
                  <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
                ),
                oList: ({ children }) => (
                  <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
                ),
                strong: ({ children }) => (
                  <strong className="text-primary font-semibold">{children}</strong>
                ),
                hyperlink: ({ children, node }) => {
                  const target = "target" in node.data ? (node.data.target as string) : undefined;
                  return (
                    <a
                      href={node.data.url}
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}
                      className="text-link underline hover:text-link/80 transition-colors"
                    >
                      {children}
                    </a>
                  );
                },
                image: ({ node }) => (
                  <figure className="my-8">
                    <img
                      src={node.url}
                      alt={node.alt ?? ""}
                      className="rounded-xl w-full"
                    />
                    {node.alt && (
                      <figcaption className="text-sm text-muted-dark text-center mt-3">
                        {node.alt}
                      </figcaption>
                    )}
                  </figure>
                ),
              }}
            />
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-10 border-t border-default">
            <div className="bg-page rounded-2xl p-8 md:p-10 text-center">
              <h3 className="font-heading text-2xl font-bold mb-3">
                Ready to transform your tutoring business?
              </h3>
              <p className="text-muted-dark mb-6 max-w-lg mx-auto">
                TutorCruncher AI helps tutoring companies deliver better outcomes with the power of
                artificial intelligence.
              </p>
              <a
                href="https://forms.gle/uunftAqJqn2ZFQzFA"
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg font-medium transition-colors px-6 py-3 text-base bg-primary text-white hover:bg-primary/90"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
