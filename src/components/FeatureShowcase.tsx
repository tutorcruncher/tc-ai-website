"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">E</span>
          </div>
          <div>
            <p className="font-medium text-primary text-sm">Emma Thompson</p>
            <p className="text-xs text-muted">GCSE Maths • 58 mins • Today, 3:45 PM</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Topics Covered</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Quadratic Equations</span>
            <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Factorisation</span>
            <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Quadratic Formula</span>
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
            Emma demonstrated strong understanding of factorisation, successfully solving 8/10 problems independently. Introduced the quadratic formula with good initial grasp...
          </p>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 2: Student Performance Insights
function PerformanceInsightsPreview() {
  return (
    <MockWindow>
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-default">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-semibold">E</span>
            </div>
            <div>
              <p className="font-medium text-primary text-sm">Emma Thompson</p>
              <p className="text-xs text-muted">12 lessons this month</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">87%</p>
            <p className="text-xs text-green-600">+12% this month</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-xl font-bold text-blue-600">92%</p>
            <p className="text-xs text-muted">Engagement</p>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-xl font-bold text-green-600">85%</p>
            <p className="text-xs text-muted">Comprehension</p>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <p className="text-xl font-bold text-purple-600">15/15</p>
            <p className="text-xs text-muted">Problems</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Key Strengths</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-primary">Excellent grasp of factorisation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-primary">Quick to apply formulas</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Areas for Improvement</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-sm text-primary">Practice with negative coefficients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-sm text-primary">Word problem interpretation</span>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  );
}

// Feature 3: Tutor Feedback & Coaching
function TutorFeedbackPreview() {
  return (
    <MockWindow>
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-default">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-primary text-sm">Session Feedback</p>
            <p className="text-xs text-muted">Lesson with Emma • Today</p>
          </div>
        </div>

        <div className="p-3 bg-green-50 rounded-lg border border-green-200">
          <p className="text-xs font-medium text-green-800 uppercase tracking-wide mb-2">What Worked Well</p>
          <ul className="space-y-1 text-sm text-green-700">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Clear explanations with visual examples</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Good use of scaffolded questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Effective pace adjustments based on responses</span>
            </li>
          </ul>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs font-medium text-blue-800 uppercase tracking-wide mb-2">Suggestions</p>
          <ul className="space-y-1 text-sm text-blue-700">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Consider more real-world examples for engagement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>Allow more think-time after questions</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between p-3 bg-page rounded-lg">
          <div>
            <p className="text-xs text-muted">Teaching Score</p>
            <p className="text-lg font-bold text-primary">8.5/10</p>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className={`w-5 h-5 ${i <= 4 ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
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
          <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-xs rounded-lg">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Share
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-page rounded-lg text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted">Lessons</p>
          </div>
          <div className="p-3 bg-page rounded-lg text-center">
            <p className="text-2xl font-bold text-green-600">+18%</p>
            <p className="text-xs text-muted">Improvement</p>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Monthly Progress</p>
          <div className="h-20 flex items-end gap-1">
            {[65, 70, 72, 68, 75, 78, 82, 80, 85, 87, 88, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>

        <div className="p-3 bg-page rounded-lg">
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-2">Summary</p>
          <p className="text-sm text-primary leading-relaxed">
            Emma has made excellent progress this month, particularly in algebra. She consistently engages well in lessons and shows strong problem-solving skills.
          </p>
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
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Emma Thompson</p>
                <p className="text-xs text-muted">GCSE Maths • 3:45 PM</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-green-600">Present</p>
              <p className="text-xs text-muted">Joined 3:44 PM</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-page rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
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
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
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

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
          <span className="text-sm text-green-700">Attendance rate this week</span>
          <span className="text-lg font-bold text-green-700">96%</span>
        </div>
      </div>
    </MockWindow>
  );
}

const FEATURES: Feature[] = [
  {
    title: "AI Lesson Summaries",
    description:
      "Every recorded lesson is automatically transcribed and summarised. Get a clear overview of what was covered, key topics discussed, and timestamped chapters—without tutors writing a single note.",
    preview: <LessonSummaryPreview />,
  },
  {
    title: "Student Performance Insights",
    description:
      "AI analyses each student's engagement, identifies their strengths, and highlights areas for improvement. Track individual progress across every lesson, even in group sessions.",
    preview: <PerformanceInsightsPreview />,
  },
  {
    title: "Tutor Feedback & Coaching",
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
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const isScrollingToFeature = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active index during programmatic scrolls (like anchor clicks)
      if (isScrollingToFeature.current) return;
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const stickyHeight = stickyRef.current.offsetHeight;

      // The scrollable height within the container (total height minus the sticky content height)
      const scrollableHeight = container.offsetHeight - stickyHeight;

      // How far we've scrolled into the container (accounting for the sticky offset)
      const scrollProgress = -containerRect.top;

      // Calculate which feature should be active
      const segmentHeight = scrollableHeight / FEATURES.length;

      // Only update active index if we're within the scrollable area
      if (scrollProgress >= 0 && scrollProgress <= scrollableHeight) {
        const newIndex = Math.min(
          FEATURES.length - 1,
          Math.max(0, Math.floor(scrollProgress / segmentHeight))
        );

        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    // Handle anchor link clicks - temporarily disable scroll tracking
    const handleHashChange = () => {
      isScrollingToFeature.current = true;
      setTimeout(() => {
        isScrollingToFeature.current = false;
      }, 1000);
    };

    // Also intercept clicks on anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        isScrollingToFeature.current = true;
        setTimeout(() => {
          isScrollingToFeature.current = false;
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    document.addEventListener("click", handleClick);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      document.removeEventListener("click", handleClick);
    };
  }, [activeIndex]);

  return (
    <section id="features" className="px-4 scroll-mt-16">
      {/* Container with extra height for scroll-through */}
      <div ref={containerRef} className="relative" style={{ height: `${100 + (FEATURES.length - 1) * 50}vh` }}>
        {/* Sticky content - full viewport height, centered */}
        <div ref={stickyRef} className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:pt-16 py-20">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-link uppercase tracking-wide mb-3">
                Platform Features
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Everything you need to transform tutoring
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto">
                Powerful AI tools that work together to give you complete visibility into every lesson.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
              {/* Left side - Feature titles */}
              <div className="lg:w-2/5">
                <div className="space-y-10">
  {FEATURES.map((feature, index) => {
    const isActive = activeIndex === index;

    return (
      <button
        key={index}
        onClick={() => {
          setActiveIndex(index);
          if (containerRef.current) {
            isScrollingToFeature.current = true;
            const container = containerRef.current;
            const stickyHeight = stickyRef.current?.offsetHeight || 0;
            const scrollableHeight = container.offsetHeight - stickyHeight;
            const segmentHeight = scrollableHeight / FEATURES.length;
            const targetScroll =
              container.offsetTop + segmentHeight * index + segmentHeight / 2;
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
            // Reset flag after scroll animation completes
            setTimeout(() => {
              isScrollingToFeature.current = false;
            }, 1000);
          }
        }}
        className="w-full text-left py-2"
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
      </button>
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
                        activeIndex === index ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                      }`}
                    >
                      {feature.preview}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
