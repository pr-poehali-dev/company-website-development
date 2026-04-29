import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/be3af159-61a7-4285-ad2a-e331900f8558/files/607ae091-93a1-463b-8f84-07b929c0a46f.jpg";

const services = [
  { icon: "Rocket", color: "#00F5FF" },
  { icon: "Layers", color: "#BF5FFF" },
  { icon: "BarChart2", color: "#AAFF00" },
  { icon: "Globe", color: "#FF6B6B" },
  { icon: "Code2", color: "#FFD700" },
  { icon: "Users", color: "#00F5FF" },
];

function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<HTMLElement>);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#07080D] font-golos text-white overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#07080D]/90 backdrop-blur-xl border-b border-white/5 py-3" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5FF] to-[#BF5FFF] flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-black" />
          </div>
          <a
            href="https://t.me/teleru2023"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#BF5FFF] hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,245,255,0.3)]"
          >
            <Icon name="Send" size={16} className="text-black" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${HERO_BG})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080D]/30 via-transparent to-[#07080D]" />

        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00F5FF]/15 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#BF5FFF]/15 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#AAFF00]/8 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "3s" }} />

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/5 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
          </div>

          <div className="flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="w-48 h-16 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.15) 0%, rgba(191,95,255,0.15) 50%, rgba(170,255,0,0.15) 100%)" }} />
            <div className="w-64 h-16 rounded-2xl" style={{ background: "linear-gradient(135deg, #00F5FF 0%, #BF5FFF 50%, #AAFF00 100%)", opacity: 0.3 }} />
          </div>

          <a
            href="https://t.me/teleru2023"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#BF5FFF] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,245,255,0.35)] animate-fade-in"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <Icon name="Send" size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5 bg-[#0D0F1A]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["150+", "8", "97%", "40+"].map((v, i) => (
              <AnimatedSection key={i} className="text-center">
                <div
                  className="font-oswald text-4xl md:text-5xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00F5FF, #BF5FFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {v}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="w-12 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#00F5FF,#BF5FFF)" }} />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="group relative p-7 rounded-2xl border border-white/8 bg-[#0D0F1A] hover:border-white/20 transition-all duration-400 cursor-default overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}10 0%, transparent 60%)` }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                  >
                    <Icon name={s.icon as "Rocket"} size={22} style={{ color: s.color }} />
                  </div>
                  <div className="w-24 h-3 rounded-full bg-white/10 mb-3" />
                  <div className="space-y-2">
                    <div className="w-full h-2 rounded-full bg-white/5" />
                    <div className="w-4/5 h-2 rounded-full bg-white/5" />
                    <div className="w-3/5 h-2 rounded-full bg-white/5" />
                  </div>
                  <div className="mt-5">
                    <Icon name="ArrowRight" size={14} style={{ color: s.color }} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-[#0D0F1A]/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="w-16 h-1 rounded-full mb-6" style={{ background: "linear-gradient(90deg,#BF5FFF,#00F5FF)" }} />
              <div className="space-y-3 mb-6">
                <div className="w-3/4 h-10 rounded-xl bg-white/8" />
                <div className="w-1/2 h-10 rounded-xl" style={{ background: "linear-gradient(135deg,rgba(191,95,255,0.2),rgba(0,245,255,0.2))" }} />
              </div>
              <div className="space-y-2 mb-6">
                <div className="w-full h-2 rounded-full bg-white/8" />
                <div className="w-full h-2 rounded-full bg-white/8" />
                <div className="w-2/3 h-2 rounded-full bg-white/8" />
              </div>
              <div className="flex flex-col gap-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#AAFF00]/20 border border-[#AAFF00]/40 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-[#AAFF00]" />
                    </div>
                    <div className="h-2 rounded-full bg-white/10" style={{ width: `${[70, 60, 75][i]}%` }} />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative rounded-3xl overflow-hidden bg-[#0D0F1A] border border-white/8 aspect-square max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F5FF]/10 to-[#BF5FFF]/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-12">
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-[#AAFF00]/10 border border-[#AAFF00]/20 flex items-center justify-center animate-float">
                    <Icon name="TrendingUp" size={28} className="text-[#AAFF00]" />
                  </div>
                  <div className="absolute bottom-8 left-8 w-14 h-14 rounded-xl bg-[#BF5FFF]/15 border border-[#BF5FFF]/25 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                    <Icon name="Award" size={22} className="text-[#BF5FFF]" />
                  </div>
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00F5FF]/20 to-[#BF5FFF]/20 border border-white/10 flex items-center justify-center animate-spin-slow">
                    <div className="w-24 h-24 rounded-full bg-[#07080D] flex items-center justify-center">
                      <Icon name="Zap" size={40} className="text-[#00F5FF]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {["#00F5FF", "#BF5FFF"].map((c, i) => (
                      <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                        <div className="font-oswald text-2xl font-bold" style={{ color: c }}>{["150+", "97%"][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(90deg,#AAFF00,#00F5FF)" }} />
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-48 h-10 rounded-xl bg-white/8" />
              <div className="w-32 h-10 rounded-xl" style={{ background: "linear-gradient(135deg,rgba(170,255,0,0.2),rgba(0,245,255,0.2))" }} />
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex justify-center">
            <a
              href="https://t.me/teleru2023"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#BF5FFF] text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(0,245,255,0.35)]"
            >
              <Icon name="Send" size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#00F5FF] to-[#BF5FFF] flex items-center justify-center">
            <Icon name="Zap" size={12} className="text-black" />
          </div>
          <div className="w-40 h-2 rounded-full bg-white/10" />
          <a
            href="https://t.me/teleru2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-[#00F5FF] transition-colors"
          >
            <Icon name="Send" size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
