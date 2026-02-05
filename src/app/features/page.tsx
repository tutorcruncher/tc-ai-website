import { PrismicText } from "@prismicio/react";
import { Metadata } from "next/types";
import { createClient } from "prismicio";

import { CTASection } from "@/components/CTASection";
import { FeatureDetail, type PrismicFeatureItem } from "@/components/FeatureDetail";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Features | TutorCruncher AI",
  description:
    "Explore AI-powered lesson summaries, student insights, tutor coaching, parent reports, and automatic attendance tracking.",
};

export default async function FeaturesPage() {
  const client = createClient();

  let page = null;
  try {
    page = await client.getSingle("features_page");
  } catch {
  }

  return (
    <div className="min-h-screen text-primary">
      <Header />

      <section>
        <h1 className="font-heading text-center text-3xl font-bold mt-24">
          <PrismicText field={page!.data.hero_title} />
        </h1>
      </section>

      {/* <section className="px-4 pt-24 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium text-link uppercase tracking-wide mb-3">
            {page?.data?.hero_label || "Platform Features"}
          </p>
          
          <p className="text-lg text-muted-dark max-w-3xl">
            <PrismicText field={page.data.hero_description} />
          </p>
        </div>
      </section> */}
      <div className="py-40">
        <FeatureDetail features={page?.data?.features as PrismicFeatureItem[]} />
      </div>

      <CTASection />

      <Footer />
    </div>
  );
}
