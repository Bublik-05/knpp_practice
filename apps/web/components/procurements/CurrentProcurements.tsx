const procurements = [
  {
    id: "КЗ-2025-001",
    title: "Поставка оргтехники и расходных материалов",
    status: "Приём заявок",
    published: "15.01.2025",
    deadline: "15.02.2025",
  },
  {
    id: "КЗ-2025-002",
    title: "Услуги технического аудита и экспертизы",
    status: "На рассмотрении",
    published: "20.01.2025",
    deadline: "20.03.2025",
  },
  {
    id: "КЗ-2025-003",
    title: "Консультационные услуги в области ядерной безопасности",
    status: "Завершено",
    published: "10.12.2024",
    deadline: "10.01.2025",
  },
];

type StatusType = "Приём заявок" | "На рассмотрении" | "Завершено";

const statusStyles: Record<StatusType, string> = {
  "Приём заявок": "bg-green-100 text-green-800",
  "На рассмотрении": "bg-yellow-100 text-yellow-800",
  "Завершено": "bg-gray-100 text-gray-600",
};

export default function CurrentProcurements() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-bold text-[#112250]">Текущие закупки</h2>
        <p className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl">
          Актуальные закупки публикуются на официальном портале АО «Самрук-Казына». Ниже представлены
          примеры закупочных процедур для ознакомления.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {procurements.map((item) => (
          <div
            key={item.id}
            className="rounded-lg bg-white border border-gray-200 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#1E4080] text-white text-sm font-medium px-3 py-1 rounded-full">
                  {item.id}
                </span>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    statusStyles[item.status as StatusType] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="font-semibold text-[#112250] text-lg">{item.title}</p>
              <div className="flex flex-wrap gap-4 text-gray-500 font-light">
                <span>Опубликовано: {item.published}</span>
                <span>Срок подачи: {item.deadline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-start">
        <a
          href="https://zakup.sk.kz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1E4080] text-white font-medium text-lg rounded-lg px-6 py-3 hover:bg-[#112250] transition-colors"
        >
          Все закупки на портале
        </a>
      </div>
    </section>
  );
}
