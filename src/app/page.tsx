import { Metadata } from "next/types";

import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Security } from "@/components/Security";
import { WhyChoose } from "@/components/WhyChoose";

export const metadata: Metadata = {
  title: "TutorCruncher AI | AI-Powered Tutoring Platform",
  description:
    "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
  openGraph: {
    title: "TutorCruncher AI | AI-Powered Tutoring Platform",
    description:
      "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
    type: "website",
    locale: "en_GB",
    siteName: "TutorCruncher AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "TutorCruncher AI | AI-Powered Tutoring Platform",
    description:
      "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen text-primary">
      <Header />
      <Hero />

      <FeatureShowcase />

      <WhyChoose />

      <Integrations />

      <Security />

      <FAQ />

      <CTASection />

      <Footer />
    </div>
  );
}
