import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#1A3A57_0%,#0B1B2B_55%)] text-silver overflow-hidden pt-14">
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

      <div className="relative z-10 max-w-[1180px] mx-auto px-8 pt-16 pb-16 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center text-center md:text-left">
        <div className="max-w-full md:max-w-[560px] mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.08em] uppercase text-mango bg-mango/10 border border-mango/30 py-[7px] px-4 rounded-full mb-7">
            <span className="w-[7px] h-[7px] rounded-full bg-orange relative before:content-[''] before:absolute before:-inset-1 before:rounded-full before:border before:border-orange before:animate-pulse-ring"></span>
            FIELD-EARNED. *Not theorised*.
          </div>

          <h1 className="text-[clamp(2.4rem,5.6vw,4rem)] font-display font-bold mb-5 leading-[1.08] tracking-[-0.01em]">
            Unlock Your Highest Potential with <span className="text-orange">Battle-Tested Military Frameworks</span>.
          </h1>

          <p className="text-[17.5px] text-silver/70 max-w-full md:max-w-[540px] mb-9 leading-[1.6]">
            Join Indian Army veterans who have served in Siachen, the Northeast, and Kashmir for a tactical, 100% free online workshop. We will touch upon the core military principles adapted to help you think clearly, decide confidently, and act with unshakable discipline in everyday life.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-5 mb-11 flex-wrap">
            <a href="#register" className="btn-primary animate-shake">
              Claim Your Free Seat for 11 July
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3.5 flex-wrap mb-8 text-[13.5px] text-silver/60">
            <span><strong className="text-silver">Facilitated by Serving & Veteran Officers</strong></span>
            <span className="w-[1px] h-3.5 bg-ink-line hidden sm:block"></span>
            <span>No fluff</span>
            <span className="w-[1px] h-3.5 bg-ink-line hidden sm:block"></span>
            <span>No half-measures</span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-7 flex-wrap">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-sky">Date</span>
              <span className="font-semibold text-[15px] text-silver">11 July</span>
            </div>
            <div className="w-[1px] h-7 bg-ink-line hidden sm:block"></div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-sky">Cost</span>
              <span className="font-semibold text-[15px] text-silver">100% FREE</span>
            </div>
            <div className="w-[1px] h-7 bg-ink-line hidden sm:block"></div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-sky">Format</span>
              <span className="font-semibold text-[15px] text-silver">Live Workshop</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center order-first md:order-last mb-8 md:mb-0">
          <div className="absolute inset-[10%] bg-[radial-gradient(circle,rgba(0,167,225,0.28),transparent_70%)] blur-[20px] z-0" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[280px] md:max-w-[420px]"
          >
            {/* The provided hero image was a placeholder SVG. We'll inline it or use an img tag */}
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCI+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhiZyIgY3g9IjUwJSIgY3k9IjQwJSIgcj0iNjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzFBM0E1NyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwQjFCMkIiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImhzcG90IiBjeD0iNTAlIiBjeT0iMjAlIiByPSI1NSUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRkZBNjMwNTUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBNjMwMDAiLz4KICAgIDwvcmFkaWFsR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJoZ2xvdyI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNiIgcmVzdWx0PSJibHVyIi8+PGZlTWVyZ2U+PGZlTWVyZ2VOb2RlIGluPSJibHVyIi8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PC9mZU1lcmdlPjwvZmlsdGVyPgogIDwvZGVmcz4KICA8IS0tIGJnIC0tPgogIDxyZWN0IHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIiBmaWxsPSJ1cmwoI2hiZykiLz4KICA8cmVjdCB3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIgZmlsbD0idXJsKCNoc3BvdCkiLz4KICA8IS0tIGdyaWQgbGluZXMgLS0+CiAgPGcgc3Ryb2tlPSIjRUJFQkVCMDgiIHN0cm9rZS13aWR0aD0iMSI+CiAgICA8bGluZSB4MT0iMCIgeTE9Ijk2IiB4Mj0iNDgwIiB5Mj0iOTYiLz48bGluZSB4MT0iMCIgeTE9IjE5MiIgeDI9IjQ4MCIgeTI9IjE5MiIvPgogICAgPGxpbmUgeDE9IjAiIHkxPSIyODgiIHgyPSI0ODAiIHkyPSIyODgiLz48bGluZSB4MT0iMCIgeTE9IjM4NCIgeDI9IjQ4MCIgeTI9IjM4NCIvPgogICAgPGxpbmUgeDE9Ijk2IiB5MT0iMCIgeDI9Ijk2IiB5Mj0iNDgwIi8+PGxpbmUgeDE9IjE5MiIgeTE9IjAiIHgyPSIxOTIiIHkyPSI0ODAiLz4KICAgIDxsaW5lIHgxPSIyODgiIHkxPSIwIiB4Mj0iMjg4IiB5Mj0iNDgwIi8+PGxpbmUgeDE9IjM4NCIgeTE9IjAiIHgyPSIzODQiIHkyPSI0ODAiLz4KICA8L2c+CiAgPCEtLSBzdGFnZSBmbG9vciAtLT4KICA8ZWxsaXBzZSBjeD0iMjQwIiBjeT0iNDAwIiByeD0iMTgwIiByeT0iMjQuIGZpbGw9IiNGMTc3MjAyMiIvPgogIDxyZWN0IHg9IjgwIiB5PSIzOTAiIHdpZHRoPSIzMjAiIGhlaWdodD0iMTQiIHJ4PSI0IiBmaWxsPSIjMTQyQzQyIi8+CiAgPCEtLSBwb2RpdW0gLS0+CiAgPHJlY3QgeD0iMjA0IiB5PSIzMjAiIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MCIgcng9IjYiIGZpbGw9IiMxRTNBNTIiLz4KICA8cmVjdCB4PSIyMDgiIHk9IjMyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjgiIHJ4PSIzIiBmaWxsPSIjRjE3NzIwIi8+CiAgPCEtLSBib2R5IC0tPgogIDxyZWN0IHg9IjIxNiIgeT0iMjQwIiB3aWR0aD0iRDgiIGhlaWdodD0iODIiIHJ4PSIxMCIgZmlsbD0iI0VCRUJFQiIvPgogIDwhLS0gc2hpcnQgZGV0YWlsIC0tPgogIDxyZWN0IHg9IjIyNCIgeT0iMjQ4IiB3aWR0aD0iMzIiIGhlaWdodD0iMTIiIHJ4PSI0IiBmaWxsPSIjRjE3NzIwIi8+CiAgPCEtLSBoZWFkIC0tPgogIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjIyMCIgcj0iMjYiIGZpbGw9IiNGRkRCQjAiLz4KICA8IS0tIGhhaXIgLS0+CiAgPGVsbGlwc2UgY3g9IjI0MCIgY3k9IjE5OCIgcng9IjI2IiByeT0iMTIiIGZpbGw9IiM1QzNEMUEiLz4KICA8cmVjdCB4PSIyMTQiIHk9IjE5OCIgd2lkdGg9IjUyIiBoZWlnaHQ9IjEwIiByeD0iNSIgZmlsbD0iIzVDM0QxQSIvPgogIDwhLS0gZmFjZSAtLT4KICA8Y2lyY2xlIGN4PSIyMzIiIGN5PSIyMjIiIHI9IjMiIGZpbGw9IiMzQTIwMTAiLz4KICA8Y2lyY2xlIGN4PSIyNDgiIGN5PSIyMjIiIHI9IjMiIGZpbGw9IiMzQTIwMTAiLz4KICA8cGF0aCBkPSJNMjMzIDIzMiBRMjQwIDIzOCAyNDcgMjMyIiBzdHJva2U9IiMzQTIwMTAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPCEtLSBhcm1zIHJhaXNlZCAtLT4KICA8bGluZSB4MT0iMjE2IiB5MT0iMjYwIiB4Mj0iMTg2IiB5Mj0iMjkwIiBzdHJva2U9IiNFQkVCRUIiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIHgxPSIyNjQiIHkxPSIyNjAiIHgyPSIyOTQiIHkyPSIyOTAiIHN0cm9rZT0iI0VCRUJFQiIgc3Ryb2tlLXdpZHRoPSIxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGNpcmNsZSBjeD0iMTgzIiBjeT0iMjkzIiByPSI4IiBmaWxsPSIjRkREQkIwIi8+CiAgPGNpcmNsZSBjeD0iMjk3IiBjeT0iMjkzIiByPSI4IiBmaWxsPSIjRkREQkIwIi8+CiAgPCEtLSBzcG90bGlnaHQgYmVhbSAtLT4KICA8cG9seWdvbiBwb2ludHM9IjIyMCwwIDI2MCwwIDMwMCwyMDAgMTgwLDIwMCIgZmlsbD0iI0ZGQTYzMDA4Ii8+CiAgPCEtLSBzcGFya2xlcyAtLT4KICA8Y2lyY2xlIGN4PSIxNjAiIGN5PSIxNDAiIHI9IjMiIGZpbGw9IiNGRkE2MzAiIGZpbHRlcj0idXJsKCNoZ2xvdykiLz4KICA8Y2lyY2xlIGN4PSIzMjAiIGN5PSIxMjAiIHI9IjQiIGZpbGw9IiMwMEE3RTEiIGZpbHRlcj0idXJsKCNoZ2xvdykiLz4KICA8Y2lyY2xlIGN4PSIzODAiIGN5PSIyMDAiIHI9IjIuNSIgZmlsbD0iI0YxNzcyMCIgZmlsdGVyPSJ1cmwoI2hnbG93KSIvPgogIDxjaXJjbGUgY3g9IjEwMCIgY3k9IjIwMCIgcj0iMiIgZmlsbD0iI0ZGQTYzMCIvPgogIDwhLS0gbGFiZWwgLS0+CiAgPHJlY3QgeD0iMTIwIiB5PSI0NDAiIHdpZHRoPSIyNDAiIGhlaWdodD0iMjgiIHJ4PSIxNCIgZmlsbD0iI0YxNzcyMCIvPgogIDx0ZXh0IHg9IjI0MCIgeT0iNDU5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzFBMEEwMCI+VEhFIFZJQ1RPUlkgQ09ERTwvdGV4dD4KPC9zdmc+" 
                 alt="Param Workshop Visual" 
                 className="w-full rounded-[var(--radius)] border border-ink-line shadow-2xl" />
          </motion.div>
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
