import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// GSAP will be dynamically imported to avoid build-time resolution issues

function Nav(){
  return (
    <nav className="flex items-center justify-between p-6 md:px-8">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="text-accent font-bold text-lg">◆ Andromeda97</div>
        <div className="h-1 w-6 bg-gradient-to-r from-accent to-accent2 rounded group-hover:w-8 transition-all" />
      </Link>
      <div className="hidden md:flex space-x-8 text-slate-300">
        <Link to="/about" className="hover:text-accent transition-colors font-medium text-sm">About</Link>
        <Link to="/projects" className="hover:text-accent transition-colors font-medium text-sm">Projects</Link>
        <Link to="/services" className="hover:text-accent transition-colors font-medium text-sm">Services</Link>
        <Link to="/contact" className="hover:text-accent2 transition-colors font-medium text-sm">Contact</Link>
      </div>
    </nav>
  )
}

export default function App(){
  const [typed, setTyped] = useState('')
  const phrases = ['Cybersecurity Engineer', 'Penetration Tester', 'Security Researcher', 'Blue Teamer']
  const [pi, setPi] = useState(0)
  const [pos, setPos] = useState(0)
  const [forward, setForward] = useState(true)
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(()=>{
    const current = phrases[pi]
    let t = 80
    if(!forward) t = 40
    const id = setTimeout(()=>{
      let nextPos = pos + (forward?1:-1)
      if(nextPos > current.length){
        setForward(false)
        setPos(current.length)
      } else if(nextPos < 0){
        setPi((pi+1)%phrases.length)
        setForward(true)
        setPos(0)
      } else {
        setPos(nextPos)
      }
      setTyped(current.slice(0, nextPos))
    }, t)
    return ()=> clearTimeout(id)
  }, [pos, forward, pi])

  // Track scroll for parallax effects
  useEffect(()=>{
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  // Calculate scroll progress (0-1)
  const calculatedScrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight || 1)

  useEffect(()=>{
    setScrollProgress(calculatedScrollProgress)
  }, [calculatedScrollProgress])

  const sectionVariant = { hidden:{opacity:0,y:12}, show:{opacity:1,y:0} }

  useEffect(()=>{
    // Dynamically import GSAP + ScrollTrigger to avoid build-time resolution errors
    let pinRef = null
    let tlRef = null
    let ScrollTriggerLib = null
    let cancelled = false

    async function setupGsap(){
      try{
        const pkg = 'gsap'
        const gsapModule = await import(/* @vite-ignore */ pkg)
        const scrollPkg = 'gsap/ScrollTrigger'
        const { ScrollTrigger } = await import(/* @vite-ignore */ scrollPkg)
        gsapModule.registerPlugin(ScrollTrigger)
        ScrollTriggerLib = ScrollTrigger
        if (cancelled) return

        // Setup GSAP ScrollTrigger pin for the hero pin-wrapper
        pinRef = ScrollTrigger.create({
          trigger: '#pin-wrapper',
          start: 'top top',
          end: () => `+=${document.documentElement.clientHeight * 4}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
        })

        // subtle entrance timeline for hero
        tlRef = gsapModule.timeline({ defaults: { ease: 'power2.out' } })
        tlRef.from('.hero-title', { y: 30, opacity: 0, duration: 0.7 })
          .from('.hero-sub', { y: 8, opacity: 0, duration: 0.5 }, '-=0.3')
      }catch(err){
        // GSAP not available — skip scroll-driven effects but don't break the app
        // eslint-disable-next-line no-console
        console.warn('GSAP not available, skipping scroll animations', err)
      }
    }

    setupGsap()

    return ()=>{
      cancelled = true
      try{ if (pinRef) pinRef.kill() }catch(e){}
      try{ if (tlRef) tlRef.kill() }catch(e){}
      try{ if (ScrollTriggerLib && ScrollTriggerLib.getAll) ScrollTriggerLib.getAll().forEach(st => st.kill()) }catch(e){}
    }
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Router>
        <header className="sticky top-0 z-50 bg-gradient-to-b from-black/40 to-black/0 backdrop-blur-md border-b border-accent/10">
          {/* Scroll progress bar */}
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-accent2 to-accent3" style={{width: `${scrollProgress * 100}%`, transition: 'width 0.3s ease'}} />
          
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <div className="text-accent font-bold text-lg">CyberPortfolio</div>
            <div className="md:hidden">
              <button onClick={()=>setOpen(!open)} className="text-slate-200">{open? '✕':'☰'}</button>
            </div>
            <div className={`hidden md:flex space-x-6 text-slate-300 ${open? 'block': ''}`}>
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/projects" className="hover:text-white">Projects</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
          {open && (
            <div className="md:hidden bg-[#071014] p-4">
              <Link className="block py-2" to="/about">About</Link>
              <Link className="block py-2" to="/projects">Projects</Link>
              <Link className="block py-2" to="/services">Services</Link>
              <Link className="block py-2" to="/contact">Contact</Link>
            </div>
          )}
        </header>

        <Routes>
          <Route path="/" element={<Home typed={typed} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <footer className="py-12 border-t border-accent/10 bg-gradient-to-b from-transparent via-accent/5 to-transparent text-center">
        <p className="text-slate-400 text-sm mb-2">© {new Date().getFullYear()} Andromeda97 · Cybersecurity Engineer</p>
        <p className="text-slate-500 text-xs">Building resilient systems • Finding vulnerabilities • Shipping secure code</p>
      </footer>
    </div>
  )
}
