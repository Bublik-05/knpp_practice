import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

const DOC_PATH = "/docs/kaes-development-plan.docx";

const stages = [
  {
    id: "01", period: "2014–2020",
    title: "Инициация проекта",
    tag: "Завершён",
    tagColor: "bg-green-50 text-green-700 border border-green-200",
    items: [
      "Формирование концепции и разработка технико-экономического обоснования",
      "Выбор потенциальных площадок: Балхаш, Майнкум",
      "Старт диалога с международными технологическими партнёрами",
      "Создание ТОО «КАЭС» и регуляторной базы",
    ],
  },
  {
    id: "02", period: "2021–2023",
    title: "Предварительная проработка",
    tag: "Завершён",
    tagColor: "bg-green-50 text-green-700 border border-green-200",
    items: [
      "Подготовка технических требований к реакторной установке",
      "Экологическая экспертиза и предпроектные изыскания",
      "Взаимодействие с МАГАТЭ: миссии SITE и PEER",
      "Проведение общественных слушаний в регионах",
    ],
  },
  {
    id: "03", period: "2024–2026",
    title: "Подготовка решений",
    tag: "Текущий этап",
    tagColor: "bg-[#1E4080] text-white",
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
    tagColor: "bg-blue-50 text-[#1E4080] border border-blue-200",
    items: [
      "Строительство основных и вспомогательных объектов",
      "Монтаж реакторного и турбинного оборудования",
      "Испытания систем безопасности",
      "Подготовка эксплуатационного персонала",
    ],
  },
  {
    id: "05", period: "2034–2035",
    title: "Ввод в эксплуатацию",
    tag: "Будущий этап",
    tagColor: "bg-gray-100 text-gray-600 border border-gray-200",
    items: [
      "Физический пуск реактора и проверка систем",
      "Энергетический пуск и выход на проектную мощность",
      "Получение лицензии на промышленную эксплуатацию",
      "Начало коммерческой генерации электроэнергии",
    ],
  },
];

const facts = [
  { value: "1 200 МВт", label: "мощность первого энергоблока" },
  { value: "2 035",     label: "год планируемого запуска" },
  { value: "2 000+",   label: "постоянных рабочих мест" },
  { value: "9 млн т",  label: "сокращение выбросов CO₂ в год" },
];

export default function DevelopmentPlanPage() {
  return (
    <>
      <PageHero title="План развития" />

      <div className="w-full bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col gap-10">

          <Breadcrumb items={[{ label: "План развития" }]} />

          {/* Download card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-2xl border border-[#1E4080]/15 bg-white px-8 py-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#1E4080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">План развития КАЭС 2024–2035</p>
                <p className="text-sm text-gray-400 font-light mt-0.5">Полная версия документа · DOCX · ~15 КБ</p>
              </div>
            </div>
            <a
              href={DOC_PATH}
              download="КАЭС_План_развития.docx"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1E4080] px-6 py-3 text-sm font-medium text-white hover:bg-[#162f66] transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Скачать документ
            </a>
          </div>

          {/* Key facts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {facts.map(({ value, label }) => (
              <div key={label} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col gap-1">
                <span className="text-3xl font-bold text-[#1E4080]">{value}</span>
                <span className="text-sm text-gray-500 font-light leading-snug">{label}</span>
              </div>
            ))}
          </div>

          {/* Stages */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-gray-900">Дорожная карта</h2>

            <div className="flex flex-col gap-3">
              {stages.map((stage) => (
                <div key={stage.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1E4080] text-white text-sm font-bold">
                      {stage.id}
                    </span>
                    <div className="flex flex-1 flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">{stage.title}</h3>
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${stage.tagColor}`}>
                        {stage.tag}
                      </span>
                    </div>
                    <span className="shrink-0 text-sm text-gray-400 font-light">{stage.period}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-14">
                    {stage.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-light leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E4080]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-[#0B1C3C] px-8 py-6">
            <p className="flex-1 text-white/80 font-light text-sm text-center sm:text-left">
              Хотите узнать больше или стать частью команды КАЭС?
            </p>
            <div className="flex gap-3">
              <Link href="/contacts" className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/80 hover:text-white hover:border-white/40 transition-colors font-light">
                Связаться
              </Link>
              <Link href="/vacancies" className="rounded-full bg-[#1E4080] px-5 py-2.5 text-sm text-white font-medium hover:bg-[#2a55a8] transition-colors">
                Вакансии
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
