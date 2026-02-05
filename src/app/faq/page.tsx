import { Metadata } from "next/types";

import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "FAQ | TutorCruncher AI",
  description:
    "Frequently asked questions about TutorCruncher AI, our AI-powered tutoring platform.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen text-primary">
      <Header />

      <section className="px-4 pt-24 pb-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-dark">
            Everything you need to know about TutorCruncher AI. Can&apos;t find what you&apos;re
            looking for? Get in touch with our team.
          </p>
        </div>
      </section>

      <FAQ hideHeading />

      <CTASection />

      <Footer />
    </div>
  );
}
