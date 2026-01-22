"use client";

import { motion } from "framer-motion";

export function CTASectionC() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%)',
        }}
      />

      {/* Subtle glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 91, 255, 0.2) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Fine grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide mb-8"
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
            LIMITED EARLY ACCESS
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
            style={{ color: '#f6f6f7' }}
          >
            Ready to transform
            <br />
            <span style={{ color: '#7a7a85' }}>your tutoring business?</span>
          </h2>

          <p
            className="text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto"
            style={{ color: '#7a7a85' }}
          >
            Join the waitlist today and be among the first to experience AI-powered lesson insights.
          </p>

          {/* CTA button */}
          <div className="relative inline-block">
            {/* Glow effect */}
            <div
              className="absolute -inset-1 rounded-lg opacity-50"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.4) 0%, rgba(0, 212, 255, 0.3) 100%)',
                filter: 'blur(15px)',
              }}
            />
            <a
              href="/early-access"
              className="relative inline-flex items-center gap-2 px-8 py-4 font-medium text-sm rounded-lg transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #635bff 0%, #7c3aed 100%)',
                color: '#ffffff',
                boxShadow: '0 0 0 1px rgba(99, 91, 255, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(99, 91, 255, 0.5), 0 8px 30px rgba(99, 91, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 0 1px rgba(99, 91, 255, 0.5)';
              }}
            >
              Get Early Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <p
            className="mt-6 text-sm"
            style={{ color: '#4a4a52' }}
          >
            No credit card required • Free during early access
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {["GDPR Compliant", "256-bit Encryption", "99.9% Uptime"].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2"
              style={{ color: '#4a4a52' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-xs font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
