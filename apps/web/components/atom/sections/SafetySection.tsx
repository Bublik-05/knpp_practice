"use client";

import { useState } from "react";

interface SafetyItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const safetyItems: SafetyItem[] = [
  {
    id: "nuclear",
    title: "Ядерная безопасность",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Ядерная безопасность направлена на предотвращение аварий и контроль
        цепной реакции. Современные реакторы имеют до четырёх барьеров защиты:
        топливную матрицу, оболочку топлива, герметичный корпус реактора и
        защитную оболочку. Эти барьеры предотвращают утечку продуктов деления
        даже при потере электропитания или охлаждения.
      </p>
    ),
  },
  {
    id: "radiation",
    title: "Радиационная безопасность",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Радиационная безопасность направлена на минимизацию доз облучения для
          работников, населения и окружающей среды. Современные АЭС используют
          многоуровневый мониторинг: дозиметры в реальном времени, системы
          радиационного контроля на выходе и автоматизированные барьеры.
        </p>

        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Эффективная доза для персонала на АЭС не превышает 20 мЗв в год, а
          для населения — менее 1 мЗв/год сверх естественного фона.
        </p>

        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Глобально, по данным Всемирной ядерной ассоциации, радиационный фон
          от АЭС сопоставим с естественным фоном от космоса и почвы и ниже, чем
          от медицинских процедур или полётов на самолётах.
        </p>
      </div>
    ),
  },
  {
    id: "physical",
    title: "Ядерная физическая безопасность",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Ядерная физическая безопасность охватывает меры против терроризма,
        кражи ядерных материалов и несанкционированного доступа к ним. В отличие
        от ядерной безопасности, которая направлена на предотвращение аварий,
        физическая безопасность ориентирована на угрозы, связанные с
        деятельностью человека.
      </p>
    ),
  },
  {
    id: "resilience",
    title: "Устойчивость и международные стандарты",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Современные проекты АЭС разрабатываются с учётом внешних воздействий,
        включая землетрясения, наводнения, потерю электроснабжения и другие
        экстремальные события. Заявленная устойчивость современных решений может
        достигать землетрясений до 9 баллов, при этом параметры защиты
        определяются отдельно для каждой площадки по результатам инженерных
        изысканий, национальных требований и международных стандартов.
      </p>
    ),
  },
  {
    id: "prospects",
    title: "Перспективы и вызовы",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Современные АЭС демонстрируют высокий уровень безопасности благодаря
        многоуровневым системам, строгому регулированию и непрерывному
        совершенствованию. Безопасность АЭС — это комбинация национальных норм,
        технологий, человеческого фактора и международных стандартов,
        обеспечивающая надёжную защиту без компромиссов для здоровья людей и
        окружающей среды.
      </p>
    ),
  },
];

export default function SafetySection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-medium">
        Безопасность современных АЭС: ядерная, радиационная и физическая защита
      </h2>

      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Современные атомные электростанции представляют собой
        высокотехнологичные объекты, где безопасность является приоритетным
        принципом проектирования, строительства и эксплуатации. Сегодня АЭС
        поколения III и III+ оснащены активными и пассивными системами
        безопасности, множественными барьерами и системами мониторинга,
        минимизирующими риски ядерных и радиационных аварий.
      </p>

      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Риск аварии не превышает 1:10 миллионов в год. Устойчивость современных
        проектов может достигать землетрясений до 9 баллов.
      </p>

      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Согласно данным МАГАТЭ, риск серьёзных аварий на современных реакторах
        крайне низок и продолжает снижаться благодаря строгому регулированию и
        инновациям.
      </p>

      {/* Accordion list */}
      <div className="space-y-3">
        {safetyItems.map((item, idx) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-lg border transition-all duration-200 ${
                isOpen
                  ? "border-[#1E4080]/30 bg-blue-50/40 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {/* Header — clickable */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <div className="flex items-center gap-4">
                  {/* Index number */}
                  <span
                    className={`text-[13px] font-semibold tabular-nums transition-colors ${
                      isOpen
                        ? "text-[#1E4080]"
                        : "text-gray-300 group-hover:text-gray-400"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className={`text-xl font-medium transition-colors ${
                      isOpen
                        ? "text-[#1E4080]"
                        : "text-gray-900 group-hover:text-[#1E4080]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Chevron */}
                <span
                  className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isOpen
                      ? "bg-[#1E4080] text-white rotate-180"
                      : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                  }`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {/* Expandable content */}
              {isOpen && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-[#1E4080]/10 pt-4">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}