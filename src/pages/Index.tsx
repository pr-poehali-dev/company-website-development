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
      </section>
    </div>
  );
}
