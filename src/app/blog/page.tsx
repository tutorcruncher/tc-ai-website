import { PrismicImage, PrismicText } from "@prismicio/react";
import Link from "next/link";
import { Metadata } from "next/types";
import { createClient } from "prismicio";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Blog | TutorCruncher AI",
  description:
    "Insights, tips, and news about AI-powered tutoring, EdTech trends, and growing your tutoring business.",
};

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

export default async function BlogPage() {
  const client = createClient();

  let posts: Awaited<ReturnType<typeof client.getAllByType>> = [];
  try {
    posts = await client.getAllByType("blog_post", {
      orderings: [{ field: "my.blog_post.publication_date", direction: "desc" }],
    });
  } catch {
    // Custom type may not exist yet in Prismic
  }

  if (posts.length === 0) {
    return (
      <div className="min-h-screen text-primary">
        <Header />
        <section className="px-4 pt-24 pb-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-dark max-w-2xl">
              Insights, tips, and news about AI-powered tutoring, EdTech trends, and growing your
              tutoring business.
            </p>
          </div>
        </section>
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl text-center py-16">
            <p className="text-muted-dark text-lg">No posts yet. Check back soon!</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const [featuredPost, ...remainingPosts] = posts;

  return (
    <div className="min-h-screen text-primary">
      <Header />

      <section className="px-4 pt-24 pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-dark max-w-2xl">
            Insights, tips, and news about AI-powered tutoring, EdTech trends, and growing your
            tutoring business.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href={featuredPost.url || `/blog/${featuredPost.uid}`}
            className="group block no-underline"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl border border-default overflow-hidden">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <PrismicImage
                  field={featuredPost.data.featured_image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  {featuredPost.data.category && (
                    <>
                      <span className="text-xs font-medium uppercase tracking-wider text-link">
                        {featuredPost.data.category}
                      </span>
                      <span className="text-muted">·</span>
                    </>
                  )}
                  <span className="text-sm text-muted-dark">
                    {estimateReadTime(featuredPost.data.content?.length ?? 0)}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-link transition-colors">
                  <PrismicText field={featuredPost.data.title} />
                </h2>
                <p className="text-muted-dark leading-relaxed mb-6">
                  <PrismicText field={featuredPost.data.excerpt} />
                </p>
                <div className="text-sm text-muted-dark">
                  {formatDate(featuredPost.data.publication_date)}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Remaining posts grid */}
      {remainingPosts.length > 0 && (
        <section className="px-4 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <Link
                  key={post.uid}
                  href={post.url || `/blog/${post.uid}`}
                  className="group block no-underline"
                >
                  <article className="bg-white rounded-2xl border border-default overflow-hidden h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <PrismicImage
                        field={post.data.featured_image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
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
                      <h2 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-link transition-colors">
                        <PrismicText field={post.data.title} />
                      </h2>
                      <p className="text-sm text-muted-dark leading-relaxed flex-1">
                        <PrismicText field={post.data.excerpt} />
                      </p>
                      <div className="text-sm text-muted-dark mt-4">
                        {formatDate(post.data.publication_date)}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
