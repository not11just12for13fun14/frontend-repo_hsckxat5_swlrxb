const projects = [
  {
    title: 'Aurora Tower',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop',
    tag: 'Commercial'
  },
  {
    title: 'Harbor Residences',
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    tag: 'Residential'
  },
  {
    title: 'Civic Center Plaza',
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    tag: 'Public Works'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="text-slate-300/80 mt-2">A snapshot of recent work across sectors.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition">Start your project</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04]">
              <div className="relative h-56 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{p.title}</div>
                  <div className="text-xs text-slate-300/80">{p.tag}</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">View</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
