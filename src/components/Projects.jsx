import { motion } from 'framer-motion'

const projects = [
  {
    category: 'Rural TeleHealth System',
    title: 'RuralAI',
    description: 'Offline-first telemedicine platform with WebRTC video consultations, Socket.IO patient queue, and multilingual voice accessibility for low-bandwidth rural users.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'WebRTC', 'Socket.IO', 'JWT'],
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/RithanyaC/TeleMedicine',
  },
  {
    category: 'Placement Feedback',
    title: 'Feedback Collection Portal',
    description: 'Scalable feedback management system tracking student and recruiter workflows, with approval pipelines and analytics dashboards for faster decision-making.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'RBAC'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/RithanyaC/Feedback_Portal',
  },
  {
    category: 'Career Guidance AI',
    title: 'CareerAI',
    description: 'Personalized career recommender combining TF-IDF, cosine similarity, and classification models for explainable role matching across engineering domains.',
    tags: ['Python', 'Flask', 'scikit-learn', 'NLTK', 'React', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    link: 'https://github.com/RithanyaC/CareerAI',
  },
]

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-24 lg:px-8">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-neon-purple/70">Featured</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Featured <span className="text-neon-purple">Impact</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Solving real-world problems with advanced AI and modern engineering.
          </p>
        </div>
        </div>

        <div className="overflow-hidden">
  <motion.div
    className="flex gap-7"
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...projects, ...projects].map((project, index) => (
      <motion.a
        key={`${project.title}-${index}`}
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="glass-panel group min-w-[380px] overflow-hidden rounded-[2rem] border border-white/10 transition-transform hover:-translate-y-1"
      >
        <div className="relative overflow-hidden rounded-t-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/0 opacity-70" />

          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4 p-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neon-purple/80">
            {project.category}
          </p>

          <h3 className="text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs uppercase tracking-[0.36em] text-slate-500">
              View Case
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:to-cyan-400 group-hover:text-slate-950">
              →
            </div>
          </div>
        </div>
      </motion.a>
    ))}
  </motion.div>
</div>
    </section>
  )
}
