import { motion } from 'framer-motion'

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'WORK', href: '#work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white" href="#home">
          <span>RITHANYA</span>
          <span className="text-neon-purple">C</span>
        </a>
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-400 md:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-slate-700 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-neon-purple hover:bg-white/10 md:inline-flex"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  )
}
