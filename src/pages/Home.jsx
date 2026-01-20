import React from 'react'
import { motion } from 'framer-motion'
import ThreeScene from '../ThreeScene'

const sectionVariant = { hidden:{opacity:0,y:12}, show:{opacity:1,y:0} }

export default function Home({ typed }){
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(()=>{
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  // Parallax effect: hero title moves up as user scrolls
  const heroOffset = scrollY * 0.5
  // Fade 3D canvas more gradually as user scrolls past
  const canvasOpacity = Math.max(0, 1 - scrollY / 1200)

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden min-h-screen" aria-label="Hero">
        {/* Enhanced animated background with multiple layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent2/5 animate-pulse" style={{animationDuration: '8s'}} />
          </div>
          {/* Moving gradient orbs - MUCH LARGER */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s'}} />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent2/12 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent3/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s'}} />
          
          {/* Additional floating elements */}
          <div className="absolute top-32 right-1/3 w-64 h-64 bg-accent/8 rounded-full blur-2xl" style={{animation: 'float 6s ease-in-out infinite'}} />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent2/6 rounded-full blur-2xl" style={{animation: 'float 7s ease-in-out infinite 1s'}} />
        </div>

        <div id="pin-wrapper" className="pin-wrapper">
          <div className="canvas-sticky" style={{opacity: Math.max(0, 1 - scrollY / 1200)}}>
            <div className="grid-bg absolute inset-0 pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
              <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{once:true}} 
                variants={{hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.15}}}}
                style={{ y: -scrollY * 0.5 }}
              >
                <motion.div
                  variants={{hidden:{opacity:0}, show:{opacity:1}}}
                  className="mb-4 inline-block"
                >
                  <span className="text-accent text-sm font-mono">// cybersecurity engineer</span>
                </motion.div>

                <motion.h1 
                  variants={{hidden:{opacity:0, y:40, scale:0.9}, show:{opacity:1, y:0, scale:1}}} 
                  className="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent animate-pulse-slow"
                  style={{animationDuration: '4s'}}
                >
                  Andromeda97
                </motion.h1>
                
                <motion.p 
                  variants={{hidden:{opacity:0, y:30}, show:{opacity:1, y:0}}} 
                  className="hero-sub text-accent2 font-semibold mt-4 text-xl md:text-2xl tracking-wider"
                >
                  <span id="type" className="inline-block min-w-[300px]">{typed}</span>
                  <span className="caret">|</span>
                </motion.p>
                
                <motion.div
                  variants={{hidden:{opacity:0}, show:{opacity:1}}}
                  className="mt-6 h-1 bg-gradient-to-r from-accent via-accent2 to-transparent w-48 rounded-full"
                />
                
                <motion.p 
                  variants={{hidden:{opacity:0, y:20}, show:{opacity:1, y:0}}} 
                  className="text-slate-300 mt-8 max-w-2xl leading-relaxed text-lg"
                >
                  Building resilient systems, finding vulnerabilities before attackers do, and shipping secure code with security-first design principles.
                </motion.p>
                
                <motion.div 
                  variants={{hidden:{opacity:0}, show:{opacity:1}}} 
                  className="mt-10 flex gap-4 flex-wrap"
                >
                  <a href="/about" className="btn-primary group">
                    <span>Explore My Work</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                  <a href="/contact" className="btn-ghost">Get in Touch</a>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12"
              style={{ y: scrollY * 0.15 }}
            >
              <div className="panel rounded-xl overflow-hidden shadow-2xl border border-accent/10">
                <ThreeScene />
              </div>
            </motion.div>
          </div>
          <div className="pin-spacer" />
        </div>
      </section>

      {/* Bridge section with cyberpunk navigation */}
      <div className="relative py-40 bg-gradient-to-b from-accent/8 via-accent3/5 to-transparent overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 153, 0.1) 25%, rgba(0, 255, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.1) 75%, rgba(0, 255, 153, 0.1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(0, 255, 153, 0.1) 25%, rgba(0, 255, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.1) 75%, rgba(0, 255, 153, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8, ease: 'easeOut'}}
            className="text-center"
          >
            <div className="mb-4 inline-block">
              <span className="text-accent font-mono text-sm tracking-widest animate-pulse">// SYSTEM.INITIALIZE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-transparent mb-6 leading-tight bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text">
              BREACH THE ORDINARY
            </h2>
            <p className="text-slate-300 text-lg mb-12 font-light tracking-wide max-w-2xl mx-auto">
              Security isn't about defense. It's about precision. Let me show you what happens when engineering meets cybersecurity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap">
              <a href="/projects" className="group relative px-8 py-4 rounded-lg font-bold text-black bg-gradient-to-r from-accent via-accent to-accent/80 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:scale-110 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="inline-block animate-pulse">⚡</span>
                  EXPLORE PROJECTS
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </a>
              <a href="/contact" className="group relative px-8 py-4 rounded-lg font-bold text-accent border-2 border-accent transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span>INITIATE CONTACT</span>
                  <span className="group-hover:rotate-45 transition-transform inline-block">◆</span>
                </span>
              </a>
              <a href="/about" className="group relative px-8 py-4 rounded-lg font-bold text-accent2 border-2 border-accent2/60 transition-all duration-300 hover:bg-accent2/10 hover:border-accent2 hover:shadow-lg hover:shadow-accent2/30 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <span>📋</span>
                  DOWNLOAD CV
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
