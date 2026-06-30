import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Plus } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-paper">
      <div className="section-inner grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow">About the workshop</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] mb-5">
            Come as you are. Leave with a <strong className="text-orange">system</strong>.
          </h2>
          <p className="text-ink/70 text-[16.5px] leading-relaxed max-w-[480px] mb-9">
            Param is a warm, practical, in-person workshop built for real life — not
            another framework you'll forget by Friday. We'll help you build
            <strong className="text-ink font-bold"> structure, clarity, and momentum </strong> 
            using one simple methodology, worked through together in the room. No theory for theory's sake — you'll
            walk out with something you can actually use that same evening.
          </p>
          <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col">
              <span className="font-display text-[2.4rem] text-orange leading-none">4</span>
              <span className="text-[13px] text-ink/60 mt-1.5">Part methodology</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[2.4rem] text-orange leading-none">2<span className="text-base ml-0.5">hrs</span></span>
              <span className="text-[13px] text-ink/60 mt-1.5">Focused, in-person</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[2.4rem] text-orange leading-none">6</span>
              <span className="text-[13px] text-ink/60 mt-1.5">Bonuses included</span>
            </div>
          </div>
        </div>
        <div className="bg-ink text-silver rounded-[var(--radius)] p-8 relative overflow-hidden">
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
              <span className="block text-xs text-sky font-mono tracking-[0.06em] uppercase">Time</span>
              <span className="block font-semibold text-[15.5px] mt-0.5">4:00 PM – 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 py-4 border-b border-ink-line">
            <MapPin className="text-orange" size={20} />
            <div>
              <span className="block text-xs text-sky font-mono tracking-[0.06em] uppercase">Location</span>
              <span className="block font-semibold text-[15.5px] mt-0.5">Final venue to be announced</span>
            </div>
          </div>
          <a href="#register" className="block text-center mt-6 bg-orange text-[#1A0A00] font-bold py-3.5 rounded-full hover:bg-mango transition-colors">
            Book My Seat
          </a>
        </div>
      </div>
    </section>
  );
}

export function Framework() {
  const steps = [
    { num: '01', color: '#F17720', title: 'Life Audit', desc: 'Evaluate your current reality across key life areas. Identify strengths, gaps, and opportunities before you plan a single change.' },
    { num: '02', color: '#FFA630', title: 'Goal Alignment', desc: 'Connect your daily actions with your long-term vision, so effort in the present actually moves you toward where you want to be.' },
    { num: '03', color: '#00A7E1', title: 'Routine Design', desc: 'Build routines that create consistency and discipline — systems that hold up on your worst days, not just your best ones.' },
    { num: '04', color: '#0474BA', title: 'Execution System', desc: 'Create a practical plan for sustained progress, so the framework keeps working long after the workshop ends.' }
  ];

  return (
    <section id="framework" className="py-24 pb-28 bg-ink text-silver relative">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-start">
          <div>
            <span className="eyebrow eyebrow-light">What you'll learn</span>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] max-w-[600px] mb-3.5">The 4-Part Methodology Framework</h2>
            <p className="text-silver/55 text-base max-w-[480px] mb-16">
              One connected path, four stages — <strong className="text-mango font-bold">each builds directly on the one before it.</strong>
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
          
          <div className="sticky top-24 max-lg:static max-lg:order-first max-lg:max-w-[360px] max-lg:mx-auto max-lg:mb-10">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MjAiIGhlaWdodD0iNTYwIiB2aWV3Qm94PSIwIDAgNDIwIDU2MCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZiZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMEIxQjJCIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzE0MkM0MiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjQyMCIgaGVpZ2h0PSI1NjAiIGZpbGw9InVybCgjZmJnKSIgcng9IjE0Ii8+CiAgPCEtLSBkZWNvcmF0aXZlIGNpcmNsZXMgLS0+CiAgPGNpcmNsZSBjeD0iMzgwIiBjeT0iNDAiIHI9IjYwIiBmaWxsPSIjRjE3NzIwMTAiLz4KICA8Y2lyY2xlIGN4PSI0MCIgY3k9IjUyMCIgcj0iNTAiIGZpbGw9IiMwMEE3RTEwOCIvPgogIDwhLS0gdGl0bGUgLS0+CiAgPHRleHQgeD0iMjEwIiB5PSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNGRkZGRkYiIGxldHRlci1zcGFjaW5nPSIyIj40LVBBUlQgTUVUSE9ET0xPR1k8L3RleHQ+CiAgPCEtLSBzdGVwIGNhcmRzIC0tPgogIDwhLS0gMDEgLS0+CiAgPHJlY3QgeD0iMzAiIHk9IjcwIiB3aWR0aD0iMzYwIiBoZWlnaHQ9Ijk2IiByeD0iMTIiIGZpbGw9IiMxRTNBNTIiLz4KICA8cmVjdCB4PSIzMCIgeT0iNzAiIHdpZHRoPSI1IiBoZWlnaHQ9Ijk2IiByeD0iMiIgZmlsbD0iI0YxNzcyMCIvPgogIDxjaXJjbGUgY3g9IjY2IiBjeT0iMTE4IiByPSIyMCIgZmlsbD0iI0YxNzcyMCIgZmlsbC1vcGFjaXR5PSIwLjE1IiBzdHJva2U9IiNGMTc3MjAiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNjYiIHk9IjEyMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNGMTc3MjAiPjAxPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMTA4IiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI0VCRUJFQiI+TGlmZSBBdWRpdDwvdGV4dD4KICA8dGV4dCB4PSIxMDAiIHk9IjEyOCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFQkVCRUI5OSI+RXZhbHVhdGUgeW91ciBjdXJyZW50IHJlYWxpdHk8L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSIxNDYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRUJFQkVCOTkiPmFjcm9zcyBrZXkgbGlmZSBhcmVhcy48L3RleHQ+CiAgPCEtLSAwMiAtLT4KICA8cmVjdCB4PSIzMCIgeT0iMTgyIiB3aWR0aD0iMzYwIiBoZWlnaHQ9Ijk2IiByeD0iMTIiIGZpbGw9IiMxRTNBNTIiLz4KICA8cmVjdCB4PSIzMCIgeT0iMTgyIiB3aWR0aD0iNSIgaGVpZ2h0PSI5NiIgcng9IjIiIGZpbGw9IiNGRkE2MzAiLz4KICA8Y2lyY2xlIGN4PSI2NiIgY3k9IjIzMCIgcj0iMjAiIGZpbGw9IiNGRkE2MzAyMCIgc3Ryb2tlPSIjRkZBNjMwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjY2IiB5PSIyMzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjRkZBNjMwIj4wMjwvdGV4dD4KICA8dGV4dCB4PSIxMDAiIHk9IjIyMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNFQkVCRUIiPkdvYWwgQWxpZ25tZW50PC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMjQwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VCRUJFQjk5Ij5Db25uZWN0IGRhaWx5IGFjdGlvbnMgd2l0aDwvdGV4dD4KICA8dGV4dCB4PSIxMDAiIHk9IjI1OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNFQkVCRUI5OSI+eW91ciBsb25nLXRlcm0gdmlzaW9uLjwvdGV4dD4KICA8IS0tIDAzIC0tPgogIDxyZWN0IHg9IzMwIiB5PSIyOTQiIHdpZHRoPSIzNjAiIGhlaWdodD0iOTYiIHJ4PSIxMiIgZmlsbD0iIzFFM0E1MiIvPgogIDxyZWN0IHg9IzMwIiB5PSIyOTQiIHdpZHRoPSI1IiBoZWlnaHQ9Ijk2IiByeD0iMiIgZmlsbD0iIzAwQTdFMSIvPgogIDxjaXJjbGUgY3g9IjY2IiBjeT0iMzQyIiByPSIyMCIgZmlsbD0iIzAwQTdFMTE1IiBzdHJva2U9IiMwMEE3RTEiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iNjAiIHk9IjM0NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMwMEE3RTEiPjAzPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMzMyIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iI0VCRUJFQiI+Um91dGluZSBEZXNpZ248L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSIzNTIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRUJFQkVCOTkiPkJ1aWxkIHJvdXRpbmVzIHRoYXQgY3JlYXRlPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMzcwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VCRUJFQjk5Ij5jb25zaXN0ZW5jeSBhbmQgZGlzY2lwbGluZS48L3RleHQ+CiAgPCEtLSAwNCAtLT4KICA8cmVjdCB4PSIzMCIgeT0iNDA2IiB3aWR0aD0iMzYwIiBoZWlnaHQ9Ijk2IiByeD0iMTIiIGZpbGw9IiMxRTNBNTIiLz4KICA8cmVjdCB4PSIzMCIgeT0iNDA2IiB3aWR0aD0iNSIgaGVpZ2h0PSI5NiIgcng9IjIiIGZpbGw9IiMwNDc0QkEiLz4KICA8Y2lyY2xlIGN4PSI2NiIgY3k9IjQ1NCIgcj0iMjAiIGZpbGw9IiMwNDc0QkExOCIgc3Ryb2tlPSIjMDQ3NEJBIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogIDx0ZXh0IHg9IjY2IiB5PSI0NTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMDQ3NEJBIj4wNDwvdGV4dD4KICA8dGV4dCB4PSIxMDAiIHk9IjQ0NCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTUiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNFQkVCRUIiPkV4ZWN1dGlvbiBTeXN0ZW08L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSI0NjQuIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0VCRUJFQjk5Ij5DcmVhdGUgYSBwcmFjdGljYWwgcGxhbiBmb3I8L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSI0ODIiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRUJFQkVCOTkiPnN1c3RhaW5lZCBwcm9ncmVzcy48L3RleHQ+CiAgPCEtLSBjb25uZWN0b3IgbGluZSAtLT4KICA8bGluZSB4MT0iNjYiIHkxPSI5MCIgeDI9IjY2IiB5Mj0iNTMwIiBzdHJva2U9IiNFQkVCRUIxOCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNiIvPgogIDwhLS0gYm90dG9tIGJhZGdlIC0tPgogIDxyZWN0IHg9IjExMCIgeT0iNTE2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI4IiByeD0iMTQiIGZpbGw9IiNGMTc3MjAiLz4KICA8dGV4dCB4PSIyMTAiIHk9IjUzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiMxQTBBMDAiPlBBUkFNIMK3IE1JTkRZT1VSTElGRTwvdGV4dD4KPC9zdmc+" alt="Framework illustration" className="w-full rounded-[var(--radius)] border border-ink-line" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bonuses() {
  const bonuses = [
    { num: 1, title: "Find Your Life's True Purpose With NLP", price: '1,997' },
    { num: 2, title: "Manifest Faster With NLP", price: '1,997' },
    { num: 3, title: "Vision Board Guide", price: '1,997' },
    { num: 4, title: "The Confidence Switch", price: '1,997' },
    { num: 5, title: "121 Limiting Beliefs", price: '2,999' }
  ];

  return (
    <section id="bonuses" className="py-24 bg-paper">
      <div className="section-inner">
        <span className="eyebrow">But Wait!!! I've Something More For You!</span>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-3 max-w-[560px]">5 Exclusive Bonuses — Included Free</h2>
        <p className="text-ink/60 text-base mb-12">Every participant gets these 5 powerful digital resources to accelerate their transformation.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bonuses.slice(0, 3).map(b => (
            <div key={b.num} className="bonus-card">
              <div className="bonus-mockup-wrap">
                 <div className="w-full h-full bg-gradient-to-br from-ink to-ink-soft rounded-md shadow flex items-center justify-center p-2 text-center text-white border-l-[6px] border-orange">
                   <span className="text-sm font-bold opacity-80">{b.title}</span>
                 </div>
              </div>
              <span className="font-mono text-[11.5px] text-blue tracking-[0.08em] uppercase mb-1.5">🎁 Bonus: {b.num}</span>
              <h3 className="text-base m-0 mb-2 leading-snug">{b.title}</h3>
              <div className="font-display text-base text-orange font-bold mt-auto pt-2.5">Priced ₹ {b.price}/–</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[680px] mx-auto mt-6">
          {bonuses.slice(3, 5).map(b => (
             <div key={b.num} className="bonus-card">
              <div className="bonus-mockup-wrap">
                 <div className="w-full h-full bg-gradient-to-br from-ink to-ink-soft rounded-md shadow flex items-center justify-center p-2 text-center text-white border-l-[6px] border-orange">
                   <span className="text-sm font-bold opacity-80">{b.title}</span>
                 </div>
              </div>
              <span className="font-mono text-[11.5px] text-blue tracking-[0.08em] uppercase mb-1.5">🎁 Bonus: {b.num}</span>
              <h3 className="text-base m-0 mb-2 leading-snug">{b.title}</h3>
              <div className="font-display text-base text-orange font-bold mt-auto pt-2.5">Priced ₹ {b.price}/–</div>
            </div>
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
        <p className="font-display text-[clamp(2rem,5vw,3rem)] text-[#2a7a2a] font-extrabold mb-8">Buy Today At Just ₹299</p>

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

        <a href="#register" className="btn-primary animate-shake text-[1.05rem] py-4 px-10 rounded-xl max-w-full">
          I Want To Join The 21 Days Challenge & Claim My 2 Day Event Bonus At ₹299/–
          <ArrowRight size={16} />
        </a>
        <p className="mt-3 text-[13.5px] text-ink/50 font-medium">Prices Will Increase To ₹999/– Once The Slots Are Filled</p>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-ink-soft text-silver">
      <div className="section-inner">
        <span className="eyebrow eyebrow-light">From past attendees</span>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-4 max-w-[560px]">Real people. Real shifts.</h2>

        <span className="block font-mono text-xs tracking-[0.1em] uppercase text-sky mb-5">Video testimonials</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-[9/12] bg-gradient-to-br from-sky/20 to-blue/30 border border-ink-line rounded-[var(--radius)] relative overflow-hidden group">
               <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 bg-gradient-to-b from-ink/15 to-ink/65">
                 <div className="w-[52px] h-[52px] rounded-full bg-paper/90 text-ink flex items-center justify-center transition-transform group-hover:scale-110 cursor-pointer">
                   <div className="ml-1 opacity-80">▶</div>
                 </div>
                 <span className="font-mono text-[11.5px] tracking-[0.06em] uppercase text-silver/85 text-center px-4">Participant success story</span>
               </div>
            </div>
          ))}
        </div>

        <span className="block font-mono text-xs tracking-[0.1em] uppercase text-sky mb-5 mt-12">Written testimonials</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="bg-silver/5 border border-ink-line rounded-[var(--radius)] p-6 flex flex-col">
            <p className="text-[15px] leading-[1.6] text-silver/85 mb-5">“I finally stopped guessing. The audit alone showed me where I'd been avoiding the real problem for a year.”</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-11 h-11 rounded-full bg-blue text-white flex items-center justify-center font-bold">P</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13.5px] text-silver font-semibold">Previous Participant</span>
                <span className="text-xs text-mango">Workshop Attendee</span>
              </div>
            </div>
          </div>
          <div className="bg-silver/5 border border-ink-line rounded-[var(--radius)] p-6 flex flex-col">
            <p className="text-[15px] leading-[1.6] text-silver/85 mb-5">“Simple, structured, and something I actually kept using weeks later — not just workshop-day motivation.”</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-11 h-11 rounded-full bg-orange text-white flex items-center justify-center font-bold">R</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13.5px] text-silver font-semibold">Previous Participant</span>
                <span className="text-xs text-mango">Workshop Attendee</span>
              </div>
            </div>
          </div>
          <div className="bg-silver/5 border border-ink-line rounded-[var(--radius)] p-6 flex flex-col">
            <p className="text-[15px] leading-[1.6] text-silver/85 mb-5">“The routine framework was the missing piece. My weeks finally have a shape.”</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-11 h-11 rounded-full bg-mango text-white flex items-center justify-center font-bold">S</div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[13.5px] text-silver font-semibold">Previous Participant</span>
                <span className="text-xs text-mango">Workshop Attendee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section id="why" className="py-24 bg-paper">
      <div className="section-inner grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <span className="eyebrow">Why attend</span>
          <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-3.5">Four reasons people show up.</h2>
          <p className="text-ink/60 text-base mb-8 max-w-[380px]">This isn't a lecture you watch. <strong className="text-ink font-bold">It's a room you work in.</strong></p>
          <div className="w-full max-w-[380px] h-[220px] rounded-[var(--radius)] mb-8 border border-paper-line bg-gradient-to-br from-ink-line to-silver flex items-center justify-center">
            <span className="text-ink/30 font-bold tracking-widest">LIVE WORKSHOP</span>
          </div>
          <a href="#register" className="btn-primary">Reserve Your Seat</a>
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
                <h3 className="text-[1.1rem] mb-1.5">{item.title}</h3>
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
    <section id="register" className="py-24 bg-ink text-silver relative">
      <div className="section-inner grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="eyebrow">Limited seats &middot; 11 July &middot; 100% FREE</span>
          <h2 className="text-[clamp(1.9rem,3vw,2.4rem)] mb-4">Join the 21 Day Challenge — Absolutely Free</h2>
          <p className="text-silver/60 text-base leading-[1.6] max-w-[420px] mb-8">
            Fill in your details below. We'll confirm your seat and share the final venue and entry instructions by email and WhatsApp.
          </p>

          <div className="bg-orange/10 border border-orange/30 rounded-[var(--radius)] p-6 mb-8 max-w-[420px]">
            <div className="flex items-baseline gap-2.5 mb-2.5">
              <span className="font-mono text-xs tracking-[0.08em] uppercase text-sky">Seat price</span>
              <span className="font-display text-[2.6rem] text-[#2a7a2a] tracking-[0.04em] leading-none">FREE</span>
            </div>
            <p className="text-[13.5px] text-silver/65 m-0">
              <strong className="text-mango font-bold">Includes all 5 bonuses worth ₹11,000</strong> — no hidden costs, no upsells in the room.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5 font-semibold text-[14.5px]"><Calendar className="text-orange" size={18}/> 11 July</div>
            <div className="flex items-center gap-2.5 font-semibold text-[14.5px]"><Clock className="text-orange" size={18}/> 4:00 – 6:00 PM</div>
            <div className="flex items-center gap-2.5 font-semibold text-[14.5px]"><MapPin className="text-orange" size={18}/> Venue TBA</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-paper text-ink rounded-[var(--radius)] p-9 flex flex-col gap-4.5">
          <div className="flex items-center justify-between bg-ink text-silver rounded-[10px] py-3.5 px-4.5 text-[14.5px] mb-1">
            <span>Your seat</span>
            <strong className="text-[#4CAF50] text-2xl font-display">FREE</strong>
          </div>
          
          <div className="flex flex-col gap-1.5 mt-4">
            <span className="text-[13px] font-semibold text-ink-soft">Name</span>
            <input type="text" placeholder="Your full name" required className="font-body text-[15px] p-3.5 border border-ink/20 rounded-lg bg-white transition-colors focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" />
          </div>
          
          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-[13px] font-semibold text-ink-soft">Mobile Number</span>
            <input type="tel" placeholder="10-digit mobile number" pattern="[0-9]{10}" required className="font-body text-[15px] p-3.5 border border-ink/20 rounded-lg bg-white transition-colors focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" />
          </div>
          
          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-[13px] font-semibold text-ink-soft">Email</span>
            <input type="email" placeholder="you@email.com" required className="font-body text-[15px] p-3.5 border border-ink/20 rounded-lg bg-white transition-colors focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" />
          </div>
          
          <button type="submit" className={`mt-4 btn-primary btn-full ${submitted ? 'bg-[#2a7a2a] text-white hover:bg-[#2a7a2a]' : 'animate-shake'}`}>
            {submitted ? 'You\'re In! ✓' : 'Join 21 Day Challenge Now — FREE'}
          </button>
          <p className="text-[12.5px] text-ink/50 text-center mt-2">By registering, you agree to our Terms & Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: "Who is this workshop for?", a: "Anyone who wants more clarity, consistency, and control in their day-to-day life — students, working professionals, or anyone feeling stuck in a reactive routine." },
    { q: "Do I need prior experience?", a: "No prior experience or background is required. The framework is taught from the ground up and works for complete beginners." },
    { q: "What should I bring?", a: "Just a notebook and pen, and an open mind. Some exercises work best when you write things down in the moment." },
    { q: "Will there be recordings?", a: "This is an in-person, offline workshop and is not recorded or live-streamed. The experience is built around being present in the room." },
    { q: "How can I contact the team?", a: "Reach us using the contact details in the footer below, and our team will respond as soon as possible." }
  ];

  return (
    <section id="faq" className="py-24 bg-ink-soft text-silver">
      <div className="section-inner max-w-[760px]">
        <span className="eyebrow eyebrow-light">Before you book</span>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.4rem)] mb-12">Frequently asked questions</h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ink-line overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-5.5 font-display text-[17px] font-semibold text-silver text-left focus:outline-none"
              >
                <span>{faq.q}</span>
                <Plus className={`text-orange transition-transform duration-250 shrink-0 ml-4 ${openIdx === i ? 'rotate-45' : ''}`} size={20} />
              </button>
              <div 
                className="transition-all duration-300 ease-in-out overflow-hidden" 
                style={{ maxHeight: openIdx === i ? '200px' : '0' }}
              >
                <p className="pb-5.5 text-silver/60 text-[15px] leading-[1.6] max-w-[600px] pt-1">{faq.a}</p>
              </div>
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
      <div className="section-inner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-ink-line">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-[9px] h-[9px] rounded-sm bg-orange"></span>
            <span className="font-display text-[18px] tracking-wider font-bold text-silver">PARAM</span>
          </div>
          <p className="mt-2.5 text-[13.5px] text-silver/45">by MindYourLife</p>
        </div>
        
        <div>
          <h4 className="font-mono text-xs tracking-[0.08em] uppercase text-sky mb-3.5">Contact</h4>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">hello@mindyourlife.in</p>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">+91 00000 00000</p>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-[0.08em] uppercase text-sky mb-3.5">Follow</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span className="hover:text-mango transition-colors cursor-pointer">Instagram</span>
            <span className="hover:text-mango transition-colors cursor-pointer">LinkedIn</span>
            <span className="hover:text-mango transition-colors cursor-pointer">YouTube</span>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-[0.08em] uppercase text-sky mb-3.5">Legal</h4>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">Terms of Service</p>
          <p className="text-sm mb-2 hover:text-mango transition-colors cursor-pointer">Privacy Policy</p>
        </div>
      </div>
      <div className="max-w-[1180px] mx-auto px-8 py-6 pb-24 text-[13px] text-silver/40">
        <span>&copy; 2026 MindYourLife. All rights reserved.</span>
      </div>
    </footer>
  );
}

export function StickyBar() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.2, 0.25], [100, 0]);
  
  const [nameIdx, setNameIdx] = useState(0);
  const names = ['Harshita','Rohit','Priya','Aditya','Sneha','Rahul','Pooja','Vikram','Ananya','Karan'];
  
  useEffect(() => {
    const int = setInterval(() => setNameIdx(i => (i + 1) % names.length), 4500);
    return () => clearInterval(int);
  }, []);

  return (
    <motion.div 
      style={{ y: useTransform(y, (val: number) => `${val}%`) }}
      className="fixed bottom-0 left-0 right-0 z-[999] bg-ink border-t-2 border-orange py-3 px-6 flex items-center justify-between gap-4 flex-wrap shadow-[0_-6px_28px_rgba(0,0,0,0.28)]"
    >
      <div className="hidden sm:flex flex-col gap-0.5">
        <span className="text-[13px] text-[#4CAF50] font-bold">🟢 {names[nameIdx]} just joined!</span>
        <div className="flex items-center gap-2 text-silver text-[15px] font-semibold">
          Offer ends in <span className="text-mango font-mono text-[17px]">23:59:59</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6 max-sm:w-full">
        <div className="hidden sm:block text-right text-[13px] text-silver">
          Normal Price: <s className="text-silver/45 mr-1">₹999</s><br/>
          Today: <strong className="text-[#4CAF50] text-base">FREE</strong>
        </div>
        <a href="#register" className="btn-primary max-sm:w-full py-3 px-6 text-[15px]">
          Claim Free Seat Now
        </a>
      </div>
    </motion.div>
  );
}
