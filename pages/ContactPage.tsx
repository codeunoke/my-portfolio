
import React from 'react';
import { PROFILE } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="py-32 px-4 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black mb-12 text-white tracking-tighter uppercase">Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-black uppercase text-red-500 tracking-[0.3em] mb-4">Location</h4>
              <p className="text-2xl font-bold text-white">{PROFILE.location}</p>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase text-red-500 tracking-[0.3em] mb-4">Inquiries</h4>
              <p className="text-2xl font-bold text-white underline decoration-red-600/30">{PROFILE.email}</p>
              <p className="text-slate-500 font-medium">{PROFILE.phone}</p>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">LinkedIn</a>
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">GitHub</a>
              <a href={PROFILE.socials.x} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">X</a>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest">Instagram</a>
            </div>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Message</label>
                <textarea rows={4} placeholder="Let's build something amazing..." className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all resize-none text-white"></textarea>
              </div>
              <button className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest text-xs">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
