"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Feature {
  title: string;
  description: string;
  preview: React.ReactNode;
}

function MockWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-default overflow-hidden">
      <div className="p-4">{children}</div>
    </div>
  );
}

// Feature 1: AI Lesson Summaries
function LessonSummaryPreview() {
  return (
    <MockWindow>
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-default">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/avatar-emma.jpg"
            alt="Emma Thompson"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-primary text-sm">Emma Thompson</p>
            <p className="text-xs text-muted">GCSE Maths • 60 mins • Today, 3:45 PM</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
            Topics Covered
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
              Quadratic Equations
            </span>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
              Factorisation
            </span>
            <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">
              Quadratic Formula
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Chapters</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">0:00</span>
              <span className="text-primary">Introduction & Review</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">8:30</span>
              <span className="text-primary">Factorisation Method</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">25:00</span>
              <span className="text-primary">Quadratic Formula</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted font-mono w-12">42:00</span>
              <span className="text-primary">Practice Problems</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-page rounded-lg">
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Summary</p>
          <p className="text-sm text-primary leading-relaxed">
            Emma demonstrated strong understanding of factorisation, successfully solving 8/10
            problems independently. Introduced the quadratic formula with good initial grasp...
          </p>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 2: Tutor Feedback
function TutorFeedbackPreview() {
  return (
    <MockWindow>
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-default">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tutor-feedback.jpg"
            alt="Tutor"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-primary text-sm">Session Feedback</p>
            <p className="text-xs text-muted">Lesson with Emma • Today</p>
          </div>
        </div>

        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-xs font-medium text-green-800 uppercase tracking-wide mb-2">
            What Worked Well
          </p>
          <ul className="list-disc pl-4 space-y-1 text-sm text-green-700">
            <li>Clear explanations with visual examples</li>
            <li>Good use of scaffolded questions</li>
            <li>Effective pace adjustments based on responses</li>
          </ul>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs font-medium text-blue-800 uppercase tracking-wide mb-2">
            Suggestions
          </p>
          <ul className="list-disc pl-4 space-y-1 text-sm text-blue-700">
            <li>Consider more real-world examples for engagement</li>
            <li>Allow more think-time after questions</li>
          </ul>
        </div>

        <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-primary">Feedback generated for this session</p>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 4: Parent Progress Reports
function ParentReportPreview() {
  return (
    <MockWindow>
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-default">
          <div>
            <p className="font-medium text-primary">Progress Report</p>
            <p className="text-xs text-muted">Emma Thompson • January 2025</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-primary text-xs font-medium rounded-lg border border-default">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            Share
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-page rounded-lg">
            <p className="text-xs font-medium text-muted uppercase tracking-wide">Lessons</p>
            <p className="text-lg font-bold text-primary">12</p>
          </div>
          <div className="p-3 bg-page rounded-lg">
            <p className="text-xs font-medium text-muted uppercase tracking-wide">Topics Covered</p>
            <p className="text-lg font-bold text-primary">8</p>
          </div>
        </div>

        <div className="p-3 bg-page rounded-lg">
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Summary</p>
          <p className="text-sm text-primary leading-relaxed">
            Emma has made excellent progress this month, particularly in algebra. She is gaining
            confidence with factorisation and is ready to move on to more complex equations.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">
            Key Observations
          </p>
          <ul className="list-disc pl-4 space-y-2 text-sm text-primary">
            <li>Engages well and asks thoughtful questions</li>
            <li>Would benefit from more practice with word problems</li>
            <li>Strong independent problem-solving improving each week</li>
          </ul>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 5: Automatic Attendance Tracking
function AttendancePreview() {
  return (
    <MockWindow>
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-default">
          <p className="font-medium text-primary text-sm">Today&apos;s Lessons</p>
          <span className="text-xs text-muted">Auto-detected from recordings</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/avatar-emma.jpg"
                alt="Emma Thompson"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-primary">Emma Thompson</p>
                <p className="text-xs text-muted">GCSE Maths • 3:45 PM</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p className="text-xs font-medium text-green-600">Live</p>
              </div>
              <p className="text-xs text-muted">In session</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/avatar-james.jpg"
                alt="James Wilson"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-primary">James Wilson</p>
                <p className="text-xs text-muted">A-Level Physics • 5:00 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-green-600">Present</p>
              <p className="text-xs text-muted">Joined 4:58 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/avatar-sophie.jpg"
                alt="Sophie Chen"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-primary">Sophie Chen</p>
                <p className="text-xs text-muted">GCSE English • 6:30 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-orange-600">Late</p>
              <p className="text-xs text-muted">Joined 6:38 PM</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
          <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-green-700">All students accounted for this week</span>
        </div>
      </div>
    </MockWindow>
  );
}

const FEATURES: Feature[] = [
  {
    title: "AI Lesson Summaries",
    description:
      "Every recorded lesson is automatically transcribed and summarised. Get a clear overview of what was covered, key topics discussed, and timestamped chapters — without tutors writing a single note.",
    preview: <LessonSummaryPreview />,
  },
  {
    title: "Tutor Feedback",
    description:
      "Tutors receive personalised feedback on their teaching after each session. Understand what's working, get actionable suggestions, and improve continuously—without manual observations.",
    preview: <TutorFeedbackPreview />,
  },
  {
    title: "Parent Progress Reports",
    description:
      "Generate professional reports summarising student progress over any time period. Share real evidence of improvement with parents and clients—not just vague updates.",
    preview: <ParentReportPreview />,
  },
  {
    title: "Automatic Attendance Tracking",
    description:
      "AI detects who joined each lesson and when. Attendance is logged automatically from the recording—no manual registers, no chasing tutors for confirmation.",
    preview: <AttendancePreview />,
  },
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="px-4 scroll-mt-16 py-20">
      <div className="mx-auto max-w-6xl w-full">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-link uppercase tracking-wide mb-3">
            Platform Features
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Everything you need to personalise learning and save time
          </h2>
          <p className="text-muted-dark max-w-2xl mx-auto">
            Powerful AI tools that work together to give you complete visibility into every
            lesson.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
          {/* Left side - Feature titles */}
          <div className="lg:w-2/5">
            <div className="space-y-6">
              {FEATURES.map((feature, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left py-2 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium transition-colors mt-0.5 ${
                          isActive ? "bg-primary text-primary" : "bg-gray-200 text-muted"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <div className="min-w-0">
                        <h3
                          className={`font-heading text-lg font-semibold transition-colors ${
                            isActive ? "text-primary" : "text-muted"
                          }`}
                        >
                          {feature.title}
                        </h3>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              key="desc"
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="text-sm leading-relaxed text-muted-dark overflow-hidden"
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Preview */}
          <div className="lg:w-3/5">
            <div className="relative">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-300 ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {feature.preview}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
