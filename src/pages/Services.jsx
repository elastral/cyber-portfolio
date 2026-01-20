import React from 'react'
import { motion } from 'framer-motion'

const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.1, delayChildren:0.2}} }
const itemVariant = { hidden:{opacity:0, y:30}, show:{opacity:1, y:0, transition:{duration:0.6}} }

export default function Services(){
  const services = [
    {
      title: 'Penetration Testing',
      desc: 'Web, API, and infrastructure assessments with clear remediation steps and detailed reporting.',
      icon: '🔍',
      color: 'accent'
    },
    {
      title: 'Secure Code Reviews',
      desc: 'Manual and automated reviews to find logic flaws, injection vulnerabilities, and insecure patterns.',
      icon: '📋',
      color: 'accent2'
    },
    {
      title: 'Incident Response',
      desc: 'Rapid containment, triage, forensics, and post-incident hardening recommendations.',
      icon: '🚨',
      color: 'accent3'
    },
    {
      title: 'Architecture Design',
      desc: 'Design secure cloud, containerized, and on-premise infrastructure with defense-in-depth principles.',
      icon: '🏗️',
      color: 'accent'
    },
    {
      title: 'Security Training',
      desc: 'Developer and ops team training on secure SDLC, OWASP top 10, and DevSecOps practices.',
      icon: '👨‍🎓',
      color: 'accent2'
    },
    {
      title: 'Compliance & Governance',
      desc: 'Strategy and implementation for ISO 27001, SOC 2, HIPAA, and other regulatory requirements.',
      icon: '✅',
      color: 'accent3'
    },
  ]

  return (
    <section className="relative py-40 max-w-7xl mx-auto px-6 overflow-hidden">
      {/* Animated background with morphing shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent2/6 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 18s ease-in-out infinite'}} 
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent3/5 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 22s ease-in-out infinite 2s'}} 
        />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/4 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 20s ease-in-out infinite 4s'}} 
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
        <motion.div variants={itemVariant} className="mb-16">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-accent via-white to-accent2 bg-clip-text text-transparent mb-4">
            Services
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-accent2 rounded-full" />
          <p className="text-slate-300 text-lg mt-6 max-w-2xl">Comprehensive cybersecurity solutions tailored to protect and strengthen your organization's digital infrastructure</p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div variants={itemVariant} className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {services.map((svc, i)=>(
            <motion.div 
              key={i} 
              variants={itemVariant}
              whileHover={{scale:1.05, y:-12}}
              className="group relative p-8 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-950/40 border border-accent/40 transition-all overflow-hidden backdrop-blur-sm"
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent2/0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                whileHover={{opacity: 0.25}}
              />
              
              {/* Top animated accent line */}
              <motion.div 
                className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent via-accent2 to-transparent w-0 group-hover:w-full transition-all duration-500"
              />
              
              {/* Left animated accent bar */}
              <motion.div 
                className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent to-accent2 h-0 group-hover:h-full transition-all duration-500"
              />
              
              {/* Right side glow on hover */}
              <motion.div 
                className="absolute right-0 top-0 w-1 bg-gradient-to-b from-accent2 to-accent h-0 group-hover:h-full transition-all duration-500"
              />
              
              <div className="relative z-10">
                {/* Icon with rotation animation */}
                <motion.div 
                  className="text-6xl mb-6 inline-block"
                  whileHover={{rotate: 15, scale: 1.2}}
                  transition={{type: "spring", stiffness: 300}}
                >
                  {svc.icon}
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300"
                >
                  {svc.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed text-sm">
                  {svc.desc}
                </p>
                
                {/* Bottom accent dot on hover */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/10 rounded-full blur-lg group-hover:bg-accent/20 transition-colors duration-500"
                />
              </div>
              
              {/* Terminal-like corner indicator */}
              <motion.div 
                className="absolute top-4 right-4 text-xs font-mono text-accent/60 group-hover:text-accent/100 transition-colors"
                initial={{opacity: 0}}
                whileHover={{opacity: 1}}
              >
                &gt; access
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Kali Linux themed section */}
        <motion.div variants={itemVariant} className="mt-24 p-8 rounded-xl bg-gradient-to-r from-accent/5 to-accent2/5 border border-accent/30 relative overflow-hidden">
          {/* Animated background lines */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div 
              className="absolute w-full h-1 bg-gradient-to-r from-accent to-transparent"
              style={{top: '20%'}}
              animate={{x: ['-100%', '100%']}}
              transition={{duration: 3, repeat: Infinity}}
            />
            <motion.div 
              className="absolute w-full h-1 bg-gradient-to-r from-accent2 to-transparent"
              style={{top: '50%'}}
              animate={{x: ['100%', '-100%']}}
              transition={{duration: 4, repeat: Infinity}}
            />
            <motion.div 
              className="absolute w-full h-1 bg-gradient-to-r from-accent3 to-transparent"
              style={{top: '80%'}}
              animate={{x: ['-100%', '100%']}}
              transition={{duration: 3.5, repeat: Infinity}}
            />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">🛡️</span>
              <h3 className="text-2xl font-bold text-accent">Penetration Testing Stack</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Using industry-standard tools and methodologies including Kali Linux, Burp Suite, Metasploit, and custom exploitation frameworks to identify and validate vulnerabilities before attackers do.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Kali Linux', 'Burp Suite Pro', 'Metasploit', 'SQLmap', 'Wireshark', 'Nmap', 'Custom Tools'].map((tool, i) => (
                <motion.span 
                  key={i}
                  initial={{opacity: 0, scale: 0.8}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{delay: i * 0.05}}
                  className="px-4 py-2 rounded-lg bg-accent/20 border border-accent/50 text-accent text-sm font-mono hover:bg-accent/30 transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
