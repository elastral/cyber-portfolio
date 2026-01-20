import React from 'react'
import { motion } from 'framer-motion'

const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.1, delayChildren:0.2}} }
const itemVariant = { hidden:{opacity:0, y:20}, show:{opacity:1, y:0, transition:{duration:0.6}} }

export default function Contact(){
  const links = [
    { label: 'Email', href: 'mailto:anibalchicas@protonmail.com', icon: '✉️', desc: 'Send me an email' },
    { label: 'GitHub', href: 'https://github.com', icon: '💻', desc: 'Check my repos' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗', desc: 'Connect with me' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '🐦', desc: 'Follow updates' },
  ]

  return (
    <section className="relative py-40 max-w-6xl mx-auto px-6 overflow-hidden">
      {/* Animated background with morphing shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent2/6 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 18s ease-in-out infinite'}} 
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent3/5 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 22s ease-in-out infinite 2s'}} 
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 153, 0.1) 25%, rgba(0, 255, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.1) 75%, rgba(0, 255, 153, 0.1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(0, 255, 153, 0.1) 25%, rgba(0, 255, 153, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 153, 0.1) 75%, rgba(0, 255, 153, 0.1) 76%, transparent 77%, transparent)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>
      
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{once:false, margin:"-100px"}} 
        variants={containerVariant}
        className="relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariant} className="mb-16 text-center">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-accent2 rounded-full mx-auto" />
          <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">Whether you need a security assessment, code review, or just want to chat about cybersecurity—I'd love to hear from you.</p>
        </motion.div>

        {/* Main contact info */}
        <motion.div 
          variants={itemVariant} 
          className="relative p-10 rounded-xl mb-16 border border-accent/40 bg-gradient-to-br from-slate-900/60 to-slate-950/40 overflow-hidden backdrop-blur-sm"
        >
          {/* Animated gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent2/5 opacity-0 hover:opacity-20 transition-opacity duration-300"
          />
          
          {/* Top animated accent line */}
          <motion.div 
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent2 to-transparent w-full opacity-70"
          />
          
          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            <motion.div variants={itemVariant}>
              <h3 className="text-white font-bold mb-4 text-2xl">Direct Contact</h3>
              <a 
                href="mailto:anibalchicas@protonmail.com" 
                className="text-accent hover:text-accent2 transition text-xl font-semibold inline-block mb-3"
              >
                anibalchicas@protonmail.com
              </a>
              <p className="text-slate-400 text-sm">I typically respond within 24 hours.</p>
            </motion.div>
            <motion.div variants={itemVariant}>
              <h3 className="text-white font-bold mb-4 text-2xl">Response Time</h3>
              <p className="text-slate-300 text-sm leading-relaxed">For security-critical issues, contact immediately via email with subject line "URGENT" for priority handling.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div 
          variants={itemVariant} 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
        >
          {links.map((link, i)=>(
            <motion.a 
              key={i} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={itemVariant}
              whileHover={{scale:1.08, y:-8}}
              className="group relative p-8 rounded-xl text-center border border-accent/40 bg-gradient-to-br from-slate-900/60 to-slate-950/40 transition-all overflow-hidden backdrop-blur-sm"
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent2/0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
              />
              
              {/* Top accent line on hover */}
              <motion.div 
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent2 to-transparent w-0 group-hover:w-full transition-all duration-500"
              />
              
              {/* Left accent bar */}
              <motion.div 
                className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent to-accent2 h-0 group-hover:h-full transition-all duration-500"
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-4 inline-block"
                  whileHover={{rotate: 360, scale: 1.3}}
                  transition={{duration: 0.6}}
                >
                  {link.icon}
                </motion.div>
                <p className="text-sm font-semibold text-slate-300 group-hover:text-accent transition-colors mb-1">{link.label}</p>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">{link.desc}</p>
              </div>
              
              {/* Corner accent */}
              <motion.div 
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/10 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-500"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariant} className="mt-20 text-center">
          <p className="text-slate-400 mb-6">Ready to work together on your next security project?</p>
          <motion.a 
            href="mailto:anibalchicas@protonmail.com"
            whileHover={{scale: 1.08}}
            whileTap={{scale: 0.95}}
            className="inline-block px-10 py-4 rounded-lg font-bold text-black bg-gradient-to-r from-accent via-accent to-accent/80 hover:shadow-2xl hover:shadow-accent/50 transition-all"
          >
            Start a conversation
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
