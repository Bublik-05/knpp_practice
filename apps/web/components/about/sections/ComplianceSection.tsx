export default function ComplianceSection() {
  return (
    <section id="section-compliance" className="flex flex-col gap-4 scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900">Комплаенс</h2>
      <h3 className="text-2xl font-medium text-gray-700">Сведения</h3>
      <p className="text-gray-500 font-light text-[14px]">
        Сведения по доходам должностных лиц ТОО «Казахстанские атомные электрические станции»:
      </p>
      <ol className="list-decimal pl-5 font-light space-y-2">
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
    </section>
  );
}
