import { Metadata } from "next/types";
import { CTASectionB } from "@/components/b/CTASectionB";
import { FAQB } from "@/components/b/FAQB";
import { FeatureShowcaseB } from "@/components/b/FeatureShowcaseB";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroB } from "@/components/b/HeroB";
import { IntegrationsB } from "@/components/b/IntegrationsB";
import { WhyChooseB } from "@/components/b/WhyChooseB";

export const metadata: Metadata = {
  title: "TutorCruncher AI | AI-Powered Tutoring Platform",
  description:
    "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
};

export default function HomePageB() {
  return (
    <div className="min-h-screen text-primary">
      <Header />
      <HeroB />

      <FeatureShowcaseB />

      <WhyChooseB />

      <IntegrationsB />

      <FAQB />

      <CTASectionB />

      <Footer />
    </div>
  );
}
