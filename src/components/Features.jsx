import { Building2, Ruler, ShieldCheck, Truck } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'End-to-End Delivery',
    desc: 'From concept to handing over keys — we manage every detail with discipline and care.',
  },
  {
    icon: Ruler,
    title: 'Precision Planning',
    desc: 'Meticulous budgeting, scheduling, and QA to keep your project on time and on spec.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Zero-compromise safety culture with certified crews and compliance baked in.',
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    desc: 'Strong supplier network for fast procurement and minimal downtime.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why BuildCraft</h2>
          <p className="text-slate-300/80 max-w-xl">We blend modern technology with proven construction practices to deliver confident outcomes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]">
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
