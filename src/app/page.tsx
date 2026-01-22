import { Metadata } from "next/types";
import { Button } from "@/components/Button";
import { ContentBlock } from "@/components/ContentBlock";
import { FAQ } from "@/components/FAQ";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Integrations } from "@/components/Integrations";
import { PromptDemo } from "@/components/PromptDemo";
import { WhyChoose } from "@/components/WhyChoose";

export const metadata: Metadata = {
  title: "TutorCruncher AI | AI-Powered Tutoring Platform",
  description:
    "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen text-primary">
      <Header />
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-20 pb-5 bg-surface bg-gradient-to-b from-white to-page">
        <div className="mx-auto max-w-7xl w-full flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left side - Text and CTA */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xld mb-6 leading-tight">
                The <span className="text-link font-bold">AI insights</span> you'll wish you had for every lesson.
              </h1>
              <p className="text-lg md:text-xl text-muted-dark max-w-2xl mx-auto lg:mx-0 mb-6">
              TutorCruncher AI transforms every lesson into actionable insights—tracking student progress, highlighting strengths, and surfacing areas for improvement without any extra work from your tutors.
              </p>
              <Button href="/early-access" className="mx-auto lg:mx-0">
                Join Early Access
              </Button>
            </div>
            {/* Right side - Animation */}
            <div className="flex-1 w-full max-w-xl">
              <PromptDemo />
            </div>
          </div>
        </div>
                              <p className="text-center mt-6 text-sm text-muted">
          From the team behind{" "}
          <a
            href="https://tutorcruncher.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link hover:underline"
          >
            TutorCruncher
          </a>
          , trusted by tutoring companies worldwide.
        </p>
      </section>

      <FeatureShowcase />

      <WhyChoose />

      <Integrations />

      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-page">
        <div className="mx-auto max-w-4xl">
          <div className="bg-page rounded-2xl px-8 py-12 md:py-16">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Join our early adopters
              </h2>
              <p className="text-muted-dark max-w-xl mx-auto">
                Be among the first to experience AI-powered lesson insights and help shape the future of tutoring.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-default">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary">Full platform access before launch</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-default">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary">Direct influence on features</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-default">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary">Exclusive feature previews</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-default">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary">Priority support from our team</span>
              </div>
            </div>

            <div className="text-center">
              <Button href="/early-access">
                Request Early Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
