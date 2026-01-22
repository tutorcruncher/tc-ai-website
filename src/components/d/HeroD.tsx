"use client";

import { motion } from "framer-motion";
import { PromptDemo } from "@/components/PromptDemo";

// Emm-inspired color palette
// Background: #faf9f7 (warm off-white)
// Primary: #4a2d41 (aubergine/deep purple)
// Accent: #e8a87c (peach)
// Muted: #8a7a82

export function HeroD() {
  return (
    <section className="pt-16 pb-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#faf9f7' }}>
      {/* Subtle decorative shapes */}
      <div
        className="absolute top-20 right-0 w-[400px] h-[400px] opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(232, 168, 124, 0.3) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(74, 45, 65, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Stacked headline - Emm style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]"
            style={{ color: '#4a2d41' }}
          >
            <span className="block">All-session insight.</span>
            <span className="block" style={{ color: '#e8a87c' }}>Full-year growth.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#8a7a82' }}
        >
          AI-powered lesson analysis that helps tutoring companies track progress, identify patterns, and deliver better outcomes—automatically.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="/early-access"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-base rounded-full transition-all duration-200"
            style={{
              backgroundColor: '#4a2d41',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5d3a54';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4a2d41';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Join the waitlist
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-4 font-medium text-base transition-colors"
            style={{ color: '#4a2d41' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8a87c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a2d41'}
          >
            See how it works
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Demo card with soft styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-3xl mx-auto"
        >
          <div
            className="rounded-3xl overflow-hidden shadow-xl"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid rgba(74, 45, 65, 0.1)',
            }}
          >
            <PromptDemo />
          </div>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 text-sm"
          style={{ color: '#8a7a82' }}
        >
          From the team behind{" "}
          <a
            href="https://tutorcruncher.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors"
            style={{ color: '#4a2d41' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#e8a87c'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#4a2d41'}
          >
            TutorCruncher
          </a>
        </motion.p>
      </div>
    </section>
  );
}
