const documents = [
  {
    title: "Политика закупок ТОО «КАЭС»",
    href: "/documents/procurement/politika-zakupok.pdf",
  },
  {
    title: "Правила закупок АО «Самрук-Казына»",
    href: "/documents/procurement/pravila-zakupok-sk.pdf",
  },
  {
    title: "Годовой план закупок 2025",
    href: "/documents/procurement/plan-zakupok-2025.pdf",
  },
  {
    title: "Квалификационные требования к поставщикам",
    href: "/documents/procurement/kval-trebovaniya.pdf",
  },
];

export default function ProcurementDocuments() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-[#112250]">Документы и отчётность</h2>
        <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
          Ниже представлены ключевые нормативные документы, регулирующие закупочную деятельность
          ТОО «КАЭС».
        </p>
      </div>

      {/* Upload placeholder */}
      <div className="rounded-lg border-2 border-dashed border-[#dbe5f4] bg-[#f8fbff] p-8 flex flex-col items-center justify-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-[#eef4ff] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[#1E4080] text-lg">Документ будет загружен</p>
          <p className="text-gray-500 font-light mt-1">Здесь появится загруженный документ после добавления</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {documents.map((doc) => (
          <div
            key={doc.href}
            className="bg-gray-50 rounded-lg border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1E4080]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="font-medium text-[#112250] text-lg">{doc.title}</span>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={doc.href}
                download
                className="bg-[#1E4080] text-white font-medium rounded-full px-5 py-2.5 hover:bg-[#112250] transition-colors text-sm"
              >
                Скачать
              </a>
              <a
                href={`/pdf-viewer?url=${encodeURIComponent(doc.href)}&title=${encodeURIComponent(doc.title)}`}
                className="border border-[#1E4080] text-[#1E4080] font-medium rounded-full px-5 py-2.5 hover:bg-[#1E4080] hover:text-white transition-colors text-sm"
              >
                Открыть PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
