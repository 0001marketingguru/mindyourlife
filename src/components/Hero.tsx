import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#1A3A57_0%,#0B1B2B_55%)] text-silver overflow-hidden pt-8 md:pt-14">
      <div 
        className="absolute inset-0 bg-[length:64px_64px]"
        style={{
          backgroundImage: 'linear-gradient(rgba(235,235,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(235,235,235,0.045) 1px, transparent 1px)',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 75%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 75%)'
        }}
        aria-hidden="true"
      />
      
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(241,119,32,0.25),transparent_70%)] blur-[10px]" aria-hidden="true" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 pt-10 pb-12 md:pt-20 md:pb-20 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 items-center text-center md:text-left">
        <div className="max-w-full md:max-w-[560px] mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] uppercase text-mango bg-mango/10 border border-mango/30 py-[7px] px-4 rounded-full mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-orange relative before:content-[''] before:absolute before:-inset-1 before:rounded-full before:border before:border-orange before:animate-pulse-ring"></span>
            FIELD-EARNED. *Not theorised*.
          </div>

          <h1 className="text-[clamp(2rem,5.6vw,4rem)] font-display font-bold mb-5 leading-[1.08] tracking-[-0.02em] text-balance">
            Unlock Your Highest Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-mango drop-shadow-sm">Battle-Tested Military Frameworks</span>.
          </h1>

          <p className="text-[16px] md:text-[17.5px] text-silver/70 max-w-full md:max-w-[540px] mb-9 leading-[1.6]">
            Join Indian Army veterans who have served in Siachen, the Northeast, and Kashmir for a tactical, 100% free online workshop. We will touch upon the core military principles adapted to help you think clearly, decide confidently, and act with unshakable discipline in everyday life.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-5 mb-11 flex-wrap">
            <motion.a 
              href="#register" 
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="btn-primary animate-shake relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">Claim Your Free Seat for 11 July <ArrowRight size={16} /></span>
            </motion.a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3.5 flex-wrap mb-8 text-[13px] md:text-[13.5px] text-silver/60">
            <span><strong className="text-silver">Facilitated by Serving & Veteran Officers</strong></span>
            <span className="w-[1px] h-3.5 bg-ink-line hidden sm:block"></span>
            <span>No fluff</span>
            <span className="w-[1px] h-3.5 bg-ink-line hidden sm:block"></span>
            <span>No half-measures</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-5 md:gap-7 flex-wrap">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-sky">Date</span>
              <span className="font-semibold text-sm md:text-[15px] text-silver">11 July</span>
            </div>
            <div className="w-[1px] h-7 bg-ink-line hidden sm:block"></div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-sky">Cost</span>
              <span className="font-semibold text-sm md:text-[15px] text-silver">100% FREE</span>
            </div>
            <div className="w-[1px] h-7 bg-ink-line hidden sm:block"></div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-sky">Format</span>
              <span className="font-semibold text-sm md:text-[15px] text-silver">Live Workshop</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center order-first md:order-last mb-8 md:mb-0">
          <div className="absolute inset-[10%] bg-[radial-gradient(circle,rgba(0,167,225,0.28),transparent_70%)] blur-[20px] z-0" aria-hidden="true" />
          
          <div className="relative z-10 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[440px] mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl shadow-2xl shadow-black/60"
            >
              <div className="absolute inset-0 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.03)] pointer-events-none" />
              <img src="/assets/hero_visual.png" 
                alt="Param Workshop Visual" 
                className="w-full rounded-xl border border-white/5 bg-ink-soft/40 object-cover aspect-video" />
            </motion.div>

            {/* Asymmetrical Floating Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute -left-2 sm:-left-8 top-[15%] rounded-[14px] border border-white/10 bg-[#121c26]/80 backdrop-blur-md px-3.5 py-2.5 flex items-center gap-3 shadow-2xl shadow-black/40"
            >
              <div className="w-7 h-7 rounded-full bg-orange/10 flex items-center justify-center border border-orange/20">
                <span className="w-2 h-2 rounded-full bg-orange shadow-[0_0_10px_rgba(241,119,32,0.8)] animate-pulse"></span>
              </div>
              <div>
                <div className="text-[10px] text-silver/50 uppercase tracking-widest font-mono leading-none mb-1">Status</div>
                <div className="text-[13px] font-semibold text-silver leading-none">Live Briefing</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute -right-2 sm:-right-6 bottom-[25%] rounded-[14px] border border-white/10 bg-[#121c26]/80 backdrop-blur-md px-3.5 py-2.5 flex items-center gap-3 shadow-2xl shadow-black/40"
            >
              <div>
                <div className="text-[10px] text-silver/50 uppercase tracking-widest font-mono leading-none mb-1 text-right">Access</div>
                <div className="text-[13px] font-semibold text-sky leading-none">Open To All</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-20 pb-2">
        <svg viewBox="0 0 1400 160" preserveAspectRatio="none" className="w-full h-[80px] block">
          <path className="fill-none stroke-orange/55 stroke-[2.5px] stroke-linecap-round" d="M0,80 C40,20 80,140 120,60 C160,-10 200,150 240,70 C280,10 320,130 360,80 C400,40 440,120 480,80" />
          <path className="fill-none stroke-sky stroke-[2.5px] stroke-linecap-round animate-dash-flow" strokeDasharray="6 10" d="M480,80 L1400,80" />
          <circle className="fill-mango" cx="480" cy="80" r="5" />
        </svg>
        <div className="flex justify-between max-w-[1400px] mx-auto px-6 pb-7 font-mono text-[11.5px] tracking-[0.08em] uppercase text-silver/45">
          <span>Chaos</span>
          <span className="text-sky">Clarity</span>
        </div>
      </div>
    </section>
  );
}
