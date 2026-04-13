const facts = [
  { label: "Регион", value: "Жетысу / Алматинская область" },
  { label: "Мощность", value: "до 2400 МВт (2 блока)" },
  { label: "Площадка", value: "Южный берег озера Балхаш" },
  { label: "Статус", value: "Оценка площадки" },
];

export default function BalkhashProject() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">

      {/* Image — left */}
      <div className="lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
        <img
          src="/images/procurement-img.jpg"
          alt="АЭС Балхаш"
          className="w-full h-72 lg:h-96 object-cover"
        />
      </div>

      {/* Content — right */}
      <div className="lg:w-1/2 space-y-6">
        {/* Badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#1E4080] text-[13px] font-medium">
          Проект №1
        </span>

        <h2 className="text-3xl font-medium text-gray-900">АЭС «Балхаш»</h2>

        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Площадка на южном берегу озера Балхаш — основной кандидат для размещения
          первой казахстанской АЭС. Расположение обеспечивает стабильный источник
          технического водоснабжения и минимальное воздействие на окружающую среду.
        </p>

        {/* Facts grid */}
        <div className="grid grid-cols-2 gap-3">
          {facts.map((f) => (
            <div key={f.label} className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-[12px] text-gray-400 font-light uppercase tracking-wide mb-1">{f.label}</p>
              <p className="text-[15px] font-medium text-gray-900">{f.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
