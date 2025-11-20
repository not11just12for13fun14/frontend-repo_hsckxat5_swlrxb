import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-black/60 to-slate-900/80 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(600px_300px_at_10%_10%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(800px_400px_at_90%_80%,rgba(251,146,60,0.12),transparent_60%)]" />
          </div>
          <div className="relative grid lg:grid-cols-2 gap-8 p-10">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Ready to break ground?</h3>
              <p className="mt-3 text-slate-300/90 max-w-xl">Get a fast, no-pressure estimate from our senior team. We’ll map options, timeline, and budget—clearly.</p>
            </div>
            <div className="flex items-center lg:justify-end">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-white to-orange-300 text-slate-900 font-semibold px-6 py-3 shadow-lg"
              >
                Get your estimate
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
