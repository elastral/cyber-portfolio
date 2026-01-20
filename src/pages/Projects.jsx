import React from 'react'
import { motion } from 'framer-motion'

const containerVariant = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:0.1, delayChildren:0.2}} }
const itemVariant = { hidden:{opacity:0, y:30}, show:{opacity:1, y:0, transition:{duration:0.6}} }

export default function Projects(){
  const projects = [
    {
      title: 'Blue Team Dashboard',
      desc: 'Real-time SOC monitoring and alerting platform for security event aggregation and response orchestration.',
      stack: 'React, Node.js, Elasticsearch',
      badge: '🛡️'
    },
    {
      title: 'CTF Toolkit',
      desc: 'Collection of exploit scripts, payloads, and labs for training on common attack chains and defense mechanisms.',
      stack: 'Python, Bash, Docker',
      badge: '🧪'
    },
    {
      title: 'Secure CI Templates',
      desc: 'Production-ready GitHub Actions and GitLab CI configurations for secure build and deployment workflows.',
      stack: 'YAML, Bash, Kubernetes',
      badge: '🔒'
    },
    {
      title: 'Threat Intel API',
      desc: 'Internal threat intelligence platform aggregating feeds and providing real-time IOC lookups.',
      stack: 'Go, PostgreSQL, Redis',
      badge: '📡'
    },
    {
      title: 'Policy Automation',
      desc: 'Infrastructure-as-code policy engine for automated security compliance and configuration drift detection.',
      stack: 'Python, Terraform, AWS',
      badge: '⚙️'
    },
    {
      title: 'Vulnerability Scanner',
      desc: 'Custom SAST/DAST scanner integrating multiple engines and providing unified reporting.',
      stack: 'Python, Semgrep, OWASP ZAP',
      badge: '🔍'
    },
  ]

  return (
    <section className="relative py-40 max-w-7xl mx-auto px-6 overflow-hidden">
      {/* Animated background with morphing shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/6 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 20s ease-in-out infinite'}} 
        />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent3/5 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 22s ease-in-out infinite 2s'}} 
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent2/4 rounded-full blur-3xl" 
          style={{animation: 'morphFloat 18s ease-in-out infinite 4s'}} 
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
            Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-accent2 rounded-full" />
          <p className="text-slate-300 text-lg mt-6 max-w-2xl">Security tools, automation frameworks, and infrastructure projects built to solve real-world challenges</p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div variants={itemVariant} className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {projects.map((proj, i)=>(
            <motion.article 
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
                {/* Badge with animation */}
                <motion.div 
                  className="text-4xl mb-4 inline-block"
                  whileHover={{rotate: 15, scale: 1.2}}
                  transition={{type: "spring", stiffness: 300}}
                >
                  {proj.badge}
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300"
                >
                  {proj.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed text-sm mb-6">
                  {proj.desc}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {proj.stack.split(', ').map((tech, j) => (
                    <motion.span 
                      key={j}
                      initial={{opacity:0, scale:0.8}}
                      whileInView={{opacity:1, scale:1}}
                      transition={{delay: j * 0.08}}
                      whileHover={{scale: 1.1}}
                      className="text-xs text-accent2 font-mono bg-gradient-to-r from-accent/20 to-accent2/10 px-3 py-1.5 rounded border border-accent/40 group-hover:bg-gradient-to-r group-hover:from-accent/40 group-hover:to-accent2/20 group-hover:border-accent/70 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Bottom accent dot on hover */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent2/10 rounded-full blur-lg group-hover:bg-accent2/20 transition-colors duration-500"
                />
              </div>
              
              {/* Terminal-like corner indicator */}
              <motion.div 
                className="absolute top-4 right-4 text-xs font-mono text-accent/60 group-hover:text-accent/100 transition-colors"
                initial={{opacity: 0}}
                whileHover={{opacity: 1}}
              >
                &gt; view
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
