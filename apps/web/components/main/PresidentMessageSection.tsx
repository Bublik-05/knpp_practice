import Link from "next/link";

const theses = [
  {
    num: "01",
    title: "Энергетическая независимость",
    text: "Атомная энергетика — стратегический приоритет для обеспечения долгосрочной энергетической независимости Казахстана и снижения зависимости от ископаемого топлива.",
  },
  {
    num: "02",
    title: "Зелёная экономика",
    text: "Переход к «зелёной» экономике требует масштабной безуглеродной генерации. Атомная станция позволит Казахстану сократить выбросы CO₂ на десятки миллионов тонн ежегодно.",
  },
  {
    num: "03",
    title: "Технологический суверенитет",
    text: "Развитие ядерных технологий формирует национальные компетенции высшего уровня, создаёт тысячи высококвалифицированных рабочих мест и закладывает основу для технологического лидерства.",
  },
];

export default function PresidentMessageSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#0B1C3C] px-30 py-20">

      {/* Decorative quote mark */}
      <div
        className="pointer-events-none select-none absolute -top-10 right-[10%] text-[#E0C58F]/8 font-serif leading-none"
        style={{ fontSize: "clamp(16rem, 25vw, 32rem)" }}
        aria-hidden
      >
        "
      </div>

      <div className="relative z-10 flex flex-col gap-14">

        {/* Top block */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">

          {/* Left */}
          <div className="lg:w-1/3 shrink-0 flex flex-col gap-4">
            <span className="inline-block text-[#E0C58F] uppercase tracking-widest text-sm font-medium">
              Официальная позиция
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Послание<br />Президента<br />Республики<br />Казахстан
            </h2>
            <Link
              href="/president-message"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E0C58F] px-6 py-3 text-sm font-light text-[#F5F0E9] hover:bg-[#E0C58F] hover:text-[#112250] transition-colors w-fit"
            >
              Читать полностью
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — main quote */}
          <div className="flex-1">
            <div className="text-[#E0C58F] text-8xl font-serif leading-none mb-2 select-none" aria-hidden>
              "
            </div>
            <blockquote className="text-white/90 text-xl lg:text-2xl font-light leading-relaxed">
              Казахстан должен обеспечить надёжное, доступное и экологически чистое
              энергоснабжение для устойчивого экономического роста. Строительство атомной
              электростанции — это не просто энергетический проект, это вклад в будущее
              наших детей и суверенитет страны на десятилетия вперёд.
            </blockquote>
            <p className="mt-6 text-[#E0C58F] font-medium tracking-wide">
              — Касым-Жомарт Токаев,<br />
              <span className="text-white/60 font-light text-sm">
                Президент Республики Казахстан
              </span>
            </p>
          </div>
        </div>

        {/* Key theses */}
        <div>
          <h3 className="text-xl font-medium text-[#E0C58F] uppercase tracking-widest mb-8">
            Ключевые тезисы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {theses.map((t) => (
              <div
                key={t.num}
                className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-7 py-6 transition-all duration-300 hover:border-[#E0C58F]/30 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#E0C58F]/30 leading-none select-none">
                    {t.num}
                  </span>
                  <h4 className="text-white font-semibold text-lg leading-snug">{t.title}</h4>
                </div>
                <p className="text-white/60 font-light leading-relaxed">{t.text}</p>
                <div className="h-px w-10 bg-[#E0C58F]/40 transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
