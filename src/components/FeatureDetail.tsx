"use client";

import { type ImageField, type KeyTextField, type RichTextField, type SelectField } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Icon map — maps Prismic select values to SVG icons
// ---------------------------------------------------------------------------
const ICONS: Record<string, React.ReactNode> = {
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  academic: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
  "pie-chart": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
  ),
  "check-circle": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
};

const DEFAULT_ICON = ICONS.document;

// ---------------------------------------------------------------------------
// Fallback data used when Prismic has no content yet
// ---------------------------------------------------------------------------
interface FallbackFeature {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

const FALLBACK_FEATURES: FallbackFeature[] = [
  {
    title: "AI Lesson Summaries",
    description:
      "Every recorded lesson is automatically transcribed and summarised by our AI. Tutors and administrators get structured notes with timestamped chapters, key topics covered, and highlighted moments — all without lifting a finger.",
    benefits: [
      "Automatic transcription with timestamped chapters",
      "Topic extraction and categorisation",
      "Key moment highlighting for easy review",
      "Searchable lesson history across all students",
      "Shareable summaries for parents and administrators",
    ],
    icon: "document",
  },
  {
    title: "Student Performance Insights",
    description:
      "Track how each student is progressing with detailed engagement and comprehension metrics generated after every session. Our AI analyses response patterns, time-on-task, and conceptual understanding to paint a complete picture of each learner's strengths and areas for growth.",
    benefits: [
      "Real-time engagement and comprehension scoring",
      "Session-over-session progress tracking",
      "Automatic identification of knowledge gaps",
      "Visual dashboards for quick performance overviews",
      "Alerts when a student may be falling behind",
    ],
    icon: "chart",
  },
  {
    title: "Tutor Feedback & Coaching",
    description:
      "Help your tutors improve with AI-generated feedback after every lesson. Our system evaluates teaching techniques, communication clarity, pacing, and student engagement to provide personalised coaching suggestions.",
    benefits: [
      "Personalised teaching feedback after each session",
      "Teaching quality scores with clear benchmarks",
      "Actionable improvement suggestions",
      "Track tutor development over time",
      "Identify top-performing teaching strategies",
    ],
    icon: "academic",
  },
  {
    title: "Parent Progress Reports",
    description:
      "Generate professional, detailed progress reports for parents automatically. Reports include subject mastery breakdowns, attendance records, improvement trends, and tutor observations.",
    benefits: [
      "Auto-generated professional PDF reports",
      "Subject mastery breakdowns with visual charts",
      "Attendance and consistency tracking",
      "Improvement trends over configurable time periods",
      "Branded reports with your company's identity",
    ],
    icon: "pie-chart",
  },
  {
    title: "Automatic Attendance Tracking",
    description:
      "No more manual attendance logs. TutorCruncher AI automatically detects when tutors and students join recorded sessions, tracks session duration, and logs attendance records.",
    benefits: [
      "Automatic detection from recorded sessions",
      "Late arrival and early departure tracking",
      "No-show alerts for administrators",
      "Integrated with invoicing and scheduling",
      "Historical attendance reports per student or tutor",
    ],
    icon: "check-circle",
  },
];

// ---------------------------------------------------------------------------
// Prismic feature type
// ---------------------------------------------------------------------------
export interface PrismicFeatureItem {
  title: KeyTextField;
  description: RichTextField;
  image: ImageField;
  benefits: RichTextField;
  icon: SelectField;
}

interface FeatureDetailProps {
  features?: PrismicFeatureItem[];
}

// ---------------------------------------------------------------------------
// Shared visual placeholder
// ---------------------------------------------------------------------------
function PlaceholderPreview({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-white rounded-2xl border border-default p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-page flex items-center justify-center text-link">
          {icon}
        </div>
        <span className="font-medium text-primary text-sm">{title}</span>
      </div>
      <div className="space-y-3">
        <div className="h-3 bg-page rounded-full w-full" />
        <div className="h-3 bg-page rounded-full w-5/6" />
        <div className="h-3 bg-page rounded-full w-4/6" />
        <div className="h-8 mt-4" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-16 bg-page rounded-lg" />
          <div className="h-16 bg-page rounded-lg" />
          <div className="h-16 bg-page rounded-lg" />
        </div>
        <div className="h-3 bg-page rounded-full w-3/4 mt-4" />
        <div className="h-3 bg-page rounded-full w-full" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Feature section (fallback)
// ---------------------------------------------------------------------------
function FallbackFeatureSection({ feature, index }: { feature: FallbackFeature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isReversed = index % 2 === 1;
  const icon = ICONS[feature.icon] ?? DEFAULT_ICON;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/2"
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-page text-link mb-5">
          {icon}
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">{feature.title}</h2>
        <p className="text-muted-dark leading-relaxed mb-6">{feature.description}</p>
        <ul className="space-y-3">
          {feature.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-primary text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="lg:w-1/2 w-full"
      >
        <PlaceholderPreview icon={icon} title={feature.title} />
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Feature section (Prismic)
// ---------------------------------------------------------------------------
function PrismicFeatureSection({ feature, index }: { feature: PrismicFeatureItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isReversed = index % 2 === 1;
  const icon = ICONS[feature.icon ?? "document"] ?? DEFAULT_ICON;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:w-1/2"
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-page text-link mb-5">
          {icon}
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">{feature.title}</h2>
        <div className="text-muted-dark leading-relaxed mb-6">
          <PrismicRichText
            field={feature.description}
            components={{ paragraph: ({ children }) => <p>{children}</p> }}
          />
        </div>
        <PrismicRichText
          field={feature.benefits}
          components={{
            list: ({ children }) => <ul className="space-y-3">{children}</ul>,
            listItem: ({ children }) => (
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-primary text-sm">{children}</span>
              </li>
            ),
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="lg:w-1/2 w-full"
      >
        {feature.image?.url ? (
          <div className="rounded-2xl overflow-hidden border border-default">
            <PrismicImage field={feature.image} className="w-full h-auto" />
          </div>
        ) : (
          <PlaceholderPreview icon={icon} title={feature.title ?? ""} />
        )}
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------
export function FeatureDetail({ features }: FeatureDetailProps) {
  const hasPrismicData = features && features.length > 0 && features.some((f) => f.title);

  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-6xl space-y-24 lg:space-y-32">
        {hasPrismicData
          ? features!.map((feature, index) => (
              <PrismicFeatureSection key={feature.title || index} feature={feature as PrismicFeatureItem} index={index} />
            ))
          : FALLBACK_FEATURES.map((feature, index) => (
              <FallbackFeatureSection key={feature.title} feature={feature} index={index} />
            ))}
      </div>
    </section>
  );
}
