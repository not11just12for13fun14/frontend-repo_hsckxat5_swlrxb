import { HardHat, Wrench, Layout, Home } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'General Contracting',
    desc: 'Full project execution with trusted crews, vendors, and site supervision.',
  },
  {
    icon: Wrench,
    title: 'Renovations & Fit-outs',
    desc: 'High-precision interior remodeling for offices, stores, and homes.',
  },
  {
    icon: Layout,
    title: 'Design-Build',
    desc: 'Integrated design and construction to streamline delivery and reduce risk.',
  },
  {
    icon: Home,
    title: 'Residential',
    desc: 'Custom homes, additions, and multi-family developments built to last.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
          <p className="text-slate-300/80 mt-2">Solutions tailored for every stage of your build.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-slate-900 shadow-lg shadow-amber-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
