import { Hero } from './components/Hero';
import { About, Framework, Bonuses, Pricing, Testimonials, Why, Register, FAQ, Footer, StickyBar } from './components/Sections';

function AnnounceBar() {
  return (
    <div className="bg-ink text-silver text-[13.5px] font-medium text-center py-2.5 px-5 flex items-center justify-center gap-2 flex-wrap">
      <span className="w-1.5 h-1.5 rounded-full bg-sky shrink-0"></span>
      Next cohort: <strong className="text-mango font-bold">11 July</strong> &middot; Seats are limited to keep the room personal &middot; 
      <a href="#register" className="text-orange font-bold underline decoration-orange/40 hover:decoration-orange transition-colors">Reserve yours →</a>
    </div>
  );
}

function UrgencyBar() {
  return (
    <div className="bg-gradient-to-r from-[#b22222] to-[#c0392b] text-white text-center py-2.5 px-5 text-sm font-semibold tracking-wide">
      ⚠️ &nbsp;<strong className="text-[#FFD700]">Limited Slots Remaining!</strong>&nbsp; Prices increase to ₹999/– once slots are filled. Claim your FREE seat now!
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-paper-line">
      <div className="max-w-[1180px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-[9px] h-[9px] rounded-sm bg-orange"></span>
          <span className="font-display text-[18px] tracking-wider font-bold">PARAM</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">About</a>
          <a href="#framework" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">Framework</a>
          <a href="#bonuses" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">Bonuses</a>
          <a href="#faq" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">FAQ</a>
        </nav>
        <a href="#register" className="bg-ink text-silver text-sm font-semibold py-2.5 px-5 rounded-full transition-colors hover:bg-orange hover:text-ink">
          Reserve Your Seat
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <AnnounceBar />
      <UrgencyBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Framework />
        <Bonuses />
        <Pricing />
        <Testimonials />
        <Why />
        <Register />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
