import { Metadata } from "next/types";
import { CTASectionD } from "@/components/d/CTASectionD";
import { FAQD } from "@/components/d/FAQD";
import { FeatureShowcaseD } from "@/components/d/FeatureShowcaseD";
import { Footer } from "@/components/Footer";
import { HeaderD } from "@/components/d/HeaderD";
import { HeroD } from "@/components/d/HeroD";
import { IntegrationsD } from "@/components/d/IntegrationsD";
import { WhyChooseD } from "@/components/d/WhyChooseD";

export const metadata: Metadata = {
  title: "TutorCruncher AI | AI-Powered Tutoring Platform",
  description:
    "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
};

export default function HomePageD() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf9f7' }}>
      <HeaderD />
      <HeroD />
      <FeatureShowcaseD />
      <WhyChooseD />
      <IntegrationsD />
      <FAQD />
      <CTASectionD />
      <Footer />
    </div>
  );
}
