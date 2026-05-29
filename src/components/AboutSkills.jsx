import { motion } from 'framer-motion'

const skills = [
  { label: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { label: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { label: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { label: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { label: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { label: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { label: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { label: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { label: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { label: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  { label: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { label: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { label: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { label: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { label: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { label: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { label: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { label: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { label: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
]

export default function AboutSkills() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-8">
      <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="max-w-xl">
            <p className="text-3xl font-bold text-white">
              About <span className="text-neon-purple">Me</span>
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              AI and full-stack developer building accessible healthcare and career-guidance technology for underserved communities. Proficient in React, Node.js, Python (scikit-learn, NLTK, Flask), and cloud platforms.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              CGPA 8.03 | Microsoft Azure AI Engineer Associate certified | Hackathon winner. Experienced in building secure, accessible AI solutions that support low-bandwidth rural workflows and multilingual interfaces.
            </p>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4">
  {/* College */}
  <div className="glass-panel overflow-hidden rounded-[2rem]">
    <div className="image">
      <img
        draggable="false"
        src="college.jpeg"
        alt="Kongu Engineering College"
        className="h-56 w-full object-cover"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white">
        B.Tech Artificial Intelligence & Data Science
      </h3>

      <p className="mt-3 text-slate-300">
        Kongu Engineering College
      </p>

      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
        2023–2027 | Pursuing
      </p>

      <p className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-500">
        CGPA: 8.03
      </p>
    </div>
  </div>

  {/* Schooling */}
  <div className="glass-panel overflow-hidden rounded-[2rem]">
    <div className="image">
      <img
        draggable="false"
        src="school.png"
        alt="School Education"
        className="h-56 w-full object-cover"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-semibold text-white">
        Higher Secondary Education
      </h3>

      <p className="mt-3 text-slate-300">
        SPB Matriculation Higher Secondary School
      </p>

      <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
        2021–2023 | Completed
      </p>

      <p className="mt-3 text-xs uppercase tracking-[0.35em] text-slate-500">
        HSC
      </p>
    </div>
  </div>
</div>
            {/* Certifications Card */}
            <div className="glass-panel rounded-[2rem] p-6">
              <p className="text-4xl font-semibold text-white">
                Certifications
              </p>

              <p className="mt-3 text-sm uppercase tracking-[0.35em] text-slate-500">
                Azure AI Engineer Associate • MongoDB Associate Developer • Java SE 17
                Developer
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
  id="skills"
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
  className="space-y-8"
>
  <div>
    <p className="text-3xl font-bold text-white">
      Skills & <span className="text-neon-purple">Technologies</span>
    </p>

    <p className="mt-2 text-sm text-slate-500">
      A curated set of tools and platforms I use to ship polished products.
    </p>
  </div>

  <div className="flex items-center justify-center py-12">
    <div className="relative h-[550px] w-[550px]">

      {/* Center Hub */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neon-purple/40 bg-slate-950 shadow-glow-card">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">
            My Skills
          </h3>

          <p className="mt-2 text-xs text-slate-400">
            AI • Full Stack • Cloud
          </p>
        </div>
      </div>

      {/* Rotating Ring */}
      <div className="relative h-full w-full animate-[spin_40s_linear_infinite]">

        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI
          const radius = 220

          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <div
              key={skill.label}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              <div className="group flex flex-col items-center">

                {/* Counter Rotation */}
                <div className="animate-[spin_40s_linear_infinite_reverse]">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-slate-900 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-neon-purple hover:shadow-glow-card">

                    <img
                      src={skill.logo}
                      alt={skill.label}
                      className="h-10 w-10 object-contain"
                    />

                  </div>

                  <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    {skill.label}
                  </p>

                </div>

              </div>
            </div>
          )
        })}
      </div>

    </div>
  </div>
</motion.div>
      </div>
    </section>
  )
}
