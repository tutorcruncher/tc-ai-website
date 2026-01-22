"use client";

import { motion } from "framer-motion";
import { PromptDemo } from "@/components/PromptDemo";

// Stripe-inspired color palette
// Background: #0a0a0f (near black)
// Accent gradient: #635bff → #00d4ff (purple to cyan)
// Text: #f6f6f7 (off-white)
// Muted: #7a7a85

export function HeroC() {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99, 91, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Fine grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 px-4 py-20 min-h-screen flex flex-col">
        <div className="mx-auto max-w-5xl w-full flex-1 flex flex-col justify-center">
          {/* Subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
              style={{
                backgroundColor: 'rgba(99, 91, 255, 0.1)',
                border: '1px solid rgba(99, 91, 255, 0.2)',
                color: '#a5a0ff'
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: '#00d4ff' }}
              />
              EARLY ACCESS
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-center mb-6 leading-[1.05] tracking-[-0.02em] font-medium"
            style={{ color: '#f6f6f7' }}
          >
            AI-powered insights
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #635bff 0%, #00d4ff 50%, #635bff 100%)',
                backgroundSize: '200% 200%',
              }}
            >
              for every lesson
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#7a7a85' }}
          >
            Transform tutoring sessions into actionable data. Track progress, identify patterns, and deliver better outcomes—automatically.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="/early-access"
              className="group relative inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #635bff 0%, #7c3aed 100%)',
                color: '#ffffff',
                boxShadow: '0 0 0 1px rgba(99, 91, 255, 0.5), 0 4px 20px rgba(99, 91, 255, 0.3)'
              }}
            >
              Get started
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-sm rounded-lg transition-colors"
              style={{ color: '#7a7a85' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f6f6f7'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#7a7a85'}
            >
              How it works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>

          {/* Demo card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto w-full"
          >
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute -inset-px rounded-xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.3) 0%, rgba(0, 212, 255, 0.2) 100%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Card border gradient */}
              <div
                className="relative rounded-xl p-px"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(0, 212, 255, 0.3) 100%)',
                }}
              >
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: '#0f0f14' }}
                >
                  <PromptDemo />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm" style={{ color: '#4a4a52' }}>
            From the team behind{" "}
            <a
              href="https://tutorcruncher.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:underline"
              style={{ color: '#7a7a85' }}
            >
              TutorCruncher
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
