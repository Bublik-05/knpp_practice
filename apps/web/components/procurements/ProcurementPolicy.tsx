export default function ProcurementPolicy() {
  const principles = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Прозрачность",
      description: "Все закупочные процедуры проводятся открыто с обязательной публикацией на портале АО «Самрук-Казына»",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Конкурентность",
      description: "Равный доступ для всех потенциальных поставщиков, соответствующих требованиям",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
      title: "Законность",
      description: "Соблюдение законодательства РК и стандартов АО «Самрук-Казына»",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Равный доступ",
      description: "Поставщики оцениваются объективно без дискриминации",
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-[#112250]">Политика закупок</h2>
        <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
          Закупочная деятельность ТОО «КАЭС» основана на принципах прозрачности, конкурентности и
          соблюдения законодательства Республики Казахстан. Все процедуры соответствуют стандартам
          АО «Самрук-Казына».
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {principles.map((p) => (
          <div key={p.title} className="rounded-lg bg-white border border-gray-200 shadow-sm p-6 flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f0f5ff] flex items-center justify-center">
              {p.icon}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-[#112250] text-lg">{p.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-[#f0f5ff] border border-[#dbe5f4] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[#112250]">Портал закупок АО «Самрук-Казына»</p>
          <p className="text-gray-600 font-light text-lg">
            Все актуальные объявления и документы публикуются на официальном портале
          </p>
        </div>
        <a
          href="https://zakup.sk.kz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-[#1E4080] text-white font-medium text-lg rounded-lg px-6 py-3 hover:bg-[#112250] transition-colors"
        >
          Портал закупок Самрук-Казына
        </a>
      </div>
    </section>
  );
}
