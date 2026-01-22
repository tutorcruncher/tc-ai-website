"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5+", label: "Hours saved weekly", suffix: "hrs" },
  { value: "15", label: "Min processing time", suffix: "min" },
  { value: "100", label: "Visibility into lessons", suffix: "%" },
  { value: "18", label: "Avg student improvement", suffix: "%" },
];

const BENEFITS = [
  {
    title: "Save Hours Every Week",
    description: "No more chasing tutors for lesson notes. Every session is automatically summarised.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-time Insights",
    description: "Analysis ready within 15 minutes of each lesson ending.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Every Student Tracked",
    description: "Individual progress tracking for every student, even in group sessions.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Tutor Coaching Built-in",
    description: "Personalised feedback helps tutors improve with every lesson.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export function WhyChooseC() {
  return (
    <section className="py-24 px-4 relative" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Subtle gradient accents */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 91, 255, 0.15) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-wide mb-4"
            style={{ color: '#635bff' }}
          >
            WHY CHOOSE US
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
            style={{ color: '#f6f6f7' }}
          >
            Built for scale,
            <br />
            <span style={{ color: '#7a7a85' }}>designed for tutors</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl"
              style={{
                backgroundColor: '#111116',
                border: '1px solid #1a1a22',
              }}
            >
              <div
                className="text-3xl md:text-4xl font-medium mb-1"
                style={{ color: '#f6f6f7' }}
              >
                {stat.value}
                <span
                  className="text-lg ml-0.5"
                  style={{ color: '#635bff' }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p
                className="text-sm"
                style={{ color: '#7a7a85' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl p-6 transition-all duration-300"
              style={{
                backgroundColor: '#111116',
                border: '1px solid #1a1a22',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2a2a35';
                e.currentTarget.style.backgroundColor = '#141419';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1a1a22';
                e.currentTarget.style.backgroundColor = '#111116';
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor: 'rgba(99, 91, 255, 0.1)',
                  color: '#635bff',
                }}
              >
                {benefit.icon}
              </div>

              <h3
                className="text-lg font-medium mb-2"
                style={{ color: '#f6f6f7' }}
              >
                {benefit.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: '#7a7a85' }}
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
