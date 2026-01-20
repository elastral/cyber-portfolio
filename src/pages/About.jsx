import React from 'react'
import { motion } from 'framer-motion'

const sectionVariant = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0, transition:{duration:0.6}} }
const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.12}} }

export default function About(){
  return (
    <section className="relative py-40 max-w-4xl mx-auto px-6 overflow-hidden">
      {/* dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDuration:'4s'}} />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent2/8 rounded-full blur-3xl animate-pulse" style={{animationDuration:'5s'}} />
      </div>
      
      <motion.div initial="hidden" whileInView="show" viewport={{once:true, margin:"-100px"}} variants={containerVariant}>
        <motion.h2 variants={sectionVariant} className="text-5xl font-extrabold text-white mb-8 relative z-10">About Me</motion.h2>
        
        <motion.div variants={sectionVariant} className="space-y-6 relative z-10">
          <p className="text-slate-300 text-lg leading-relaxed font-light">I'm a cybersecurity engineer specializing in penetration testing, secure architecture design, and incident response. I help organizations build resilient systems by finding vulnerabilities before attackers do.</p>
          <p className="text-slate-300 text-lg leading-relaxed font-light">With expertise in web security, infrastructure hardening, and security-first development practices, I combine technical depth with pragmatic solutions to real-world security challenges.</p>
        </motion.div>
        
        <motion.div variants={sectionVariant} className="grid md:grid-cols-3 gap-6 mt-16 relative z-10">
          {[
            { number: '500+', label: 'Security Assessments', icon: '�', color: 'from-accent/20 to-accent2/10' },
            { number: '12+', label: 'Years Experience', icon: '⏱️', color: 'from-accent2/20 to-accent3/10' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'from-accent3/20 to-accent/10' },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              variants={sectionVariant}
              whileHover={{scale:1.08, borderColor:'rgba(0,255,153,0.8)', boxShadow:'0 0 30px rgba(0,255,153,0.2)'}}
              className={`panel p-8 rounded-xl bg-gradient-to-br ${stat.color} border border-accent/30 transition-all relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-5xl mb-4 relative z-10 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <h3 className="text-accent font-bold text-3xl mb-2 relative z-10">{stat.number}</h3>
              <p className="text-slate-400 relative z-10">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
