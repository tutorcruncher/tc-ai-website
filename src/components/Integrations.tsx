"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Integrations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4" id="integrations">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-link uppercase tracking-wide mb-3">Integrations</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Works with the tools you already use
          </h2>
          <p className="text-muted-dark max-w-2xl mx-auto">
            TutorCruncher AI integrates seamlessly with your existing workflow.
          </p>
        </motion.div>

        {/* Lesson Space Feature */}
        <div className="rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:w-2/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl border border-default flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Integrated Whiteboard
                  </h3>
                  <p className="text-sm text-muted">Built-in virtual classroom</p>
                </div>
              </div>

              <p className="text-muted-dark mb-6 leading-relaxed">
                Our integrated virtual classroom means your online tutoring sessions are
                automatically recorded and analysed. The built-in whiteboard, screen sharing, and
                video calls are all captured—giving you complete visibility into every lesson
                without any extra setup.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-primary">
                    Automatic session recording and transcription
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-primary">Whiteboard activity captured and summarised</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-primary">No additional software for tutors to install</span>
                </li>
              </ul>
            </motion.div>

            {/* Visual representation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="lg:w-3/5 w-full"
            >
              <div className="bg-white rounded-xl border border-default shadow-lg overflow-hidden">
                {/* Mock browser bar */}
                <div className="bg-gray-50 border-b border-default px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-white border border-default rounded px-3 py-1 text-xs text-muted max-w-[200px]">
                      tutorcruncher.com/classroom
                    </div>
                  </div>
                </div>

                {/* Mock classroom UI */}
                <div className="p-4">
                  <div className="flex gap-3">
                    {/* Whiteboard on left */}
                    <div className="flex-1 bg-white border border-default rounded-lg p-4 aspect-video">
                      <div className="h-full flex flex-col items-center justify-center gap-2">
                        <p className="text-xs text-muted">Whiteboard</p>
                        <div className="text-primary font-mono text-sm">x² + 5x + 6 = 0</div>
                        <div className="text-primary font-mono text-sm">(x + 2)(x + 3) = 0</div>
                      </div>
                    </div>

                    {/* Video feeds stacked on right */}
                    <div className="w-1/3 flex flex-col gap-3">
                      <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Tutor"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2">
                          <span className="text-white text-xs font-medium bg-black/40 px-2 py-0.5 rounded">
                            Sarah (Tutor)
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Student"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2">
                          <span className="text-white text-xs font-medium bg-black/40 px-2 py-0.5 rounded">
                            Emma (Student)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recording indicator */}
                  <div className="flex items-center justify-center gap-2 py-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs text-muted">Recording • AI analysis enabled</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
