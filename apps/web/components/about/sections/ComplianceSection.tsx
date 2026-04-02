export default function ComplianceSection() {
  return (
    <section id="section-compliance" className="flex flex-col gap-6 scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900">Комплаенс</h2>
      <h3 className="text-lg font-medium text-gray-700">Сведения</h3>
      <p className="text-gray-500 font-light text-[14px]">
        Сведения по доходам должностных лиц ТОО «Казахстанские атомные электрические станции»:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">ФИО</th>
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">Должность</th>
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">Организация</th>
              <th className="text-left px-4 py-3 font-medium text-gray-700 border border-gray-200">Налоговый период</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-gray-600 border border-gray-200">Бердітұлов Е.К.</td>
              <td className="px-4 py-3 text-gray-600 border border-gray-200">Генеральный директор</td>
              <td className="px-4 py-3 text-gray-600 border border-gray-200">ТОО «КАЭС» / Казахстанская атомная энергетическая станция Дирья Бергова</td>
              <td className="px-4 py-3 text-gray-600 border border-gray-200">1 Отчётный налоговый период — 2024 год</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
