"use client";

import { motion } from "framer-motion";

export function IntegrationsC() {
  return (
    <section className="py-24 px-4 relative" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Gradient accents */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(99, 91, 255, 0.2) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-sm font-medium tracking-wide mb-4"
              style={{ color: '#635bff' }}
            >
              INTEGRATIONS
            </p>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
              style={{ color: '#f6f6f7' }}
            >
              Works with the tools
              <br />
              <span style={{ color: '#7a7a85' }}>you already use</span>
            </h2>

            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: '#7a7a85' }}
            >
              Our deep integration with Lesson Space means your online tutoring sessions are automatically recorded and analysed. Complete visibility into every lesson without any extra setup.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {["Auto recording", "Whiteboard capture", "Video analysis", "No extra software"].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ color: '#00d4ff' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    className="text-sm"
                    style={{ color: '#f6f6f7' }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div
              className="absolute -inset-4 rounded-2xl opacity-40"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%)',
                filter: 'blur(30px)',
              }}
            />

            {/* Card */}
            <div
              className="relative rounded-xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 91, 255, 0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(0, 212, 255, 0.2) 100%)',
              }}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: '#0f0f14' }}
              >
                {/* Browser chrome */}
                <div
                  className="px-4 py-3 flex items-center gap-3"
                  style={{ borderBottom: '1px solid #1a1a22' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#febc2e' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#28c840' }} />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div
                      className="rounded-md px-3 py-1 text-xs"
                      style={{
                        backgroundColor: '#1a1a22',
                        color: '#7a7a85',
                      }}
                    >
                      lessonspace.com
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Video feeds */}
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className="aspect-video rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#111116' }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#635bff' }}
                      >
                        <span className="text-white font-medium">T</span>
                      </div>
                    </div>
                    <div
                      className="aspect-video rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: '#111116' }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#00d4ff' }}
                      >
                        <span className="text-white font-medium">S</span>
                      </div>
                    </div>
                  </div>

                  {/* Whiteboard */}
                  <div
                    className="rounded-lg p-4"
                    style={{
                      backgroundColor: '#111116',
                      border: '1px solid #1a1a22',
                    }}
                  >
                    <p
                      className="text-[10px] uppercase tracking-wider mb-2"
                      style={{ color: '#7a7a85' }}
                    >
                      Whiteboard
                    </p>
                    <div className="font-mono text-sm space-y-1">
                      <p style={{ color: '#f6f6f7' }}>x² + 5x + 6 = 0</p>
                      <p style={{ color: '#635bff' }}>(x + 2)(x + 3) = 0</p>
                    </div>
                  </div>

                  {/* Recording indicator */}
                  <div className="flex items-center justify-center gap-2 py-1">
                    <span className="relative flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ backgroundColor: '#ff5f57' }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ backgroundColor: '#ff5f57' }}
                      />
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: '#7a7a85' }}
                    >
                      Recording • AI analysis enabled
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute -bottom-3 -right-3 rounded-lg p-3"
              style={{
                backgroundColor: '#111116',
                border: '1px solid #1a1a22',
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(40, 200, 64, 0.1)' }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{ color: '#28c840' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: '#f6f6f7' }}
                  >
                    Analysis complete
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: '#7a7a85' }}
                  >
                    Just now
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
