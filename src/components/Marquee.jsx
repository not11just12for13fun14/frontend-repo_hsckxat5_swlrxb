import { useMemo } from 'react'

const logos = [
  'Turner', 'Skanska', 'AECOM', 'Bechtel', 'Jacobs', 'Kiewit', 'Gilbane', 'Clark', 'Whiting-Turner', 'DPR'
]

export default function Marquee() {
  const doubled = useMemo(() => [...logos, ...logos], [])
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="group relative flex gap-8 whitespace-nowrap py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-[marquee_30s_linear_infinite] flex items-center gap-10 pr-8">
              {doubled.map((name, i) => (
                <span key={i} className="text-white/70 text-sm sm:text-base">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  )
}
