import React from 'react'
import { motion } from 'framer-motion'

const sectionVariant = { hidden:{opacity:0,y:20}, show:{opacity:1,y:0, transition:{duration:0.6}} }
const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.12}} }

export default function Projects(){
  const projects = [
    {
      title: 'Blue Team Dashboard',
      desc: 'Real-time SOC monitoring and alerting platform for security event aggregation and response orchestration.',
      stack: 'React, Node.js, Elasticsearch',
    },
    {
      title: 'CTF Toolkit',
      desc: 'Collection of exploit scripts, payloads, and labs for training on common attack chains and defense mechanisms.',
      stack: 'Python, Bash, Docker',
    },
    {
      title: 'Secure CI Templates',
      desc: 'Production-ready GitHub Actions and GitLab CI configurations for secure build and deployment workflows.',
      stack: 'YAML, Bash, Kubernetes',
    },
    {
      title: 'Threat Intel API',
      desc: 'Internal threat intelligence platform aggregating feeds and providing real-time IOC lookups.',
      stack: 'Go, PostgreSQL, Redis',
    },
    {
      title: 'Policy Automation',
      desc: 'Infrastructure-as-code policy engine for automated security compliance and configuration drift detection.',
      stack: 'Python, Terraform, AWS',
    },
    {
      title: 'Vulnerability Scanner',
      desc: 'Custom SAST/DAST scanner integrating multiple engines and providing unified reporting.',
      stack: 'Python, Semgrep, OWASP ZAP',
    },
  ]

  return (
    <section className="relative py-40 max-w-6xl mx-auto px-6 overflow-hidden">
      {/* animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDuration:'5s'}} />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent3/8 rounded-full blur-3xl animate-pulse" style={{animationDuration:'6s'}} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent2/5 rounded-full blur-3xl animate-pulse" style={{animationDuration:'7s'}} />
      </div>
      
      <motion.div initial="hidden" whileInView="show" viewport={{once:true, margin:"-100px"}} variants={containerVariant}>
        <motion.h2 variants={sectionVariant} className="text-5xl font-extrabold text-white mb-4 relative z-10">Selected Projects</motion.h2>
        <motion.p variants={sectionVariant} className="text-slate-400 mb-16 text-lg relative z-10">Highlights from recent security tools and infrastructure.</motion.p>
        
        <motion.div variants={containerVariant} className="grid gap-6 grid-cols-1 md:grid-cols-3 relative z-10">
          {projects.map((proj, i)=>(
            <motion.article 
              key={i} 
              variants={sectionVariant}
              whileHover={{scale:1.08, y:-8, borderColor:'rgba(0,255,153,0.8)', boxShadow:'0 20px 40px rgba(0,255,153,0.15)'}}
              className="group panel relative p-8 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-accent/30 transition-all overflow-hidden cursor-pointer"
            >
              {/* gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* top accent bar */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent2 to-transparent w-0 group-hover:w-full transition-all duration-500" />
              
              {/* left accent bar on hover */}
              <div className="absolute left-0 top-0 w-1 bg-gradient-to-b from-accent to-accent2 h-0 group-hover:h-full transition-all duration-500" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{proj.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed mb-6">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.split(', ').map((tech, j) => (
                    <motion.span 
                      key={j}
                      initial={{opacity:0, scale:0.8}}
                      whileInView={{opacity:1, scale:1}}
                      transition={{delay: j * 0.1}}
                      className="text-xs text-accent2 font-mono bg-gradient-to-r from-accent/20 to-accent2/10 px-2.5 py-1 rounded border border-accent/40 group-hover:bg-gradient-to-r group-hover:from-accent/40 group-hover:to-accent2/20 group-hover:border-accent/70 transition-all animate-pulse-slow"
                      style={{animationDelay: `${j * 100}ms`}}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* animated corner accent */}
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-accent2/5 rounded-full blur-xl group-hover:bg-accent2/15 transition-colors" />
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
