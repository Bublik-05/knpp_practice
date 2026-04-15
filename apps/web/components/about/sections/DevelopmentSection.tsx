const DOC_URL = "/docs/kaes-development-plan.docx";

const stages = [
  {
    id: "01", period: "2014–2020",
    title: "Инициация проекта",
    tag: "Завершён",
    tagClass: "bg-green-50 text-green-700 border border-green-200",
    items: [
      "Формирование концепции и разработка технико-экономического обоснования",
      "Выбор потенциальных площадок: Балхаш и Майнкум",
      "Старт переговоров с международными технологическими партнёрами",
      "Создание ТОО «КАЭС» и первичной регуляторной базы",
    ],
  },
  {
    id: "02", period: "2021–2023",
    title: "Предварительная проработка",
    tag: "Завершён",
    tagClass: "bg-green-50 text-green-700 border border-green-200",
    items: [
      "Подготовка технических требований к реакторной установке",
      "Экологическая экспертиза и предпроектные изыскания",
      "Миссии МАГАТЭ: SITE и PEER",
      "Проведение публичных слушаний в регионах",
    ],
  },
  {
    id: "03", period: "2024–2026",
    title: "Подготовка решений",
    tag: "Текущий этап",
    tagClass: "bg-[#1E4080] text-white",
    items: [
      "Выбор технологического партнёра и типа реакторной установки",
      "Заключение межправительственных соглашений",
      "Разработка проектно-сметной документации и лицензирование",
      "Формирование системы управления проектом",
    ],
  },
  {
    id: "04", period: "2027–2033",
    title: "Строительство и монтаж",
    tag: "Запланировано",
    tagClass: "bg-blue-50 text-[#1E4080] border border-blue-200",
    items: [
      "Возведение основных и вспомогательных объектов",
      "Монтаж реакторного и турбинного оборудования",
      "Испытания систем безопасности",
      "Подготовка эксплуатационного персонала",
    ],
  },
  {
    id: "05", period: "2034–2035",
    title: "Ввод в эксплуатацию",
    tag: "Будущий этап",
    tagClass: "bg-gray-100 text-gray-600 border border-gray-200",
    items: [
      "Физический пуск реактора и проверка систем",
      "Энергетический пуск, выход на проектную мощность",
      "Получение лицензии на промышленную эксплуатацию",
      "Начало коммерческой генерации электроэнергии",
    ],
  },
];

const facts = [
  { value: "1 200 МВт", label: "мощность первого блока" },
  { value: "2 035",     label: "год запуска" },
  { value: "2 000+",   label: "рабочих мест" },
  { value: "9 млн т",  label: "снижение CO₂ в год" },
];

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

export default function DevelopmentSection() {
  return (
    <section id="section-development" className="flex flex-col gap-8 scroll-mt-24">

      {/* Документ для скачивания */}
      <div className="flex flex-col gap-3 bg-gray-50 rounded-lg p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
        <p className="text-gray-500 font-light text-md">дата утверждения — 05.03.2026</p>
        <p className="font-bold text-gray-900 text-xl">План развития КАЭС 2024–2035</p>
        <p className="text-gray-600 font-light text-md">Полный документ с дорожной картой, стратегическими целями и описанием этапов строительства АЭС в Казахстане.</p>
        <div className="flex gap-3 pt-1">
          <a
            href={DOC_URL}
            download="КАЭС_План_развития.docx"
            className="inline-flex items-center gap-2 px-7 py-2 bg-[#1E4080] text-white font-light rounded-full border border-transparent hover:bg-white hover:border-[#1E4080] hover:text-black transition-colors whitespace-nowrap"
          >
            <DownloadIcon />
            скачать документ
          </a>
        </div>
      </div>

      {/* Ключевые показатели */}
      <div className="grid grid-cols-2 gap-3">
        {facts.map(({ value, label }) => (
          <div key={label} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm flex flex-col gap-1">
            <span className="text-2xl font-bold text-[#1E4080]">{value}</span>
            <span className="text-md text-gray-500 font-light leading-snug">{label}</span>
          </div>
        ))}
      </div>

      {/* Дорожная карта */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">Дорожная карта</h3>

        {stages.map((stage) => (
          <div key={stage.id} className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E4080] text-white text-md font-bold">
                {stage.id}
              </span>
              <span className="font-bold text-gray-900 text-base flex-1">{stage.title}</span>
              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${stage.tagClass}`}>
                {stage.tag}
              </span>
              <span className="text-md text-gray-400 font-light w-full pl-11">{stage.period}</span>
            </div>
            <div className="flex flex-col gap-1.5 pl-11">
              {stage.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-md text-gray-600 font-light leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4080]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
