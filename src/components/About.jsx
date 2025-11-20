export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-1">
            <div className="rounded-[22px] overflow-hidden bg-slate-950">
              <img src="https://images.unsplash.com/photo-1599995903128-531fc7fb694b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8MHx8fDE3NjM2NzMwOTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="construction site" className="h-80 w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About BuildCraft</h2>
          <p className="mt-4 text-slate-300/90">We are a full-service construction company focused on modern methods of building. Our crews, engineers, and PMs bring deep expertise across sectors including residential, commercial, and public infrastructure.</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              ['Licensed & Insured', 'State-wide coverage'],
              ['Sustainable Materials', 'Lower carbon footprint'],
              ['Transparent Pricing', 'No hidden surprises'],
              ['Client-first Culture', 'White-glove communication'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-white font-medium">{title}</div>
                <div className="text-slate-300/80 text-sm">{subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
