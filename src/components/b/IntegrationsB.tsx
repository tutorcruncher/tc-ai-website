"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function IntegrationsB() {
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
    <section ref={sectionRef} className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl border border-default overflow-hidden"
        >
          {/* Visual at top */}
          <div className="bg-page p-8 md:p-12">
            <div className="max-w-2xl mx-auto">
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
                      lessonspace.com
                    </div>
                  </div>
                </div>

                {/* Mock lesson space UI */}
                <div className="p-4 space-y-3">
                  <div className="flex gap-3">
                    {/* Video feeds */}
                    <div className="flex-1 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">T</span>
                      </div>
                    </div>
                    <div className="flex-1 aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">S</span>
                      </div>
                    </div>
                  </div>

                  {/* Whiteboard area */}
                  <div className="bg-white border border-default rounded-lg p-4 aspect-[21/9]">
                    <div className="h-full flex flex-col items-center justify-center">
                      <p className="text-xs text-muted mb-2">Whiteboard</p>
                      <div className="text-primary font-mono text-sm">
                        x² + 5x + 6 = 0
                      </div>
                      <div className="text-primary font-mono text-sm mt-1">
                        (x + 2)(x + 3) = 0
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
            </div>
          </div>

          {/* Content below */}
          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-sm font-medium text-link uppercase tracking-wide mb-3">
                Integrations
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                Works with the tools you already use
              </h2>
              <p className="text-muted-dark mb-8">
                Our deep integration with Lesson Space means your online tutoring sessions are automatically recorded and analysed. The built-in whiteboard, screen sharing, and video calls are all captured—giving you complete visibility into every lesson without any extra setup.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-page rounded-full">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary">Auto recording</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-page rounded-full">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary">Whiteboard capture</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-page rounded-full">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-primary">No extra software</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
