import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(800px_circle_at_90%_20%,rgba(244,63,94,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">Trusted by builders across the city</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Modern Construction for Skyline Ambitions
          </h1>
          <p className="mt-5 text-lg text-slate-300/90 max-w-xl">
            We design and deliver standout commercial and residential projects with craftsmanship, speed, and precision—built to last and built to impress.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-amber-500/30">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white font-medium px-5 py-3 hover:bg-white/10 transition">
              Free Consultation
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Projects Delivered', value: '320+' },
              { label: 'Client Satisfaction', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[13px] text-slate-300/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 bg-slate-950">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-r from-amber-400/20 to-rose-500/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
