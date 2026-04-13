const facts = [
  { label: "Регион", value: "Туркестанская область" },
  { label: "Мощность", value: "до 1200 МВт (1 блок)" },
  { label: "Площадка", value: "Район Майнкум" },
  { label: "Статус", value: "Предварительные исследования" },
];

export default function MainkumProject() {
  return (
    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">

      {/* Image — right (reversed) */}
      <div className="lg:w-1/2 rounded-2xl overflow-hidden shrink-0">
        <img
          src="/images/about-img.jpg"
          alt="АЭС Майнкум"
          className="w-full h-72 lg:h-96 object-cover"
        />
      </div>

      {/* Content — left */}
      <div className="lg:w-1/2 space-y-6">
        {/* Badge */}
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#1E4080] text-[13px] font-medium">
          Проект №2
        </span>

        <h2 className="text-3xl font-medium text-gray-900">АЭС «Майнкум»</h2>

        <p className="text-lg text-gray-700 font-light leading-relaxed">
          Альтернативная площадка в Туркестанской области рассматривается для
          обеспечения электроэнергией южных регионов страны. Район Майнкум обладает
          благоприятными геологическими условиями и удалён от крупных населённых пунктов.
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
