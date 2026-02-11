"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/Button";
import { PromptDemo } from "@/components/PromptDemo";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-20 pb-5">
      <div className="mx-auto max-w-7xl w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Text and CTA */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-heading text-4xl md:text-5xl lg:text-6xld mb-6 leading-tight"
            >
              AI tools for tutors to support personalised learning for every student
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-dark max-w-2xl mx-auto lg:mx-0 mb-6"
            >
              Supporting human tutors and educators with AI tools to track student progress,
              automatically generate lesson plans and reports, discover areas for improvement and
              more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-3"
            >
              <Button href="https://forms.gle/uunftAqJqn2ZFQzFA" className="mx-auto lg:mx-0">
                Join Early Access
              </Button>
              <p className="text-sm text-muted text-center lg:text-left">
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
            </motion.div>
          </div>
          {/* Right side - Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="flex-1 w-full max-w-xl"
          >
            <PromptDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
