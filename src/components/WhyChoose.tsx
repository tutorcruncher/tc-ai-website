"use client";

import { useState, ReactNode } from "react";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const FEATURES: Feature[] = [
  {
    title: "Save Hours Every Week",
    description:
      "No more chasing tutors for lesson notes. Every session is automatically summarised and ready to review. Your admin team can focus on growing the business instead of paperwork.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Insights in Minutes, Not Days",
    description:
      "Get AI-generated analysis within 15 minutes of every lesson ending. Spot issues before they become problems and intervene while the context is still fresh.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "Every Student, Every Lesson",
    description:
      "Track individual progress across all sessions. See patterns emerge and personalise each student's learning journey based on real data, not guesswork.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Parents See Real Progress",
    description:
      "Send detailed, professional reports that show exactly what their child is learning and achieving. Build trust and reduce churn with transparent communication.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: "pink",
  },
  {
    title: "Tutors Get Better, Faster",
    description:
      "Personalised feedback helps your tutors improve their teaching techniques with every lesson. Identify coaching opportunities and celebrate successes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    color: "orange",
  },
];

const colorClasses: Record<string, { text: string }> = {
  blue: { text: "text-blue-600" },
  purple: { text: "text-purple-600" },
  green: { text: "text-green-600" },
  pink: { text: "text-pink-600" },
  orange: { text: "text-orange-600" },
};

export function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = FEATURES[activeIndex];
  const activeColors = colorClasses[activeFeature.color];

  return (
    <section id="why-choose" className="py-20 px-4 bg-page scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Why Choose TutorCruncher AI
        </h2>
        <p className="text-center text-muted-dark mb-12 max-w-2xl mx-auto">
          Purpose-built for tutoring companies who want to deliver exceptional
          results.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Titles on the left */}
          <div className="md:w-2/5 space-y-2">
            {FEATURES.map((feature, index) => {
              const colors = colorClasses[feature.color];
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left px-4 py-3 border rounded-xl transition-all flex items-center gap-3 ${
                    isActive
                      ? "bg-white border-default shadow-sm"
                      : "hover:bg-white/50 border-transparent"
                  }`}
                >
                  <span className={`flex-shrink-0 transition-colors ${isActive ? colors.text : "text-gray-400"}`}>
                    {feature.icon}
                  </span>
                  <span
                    className={`font-medium transition-colors ${
                      isActive ? "text-primary" : "text-muted-dark"
                    }`}
                  >
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content on the right */}
          <div className="md:w-3/5">
            <div className="bg-white rounded-2xl border border-default p-8 h-full">
              <span className={`${activeColors.text} [&>svg]:w-10 [&>svg]:h-10 mb-6 block`}>
                {activeFeature.icon}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-muted-dark leading-relaxed text-lg">
                {activeFeature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
