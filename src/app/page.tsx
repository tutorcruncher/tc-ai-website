import { Metadata } from "next/types";
import { Button } from "@/components/Button";
import { ContentBlock } from "@/components/ContentBlock";
import { Header } from "@/components/Header";
import { PromptDemo } from "@/components/PromptDemo";

export const metadata: Metadata = {
  title: "TutorCruncher AI | AI-Powered Tutoring Platform",
  description:
    "TutorCruncher AI harnesses artificial intelligence to deliver personalised, data-driven educational experiences.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-20 pb-5 border-b-50">
        <div className="mx-auto max-w-7xl w-full flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left side - Text and CTA */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xld mb-6">
                The AI Notetaker you’ll wish was in your last customer meeting
              </h1>
              <p className="text-lg md:text-xl text-muted-dark max-w-2xl mx-auto lg:mx-0 mb-10">
              Grain gives you accurate meeting summaries, account insights, and coaching suggestions in an easy-to-use product built for growing teams.
              </p>
              <Button href="/early-access" className="mx-auto lg:mx-0">
                Join Early Access
              </Button>
                      <p className=" mt-6 text-sm text-muted">
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
            </div>
            {/* Right side - Animation */}
            <div className="flex-1 w-full max-w-xl">
              <PromptDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl space-y-20">
          <ContentBlock
            title="AI-Powered Lesson Analysis"
            imageSrc="https://placehold.co/600x400/e2e8f0/64748b?text=Lesson+Analysis"
            imageAlt="AI lesson analysis dashboard"
            imagePosition="right"
          >
            <p className="mb-4">
              Our cutting-edge AI technology analyses every lesson in real-time,
              providing tutors with actionable insights to improve student outcomes.
            </p>
            <p>
              From engagement metrics to comprehension tracking, get a complete
              picture of each tutoring session.
            </p>
          </ContentBlock>

          <ContentBlock
            title="Personalised Learning Paths"
            imageSrc="https://framerusercontent.com/images/KXFJV1XbjL3zko0leo1H8KWgBww.png?width=688&height=908"
            imageAlt="Personalised learning paths interface"
            imagePosition="left"
          >
            <p className="mb-4">
              Every student learns differently. Our AI creates customised learning
              paths tailored to individual strengths, weaknesses, and goals.
            </p>
            <p>
              Adaptive algorithms continuously refine recommendations based on
              performance data and learning patterns.
            </p>
          </ContentBlock>

          <ContentBlock
            title="Comprehensive Reporting"
            imageSrc="https://placehold.co/600x400/e2e8f0/64748b?text=Reporting"
            imageAlt="Comprehensive reporting dashboard"
            imagePosition="right"
          >
            <p className="mb-4">
              Generate detailed reports for students, parents, and administrators
              with just a few clicks.
            </p>
            <p>
              Track progress over time, identify areas for improvement, and
              celebrate achievements with data-driven insights.
            </p>
          </ContentBlock>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="group border border-default rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-medium text-primary">What is TutorCruncher AI?</span>
                <svg className="h-5 w-5 text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-muted-dark">
                TutorCruncher AI is an AI-powered tutoring platform that provides real-time lesson analysis, personalised learning paths, and comprehensive reporting to help tutors deliver better educational outcomes.
              </div>
            </details>

            <details className="group border border-default rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-medium text-primary">How does the AI analyse lessons?</span>
                <svg className="h-5 w-5 text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-muted-dark">
                Our AI monitors engagement levels, tracks comprehension through interactive assessments, and identifies patterns in student responses to provide actionable insights for tutors.
              </div>
            </details>

            <details className="group border border-default rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-medium text-primary">Is my data secure?</span>
                <svg className="h-5 w-5 text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-muted-dark">
                Yes, we take data security seriously. All data is encrypted in transit and at rest, and we comply with GDPR and other relevant data protection regulations.
              </div>
            </details>

            <details className="group border border-default rounded-lg">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-medium text-primary">When will TutorCruncher AI be available?</span>
                <svg className="h-5 w-5 text-muted group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-muted-dark">
                We&apos;re currently in early access. Join our waitlist to be among the first to try TutorCruncher AI when it launches.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-default">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted">
          © {new Date().getFullYear()} TutorCruncher AI
        </div>
      </footer>
    </div>
  );
}
