const cards = [
  {
    title: "Казахстанское содержание",
    description:
      "Требования к доле местных поставщиков определяются в соответствии с законодательством РК. При равных условиях приоритет отдаётся отечественным производителям товаров и услуг.",
  },
  {
    title: "Поддержка МСБ",
    description:
      "Малый и средний бизнес Казахстана получает дополнительные возможности для участия в закупочных процедурах ТОО «КАЭС». Проводятся обучающие мероприятия для потенциальных поставщиков.",
  },
  {
    title: "Трансфер технологий",
    description:
      "Сотрудничество с иностранными партнёрами предусматривает обязательную передачу компетенций и технологий казахстанской стороне, способствуя развитию отечественной атомной отрасли.",
  },
];

const metrics = [
  { value: "30%+", label: "целевая доля казахстанского содержания" },
  { value: "50+", label: "партнёров МСБ (план)" },
  { value: "2025–2030", label: "горизонт программы локализации" },
];

export default function LocalizationSection() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-[#112250]">Локализация и отечественное участие</h2>
        <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
          ТОО «КАЭС» активно поддерживает казахстанское содержание в закупках. Мы содействуем
          развитию отечественных поставщиков и привлечению малого и среднего бизнеса Республики
          Казахстан.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-lg bg-[#f8fbff] border border-[#dbe5f4] p-6 flex flex-col gap-3"
          >
            <h3 className="font-semibold text-[#112250] text-lg">{card.title}</h3>
            <p className="text-gray-600 font-light leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((m) => (
          <div
            key={m.value}
            className="rounded-lg bg-[#112250] p-6 flex flex-col gap-1 text-center"
          >
            <span className="text-[#E0C58F] font-bold text-3xl">{m.value}</span>
            <span className="text-white/80 font-light text-lg">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
