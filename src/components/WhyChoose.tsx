"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Grid items with their positions for staggered reveal
const GRID_ITEMS = [
  { id: "save-hours", colSpan: 2, row: 1 },
  { id: "real-time", colSpan: 1, row: 1 },
  { id: "every-student", colSpan: 1, row: 1 },
  { id: "powered-ai", colSpan: 1, row: 1 },
  { id: "tutor-coaching", colSpan: 1, row: 2 },
  { id: "one-platform", colSpan: 1, row: 2 },
  { id: "parent-reports", colSpan: 1, row: 2 },
  { id: "always-loop", colSpan: 3, row: 3 },
];

export function WhyChoose() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const stickyHeight = stickyRef.current.offsetHeight;
      const scrollableHeight = container.offsetHeight - stickyHeight;
      const scrollProgress = -containerRect.top;

      if (scrollProgress >= 0 && scrollProgress <= scrollableHeight) {
        // Calculate how many items should be visible based on scroll progress
        const progress = scrollProgress / scrollableHeight;
        const itemsToShow = Math.floor(progress * (GRID_ITEMS.length + 1));

        setVisibleItems((prev) => {
          const newSet = new Set(prev);
          for (let i = 0; i < itemsToShow; i++) {
            newSet.add(i);
          }
          return newSet;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = (index: number) => visibleItems.has(index);

  return (
    <section id="why-choose" className="px-4">
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${100 + GRID_ITEMS.length * 12}vh` }}
      >
        <div
          ref={stickyRef}
          className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:pt-16 py-20"
        >
          <div className="mx-auto max-w-6xl w-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-4"
            >
              Why Choose TutorCruncher AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center text-muted-dark mb-12 max-w-2xl mx-auto"
            >
              Purpose-built for tutoring companies who want to deliver exceptional results.
            </motion.p>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Row 1 */}
              {/* Large card - Save Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible(0) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="md:col-span-2 bg-white rounded-2xl border border-default overflow-hidden"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image on left */}
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661714188599-e132395b5bf8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Tutors collaborating"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  {/* Content on right */}
                  <div className="md:w-3/5 p-6 md:p-8">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                      Save Hours Every Week
                    </h3>
                    <p className="text-muted-dark text-sm mb-6">
                      Every session is automatically summarised and ready to review so you can focus
                      on what&apos;s important.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-page rounded-lg">
                        <span className="text-sm text-primary">Lesson summary</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          Auto-generated
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-page rounded-lg">
                        <span className="text-sm text-primary">Student feedback</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          Auto-generated
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-page rounded-lg">
                        <span className="text-sm text-primary">Attendance tracking</span>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          Auto-detected
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Small cards stack */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible(1) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-default p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      Real-time Insights
                    </h3>
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted text-sm mt-1">Analysis within 15 minutes</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible(2) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-default p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      Every Student
                    </h3>
                    <div className="flex -space-x-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Emma"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=56&h=56&fit=crop&crop=face"
                        alt="James"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&h=56&fit=crop&crop=face"
                        alt="Sophie"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-muted text-sm mt-1">Individual progress tracking</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible(3) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl border border-default p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-primary">
                      Powered by AI
                    </h3>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <p className="text-muted text-sm mt-1">Advanced language models</p>
                </motion.div>
              </div>

              {/* Row 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible(4) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-default p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Tutor Coaching
                </h3>
                <p className="text-muted-dark text-sm mb-4">
                  Personalised feedback helps tutors improve with every lesson.
                </p>
                <div className="flex items-center gap-4 p-4 bg-page rounded-xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">8.5</p>
                    <p className="text-xs text-muted">Teaching Score</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "92%" }}
                        />
                      </div>
                      <span className="text-xs text-muted w-16">Clarity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }} />
                      </div>
                      <span className="text-xs text-muted w-16">Engagement</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible(5) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-default p-6 text-center"
              >
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  One Platform
                </h3>
                <p className="text-muted-dark text-sm">
                  All your lesson data and insights in one place. No more juggling multiple tools or
                  chasing tutors for updates.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible(6) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl border border-default p-6"
              >
                <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                  Parent Reports
                </h3>
                <p className="text-muted-dark text-sm mb-4">
                  Professional reports showing real progress.
                </p>
                <div className="flex items-end gap-1 h-16">
                  {[40, 45, 42, 55, 60, 58, 70, 75, 80, 85, 88, 92].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-500 rounded-t"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted">
                  <span>Jan</span>
                  <span className="text-green-600 font-medium">+18%</span>
                  <span>Dec</span>
                </div>
              </motion.div>

              {/* Row 3 - Full width */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible(7) ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="md:col-span-3 bg-white rounded-2xl border border-default p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                      Always in the Loop
                    </h3>
                    <p className="text-muted-dark text-sm">
                      Stay informed with automatic notifications about student progress, lesson
                      completions, and important insights.
                    </p>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face"
                        alt="Emma"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-primary">Lesson summary ready for Emma</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                        alt="James"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm text-primary">
                        Progress milestone: James completed algebra module
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-page rounded-lg">
                      <div className="flex -space-x-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face"
                          alt="Student"
                          className="w-4 h-4 rounded-full object-cover border border-white"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                          alt="Student"
                          className="w-4 h-4 rounded-full object-cover border border-white"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
                          alt="Student"
                          className="w-4 h-4 rounded-full object-cover border border-white"
                        />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-primary">
                        Weekly report generated for 12 students
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
