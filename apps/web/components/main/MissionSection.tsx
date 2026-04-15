import Image from "next/image";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.71.71m13.66 13.66.71.71M3 12H2m20 0h-1M4.22 19.78l.71-.71M18.36 5.64l.71-.71M12 7a5 5 0 100 10A5 5 0 0012 7z" />
      </svg>
    ),
    label: "Энергетическая безопасность",
    desc: "Обеспечение страны надёжным и стабильным источником электроэнергии для устойчивого развития.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Экологическая ответственность",
    desc: "Сокращение выбросов CO₂ за счёт развития безуглеродной ядерной генерации в Казахстане.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    label: "Технологическое лидерство",
    desc: "Внедрение передовых ядерных технологий и формирование национальных компетенций в атомной отрасли.",
  },
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden w-full bg-[#0B1C3C] p-30">

      {/* Атом — огромный, справа сверху, почти невидимый */}
      <Image
        src="/images/atom.png"
        alt=""
        width={800}
        height={800}
        className="pointer-events-none select-none absolute -top-40 -right-40 opacity-[0.6] blur-sm"
        aria-hidden
      />

      {/* Контент */}
      <div className="relative z-10 flex flex-col gap-14">

        {/* Top: label + mission text */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
          <div className="lg:w-1/3 shrink-0">
            <span className="inline-block text-white/40 uppercase tracking-widest text-2xl font-medium mb-4">
              Наша миссия
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Миссия <br className="hidden lg:block" />
              ТОО «КАЭС»
            </h2>
          </div>

          <div className="flex-1">
            <div className="text-[#1E4080] text-8xl font-serif leading-none mb-2 select-none">"</div>
            <p className="text-white/85 text-xl lg:text-2xl font-light leading-relaxed">
              Обеспечить Казахстан чистой и доступной ядерной энергией, создавая основу для устойчивого
              развития экономики, снижения углеродного следа и укрепления энергетического суверенитета
              Республики Казахстан на десятилетия вперёд.
            </p>
          </div>
        </div>

        {/* Three value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-7 py-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.03]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E4080]/60 text-white group-hover:bg-[#1E4080] transition-colors duration-300">
                {v.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-xl leading-snug">{v.label}</h3>
                <p className="text-white/60 font-light text-lg leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
