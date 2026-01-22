"use client";

import { motion } from "framer-motion";

const BENEFITS = [
  {
    title: "Save 5+ hours weekly",
    description: "No more chasing tutors for lesson notes. Every session is automatically summarised and filed.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "15-minute turnaround",
    description: "Analysis ready within 15 minutes of each lesson ending. Never wait for insights.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "100% lesson visibility",
    description: "Complete visibility into every lesson without any extra setup or manual tracking.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "18% avg improvement",
    description: "Students tutored with our insights show an average 18% improvement in outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export function WhyChooseD() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#faf9f7' }}>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-wide uppercase mb-4"
            style={{ color: '#e8a87c' }}
          >
            Why TutorCruncher AI
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            style={{ color: '#4a2d41' }}
          >
            Built for scale,
            <br />
            <span style={{ color: '#8a7a82' }}>designed for tutors</span>
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-3xl p-8 transition-all duration-300"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid rgba(74, 45, 65, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232, 168, 124, 0.4)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(74, 45, 65, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(74, 45, 65, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{
                  backgroundColor: 'rgba(232, 168, 124, 0.15)',
                  color: '#e8a87c',
                }}
              >
                {benefit.icon}
              </div>

              <h3
                className="text-xl font-medium mb-3"
                style={{ color: '#4a2d41' }}
              >
                {benefit.title}
              </h3>

              <p
                className="leading-relaxed"
                style={{ color: '#8a7a82' }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
