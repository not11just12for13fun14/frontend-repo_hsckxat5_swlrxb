import { useState } from 'react'
import { Menu, X, Hammer, Phone } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-slate-900 shadow-lg shadow-amber-500/30">
              <Hammer className="h-5 w-5" />
            </span>
            <span className="text-white font-semibold tracking-tight">BuildCraft</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-900 font-medium px-4 py-2 shadow-lg shadow-amber-500/30">
              <Phone className="h-4 w-4" />
              Get Quote
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/90">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl px-4 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-900 font-medium px-4 py-2 shadow-lg shadow-amber-500/30">
                <Phone className="h-4 w-4" />
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
