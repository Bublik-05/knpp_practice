const documents = [
  {
    title: "Стратегия развития 2022–2031",
    description: "Долгосрочный план развития ТОО «КАЭС» в сфере ядерной энергетики",
    href: "/documents/strategy-2022-2031.pdf",
  },
  {
    title: "Устав ТОО",
    description: "Учредительный документ Товарищества с ограниченной ответственностью",
    href: "/documents/ustav.pdf",
  },
  {
    title: "Кодекс корпоративного управления",
    description: "Принципы и стандарты корпоративного управления",
    href: "/documents/governance/kodeks-korporativnogo-upravleniya.pdf",
  },
  {
    title: "Кодекс поведения АО «Самрук-Казына»",
    description: "Этические стандарты и нормы поведения сотрудников",
    href: "/documents/kodeks-povedeniya-sk.pdf",
  },
  {
    title: "Кодекс корпоративного управления фонда",
    description: "Корпоративное управление АО «Самрук-Казына»",
    href: "/documents/kodeks-kku-fond.pdf",
  },
  {
    title: "Организационная структура",
    description: "Структура органов управления и подразделений КАЭС",
    href: "/documents/org-struktura.pdf",
  },
  {
    title: "Положение о Генеральном директоре",
    description: "Права, обязанности и полномочия Генерального директора",
    href: "/documents/polozhenie-gd.pdf",
  },
  {
    title: "Политика по управлнению рисками и внутреннему контролю ТОО «Казахстанские атомные электрические станции»",
    description: "Политика управления рисками и внутреннего контроля",
    href: "/documents/ПОЛИТИКА ПО УПРАВЛЕНИЮ РИСКАМИ И ВНУТРЕННЕМУ КОНТРОЛЮ.pdf",
  }
];

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 shrink-0 text-[#1E4080]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

export default function DocumentsSection() {
  return (
    <section id="section-documents" className="flex flex-col gap-6 scroll-mt-24">
      <div className="flex flex-col gap-4">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="rounded-lg bg-gray-50 border border-gray-100 p-5 flex gap-4 items-start"
          >
            <DocumentIcon />
            <div className="flex flex-1 flex-col gap-1 min-w-0">
              <p className="font-semibold text-lg text-gray-900">{doc.title}</p>
              <p className="text-lg font-light text-gray-500">{doc.description}</p>
            </div>
            <a
              href={`/pdf-viewer?url=${encodeURIComponent(doc.href)}&title=${encodeURIComponent(doc.title)}`}
              className="shrink-0 rounded-full bg-[#1E4080] text-white text-sm px-4 py-2 hover:bg-[#112250] transition-colors"
            >
              Открыть PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
