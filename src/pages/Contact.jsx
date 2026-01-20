import React from 'react'
import { motion } from 'framer-motion'

const sectionVariant = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0, transition:{duration:0.6}} }
const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.12}} }

export default function Contact(){
  const links = [
    { label: 'Email', href: 'mailto:anibalchicas@protonmail.com', icon: '✉️' },
    { label: 'GitHub', href: 'https://github.com', icon: '💻' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
  ]

  return (
    <section className="relative py-40 max-w-4xl mx-auto px-6 overflow-hidden">
      {/* animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent2/10 rounded-full blur-3xl animate-pulse" style={{animationDuration:'6s'}} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent3/8 rounded-full blur-3xl animate-pulse" style={{animationDuration:'7s'}} />
      </div>
      
      <motion.div initial="hidden" whileInView="show" viewport={{once:true, margin:"-100px"}} variants={containerVariant}>
        <motion.h2 variants={sectionVariant} className="text-5xl font-extrabold text-white mb-4 relative z-10">Get in Touch</motion.h2>
        <motion.p variants={sectionVariant} className="text-slate-400 mb-12 text-lg relative z-10">Whether you need a security assessment, code review, or just want to chat about security—I'd love to hear from you.</motion.p>
        
        <motion.div variants={sectionVariant} className="panel relative p-8 rounded-xl mb-12 border border-accent/30 bg-gradient-to-br from-slate-900/80 to-slate-950/40 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent2/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent2 to-transparent w-full opacity-50" />
          
          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            <div>
              <h3 className="text-white font-bold mb-3 text-lg">Direct Contact</h3>
              <a href="mailto:anibalchicas@protonmail.com" className="text-accent hover:text-accent2 transition text-lg font-semibold">anibalchicas@protonmail.com</a>
              <p className="text-slate-400 text-sm mt-2">I typically respond within 24 hours.</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3 text-lg">Response Time</h3>
              <p className="text-slate-300 text-sm">For security-critical issues, contact immediately via email with subject "URGENT".</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={containerVariant} className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {links.map((link, i)=>(
            <motion.a 
              key={i} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              variants={sectionVariant}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{delay: i * 0.1}}
              whileHover={{scale:1.12, y:-8, borderColor:'rgba(0,255,153,0.8)', boxShadow:'0 15px 35px rgba(0,255,153,0.2)'}}
              className="group panel relative p-6 rounded-xl text-center border border-accent/30 bg-gradient-to-br from-slate-900/80 to-slate-950/40 transition-all overflow-hidden cursor-pointer"
            >
              {/* gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* accent line on top */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent2 to-transparent w-0 group-hover:w-full transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
                  whileHover={{rotate: 360, scale: 1.3}}
                  transition={{duration: 0.6}}
                >
                  {link.icon}
                </motion.div>
                <p className="text-sm font-semibold text-slate-300 group-hover:text-accent transition-colors">{link.label}</p>
              </div>
              
              {/* corner accent */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent/5 rounded-full blur-lg group-hover:bg-accent/15 transition-colors duration-500" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
