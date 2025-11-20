import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(900px_500px_at_80%_10%,rgba(244,63,94,0.08),transparent_60%)]" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
