import { motion } from 'framer-motion'
import { Mail, MapPin, Smartphone } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-6 py-24 lg:px-8">
      <div className="absolute left-0 bottom-10 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 rounded-[3rem] bg-slate-950/90 p-10 shadow-glow-card backdrop-blur-3xl"
        >
          <div className="space-y-4">
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's build <span className="text-neon-purple">something</span> together
            </p>
            <p className="max-w-lg text-base leading-8 text-slate-400">
              I'm currently looking for new opportunities to apply my skills in AI and Full-stack development. Whether it's a small idea or a big project, I'm excited to collaborate and bring ideas to life.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-neon-purple shadow-[0_0_20px_rgba(149,82,255,0.2)]">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">7667574767</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-neon-blue shadow-[0_0_20px_rgba(79,222,255,0.18)]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">rithanya.cp@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800/70 text-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                <span className="text-lg font-semibold">GH</span>
              </div>
              <div>
                <a href="https://github.com/RithanyaC" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-neon-purple">
                  github.com/RithanyaC
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-800/70 text-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                <span className="text-lg font-semibold">IN</span>
              </div>
              <div>
                <a href="https://linkedin.com/in/rithanya-chinnasamy" target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-neon-purple">
                  linkedin.com/in/rithanya-chinnasamy
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_20px_rgba(192,38,211,0.18)]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
          className="glass-panel rounded-[3rem] p-8 shadow-glow-card backdrop-blur-3xl"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-400">
              <span className="uppercase tracking-[0.35em]">Your Name</span>
              <input
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-neon-purple/60"
                type="text"
                placeholder="Rocky"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-400">
              <span className="uppercase tracking-[0.35em]">Your Email</span>
              <input
                className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-neon-purple/60"
                type="email"
                placeholder="Rocky@example.com"
              />
            </label>
          </div>
          <label className="mt-6 space-y-2 text-sm text-slate-400">
            <span className="uppercase tracking-[0.35em]">How can I help?</span>
            <textarea
              rows="5"
              className="w-full rounded-[1.75rem] border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-neon-purple/60"
              placeholder="Tell me about your project..."
            />
          </label>
          <button
  type="button"
  onClick={() => window.location.href = "mailto:rithanya.cp@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Rithanya%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20connect.%0A%0AThanks!"}
  className="mt-8 inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95"
>
  Send Message
</button>
        </motion.form>
      </div>
    </section>
  )
}
