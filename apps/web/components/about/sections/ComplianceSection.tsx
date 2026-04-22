export default function ComplianceSection() {
  return (
    <section id="section-compliance" className="flex flex-col gap-4 scroll-mt-24">
      <h3 className="text-3xl font-medium text-gray-700">Сведения</h3>
      <p className="text-gray-500 font-light text-xl">
        Сведения по доходам должностных лиц ТОО «Казахстанские атомные электрические станции»:
      </p>
      <ol className="list-decimal pl-5 font-light space-y-2 text-xl">
        <li>Бердигулов Ернат Кудайбергенович – Генеральный директор ТОО «Казахстанские атомные электрические станции».Супруга – Бердигулова Жанар Бериковна.</li>
        <li>Отчетный налоговый период – 2024 год</li>
      </ol>
      <div className="overflow-x-auto">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">№ п/п</th>
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">Сведения, отраженные в декларации о доходах и имуществе физического лица</th>
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">Сведения, подлежащие опубликованию</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-gray-600 border border-gray-300">1</td>
              <td className="px-4 py-3 text-gray-600 border border-gray-300">Сведения о доходах, подлежащих налогообложению физическим лицом самостоятельно</td>
              <td className="px-4 py-3 text-gray-600 border border-gray-300">1) общая сумма дохода 7 800 000 тенге; 2) Бердигулова Жанар Бериковна.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h4 className="text-xl font-medium text-gray-700">Куда обращаться по вопросам комплаенс</h4>
        <div className="rounded-lg bg-[#f8fbff] p-6 flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-lg font-light text-gray-500">
              <span className="font-medium text-gray-700">Горячая линия АО «Самрук-Казына»:</span>{" "}
              +7 (727) 356-36-36
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-lg font-light text-gray-500">
              <span className="font-medium text-gray-700">Email для обращений:</span>{" "}
              <a href="mailto:compliance@kaes.kz" className="text-[#1E4080] hover:underline">
                compliance@kaes.kz
              </a>
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span className="text-lg font-light text-gray-500">
              <span className="font-medium text-gray-700">Онлайн-форма:</span>{" "}
              <a
                href="https://sk.kz/hotline/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E4080] hover:underline"
              >
                sk.kz/hotline
              </a>
            </span>
          </div>
          <p className="text-md font-light text-gray-400 mt-2">
            Все обращения рассматриваются конфиденциально.
          </p>
        </div>
      </div>
    </section>
  );
}
