import React from 'react'
import { motion } from 'framer-motion'

const sectionVariant = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0, transition:{duration:0.6}} }
const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.12}} }

export default function Services(){
  const services = [
    {
      title: 'Penetration Testing',
      desc: 'Web, API, and infrastructure assessments with clear remediation steps and detailed reporting.',
      icon: '🔍',
    },
    {
      title: 'Secure Code Reviews',
      desc: 'Manual and automated reviews to find logic flaws, injection vulnerabilities, and insecure patterns.',
      icon: '📋',
    },
    {
      title: 'Incident Response',
      desc: 'Rapid containment, triage, forensics, and post-incident hardening recommendations.',
      icon: '🚨',
    },
    {
      title: 'Architecture Design',
      desc: 'Design secure cloud, containerized, and on-premise infrastructure with defense-in-depth principles.',
      icon: '🏗️',
    },
    {
      title: 'Security Training',
      desc: 'Developer and ops team training on secure SDLC, OWASP top 10, and DevSecOps practices.',
      icon: '👨‍🎓',
    },
    {
      title: 'Compliance & Governance',
      desc: 'Strategy and implementation for ISO 27001, SOC 2, HIPAA, and other regulatory requirements.',
      icon: '✅',
    },
  ]

  return (
    <section className="relative py-40 max-w-6xl mx-auto px-6 overflow-hidden">
      {/* animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent2/10 rounded-full blur-3xl animate-pulse" style={{animationDuration:'6s'}} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent3/8 rounded-full blur-3xl animate-pulse" style={{animationDuration:'7s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-r from-accent/5 via-transparent to-accent2/5 blur-3xl pointer-events-none" />
      </div>
      
      <motion.div initial="hidden" whileInView="show" viewport={{once:true, margin:"-100px"}} variants={containerVariant}>
        <motion.h2 variants={sectionVariant} className="text-5xl font-extrabold text-white mb-4 relative z-10">Services</motion.h2>
        <motion.p variants={sectionVariant} className="text-slate-400 text-lg mb-16 relative z-10">Comprehensive cybersecurity solutions tailored to your organization</motion.p>
        
        <motion.div variants={containerVariant} className="grid gap-6 grid-cols-1 md:grid-cols-3 relative z-10">
          {services.map((svc, i)=>(
            <motion.div 
              key={i} 
              variants={sectionVariant}
              whileHover={{scale:1.08, y:-8, borderColor:'rgba(0,255,153,0.8)', boxShadow:'0 20px 40px rgba(0,255,153,0.15)'}}
              className="group panel relative p-8 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-accent/30 transition-all overflow-hidden cursor-pointer"
            >
              {/* animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* animated top accent line */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent2 to-transparent w-0 group-hover:w-full transition-all duration-500" />
              
              {/* animated left accent bar */}
              <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-accent to-accent2 h-0 group-hover:h-full transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{rotate: 12}}
                >
                  {svc.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{svc.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{svc.desc}</p>
              </div>
              
              {/* animated corner accent */}
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/15 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
