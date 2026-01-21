"use client";

import { useState } from "react";

interface Feature {
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    title: "Save Hours Every Week",
    description:
      "No more chasing tutors for lesson notes. Every session is automatically summarised and ready to review. Your admin team can focus on growing the business instead of paperwork.",
  },
  {
    title: "Insights in Minutes, Not Days",
    description:
      "Get AI-generated analysis within 15 minutes of every lesson ending. Spot issues before they become problems and intervene while the context is still fresh.",
  },
  {
    title: "Every Student, Every Lesson",
    description:
      "Track individual progress across all sessions. See patterns emerge and personalise each student's learning journey based on real data, not guesswork.",
  },
  {
    title: "Parents See Real Progress",
    description:
      "Send detailed, professional reports that show exactly what their child is learning and achieving. Build trust and reduce churn with transparent communication.",
  },
  {
    title: "Tutors Get Better, Faster",
    description:
      "Personalised feedback helps your tutors improve their teaching techniques with every lesson. Identify coaching opportunities and celebrate successes.",
  }
];

export function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-page">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Why Choose TutorCruncher AI
        </h2>
        <p className="text-center text-muted-dark mb-12 max-w-2xl mx-auto">
          Purpose-built for tutoring companies who want to deliver exceptional
          results.
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Titles on the left */}
          <div className="md:w-2/5 space-y-1">
            {FEATURES.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeIndex === index
                    ? "bg-white border border-default text-primary font-medium"
                    : "text-muted-dark hover:text-primary hover:bg-white/50"
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          {/* Content on the right */}
          <div className="md:w-3/5">
            <div className="bg-white rounded-xl border border-default p-8 h-full">
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                {FEATURES[activeIndex].title}
              </h3>
              <p className="text-muted-dark leading-relaxed">
                {FEATURES[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
