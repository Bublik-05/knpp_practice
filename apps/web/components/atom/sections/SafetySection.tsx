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
        Ядерная безопасность направлена на предотвращение аварий и контроль цепной реакции в
        реакторе. Современные реакторы имеют несколько физических барьеров защиты: топливную
        матрицу, оболочку топлива, герметичную границу первого контура и защитную оболочку
        (контайнмент). Эти барьеры предотвращают выход радиоактивных веществ даже при тяжёлых
        нарушениях работы оборудования.
      </p>
    ),
  },
  {
    id: "radiation",
    title: "Радиационная безопасность",
    content: (
      <div className="space-y-4">
        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Радиационная безопасность направлена на защиту персонала, населения и окружающей среды
          от воздействия ионизирующего излучения. На современных АЭС применяются дозиметры в
          реальном времени, системы радиационного контроля, автоматизированные барьеры и строгие
          регламенты эксплуатации.
        </p>
        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Международные нормы предусматривают годовой предел эффективной дозы для персонала на
          уровне 20 мЗв, а для населения — 1 мЗв сверх естественного фона. В штатном режиме
          воздействие АЭС на население обычно значительно ниже этих пределов.
        </p>
      </div>
    ),
  },
  {
    id: "physical",
    title: "Физическая ядерная безопасность",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Физическая ядерная безопасность охватывает защиту станции от внешних угроз:
        несанкционированного доступа, диверсий, кражи ядерных материалов и других
        злонамеренных действий. Для этого применяются режимные зоны, системы охраны,
        контроль доступа, видеонаблюдение, киберзащита и специальные процедуры реагирования.
      </p>
    ),
  },
  {
    id: "resilience",
    title: "Устойчивость и международные стандарты",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Современные проекты АЭС разрабатываются с учётом внешних воздействий, включая
        землетрясения, наводнения, потерю электроснабжения и другие экстремальные события.
        Параметры такой защиты определяются для каждой площадки отдельно в соответствии с
        международными стандартами и национальными требованиями регулирования.
      </p>
    ),
  },
  {
    id: "prospects",
    title: "Перспективы и вывод",
    content: (
      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Безопасность современных АЭС — это сочетание инженерных решений, строгого
        регулирования, культуры безопасности, подготовки персонала и международного контроля.
        Благодаря многоуровневым системам защиты и постоянному совершенствованию технологий
        современные атомные станции демонстрируют очень высокий уровень надёжности и защиты
        здоровья людей и окружающей среды.
      </p>
    ),
  },
];

export default function SafetySection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-medium">Безопасность АЭС</h2>

      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Современные атомные электростанции представляют собой высокотехнологичные объекты, где
        безопасность является приоритетным принципом проектирования, строительства и эксплуатации.
        Реакторы поколения III и III+ оснащаются активными и пассивными системами безопасности,
        множественными барьерами защиты и системами постоянного мониторинга.
      </p>

      <p className="text-lg text-gray-700 font-light leading-relaxed">
        Согласно подходу МАГАТЭ, безопасность АЭС строится по принципу многоуровневой защиты.
        Это означает, что даже при отказе одного элемента вступают в действие следующие уровни
        защиты, предотвращающие развитие нештатной ситуации.
      </p>

      {/* Accordion list */}
      <div className="space-y-3">
        {safetyItems.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-lg border transition-all duration-200 ${isOpen
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
                  <span className={`text-[13px] font-semibold tabular-nums transition-colors ${isOpen ? "text-[#1E4080]" : "text-gray-300 group-hover:text-gray-400"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`text-xl font-medium transition-colors ${isOpen ? "text-[#1E4080]" : "text-gray-900 group-hover:text-[#1E4080]"}`}>
                    {item.title}
                  </h3>
                </div>

                {/* Chevron */}
                <span className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isOpen ? "bg-[#1E4080] text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
