import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Plus, Play, X } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-paper">
      <div className="section-inner grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 md:gap-16 items-center">
        <div>
          <span className="eyebrow">About the Workshop</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] mb-5 text-balance">
            Clarity & Decisions Without Noise.
          </h2>
          <p className="text-ink/70 text-[16px] md:text-[16.5px] leading-relaxed max-w-[480px] mb-9">
            This free workshop is an intentional space for disciplined self-inquiry, acting as a tactical primer to the PARAM methodology. You will learn how to transition from merely functioning well to performing at your peak by previewing our core combat-decision systems. <em className="text-ink font-semibold">*Note: At the end of this high-value session, we will extend an exclusive invitation to our immersive 30 August physical bootcamp for those ready to execute these systems at the highest level.*</em>
          </p>
          <div className="grid grid-cols-3 gap-6 md:gap-10 max-w-[420px]">
            <div className="flex flex-col">
              <span className="font-display text-[2rem] md:text-[2.4rem] text-orange leading-none">4</span>
              <span className="text-[12px] md:text-[13px] text-ink/60 mt-1.5 leading-tight">Part methodology</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[2rem] md:text-[2.4rem] text-orange leading-none">LIVE</span>
              <span className="text-[12px] md:text-[13px] text-ink/60 mt-1.5 leading-tight">Format</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[2rem] md:text-[2.4rem] text-orange leading-none">5</span>
              <span className="text-[12px] md:text-[13px] text-ink/60 mt-1.5 leading-tight">Free Bonuses</span>
            </div>
          </div>
        </div>
        <div className="bg-ink text-silver rounded-[var(--radius)] p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange via-mango to-sky"></div>
          
          <div className="flex items-center gap-3.5 py-4 border-b border-ink-line pt-1">
            <Calendar className="text-orange" size={20} />
            <div>
              <span className="block text-xs text-sky font-mono tracking-[0.06em] uppercase">Date</span>
              <span className="block font-semibold text-[15.5px] mt-0.5">11 July</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 py-4 border-b border-ink-line">
            <Clock className="text-orange" size={20} />
            <div>
              <span className="block text-xs text-sky font-mono tracking-[0.06em] uppercase">Format</span>
              <span className="block font-semibold text-[15.5px] mt-0.5">LIVE WORKSHOP</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 py-4 border-b border-ink-line">
            <MapPin className="text-orange" size={20} />
            <div>
              <span className="block text-xs text-sky font-mono tracking-[0.06em] uppercase">Entry</span>
              <span className="block font-semibold text-[15.5px] mt-0.5">100% FREE</span>
            </div>
          </div>
          <motion.a 
            href="#register" 
            whileTap={{ scale: 0.96 }}
            className="block text-center mt-6 bg-orange text-[#1A0A00] font-bold py-3.5 rounded-full hover:bg-mango transition-colors"
          >
            Reserve Your Free Seat
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export function Framework() {
  const steps = [
    { num: '01', color: '#F17720', title: 'Terrain Assessment (ASSESS)', desc: '“Know your ground before moving forward.” An introduction to honestly evaluating your operational bottlenecks and life goals.' },
    { num: '02', color: '#FFA630', title: 'Mission Architecture (PLAN)', desc: '“Plans leading to victory.” Learn how vague ideas must be converted into structured, counter-adversarial contingencies.' },
    { num: '03', color: '#00A7E1', title: 'Discipline Blueprint (BUILD)', desc: '“Discipline is built, not imposed.” A look into the habits and personal operating standards that withstand the pressure of scaling.' },
    { num: '04', color: '#0474BA', title: 'Operation Inner Truth (REVIEW)', desc: '“Understand yourself better.” The military debriefing framework for learning, adapting, and growing with precision.' }
  ];

  return (
    <section id="framework" className="py-24 pb-28 bg-ink text-silver relative">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <div>
            <span className="eyebrow eyebrow-light">What You'll Learn</span>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] max-w-[600px] mb-3.5">The 4-Part Methodology Framework</h2>
            <p className="text-silver/55 text-base max-w-[480px] mb-16">
              One connected path, four stages. In this free session, we will touch upon the key pillars of the <strong className="text-mango font-bold">Army Gold Standards.</strong>
            </p>

            <div className="relative grid gap-0">
              <div className="absolute left-[23px] max-sm:left-[19px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-orange via-mango to-sky"></div>
              
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative grid grid-cols-[48px_1fr] max-sm:grid-cols-[40px_1fr] gap-7 max-sm:gap-5 py-7"
                  style={{ '--accent': step.color } as any}
                >
                  <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full bg-ink border-2 border-[var(--accent)] text-[var(--accent)] flex items-center justify-center font-mono font-semibold text-sm max-sm:text-xs z-10">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[1.4rem] mb-2 text-paper">{step.title}</h3>
                    <p className="text-silver/60 text-[15.5px] max-w-[560px] leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="sticky top-24 max-lg:static max-lg:order-first w-full max-w-[360px] lg:max-w-[420px] mx-auto mb-10 lg:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 560" className="w-full h-auto rounded-[var(--radius)] border border-ink-line bg-gradient-to-b from-[#0B1B2B] to-[#142C42]">
              {/* Decorative circles */}
              <circle cx="380" cy="40" r="60" fill="#F17720" fillOpacity="0.08" />
              <circle cx="40" cy="520" r="50" fill="#00A7E1" fillOpacity="0.06" />
              
              {/* Title */}
              <text x="210" y="50" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="700" fill="#EBEBEB" letterSpacing="2">
                ARMY GOLD STANDARDS
              </text>
              
              {/* Connector line */}
              <line x1="66" y1="90" x2="66" y2="510" stroke="rgba(235,235,235,0.12)" strokeWidth="2" strokeDasharray="4 6" />
              
              {/* Step 01 */}
              <g>
                <rect x="30" y="80" width="360" height="90" rx="12" fill="#1E3A52" fillOpacity="0.4" stroke="rgba(241,119,32,0.2)" strokeWidth="1" />
                <line x1="30" y1="80" x2="30" y2="170" stroke="#F17720" strokeWidth="5" />
                <circle cx="66" cy="125" r="20" fill="#F17720" fillOpacity="0.15" stroke="#F17720" strokeWidth="1.5" />
                <text x="66" y="130" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="700" fill="#F17720">01</text>
                <text x="106" y="115" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="700" fill="#EBEBEB">ASSESS</text>
                <text x="106" y="135" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Terrain Assessment</text>
                <text x="106" y="150" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Know your ground first.</text>
              </g>

              {/* Step 02 */}
              <g>
                <rect x="30" y="185" width="360" height="90" rx="12" fill="#1E3A52" fillOpacity="0.4" stroke="rgba(255,166,48,0.2)" strokeWidth="1" />
                <line x1="30" y1="185" x2="30" y2="275" stroke="#FFA630" strokeWidth="5" />
                <circle cx="66" cy="230" r="20" fill="#FFA630" fillOpacity="0.15" stroke="#FFA630" strokeWidth="1.5" />
                <text x="66" y="235" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="700" fill="#FFA630">02</text>
                <text x="106" y="220" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="700" fill="#EBEBEB">PLAN</text>
                <text x="106" y="240" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Mission Architecture</text>
                <text x="106" y="255" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Plans leading to victory.</text>
              </g>

              {/* Step 03 */}
              <g>
                <rect x="30" y="290" width="360" height="90" rx="12" fill="#1E3A52" fillOpacity="0.4" stroke="rgba(0,167,225,0.2)" strokeWidth="1" />
                <line x1="30" y1="290" x2="30" y2="380" stroke="#00A7E1" strokeWidth="5" />
                <circle cx="66" cy="335" r="20" fill="#00A7E1" fillOpacity="0.15" stroke="#00A7E1" strokeWidth="1.5" />
                <text x="66" y="340" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="700" fill="#00A7E1">03</text>
                <text x="106" y="325" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="700" fill="#EBEBEB">BUILD</text>
                <text x="106" y="345" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Discipline Blueprint</text>
                <text x="106" y="360" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Discipline is built.</text>
              </g>

              {/* Step 04 */}
              <g>
                <rect x="30" y="395" width="360" height="90" rx="12" fill="#1E3A52" fillOpacity="0.4" stroke="rgba(4,116,186,0.2)" strokeWidth="1" />
                <line x1="30" y1="395" x2="30" y2="485" stroke="#0474BA" strokeWidth="5" />
                <circle cx="66" cy="440" r="20" fill="#0474BA" fillOpacity="0.15" stroke="#0474BA" strokeWidth="1.5" />
                <text x="66" y="445" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="700" fill="#0474BA">04</text>
                <text x="106" y="430" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="700" fill="#EBEBEB">REVIEW</text>
                <text x="106" y="450" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Operation Inner Truth</text>
                <text x="106" y="465" fontFamily="Geist, sans-serif" fontSize="11" fill="rgba(235,235,235,0.6)">Understand yourself better.</text>
              </g>
              
              {/* Bottom Badge */}
              <rect x="110" y="505" width="200" height="28" rx="14" fill="#F17720" />
              <text x="210" y="523" textAnchor="middle" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="700" fill="#1A0A00">
                PARAM &bull; THE VICTORY CODE
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bonuses() {
  const bonuses = [
    { num: 1, title: "The Tactical Field Manual", price: '1,997', desc: "A PDF workbook for your pre-event diagnostic terrain assessment." },
    { num: 2, title: "Execution Failure Case Study", price: '2,999', desc: "“Why Fast-Scaling Delhi Startups Stall at 30 Employees”" },
    { num: 3, title: "Strategic Focus Blueprint", price: '1,997', desc: "Tactical resources to build unshakable focus and strategic leadership." },
    { num: 4, title: "The Confidence Switch", price: '1,997', desc: "Tactical resources to build unshakable focus and strategic leadership." },
    { num: 5, title: "121 Limiting Beliefs", price: '1,997', desc: "Tactical resources to build unshakable focus and strategic leadership." }
  ];

  return (
    <section id="bonuses" className="py-16 md:py-24 bg-paper">
      <div className="section-inner">
        <span className="eyebrow">But Wait!!! I've Something More For You!.</span>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-3 max-w-[560px] text-balance">5 Exclusive Bonuses — Included Free</h2>
        <p className="text-ink/60 text-base mb-12">Every participant gets these powerful digital resources immediately upon registration to accelerate their transformation.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bonuses.map((b, idx) => (
            <motion.div 
              key={b.num} 
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className={`bonus-card flex flex-col justify-between h-full ${idx === 3 ? 'lg:col-start-1 lg:col-span-1' : ''}`}
            >
              <div className="w-full">
                <div className="bonus-mockup-wrap">
                   <div className="w-full h-full bg-gradient-to-br from-ink to-ink-soft rounded-md shadow flex items-center justify-center p-4 text-center text-white border-l-[6px] border-orange flex-col justify-between">
                     <span className="text-[11px] font-bold text-sky uppercase tracking-wider">Bonus {b.num}</span>
                     <span className="text-xs font-bold leading-tight my-2">{b.title}</span>
                     <span className="text-[9px] opacity-60 line-clamp-2">{b.desc}</span>
                   </div>
                </div>
                <span className="font-mono text-[11.5px] text-blue tracking-[0.08em] uppercase mb-1.5 block">🎁 Bonus: {b.num}</span>
                <h3 className="text-base m-0 mb-2 leading-snug font-bold">{b.title}</h3>
              </div>
              <div className="font-display text-base text-orange font-bold pt-2.5 mt-auto">Priced ₹ {b.price}/–</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) h = 0;
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="py-16 pb-18 bg-[#FEF6EE] text-center">
      <div className="section-inner">
        <p className="font-display text-[clamp(1.5rem,3vw,2rem)] text-[#c0392b] font-extrabold mb-3">Total Value Of Bonuses: ₹11,000</p>
        <p className="font-display text-[clamp(1.1rem,2vw,1.4rem)] text-ink mb-3">Normal Workshop Ticket Price: <s className="text-ink/45">₹999</s></p>
        <p className="font-display text-[clamp(2rem,5vw,3rem)] text-[#2a7a2a] font-extrabold mb-8">Buy Today At Just ₹0 (100% FREE)</p>

        <p className="font-display text-base font-bold text-ink mb-1.5">But For You Today It's Absolutely</p>
        <div className="inline-block bg-gradient-to-br from-[#2a7a2a] to-[#4CAF50] text-white font-display text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold py-2.5 px-12 rounded-xl tracking-wide mb-8 shadow-[0_6px_24px_rgba(42,122,42,0.28)]">
          FREE
        </div>

        <p className="font-display text-sm font-bold tracking-wide text-ink mb-1.5">⚡ Hurry Up &middot; Limited Time Offer</p>
        <div className="w-[160px] h-[3px] bg-gradient-to-r from-orange to-mango rounded-full mx-auto mb-7"></div>
        
        <div className="flex items-center justify-center gap-2.5 mx-auto mb-7 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="bg-ink text-mango font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold min-w-[72px] text-center pt-3 px-2 pb-2 rounded-[10px] leading-none shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
              {pad(timeLeft.h)}
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink/55 mt-1.5">Hours</div>
          </div>
          <div className="font-display text-2xl text-orange font-bold mb-4">:</div>
          <div className="flex flex-col items-center">
            <div className="bg-ink text-mango font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold min-w-[72px] text-center pt-3 px-2 pb-2 rounded-[10px] leading-none shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
              {pad(timeLeft.m)}
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink/55 mt-1.5">Minutes</div>
          </div>
          <div className="font-display text-2xl text-orange font-bold mb-4">:</div>
          <div className="flex flex-col items-center">
            <div className="bg-ink text-mango font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold min-w-[72px] text-center pt-3 px-2 pb-2 rounded-[10px] leading-none shadow-[0_4px_14px_rgba(0,0,0,0.18)]">
              {pad(timeLeft.s)}
            </div>
            <div className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink/55 mt-1.5">Seconds</div>
          </div>
        </div>

        <motion.a 
          href="#register" 
          whileTap={{ scale: 0.96 }}
          className="btn-primary animate-shake text-[1.05rem] py-4 px-10 rounded-xl max-w-full"
        >
          Claim Free Seat Now
          <ArrowRight size={16} />
        </motion.a>
        <p className="mt-3 text-[13.5px] text-ink/50 font-medium">Prices Will Increase To ₹999/– Once The Slots Are Filled</p>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      name: "Dr. Anuj Kumar",
      role: "CMO, JP Hospital",
      videoUrl: "https://asset.shubhampal.com/1.mp4",
      thumbnail: "https://ik.imagekit.io/c9hhonhf9/Param/Testimonial/T1.png?updatedAt=1781697928711",
      initials: "AK",
      color: "from-orange/20 to-mango/30"
    },
    {
      name: "Prachi Gupta",
      role: "Life Coach",
      videoUrl: "https://asset.shubhampal.com/4.mp4",
      thumbnail: "",
      initials: "PG",
      color: "from-sky/20 to-blue/30"
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder, CoreY",
      videoUrl: "https://asset.shubhampal.com/3%20(1).mp4",
      thumbnail: "https://ik.imagekit.io/c9hhonhf9/Param/Testimonial/T3.png?updatedAt=1781697928671",
      initials: "PS",
      color: "from-mango/20 to-orange/30"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-ink-soft text-silver overflow-hidden">
      <div className="section-inner">
        <span className="eyebrow eyebrow-light">From past attendees</span>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-4 max-w-[560px] text-balance">Real people. Real shifts.</h2>

        <span className="block font-mono text-xs tracking-[0.1em] uppercase text-sky mb-5">Video testimonials</span>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible mb-12">
          {videoTestimonials.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveVideo(item.videoUrl)}
              className="snap-start min-w-[260px] sm:min-w-0 aspect-[9/12] bg-[#0E2030]/80 border border-ink-line rounded-[var(--radius)] relative overflow-hidden group cursor-pointer hover:border-orange/50 transition-all duration-300 flex flex-col justify-between p-6"
            >
               {/* Cover Image or Fallback Gradient */}
               {item.thumbnail ? (
                 <img 
                   src={item.thumbnail} 
                   alt={item.name} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
               ) : (
                 <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />
               )}

               {/* Background Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-[2]" />
               
               {/* Top Badge */}
               <div className="z-10 flex justify-between items-start">
                 <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-sky px-2.5 py-1 bg-sky/10 border border-sky/20 rounded-full backdrop-blur-sm">
                   Success Story
                 </span>
               </div>

               {/* Center Initials/Play Button Container */}
               <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 z-10">
                 <div className="relative z-10 flex flex-col items-center justify-center">
                   {!item.thumbnail && (
                     <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center font-display text-[22px] font-bold text-silver border border-silver/10 transition-transform duration-300 group-hover:scale-95 group-hover:opacity-40 mb-3`}>
                       {item.initials}
                     </div>
                   )}
                   
                   {/* Play Button Overlay */}
                   <motion.div 
                     whileTap={{ scale: 0.92 }}
                     className="w-14 h-14 rounded-full bg-paper/95 text-ink flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                   >
                     <Play size={20} fill="currentColor" className="ml-1 text-ink" />
                   </motion.div>
                 </div>
               </div>

               {/* Profile Info */}
               <div className="z-10 mt-auto pt-4">
                 <h3 className="text-[16.5px] font-bold text-silver mb-0.5 leading-tight">{item.name}</h3>
                 <p className="text-[12px] text-mango font-mono tracking-wide leading-tight">{item.role}</p>
               </div>
            </div>
          ))}
        </div>

        <span className="block font-mono text-xs tracking-[0.1em] uppercase text-sky mb-5 mt-12">Written testimonials</span>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible">
          <div className="snap-start min-w-[280px] sm:min-w-0 bg-silver/5 border border-ink-line rounded-[var(--radius)] p-6 flex flex-col min-h-[190px]">
            <p className="text-[14.5px] md:text-[15px] leading-[1.6] text-silver/85 mb-5">“I finally stopped guessing. The audit alone showed me where I'd been avoiding the real problem for a year.”</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold">P</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] md:text-[13.5px] text-silver font-semibold">Previous Participant</span>
                <span className="text-xs text-mango">Workshop Attendee</span>
              </div>
            </div>
          </div>
          <div className="snap-start min-w-[280px] sm:min-w-0 bg-silver/5 border border-ink-line rounded-[var(--radius)] p-6 flex flex-col min-h-[190px]">
            <p className="text-[14.5px] md:text-[15px] leading-[1.6] text-silver/85 mb-5">“Simple, structured, and something I actually kept using weeks later — not just workshop-day motivation.”</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold">R</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] md:text-[13.5px] text-silver font-semibold">Previous Participant</span>
                <span className="text-xs text-mango">Workshop Attendee</span>
              </div>
            </div>
          </div>
          <div className="snap-start min-w-[280px] sm:min-w-0 bg-silver/5 border border-ink-line rounded-[var(--radius)] p-6 flex flex-col min-h-[190px]">
            <p className="text-[14.5px] md:text-[15px] leading-[1.6] text-silver/85 mb-5">“The routine framework was the missing piece. My weeks finally have a shape.”</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-10 h-10 rounded-full bg-mango text-white flex items-center justify-center font-bold">S</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13px] md:text-[13.5px] text-silver font-semibold">Previous Participant</span>
                <span className="text-xs text-mango">Workshop Attendee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[800px] aspect-video bg-ink rounded-2xl overflow-hidden border border-ink-line shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Why() {
  return (
    <section id="why" className="py-16 md:py-24 bg-paper">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-center">
        <div>
          <span className="eyebrow">Why attend</span>
          <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-3.5 text-balance">Four reasons people show up.</h2>
          <p className="text-ink/60 text-base mb-8 max-w-[380px]">This isn't a lecture you watch. <strong className="text-ink font-bold">It's a room you work in.</strong></p>
          <p className="text-[14.5px] text-ink/65 mb-8 max-w-[380px] leading-relaxed">
            Founders, professionals navigating complexity, and anyone done with half-measures. If you feel stuck or unclear, this primer will give you the diagnostic tools you need.
          </p>
          <div className="w-full max-w-[380px] h-[220px] rounded-[var(--radius)] mb-8 border border-paper-line bg-[#0B1B2B] flex items-center justify-center p-6 relative overflow-hidden group">
            {/* Tactical Grid Background */}
            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(rgba(235,235,235,0.8) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            {/* Glowing effect */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(241,119,32,0.12),transparent_70%)] blur-xl group-hover:opacity-100 transition-opacity" />

            {/* Tactical Compass SVG */}
            <svg viewBox="0 0 200 200" className="w-[120px] h-[120px] relative z-10 text-orange">
              {/* Radar circles */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              
              {/* Compass lines */}
              <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
              
              {/* Target ticks */}
              <path d="M 100 10 L 100 25 M 100 190 L 100 175 M 10 100 L 25 100 M 190 100 L 175 100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Sighting pointer with rotate */}
              <g className="animate-spin" style={{ transformOrigin: '100px 100px', animationDuration: '12s' }}>
                <line x1="100" y1="100" x2="155" y2="45" stroke="#FFA630" strokeWidth="2" strokeLinecap="round" />
                <circle cx="155" cy="45" r="4" fill="#FFA630" />
              </g>
              
              <circle cx="100" cy="100" r="5" fill="currentColor" />
            </svg>
            <div className="absolute bottom-4 left-4 font-mono text-[10.5px] text-sky tracking-[0.15em] uppercase font-semibold flex items-center gap-1.5 z-10">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> LIVE SITREP
            </div>
          </div>
          <motion.a 
            href="#register" 
            whileTap={{ scale: 0.96 }}
            className="btn-primary"
          >
            Reserve Your Seat
          </motion.a>
        </div>
        <div className="flex flex-col">
          {[
            { num: '01', title: 'Gain clarity on where you are', desc: "An honest starting point, before any goal-setting begins." },
            { num: '02', title: 'Create a practical life system', desc: "Leave with a structure, not just a feeling of motivation." },
            { num: '03', title: 'Learn through interactive exercises', desc: "You work the framework live, not just listen to it." },
            { num: '04', title: 'Meet growth-focused people', desc: "A room full of people building the same kind of momentum." },
          ].map((item, i) => (
            <div key={item.num} className={`grid grid-cols-[44px_1fr] gap-5 py-5 border-b border-paper-line ${i===0 ? 'pt-0':''}`}>
              <span className="font-mono text-orange font-semibold text-sm">{item.num}</span>
              <div>
                <h3 className="text-[1.1rem] mb-1.5 font-bold">{item.title}</h3>
                <p className="text-[14.5px] text-ink/55">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Register() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2600);
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-ink text-silver relative">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <span className="eyebrow">Limited seats &middot; 11 July &middot; 100% FREE</span>
          <h2 className="text-[clamp(1.9rem,3vw,2.4rem)] mb-4 text-balance">Join the Free Workshop</h2>
          <p className="text-silver/60 text-[15px] md:text-base leading-[1.6] max-w-[420px] mb-8">
            Fill in your details below. We'll confirm your seat and share the entry instructions by email and WhatsApp.
          </p>

          <div className="bg-orange/10 border border-orange/30 rounded-[var(--radius)] p-5 md:p-6 mb-8 max-w-[420px]">
            <div className="flex items-baseline gap-2.5 mb-2.5">
              <span className="font-mono text-xs tracking-[0.08em] uppercase text-sky">Seat price</span>
              <span className="font-display text-[2.6rem] text-[#2a7a2a] tracking-[0.04em] leading-none">FREE</span>
            </div>
            <p className="text-[13px] md:text-[13.5px] text-silver/65 m-0 leading-relaxed">
              <strong className="text-mango font-bold">Includes all 5 bonuses worth ₹11,000</strong> — no hidden costs, no upsells in the room.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5 font-semibold text-[14px] md:text-[14.5px]"><Calendar className="text-orange" size={18}/> 11 July</div>
            <div className="flex items-center gap-2.5 font-semibold text-[14px] md:text-[14.5px]"><Clock className="text-orange" size={18}/> LIVE WORKSHOP</div>
            <div className="flex items-center gap-2.5 font-semibold text-[14px] md:text-[14.5px]"><MapPin className="text-orange" size={18}/> 100% FREE ACCESS</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-paper text-ink rounded-[var(--radius)] p-5 sm:p-7 md:p-9 flex flex-col gap-4">
          <div className="flex items-center justify-between bg-ink text-silver rounded-[10px] py-3 px-4 text-[14.5px] mb-1">
            <span>Your seat</span>
            <strong className="text-[#4CAF50] text-2xl font-display">FREE</strong>
          </div>
          
          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-[12.5px] font-semibold text-ink-soft">Full Name</span>
            <input type="text" placeholder="Your full name" required className="font-body text-[14.5px] h-12 px-4 border border-ink/20 rounded-lg bg-white transition-colors focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" />
          </div>
          
          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-[12.5px] font-semibold text-ink-soft">WhatsApp Number</span>
            <input type="tel" placeholder="10-digit WhatsApp number" pattern="[0-9]{10}" required className="font-body text-[14.5px] h-12 px-4 border border-ink/20 rounded-lg bg-white transition-colors focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" />
          </div>
          
          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-[12.5px] font-semibold text-ink-soft">Business Email</span>
            <input type="email" placeholder="you@company.com" required className="font-body text-[14.5px] h-12 px-4 border border-ink/20 rounded-lg bg-white transition-colors focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" />
          </div>
          
          <motion.button 
            type="submit" 
            whileTap={{ scale: 0.97 }}
            className={`mt-4 btn-primary btn-full ${submitted ? 'bg-[#2a7a2a] text-white hover:bg-[#2a7a2a]' : 'animate-shake'}`}
          >
            {submitted ? 'You\'re In! ✓' : 'Claim Free Seat Now'}
          </motion.button>
          <p className="text-[12px] text-ink/50 text-center mt-2 leading-relaxed">By registering, you agree to our Terms & Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "Is this workshop actually free?", a: "Yes, the 11 July live session is 100% free. You will receive real, actionable military frameworks without any cost." },
    { q: "Is this a sales pitch?", a: "This workshop is a high-value primer focusing on real operational tactics. At the very end of the session, we will briefly pitch our upcoming physical 30 August Bootcamp for those who wish to train with us in person. The choice to upgrade is entirely yours." },
    { q: "Why choose The Victory Code / PARAM?", a: "Because we deliver more than motivation—we transform lives. Led by Indian Army veterans, our programs combine battlefield-tested discipline with deep personal mastery." }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-ink-soft text-silver">
      <div className="section-inner max-w-[760px]">
        <span className="eyebrow eyebrow-light">Before you book</span>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-10 text-balance">Frequently asked questions</h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink-line overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-5.5 font-display text-[16px] md:text-[17px] font-semibold text-silver text-left focus:outline-none"
              >
                <span>{faq.q}</span>
                <Plus className={`text-orange transition-transform duration-250 shrink-0 ml-4 ${openIdx === i ? 'rotate-45' : ''}`} size={20} />
              </button>
              
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5.5 text-silver/60 text-[14.5px] md:text-[15px] leading-[1.6] max-w-[600px] pt-1">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#08121C] text-silver/70 pt-16">
      <div className="section-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-12 border-b border-ink-line">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-[9px] h-[9px] rounded-sm bg-orange"></span>
            <span className="font-display text-[18px] tracking-wider font-bold text-silver">PARAM™</span>
          </div>
          <p className="mt-2.5 text-[13.5px] text-silver/45">by The Victory Code</p>
        </div>
        
        <div>
          <h4 className="font-mono text-xs tracking-[0.08em] uppercase text-sky mb-3.5">Contact</h4>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">thevictorycode3@gmail.com</p>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">Mr. Uttam: +91 78142 36096</p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-[0.08em] uppercase text-sky mb-3.5">Legal</h4>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">Terms of Service</p>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">Privacy Policy</p>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto px-8 py-6 pb-24 text-[13px] text-silver/40">
        <span>&copy; 2026 thevictorycode.in. All rights reserved.</span>
      </div>
    </footer>
  );
}

export function StickyBar() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.2, 0.25], ["100%", "0%"]);
  
  const [nameIdx, setNameIdx] = useState(0);
  const names = ['Rahul', 'Priya', 'Aditya', 'Vikram', 'Ananya', 'Amit', 'Siddharth', 'Neha', 'Rohan', 'Karan'];
  
  useEffect(() => {
    const int = setInterval(() => setNameIdx(i => (i + 1) % names.length), 4500);
    return () => clearInterval(int);
  }, []);

  return (
    <motion.div 
      style={{ y }}
      className="fixed bottom-0 left-0 right-0 z-[999] bg-ink border-t border-ink-line py-3.5 px-4 md:px-8 flex items-center justify-between gap-4 shadow-[0_-6px_28px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-[12px] md:text-[13px] text-[#4CAF50] font-bold flex items-center gap-1.5 leading-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-ping" />
          {names[nameIdx]} just joined!
        </span>
        <div className="flex items-center gap-2 text-silver/60 text-[11px] md:text-[13px] font-medium mt-0.5">
          Offer ends soon &bull; <span className="text-mango font-semibold">100% FREE</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:block text-right text-[12px] text-silver/60 leading-tight">
          Normal Price: <s className="text-silver/30 mr-1">₹999</s><br/>
          Today: <strong className="text-[#4CAF50] text-sm">FREE</strong>
        </div>
        <motion.a 
          href="#register" 
          whileTap={{ scale: 0.96 }}
          className="btn-primary py-2.5 px-5 md:py-3 md:px-6 text-[13px] md:text-[15px] font-bold shadow-lg"
        >
          Claim Free Seat
        </motion.a>
      </div>
    </motion.div>
  );
}
