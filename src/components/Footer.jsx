export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-lg font-semibold text-white">
          RITHANYA <span className="text-neon-purple">C</span>
        </div>
        <p className="text-sm text-slate-500">2024 • All rights reserved</p>
        <div className="flex flex-wrap items-center gap-5 text-slate-400">
          <a href="https://github.com/RithanyaC" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rithanya-chinnasamy" target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:rithanya.cp@gmail.com" className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
