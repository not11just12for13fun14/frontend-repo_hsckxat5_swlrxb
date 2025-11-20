import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discovery & Scope',
    desc: 'We capture requirements, budget, and timeline, then align on success metrics and risks.'
  },
  {
    title: 'Design & Planning',
    desc: 'Architectural drawings, permits, and a detailed plan with material selections.'
  },
  {
    title: 'Build & Supervise',
    desc: 'On-site execution with certified crews, safety-first supervision, and weekly reporting.'
  },
  {
    title: 'QA & Handover',
    desc: 'Multi-point inspection, punch list closeout, and a clean, on-time handover.'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Our Build Process</h2>
          <p className="mt-3 text-slate-300/90">A transparent, stress-free path from idea to keys-in-hand with glassy milestones and weekly updates.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="absolute -top-3 -left-3 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 font-bold grid place-items-center shadow-lg shadow-amber-500/30">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="pl-12 text-xl font-semibold text-white">{s.title}</h3>
              <p className="pl-12 mt-2 text-slate-300/90">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
