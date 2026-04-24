const principles = [
  {
    title: "Прозрачность",
    description: "Открытость информации для участников и регуляторов",
  },
  {
    title: "Ответственность",
    description: "Чёткое распределение полномочий между органами управления",
  },
  {
    title: "Эффективность",
    description: "Ориентация на долгосрочные результаты",
  },
  {
    title: "Соблюдение интересов участников",
    description: "Защита прав всех акционеров",
  },
];

export default function CorporateGovernanceSection() {
  return (
    <section id="section-governance" className="flex flex-col gap-8 scroll-mt-24">
      <h3 className="text-3xl font-medium text-gray-700">Корпоративное управление</h3>

      <p className="text-lg text-gray-700 font-light">
        Система корпоративного управления ТОО «КАЭС» выстроена в соответствии с лучшими
        международными практиками и стандартами АО «Самрук-Казына». Она обеспечивает
        прозрачность деятельности компании, эффективное взаимодействие органов управления
        и защиту интересов всех участников.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {principles.map((principle, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="mb-2 font-bold text-xl text-[#1E4080]">{principle.title}</p>
            <p className="text-lg font-light text-gray-600">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-gray-100 bg-gray-50 p-7 shadow-sm">
        <p className="mb-1 text-sm font-light text-gray-600">Документ</p>
        <p className="mb-4 font-bold text-gray-900 text-lg">
          Кодекс корпоративного управления
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/pdf-viewer?url=%2Fdocuments%2Fgovernance%2Fkodeks-korporativnogo-upravleniya.pdf&title=%D0%9A%D0%BE%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F"
            className="inline-flex items-center gap-2 rounded-full bg-[#1E4080] px-6 py-2 text-sm font-light text-white transition-colors hover:bg-[#112250]"
          >
            Открыть PDF
          </a>
          <a
            href="/documents/governance/kodeks-korporativnogo-upravleniya.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#1E4080] hover:bg-gray-100"
          >
            Скачать
          </a>
        </div>
      </div>
    </section>
  );
}
