import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/be3af159-61a7-4285-ad2a-e331900f8558/files/607ae091-93a1-463b-8f84-07b929c0a46f.jpg";

const services = [
  {
    icon: "Rocket",
    title: "Стратегия и рост",
    desc: "Разрабатываем стратегии, которые дают измеримый результат. Ваш бизнес выходит на новый уровень.",
    color: "#00F5FF",
  },
  {
    icon: "Layers",
    title: "Дизайн и брендинг",
    desc: "Создаём визуальные решения, которые запоминаются. Фирменный стиль с характером.",
    color: "#BF5FFF",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и данные",
    desc: "Превращаем данные в решения. Реальные инсайты для роста вашего бизнеса.",
    color: "#AAFF00",
  },
  {
    icon: "Globe",
    title: "Цифровой маркетинг",
    desc: "SEO, таргет, контент — комплексное продвижение в digital-среде.",
    color: "#FF6B6B",
  },
  {
    icon: "Code2",
    title: "Разработка продуктов",
    desc: "Сайты, приложения, автоматизация. Технологии на службе вашего бизнеса.",
    color: "#FFD700",
  },
  {
    icon: "Users",
    title: "Консалтинг",
    desc: "Экспертная поддержка на каждом этапе. Мы — ваша команда роста.",
    color: "#00F5FF",
  },
];

const stats = [
  { value: "150+", label: "Проектов запущено" },
  { value: "8 лет", label: "На рынке" },
  { value: "97%", label: "Довольных клиентов" },
  { value: "40+", label: "Специалистов" },
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
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "about", label: "О компании" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[#07080D] font-golos text-white overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#07080D]/90 backdrop-blur-xl border-b border-white/5 py-3" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F5FF] to-[#BF5FFF] flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-black" />
            </div>
            <span className="font-oswald text-xl font-bold tracking-widest uppercase text-white">APEX</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-200 ${activeSection === l.id ? "text-[#00F5FF]" : "text-white/60 hover:text-white"}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contacts")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#BF5FFF] text-black font-semibold text-sm hover:scale-105 transition-transform"
          >
            Связаться
          </button>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0D0F1A] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-white/80 hover:text-[#00F5FF] transition-colors font-medium">
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
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

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F5FF]/30 bg-[#00F5FF]/5 text-[#00F5FF] text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#00F5FF] animate-pulse" />
            Новый уровень вашего бизнеса
          </div>

          <h1 className="font-oswald text-6xl md:text-8xl lg:text-[110px] font-bold leading-none tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="block text-white">МЫ ДЕЛАЕМ</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #00F5FF 0%, #BF5FFF 50%, #AAFF00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              РЕЗУЛЬТАТ
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            Комплексные решения для бизнеса: стратегия, дизайн, digital-маркетинг и разработка продуктов под ключ.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <button
              onClick={() => scrollTo("contacts")}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#BF5FFF] text-black font-bold text-base hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,245,255,0.3)]"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:border-[#00F5FF]/50 hover:bg-white/5 transition-all duration-300"
            >
              Наши услуги
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <button onClick={() => scrollTo("services")} className="text-white/30 hover:text-white/60 transition-colors">
            <Icon name="ChevronDown" size={32} />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-white/5 bg-[#0D0F1A]/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={i} className="text-center">
                <div
                  className="font-oswald text-4xl md:text-5xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #00F5FF, #BF5FFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {s.value}
                </div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#00F5FF] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Что мы делаем</span>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-4">НАШИ УСЛУГИ</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Полный спектр digital-решений для роста и масштабирования вашего бизнеса</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div
                  className="group relative p-7 rounded-2xl border border-white/8 bg-[#0D0F1A] hover:border-white/20 transition-all duration-400 cursor-default overflow-hidden"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
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
                  <h3 className="font-oswald text-xl font-semibold text-white mb-3 group-hover:text-[#00F5FF] transition-colors">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: s.color }}>
                    Подробнее <Icon name="ArrowRight" size={14} />
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
              <span className="text-[#BF5FFF] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">О компании</span>
              <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">МЫ — КОМАНДА<br />
                <span style={{ background: "linear-gradient(135deg,#BF5FFF,#00F5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>РОСТА</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Уже 8 лет мы помогаем компаниям расти и масштабироваться. Наша команда из 40+ специалистов объединяет стратегов, дизайнеров, разработчиков и маркетологов.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Мы не просто выполняем задачи — мы становимся частью вашего бизнеса, разделяем ваши цели и вместе достигаем результатов.
              </p>
              <div className="flex flex-col gap-4">
                {["Индивидуальный подход к каждому клиенту", "Прозрачная отчётность и метрики", "Команда экспертов в каждой области"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#AAFF00]/20 border border-[#AAFF00]/40 flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-[#AAFF00]" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative">
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
                  <div className="text-center">
                    <div className="font-oswald text-5xl font-bold text-white mb-1">8+</div>
                    <div className="text-white/40 text-sm">лет опыта</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[{ v: "150+", l: "Проектов" }, { v: "97%", l: "Довольных" }].map((s, i) => (
                      <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                        <div className="font-oswald text-2xl font-bold text-[#00F5FF]">{s.v}</div>
                        <div className="text-white/40 text-xs mt-1">{s.l}</div>
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
            <span className="text-[#AAFF00] text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">Связаться с нами</span>
            <h2 className="font-oswald text-5xl md:text-6xl font-bold text-white mb-4">ДАВАЙТЕ<br />
              <span style={{ background: "linear-gradient(135deg,#AAFF00,#00F5FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ОБСУДИМ</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Оставьте заявку — мы свяжемся с вами в течение рабочего дня</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <AnimatedSection>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="bg-[#0D0F1A] rounded-3xl border border-white/8 p-8 flex flex-col gap-5">
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Ваше имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Телефон или email</label>
                      <input
                        type="text"
                        required
                        placeholder="+7 (999) 000-00-00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">Сообщение</label>
                      <textarea
                        placeholder="Расскажите о вашем проекте..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00F5FF]/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#BF5FFF] text-black font-bold text-base hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(0,245,255,0.2)] flex items-center justify-center gap-2"
                    >
                      Отправить заявку
                      <Icon name="Send" size={18} />
                    </button>
                    <p className="text-white/25 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                  </form>
                ) : (
                  <div className="bg-[#0D0F1A] rounded-3xl border border-[#AAFF00]/20 p-12 flex flex-col items-center justify-center gap-4 text-center min-h-[360px]">
                    <div className="w-16 h-16 rounded-full bg-[#AAFF00]/10 border border-[#AAFF00]/30 flex items-center justify-center">
                      <Icon name="CheckCircle" size={32} className="text-[#AAFF00]" />
                    </div>
                    <h3 className="font-oswald text-2xl font-bold text-white">Заявка отправлена!</h3>
                    <p className="text-white/50 text-sm max-w-xs">Мы получили вашу заявку и свяжемся с вами в ближайшее время.</p>
                    <button onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", message: "" }); }} className="mt-4 text-[#00F5FF] text-sm hover:underline">
                      Отправить ещё одну
                    </button>
                  </div>
                )}
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-5">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (800) 000-00-00", color: "#00F5FF" },
                { icon: "Mail", label: "Email", value: "hello@apex.ru", color: "#BF5FFF" },
                { icon: "MapPin", label: "Адрес", value: "Москва, ул. Примерная, 1", color: "#AAFF00" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–18:00", color: "#FF6B6B" },
              ].map((c, i) => (
                <AnimatedSection key={i}>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0D0F1A] border border-white/8 hover:border-white/15 transition-colors">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                      <Icon name={c.icon as "Phone"} size={18} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs mb-1">{c.label}</div>
                      <div className="text-white text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-[#00F5FF] to-[#BF5FFF] flex items-center justify-center">
              <Icon name="Zap" size={12} className="text-black" />
            </div>
            <span className="font-oswald font-bold tracking-widest text-sm text-white uppercase">APEX</span>
          </div>
          <p className="text-white/25 text-xs">© 2026 APEX. Все права защищены.</p>
          <div className="flex items-center gap-5">
            {["Instagram", "Send", "Youtube"].map((ic, i) => (
              <button key={i} className="text-white/30 hover:text-[#00F5FF] transition-colors">
                <Icon name={ic as "Send"} size={16} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
