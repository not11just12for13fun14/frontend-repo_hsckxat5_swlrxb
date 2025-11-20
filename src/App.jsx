import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import Stats from './components/Stats'
import About from './components/About'
import Process from './components/Process'
import Services from './components/Services'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.03),transparent_30%,rgba(251,146,60,0.06),transparent_60%,rgba(255,255,255,0.03))]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(251,146,60,0.1),transparent_60%)]" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Features />
        <Stats />
        <About />
        <Process />
        <Services />
        <Projects />
        <Reviews />
        <CTA />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
