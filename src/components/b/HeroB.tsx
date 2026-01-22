"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { PromptDemo } from "@/components/PromptDemo";

export function HeroB() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col px-4 py-16">
      <div className="mx-auto max-w-4xl w-full flex-1 flex flex-col justify-center">
        {/* Centered text content */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-sm font-medium text-link uppercase tracking-wide mb-4"
          >
            AI-Powered Tutoring Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            The <span className="text-link font-bold">AI insights</span> you'll wish you had for every lesson.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-dark max-w-2xl mx-auto mb-8"
          >
            TutorCruncher AI transforms every lesson into actionable insights—tracking student progress, highlighting strengths, and surfacing areas for improvement without any extra work from your tutors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/early-access" size="large">
              Join Early Access
            </Button>
            <a href="#features" className="text-link hover:underline font-medium">
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Demo below */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="w-full max-w-3xl mx-auto"
        >
          <PromptDemo />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-8 text-sm text-muted"
        >
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
        </motion.p>
      </div>
    </section>
  );
}
