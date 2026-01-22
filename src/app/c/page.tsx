import { Metadata } from "next/types";
import { CTASectionC } from "@/components/c/CTASectionC";
import { FAQC } from "@/components/c/FAQC";
import { FeatureShowcaseC } from "@/components/c/FeatureShowcaseC";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroC } from "@/components/c/HeroC";
import { IntegrationsC } from "@/components/c/IntegrationsC";
import { WhyChooseC } from "@/components/c/WhyChooseC";

export const metadata: Metadata = {
  title: "TutorCruncher AI | AI-Powered Tutoring Platform",
  description:
    "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
};

export default function HomePageC() {
  return (
    <div className="min-h-screen text-primary">
      <Header />
      <HeroC />

      <FeatureShowcaseC />

      <WhyChooseC />

      <IntegrationsC />

      <FAQC />

      <CTASectionC />

      <Footer />
    </div>
  );
}
