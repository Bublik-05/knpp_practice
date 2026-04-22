const facts = [
  { label: "Регион", value: "Жамбылская область" },
  { label: "Мощность", value: "до 300 МВт (малый модульный реактор)" },
  { label: "Площадка", value: "Район Мойынкум" },
  { label: "Консорциум", value: "Не сформирован" },
  { label: "Сумма инвестиций", value: "Информация отсутствует" },
  { label: "Текущий этап", value: "Определение потенциальных районов" },
];

export default function MainkumProject() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">

      {/* Image — right (reversed) */}
      <div className="lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
        <img
          src="/images/about-img.jpg"
          alt="АЭС Мойынкум"
          className="w-full h-72 lg:h-96 object-cover"
        />
      </div>

      {/* Content — left */}
      <div className="lg:w-1/2 space-y-6">
        {/* Badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#1E4080] text-[13px] font-medium">
          Проект №2
        </span>

        <h2 className="text-3xl font-medium text-gray-900">АЭС «Мойынкум»</h2>

        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Площадка в Жамбылской области рассматривается в качестве перспективного
          расположения малой атомной электростанции с использованием малых модульных
          реакторов (SMR). В настоящее время ведётся работа по определению потенциальных
          районов размещения. Консорциум и вендор технологии не определены.
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
