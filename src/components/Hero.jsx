import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Sparkles, Zap } from 'lucide-react'

export default function Hero() {
  const [powered, setPowered] = useState(true)

  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-28 pb-24 lg:px-8"
    >
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl gap-16 relative z-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-neon-purple/80">
            <span className="inline-block h-[1px] w-10 bg-neon-purple/50" />
            BUILDING THE FUTURE
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-black leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              I'm Rithanya C <br />
              <span className="text-neon-purple">
                AI & Full-Stack
              </span>{' '}
              Developer
            </h1>

            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              AI and full-stack developer building accessible
              healthcare and career-guidance technology for
              underserved communities. Proficient in React,
              Node.js, Python (scikit-learn, NLTK, Flask), and
              cloud platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">

          <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.36em] text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(79,222,255,0.35)]" />
            </span>
          </div></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: [0, 1], y: [24, 0] }}
          transition={{
            duration: 0.9,
            ease: 'easeOut',
            delay: 0.1,
          }}
          whileHover={{ y: -6 }}
          className="relative mx-auto flex max-w-xl items-center justify-center"
        >
          <div className="absolute -left-10 top-16 h-20 w-20 rounded-full bg-violet-500/10 blur-3xl opacity-80" />

          <div className="absolute right-6 top-10 h-16 w-16 rounded-full bg-cyan-500/10 blur-3xl opacity-90" />

          <div className="absolute left-1/2 top-1/2 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl lg:block" />

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="relative w-full"
          >
            <div className="absolute inset-x-0 -bottom-14 flex justify-center"></div>

            {/* Lapto Screen */}
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-slate-900/90 shadow-[inset_0_0_120px_rgba(79,70,229,0.2)]">

              {/* Dynamic Background */}
              <div className="relative flex flex-col h-full w-full">
                <video
                  autoPlay
                  muted
                  loop
                  className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
                >
                  <source
                    src="/videos/blackhole.webm"
                    type="video/webm"
                  />
                </video>
              </div>

              <div
                className={`absolute inset-0 rounded-[1.9rem] transition-all duration-700 ${
                  powered
                    ? 'bg-[radial-gradient(circle_at_center,_rgba(120,119,255,0.18),_rgba(149,82,255,0.12),_transparent_55%)]'
                    : 'bg-black/70'
                }`}
              />

              {/* Ambient Glow */}
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  powered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute right-10 top-14 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="absolute bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
              </div>

              {/* Screen Content */}
              <div className="relative flex h-[380px] items-center justify-center overflow-hidden rounded-[1.9rem]">

                {/* Floating Background Particles */}
                {powered && (
                  <>
                    <div className="absolute left-16 top-16 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(79,222,255,0.8)] animate-pulse" />

                    <div className="absolute right-20 top-24 h-3 w-3 rounded-full bg-violet-400 shadow-[0_0_25px_rgba(149,82,255,0.8)] animate-pulse" />

                    <div className="absolute bottom-20 left-24 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.8)] animate-pulse" />
                  </>
                )}

                {/* Laptop + Bulb Component */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative flex flex-col items-center justify-center"
                >
                  {/* Glow Platform */}
                  <div
                    className={`absolute -bottom-10 h-20 w-72 rounded-full blur-2xl transition-all duration-700 ${
                      powered
                        ? 'bg-gradient-to-r from-violet-500/40 via-fuchsia-500/30 to-cyan-400/40 opacity-100'
                        : 'bg-slate-800/20 opacity-40'
                    }`}
                  />

                  {/* Circular Rings */}
                  <div
                    className={`absolute -bottom-6 h-40 w-40 rounded-full border transition-all duration-700 ${
                      powered
                        ? 'border-violet-400/40 shadow-[0_0_50px_rgba(149,82,255,0.35)]'
                        : 'border-slate-700/30'
                    }`}
                  />

                  {/* Laptop */}
                  <div className="relative">

                    {/* Screen Glow */}
                    <div
                      className={`absolute inset-0 rounded-[2rem] blur-3xl transition-all duration-700 ${
                        powered
                          ? 'bg-violet-500/30 opacity-100'
                          : 'opacity-0'
                      }`}
                    />

                    {/* Laptop Body */}
                    <div className="relative w-[320px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-3 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">

                      {/* Screen */}
                      <div
                        className={`relative flex h-[200px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 transition-all duration-700 ${
                          powered
                            ? 'bg-gradient-to-br from-[#16122d] via-[#120f24] to-[#090909]'
                            : 'bg-black'
                        }`}
                      >
                        {/* Code Background */}
                        {powered && (
                          <div className="absolute inset-0 opacity-20">
                            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:22px_22px]" />
                          </div>
                        )}

                        {/* Bulb Glow */}
                        <div
                          className={`absolute h-40 w-40 rounded-full transition-all duration-700 ${
                            powered
                              ? 'bg-yellow-300/20 blur-3xl opacity-100'
                              : 'opacity-0'
                          }`}
                        />

                        {/* Bulb Image */}
                        <motion.img
                          src="https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpZ2h0JTIwYnVsYnxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Glowing Bulb"
                          animate={
                            powered
                              ? {
                                  scale: [1, 1.04, 1],
                                }
                              : {}
                          }
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                          className={`relative z-10 w-[150px] object-contain transition-all duration-700 ${
                            powered
                              ? 'opacity-100 drop-shadow-[0_0_45px_rgba(255,214,102,0.8)]'
                              : 'opacity-40 grayscale'
                          }`}
                        />
                      </div>

                      {/* Laptop Base */}
                      <div className="mx-auto mt-3 h-4 w-[95%] rounded-b-[2rem] bg-gradient-to-b from-slate-700 to-slate-900 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" />
                    </div>
                  </div>

                  {/* Quote */}
                  <p
                    className={`mt-10 max-w-[18rem] text-center text-sm leading-6 transition-all duration-700 ${
                      powered
                        ? 'text-slate-100'
                        : 'text-slate-500'
                    }`}
                  >
                    {powered
                      ? '“You were never meant to blend into the night — you were born to glow like the stars.”'
                      : '“Even stars rest before they shine brighter again.”'}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
