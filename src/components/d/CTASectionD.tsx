"use client";

import { motion } from "framer-motion";

export function CTASectionD() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#4a2d41' }}>
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#e8a87c',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#e8a87c' }}
            />
            Limited Early Access
          </span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
            style={{ color: '#ffffff' }}
          >
            Ready to transform
            <br />
            <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>your tutoring business?</span>
          </h2>

          <p
            className="text-lg mb-10 leading-relaxed max-w-xl mx-auto"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Join the waitlist today and be among the first to experience AI-powered lesson insights.
          </p>

          {/* CTA button */}
          <a
            href="/early-access"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium text-base rounded-full transition-all duration-200"
            style={{
              backgroundColor: '#e8a87c',
              color: '#4a2d41',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0b88c';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#e8a87c';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Join the waitlist
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p
            className="mt-6 text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
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
              style={{ color: 'rgba(255, 255, 255, 0.5)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
