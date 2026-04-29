const HERO_BG = "https://cdn.poehali.dev/projects/be3af159-61a7-4285-ad2a-e331900f8558/files/607ae091-93a1-463b-8f84-07b929c0a46f.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#07080D] font-golos text-white overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden">
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

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              type="button"
              className="px-10 py-4 rounded-full border border-[#00F5FF]/40 bg-[#00F5FF]/10 backdrop-blur-md text-[#00F5FF] text-lg font-medium tracking-wide hover:bg-[#00F5FF]/20 hover:border-[#00F5FF] transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.3)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)]"
            >
              О проекте
            </button>
            <a
              href="https://t.me/teleru2023"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border border-[#BF5FFF]/40 bg-[#BF5FFF]/10 backdrop-blur-md text-[#BF5FFF] text-lg font-medium tracking-wide hover:bg-[#BF5FFF]/20 hover:border-[#BF5FFF] transition-all duration-300 shadow-[0_0_30px_rgba(191,95,255,0.3)] hover:shadow-[0_0_50px_rgba(191,95,255,0.6)]"
            >
              Наши сайты
            </a>
            <a
              href="https://t.me/teleru2023"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full border border-[#AAFF00]/40 bg-[#AAFF00]/10 backdrop-blur-md text-[#AAFF00] text-lg font-medium tracking-wide hover:bg-[#AAFF00]/20 hover:border-[#AAFF00] transition-all duration-300 shadow-[0_0_30px_rgba(170,255,0,0.3)] hover:shadow-[0_0_50px_rgba(170,255,0,0.6)]"
            >
              Моя компания
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}