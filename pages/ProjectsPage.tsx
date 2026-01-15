import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from '../components/ProjectModal';
import { ExternalLink, Github, Sparkles, Zap, Filter, Eye, BarChart, Search, X } from 'lucide-react';

const CATEGORIES = ['All', 'Data Science', 'Web Apps', 'Analytics', 'Machine Learning', 'Dashboards'];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let filtered = PROJECTS;

    // Apply category filter
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => 
        project.category === activeFilter || 
        project.tech.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some(t => t.toLowerCase().includes(query)) ||
        project.category?.toLowerCase().includes(query) ||
        project.industry?.toLowerCase().includes(query)
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter, searchQuery]);

  const stats = {
    totalProjects: PROJECTS.length,
    industries: [...new Set(PROJECTS.map(p => p.industry || 'Tech'))].length,
    yearsActive: new Date().getFullYear() - Math.min(...PROJECTS.map(p => new Date(p.year || '2020').getFullYear())) + 1
  };

  return (
    <div className="min-h-screen py-20 px-4 container mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/10 to-green-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2.5 rounded-full border border-red-600/20 bg-gradient-to-r from-red-600/10 to-red-600/5 backdrop-blur-sm text-red-500 text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tighter leading-none">
                <span className="block bg-gradient-to-r from-red-500 via-white to-green-500 bg-clip-text text-transparent">
                  PROJECTS
                </span>
                <span className="text-3xl md:text-4xl text-red-500 block mt-4">Case Studies & Solutions</span>
              </h1>
              <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                Building data-driven solutions that bridge analytics and engineering for impactful results.
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 min-w-[300px]">
              {[
                { label: "Projects", value: `${stats.totalProjects}+`, icon: <Zap className="w-4 h-4" />, color: "from-red-600 to-red-700" },
                { label: "Industries", value: `${stats.industries}`, icon: <BarChart className="w-4 h-4" />, color: "from-green-600 to-green-700" },
                { label: "Years Active", value: `${stats.yearsActive}`, icon: <Sparkles className="w-4 h-4" />, color: "from-amber-600 to-amber-500" }
              ].map((stat, idx) => (
                <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all hover:scale-105">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                      {stat.icon}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 relative">
            <div className="relative">
              <label htmlFor="project-search" className="sr-only">Search projects</label>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" aria-hidden="true" />
              <input
                id="project-search"
                type="text"
                placeholder="Search projects by name, technology, or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-red-600/50 focus:bg-white/10 transition-all"
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-8" role="group" aria-label="Filter projects by category">
            <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mr-4">
              <Filter className="w-4 h-4" aria-hidden="true" />
              <span>Filter by:</span>
            </div>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wider min-h-[44px] ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-transparent shadow-lg shadow-red-600/20'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-slate-300'
                }`}
                aria-pressed={activeFilter === category}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-sm text-slate-400 font-medium" aria-live="polite" aria-atomic="true">
            Showing {filteredProjects.length} of {PROJECTS.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-20">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Project Card */}
                <div 
                  className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:border-cyan-500/30 hover:shadow-[0_40px_100px_-20px_rgba(34,211,238,0.15)] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-[1.2s] ease-out"
                      loading="lazy"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Tech Tags */}
                    <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span 
                          key={i}
                          className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 px-3 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-sm"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/10 text-slate-300 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* View Button */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-90 hover:scale-110">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                            {project.category || 'Project'}
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            {project.year || '2024'}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-400 transition-all duration-300 mb-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-lg leading-relaxed font-medium line-clamp-2 mb-6">
                      {project.description}
                    </p>

                    {/* Impact Metrics */}
                    {project.impact && project.impact.length > 0 && (
                      <div className="mb-6 pb-6 border-t border-b border-white/10">
                        <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Key Impact</div>
                        <div className="grid grid-cols-2 gap-3">
                          {project.impact.slice(0, 2).map((metric, i) => (
                            <div key={i} className="text-sm text-slate-300">
                              <span className="text-cyan-400 font-bold">✓</span> {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4">
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                            onClick={(e) => e.stopPropagation()}
                            title="View on GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            title="View Live Demo"
                          >
                            Live
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        {project.industry || 'Technology'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-24">
            <div className="glass-card max-w-md mx-auto p-12 rounded-3xl border border-white/5">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                <Search className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
              <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria to find what you're looking for.</p>
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-full transition-all hover:scale-105"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* View More CTA */}
        <div className="mt-32 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Have a project in mind?
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Let's collaborate to bring your data-driven ideas to life.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40"
            >
              Start a Project
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          .glass-card {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `
      }} />
    </div>
  );
};

export default ProjectsPage;
