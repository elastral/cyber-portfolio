import React from 'react'
import { motion } from 'framer-motion'

const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.1, delayChildren:0.2}} }
const itemVariant = { hidden:{opacity:0, y:20}, show:{opacity:1, y:0, transition:{duration:0.6}} }

export default function About(){
  const statData = [
    { number: '500+', label: 'Security Assessments', icon: '🔍', color: 'from-accent/20 to-accent2/10' },
    { number: '12+', label: 'Years Experience', icon: '⏱️', color: 'from-accent2/20 to-accent3/10' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐', color: 'from-accent3/20 to-accent/10' },
  ]

  return (
    <section className="relative py-40 max-w-6xl mx-auto px-6 overflow-hidden">
      {/* dynamic background elements with morphing animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 15s ease-in-out infinite'}} 
        />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent2/6 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 18s ease-in-out infinite 2s'}} 
        />
      </div>
      
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{once:false, margin:"-100px"}} 
        variants={containerVariant}
        className="relative z-10"
      >
        {/* Heading */}
        <motion.div variants={itemVariant} className="mb-12">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent2 rounded-full mt-6" />
        </motion.div>
        
        {/* Main description */}
        <motion.div variants={itemVariant} className="mb-16">
          <p className="text-slate-300 text-xl leading-relaxed font-light max-w-3xl">
            I'm a cybersecurity engineer specializing in penetration testing, secure architecture design, and incident response. I help organizations build resilient systems by finding vulnerabilities before attackers do.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="mb-16">
          <p className="text-slate-300 text-lg leading-relaxed font-light max-w-3xl">
            With expertise in web security, infrastructure hardening, and security-first development practices, I combine technical depth with pragmatic solutions to real-world security challenges.
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <motion.div variants={itemVariant} className="grid md:grid-cols-3 gap-6 mt-16">
          {statData.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={itemVariant}
              whileHover={{scale:1.08, y:-10}}
              className={`panel p-8 rounded-xl bg-gradient-to-br ${stat.color} border border-accent/30 transition-all relative overflow-hidden group`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div 
                className="text-6xl mb-4 relative z-10"
                whileHover={{scale: 1.3, rotate: 5}}
              >
                {stat.icon}
              </motion.div>
              <motion.h3 
                className="text-accent font-bold text-3xl mb-2 relative z-10"
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale:1}}
                transition={{delay:0.3 + i*0.1}}
              >
                {stat.number}
              </motion.h3>
              <p className="text-slate-400 relative z-10 font-light">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Section */}
        <motion.div variants={itemVariant} className="mt-24">
          <h3 className="text-4xl font-bold text-white mb-10">Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Security First', desc: 'Every decision is made with security in mind' },
              { title: 'Transparent Communication', desc: 'Clear, honest reporting of findings' },
              { title: 'Continuous Learning', desc: 'Staying ahead of emerging threats' },
              { title: 'Ethical Hacking', desc: 'Responsible disclosure & ethical standards' },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                whileHover={{x:10, borderColor:'rgba(0,255,153,0.6)'}}
                className="border-l-2 border-accent/40 pl-6 py-4 hover:border-accent/80 transition-colors"
              >
                <h4 className="text-accent font-bold text-lg mb-2">{value.title}</h4>
                <p className="text-slate-400 font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
