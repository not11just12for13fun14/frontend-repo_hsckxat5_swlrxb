export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get a Free Quote</h2>
          <p className="text-slate-300/80 mt-2">Tell us about your project — we’ll respond within one business day.</p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Full name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <input type="email" placeholder="Email address" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <input type="text" placeholder="Project type (e.g., office fit-out)" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <textarea rows="4" placeholder="Tell us more" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400/70 focus:outline-none focus:ring-2 focus:ring-amber-400/40" />
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-900 font-semibold px-5 py-3 shadow-lg shadow-amber-500/30">Send Request</button>
            </form>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              ['Head Office', '120 Market St, Suite 400, San Francisco, CA'],
              ['Phone', '(415) 555-0149'],
              ['Email', 'hello@buildcraft.co'],
              ['Hours', 'Mon–Fri, 8:00–6:00'],
            ].map(([t, s]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-white font-medium">{t}</div>
                <div className="text-slate-300/80 text-sm">{s}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-64 overflow-hidden rounded-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop" alt="map placeholder" className="h-full w-full object-cover opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
