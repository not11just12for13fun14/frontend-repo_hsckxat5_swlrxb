import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Ava Reynolds',
    role: 'Property Developer',
    text: 'They delivered our office fit-out ahead of schedule with flawless attention to detail. Communication was always on point.',
  },
  {
    name: 'Marcus Chen',
    role: 'Homeowner',
    text: 'From design to handover, the process was smooth. The craftsmanship in our custom home is outstanding.',
  },
  {
    name: 'City Works Co.',
    role: 'Municipal Partner',
    text: 'Professional, safety-focused, and reliable. A true partner on our public works projects.',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Clients Say</h2>
          <p className="text-slate-300/80 mt-2">A few words from people who trusted us with their builds.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-200/90">“{r.text}”</p>
              <div className="mt-4 text-sm text-slate-300/80">{r.name} • {r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
