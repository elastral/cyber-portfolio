import React from 'react'
import { motion } from 'framer-motion'
import ThreeScene from '../ThreeScene'

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.6 } })
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

export default function Home({ typed }){
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(()=>{
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return ()=> window.removeEventListener('scroll', onScroll)
  }, [])

  // Split text into words for animation
  const titleWords = "Andromeda97".split('')
  const descWords = "Building resilient systems, finding vulnerabilities before attackers do, and shipping secure code with security-first design principles.".split(' ')

  return (
    <main className="flex-1">
      <section className="relative overflow-hidden min-h-screen bg-black" aria-label="Hero">
        {/* Ultra-smooth morphing animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Dynamic gradient orbs with morph animations */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" 
            style={{
              animation: 'morphFloat 20s ease-in-out infinite',
              filter: 'blur(80px)'
            }} 
          />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-accent2/6 rounded-full blur-3xl" 
            style={{
              animation: 'morphFloat 25s ease-in-out infinite 2s',
              filter: 'blur(80px)'
            }} 
          />
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent3/4 rounded-full blur-3xl" 
            style={{
              animation: 'morphFloat 22s ease-in-out infinite 4s',
              filter: 'blur(80px)'
            }} 
          />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 153, 0.05) 25%, rgba(0, 255, 153, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.05) 75%, rgba(0, 255, 153, 0.05) 76%, transparent 77%, transparent),
                              linear-gradient(90deg, transparent 24%, rgba(0, 255, 153, 0.05) 25%, rgba(0, 255, 153, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.05) 75%, rgba(0, 255, 153, 0.05) 76%, transparent 77%, transparent)`,
              backgroundSize: '80px 80px'
            }} />
          </div>
        </div>

        <div id="pin-wrapper" className="pin-wrapper">
          <div className="canvas-sticky">
            <div className="grid-bg absolute inset-0 pointer-events-none" />
            
            <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 min-h-screen flex flex-col justify-center">
              <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={containerVariants}
              >
                {/* Label with stagger */}
                <motion.div
                  variants={textVariants}
                  custom={0}
                  className="mb-8 inline-block"
                >
                  <span className="text-accent text-sm font-mono tracking-widest opacity-80 hover:opacity-100 transition-opacity">// cybersecurity engineer</span>
                </motion.div>

                {/* Main title with character-by-character animation */}
                <motion.h1 
                  className="hero-title text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent mb-4"
                  style={{ 
                    lineHeight: 1.1,
                    fontWeight: 900,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {titleWords.map((char, i) => (
                    <motion.span
                      key={i}
                      variants={textVariants}
                      custom={i * 0.08}
                      initial="hidden"
                      animate="visible"
                      style={{ display: 'inline-block', marginRight: char === ' ' ? '0.2em' : 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
                
                {/* Typed text with caret */}
                <motion.p 
                  variants={textVariants}
                  custom={2}
                  className="hero-sub text-accent2 font-semibold mt-6 text-xl md:text-2xl tracking-wider mb-8"
                >
                  <span id="type" className="inline-block min-w-[300px]">{typed}</span>
                  <span className="caret animate-pulse">|</span>
                </motion.p>
                
                {/* Divider line */}
                <motion.div
                  variants={textVariants}
                  custom={2.5}
                  className="h-1 bg-gradient-to-r from-accent via-accent2 to-transparent w-48 rounded-full mb-8"
                />
                
                {/* Description with word-by-word animation */}
                <motion.p 
                  className="text-slate-300 max-w-3xl leading-relaxed text-lg font-light mb-12"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {descWords.map((word, i) => (
                    <motion.span
                      key={i}
                      variants={textVariants}
                      custom={3 + i * 0.02}
                      style={{ display: 'inline-block', marginRight: '0.35em' }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={textVariants}
                  custom={4}
                  className="flex gap-4 flex-wrap"
                >
                  <motion.a 
                    href="/about" 
                    className="group relative px-8 py-4 rounded-lg font-bold text-black bg-gradient-to-r from-accent via-accent to-accent/80 overflow-hidden"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 153, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Explore My Work</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </motion.a>
                  <motion.a 
                    href="/contact" 
                    className="group relative px-8 py-4 rounded-lg font-bold text-accent border-2 border-accent"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 153, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Get in Touch</span>
                      <span className="group-hover:rotate-45 transition-transform inline-block">◆</span>
                    </span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
            
            {/* 3D Scene with scroll parallax */}
            <motion.div 
              className="mt-12 px-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-200px" }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-6xl mx-auto">
                <div className="panel rounded-xl overflow-hidden shadow-2xl border border-accent/20">
                  <ThreeScene />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="pin-spacer" />
        </div>
      </section>

      {/* Bridge section with cyberpunk navigation */}
      <section className="relative py-32 bg-gradient-to-b from-black via-accent/3 to-black overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 153, 0.1) 25%, rgba(0, 255, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.1) 75%, rgba(0, 255, 153, 0.1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(0, 255, 153, 0.1) 25%, rgba(0, 255, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.1) 75%, rgba(0, 255, 153, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '80px 80px'
          }} />
          {/* Animated glow orbs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" 
            style={{animation: 'morphFloat 15s ease-in-out infinite'}} 
          />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent2/4 rounded-full blur-3xl" 
            style={{animation: 'morphFloat 18s ease-in-out infinite 2s'}} 
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div 
              variants={textVariants}
              custom={0}
              className="mb-6 inline-block"
            >
              <span className="text-accent font-mono text-sm tracking-widest opacity-80">// SYSTEM.INITIALIZE</span>
            </motion.div>
            
            <motion.h2 
              variants={textVariants}
              custom={0.5}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent mb-8 leading-tight bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text"
            >
              BREACH THE ORDINARY
            </motion.h2>
            
            <motion.p 
              variants={textVariants}
              custom={1}
              className="text-slate-300 text-lg mb-12 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
            >
              Security isn't about defense. It's about precision. Let me show you what happens when engineering meets cybersecurity.
            </motion.p>
            
            <motion.div 
              variants={textVariants}
              custom={1.5}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap"
            >
              <motion.a 
                href="/projects" 
                className="group relative px-8 py-4 rounded-lg font-bold text-black bg-gradient-to-r from-accent via-accent to-accent/80 overflow-hidden"
                whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(0, 255, 153, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="inline-block animate-pulse">⚡</span>
                  EXPLORE PROJECTS
                  <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                </span>
              </motion.a>
              
              <motion.a 
                href="/contact" 
                className="group relative px-8 py-4 rounded-lg font-bold text-accent border-2 border-accent overflow-hidden"
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 255, 153, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>INITIATE CONTACT</span>
                  <span className="group-hover:rotate-45 transition-transform inline-block">◆</span>
                </span>
              </motion.a>
              
              <motion.a 
                href="/about" 
                className="group relative px-8 py-4 rounded-lg font-bold text-accent2 border-2 border-accent2/60 overflow-hidden"
                whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(57, 160, 255, 0.4)', borderColor: 'rgb(57, 160, 255)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>📋</span>
                  DOWNLOAD CV
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
