export default function Stats(){
  const stats = [
    { label: 'Sq Ft Built', value: '1.2M+' },
    { label: 'Avg Delivery', value: '28% Faster' },
    { label: 'Safety Record', value: '0 LTIs' },
    { label: 'Repeat Clients', value: '76%' },
  ]
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-black/60 backdrop-blur p-5 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-orange-200 to-amber-300 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-300/80 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
