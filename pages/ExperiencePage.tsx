import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Sparkles, 
  Target, 
  Award,
  CheckCircle2,
  Building2
} from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const toggleSkills = (index: number) => {
    setExpandedSkills(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen py-20 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Enhanced Background Elements with Parallax - Kenyan Flag Colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-[10%] w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 200])
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-green-600/10 rounded-full blur-3xl"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -200])
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-600/5 to-green-600/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(to right, #CE1126 1px, transparent 1px), 
                             linear-gradient(to bottom, #CE1126 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header with Parallax */}
        <motion.div 
          className="mb-16 md:mb-24"
          style={{
            y: shouldReduceMotion ? 0 : headerY,
            opacity: shouldReduceMotion ? 1 : headerOpacity
          }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-5 py-3 rounded-full border border-red-600/30 bg-gradient-to-r from-red-600/10 via-red-600/5 to-transparent backdrop-blur-md text-red-500 text-xs font-bold tracking-[0.2em] uppercase shadow-lg shadow-red-600/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-white tracking-tighter leading-[0.9]">
                WORK
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-amber-500 text-4xl sm:text-5xl md:text-6xl mt-2">
                  Experience
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Strategic contributions and professional growth across data-driven organizations
              </p>
            </motion.div>
            
            {/* Legend */}
            <motion.div 
              className="flex items-center gap-6 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 shadow-lg shadow-red-600/50" />
                </div>
                <span className="text-sm font-medium text-slate-300">Current</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-slate-600 border-2 border-slate-500" />
                <span className="text-sm font-medium text-slate-400">Previous</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: 'Years Experience', value: '5+', icon: CheckCircle2 },
              { label: 'Companies', value: EXPERIENCES.filter(e => e.company !== 'Kabarak University').length, icon: Building2 },
              { label: 'Projects Led', value: '30+', icon: Target },
              { label: 'Certifications', value: '3+', icon: Award },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-red-600/30 transition-all group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <stat.icon className="w-5 h-5 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/3 top-0 bottom-0 w-px hidden md:block overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/30 to-transparent"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: 'top' }}
            />
          </div>
          
          <motion.div 
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {EXPERIENCES.map((exp, idx) => {
              const cardRef = useRef(null);
              const isInView = useInView(cardRef, { once: true, margin: "-100px" });
              const isCurrent = idx === 0;
              const isEducation = exp.company.includes('University');

              return (
                <motion.div
                  key={idx}
                  ref={cardRef}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative">
                    {/* Enhanced Timeline Marker */}
                    <div className="absolute left-8 md:left-1/3 top-8 -translate-x-1/2 hidden md:block z-20">
                      <motion.div 
                        className="relative"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                      >
                        {/* Outer Glow */}
                        {isCurrent && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-red-600/30 blur-lg"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                        
                        {/* Marker */}
                        <div className={`relative w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                          isCurrent 
                            ? 'bg-red-600 border-red-500 shadow-lg shadow-red-600/50' 
                            : 'bg-slate-900 border-slate-600 group-hover:border-red-600 group-hover:bg-slate-800'
                        }`}>
                          {isCurrent && (
                            <motion.div
                              className="absolute inset-0 rounded-full bg-red-500"
                              animate={{ scale: [0, 1.5], opacity: [0.8, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Left Column - Meta Info */}
                    <div className="w-full md:w-1/3 md:pr-16">
                      <div className="md:sticky md:top-32 space-y-4">
                        {/* Period Badge */}
                        <motion.div 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Calendar className="w-4 h-4 text-red-500" />
                          <span className="text-red-500 font-bold text-sm tracking-wide">
                            {exp.period}
                          </span>
                        </motion.div>
                        
                        {/* Company Name */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-green-500 transition-all duration-300 leading-tight">
                          {exp.company}
                        </h3>
                        
                        {/* Role */}
                        <div className="flex items-start gap-2">
                          <Target className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
                          <p className="text-slate-300 font-semibold text-base">
                            {exp.role}
                          </p>
                        </div>
                        
                        {/* Quick Skills Preview (Desktop) */}
                        <div className="hidden md:block">
                          <motion.div 
                            className="mt-6 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={activeIndex === idx ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                              Key Skills
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.slice(0, 4).map((skill, i) => (
                                <motion.span 
                                  key={i}
                                  className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600/10 to-green-600/10 text-red-500 px-3 py-1.5 rounded-lg border border-red-600/30"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Content Card */}
                    <div className="w-full md:w-2/3">
                      <motion.div 
                        className={`relative p-6 md:p-8 lg:p-10 rounded-3xl border backdrop-blur-md overflow-hidden ${
                          isCurrent 
                            ? 'border-red-600/30 bg-gradient-to-br from-red-600/10 via-transparent to-green-600/5' 
                            : 'border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]'
                        }`}
                        whileHover={{ 
                          scale: 1.01,
                          borderColor: 'rgba(206, 17, 38, 0.3)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Background Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-red-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        <div className="relative z-10">
                          {/* Icon Badge */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div 
                              className={`p-3 rounded-2xl border ${
                                isEducation
                                  ? 'bg-gradient-to-br from-amber-600/10 to-amber-500/10 border-amber-600/30'
                                  : 'bg-gradient-to-br from-red-600/10 to-green-600/10 border-red-600/30'
                              }`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {isEducation ? (
                                <Award className="w-6 h-6 text-amber-500" />
                              ) : (
                                <Briefcase className="w-6 h-6 text-red-500" />
                              )}
                            </motion.div>

                            {/* Current Badge */}
                            {isCurrent && (
                              <motion.div 
                                className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-600/40"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Sparkles className="w-4 h-4 text-red-500" />
                                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                                  Current
                                </span>
                              </motion.div>
                            )}
                          </div>
                          
                          {/* Responsibilities */}
                          <ul className="space-y-4 mb-8">
                            {exp.description.map((item, i) => (
                              <motion.li 
                                key={i}
                                className="flex gap-3 text-slate-300 leading-relaxed group/item"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                <span className="group-hover/item:text-slate-200 transition-colors">
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Achievements (if available) */}
                          {/* Achievements section removed - not in Experience type */}
                          
                          {/* Skills Section */}
                          <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Technologies & Skills
                              </span>
                              {exp.skills.length > 6 && (
                                <button
                                  onClick={() => toggleSkills(idx)}
                                  className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors"
                                >
                                  {expandedSkills.includes(idx) ? 'Show Less' : `+${exp.skills.length - 6} More`}
                                </button>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {(expandedSkills.includes(idx) ? exp.skills : exp.skills.slice(0, 6)).map((skill, i) => (
                                <motion.span 
                                  key={i}
                                  className="text-xs font-bold uppercase tracking-wider bg-white/5 text-slate-300 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10 hover:text-red-500 hover:border-red-600/30 transition-all cursor-default"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.03 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Hover Glow */}
                        <motion.div 
                          className="absolute -inset-[1px] bg-gradient-to-r from-red-600 to-green-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-32 pt-16 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-block mb-6"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-red-600/10 to-green-600/10 border border-red-600/30">
                <Sparkles className="w-8 h-8 text-red-500" />
              </div>
            </motion.div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Ready to build something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">
                extraordinary together?
              </span>
            </h3>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              I bring this same level of dedication, expertise, and data-driven thinking to every project. Let's discuss how I can help achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                onClick={() => window.location.href = '#contact'}
                className="group relative px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full overflow-hidden shadow-xl shadow-red-600/25"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(206, 17, 38, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start a Conversation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-8 py-5 backdrop-blur-md bg-white/5 border-2 border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-red-600/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;