import { Hero } from './components/Hero';
import { About, Framework, Bonuses, Pricing, Testimonials, Why, Register, FAQ, Footer, StickyBar } from './components/Sections';

function AnnounceBar() {
  return (
    <div className="bg-ink text-silver text-[13.5px] font-medium text-center py-2.5 px-5 flex items-center justify-center gap-2 flex-wrap">
      <span className="w-1.5 h-1.5 rounded-full bg-sky shrink-0"></span>
      The Team of Victory Code Returns with Project PARAM.
    </div>
  );
}

function UrgencyBar() {
  return (
    <div className="bg-gradient-to-r from-[#b22222] to-[#c0392b] text-white text-center py-2.5 px-5 text-sm font-semibold tracking-wide">
      ⚡ Hurry Up &bull; Limited Time Offer &bull; Secure Your Free Access for 11 July.
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-paper-line">
      <div className="max-w-[1180px] mx-auto px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-[9px] h-[9px] rounded-sm bg-orange"></span>
          <div className="flex flex-col">
            <span className="font-display text-[18px] tracking-wider font-bold leading-tight">PARAM™</span>
            <span className="text-[9.5px] text-ink-soft opacity-50 font-mono tracking-wide -mt-0.5">Est. India &middot; Built in the Field</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">About the Workshop</a>
          <a href="#framework" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">The Framework</a>
          <a href="#bonuses" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">5 Free Bonuses</a>
          <a href="#faq" className="text-[14.5px] font-medium text-ink-soft opacity-75 hover:opacity-100 transition-opacity">FAQ</a>
        </nav>
        <a href="#register" className="bg-ink text-silver text-sm font-semibold py-2.5 px-5 rounded-full transition-colors hover:bg-orange hover:text-ink">
          Reserve Your Free Seat
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
