import BackgroundGlow from "@/components/layout/BackgroundGlow";
import Breadcrumb from "@/components/ui/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Международное сотрудничество — КАЭС",
  description:
    "Партнёрство ТОО «КАЭС» с ведущими ядерными организациями и странами мира. Двусторонние соглашения, совместные проекты, участие в международных форумах.",
};

const partners = [
  {
    country: "Россия",
    org: "Росатом",
    flag: "🇷🇺",
    desc: "Стратегическое партнёрство в области проектирования и строительства АЭС на базе реакторных технологий ВВЭР. Совместные образовательные программы для казахстанских специалистов.",
    tags: ["Реакторные технологии", "Подготовка кадров", "Проектирование"],
  },
  {
    country: "Франция",
    org: "EDF / Framatome",
    flag: "🇫🇷",
    desc: "Технологическое сотрудничество в области ядерного топливного цикла и локализации производства компонентов. Обмен опытом эксплуатации АЭС.",
    tags: ["Топливный цикл", "Локализация", "Эксплуатация"],
  },
  {
    country: "Южная Корея",
    org: "KEPCO / KHNP",
    flag: "🇰🇷",
    desc: "Изучение применимости реакторной технологии APR-1400. Консультации по вопросам ядерной безопасности и регуляторной базы.",
    tags: ["APR-1400", "Безопасность", "Регуляторика"],
  },
  {
    country: "Китай",
    org: "CNNC",
    flag: "🇨🇳",
    desc: "Меморандум о взаимопонимании в сфере мирного использования атомной энергии. Обмен опытом ускоренного строительства АЭС.",
    tags: ["Меморандум", "Строительство", "Ядерные технологии"],
  },
  {
    country: "США",
    org: "NuScale / Westinghouse",
    flag: "🇺🇸",
    desc: "Оценка применимости малых модульных реакторов (SMR) для площадки Мойынкум. Консультации по ядерному нераспространению и безопасности.",
    tags: ["SMR / Малые реакторы", "Нераспространение", "Мойынкум"],
  },
  {
    country: "Международное",
    org: "МАГАТЭ",
    flag: "🌐",
    desc: "Участие в программах технического сотрудничества МАГАТЭ. Прохождение миссий экспертной оценки PEER и OSART, содействие в разработке регуляторной базы.",
    tags: ["PEER / OSART", "Техническое содействие", "Регуляторная база"],
  },
];

const timeline = [
  {
    year: "2014",
    title: "Создание КАЭС",
    desc: "ТОО «КАЭС» учреждено как оператор программы строительства АЭС. Начало первых международных консультаций.",
  },
  {
    year: "2017",
    title: "Меморандум с Росатомом",
    desc: "Подписание меморандума о взаимопонимании по вопросам технологического сотрудничества.",
  },
  {
    year: "2019",
    title: "Присоединение к программам МАГАТЭ",
    desc: "КАЭС включена в программы технического сотрудничества МАГАТЭ. Начало миссий экспертной оценки.",
  },
  {
    year: "2022",
    title: "Расширение партнёрской сети",
    desc: "Подписаны соглашения с KEPCO (Корея), EDF (Франция), CNNC (Китай). Изучение технологий SMR совместно с NuScale.",
  },
  {
    year: "2024",
    title: "Активная фаза переговоров",
    desc: "Переговоры с потенциальными поставщиками технологий. Оценка технологических предложений для площадок Балхаш и Мойынкум.",
  },
  {
    year: "2025–н.в.",
    title: "Выбор технологического партнёра",
    desc: "Продолжение технико-экономического анализа реакторных технологий, работа с регулятором РК.",
  },
];

const forums = [
  { name: "Генеральная конференция МАГАТЭ", location: "Вена, Австрия", freq: "Ежегодно" },
  { name: "Всемирная ядерная выставка WNE", location: "Париж, Франция", freq: "Раз в 2 года" },
  { name: "Атомэкспо", location: "Россия", freq: "Ежегодно" },
  { name: "МАГАТЭ — Международная конференция по ядерной безопасности", location: "Вена", freq: "Раз в 3 года" },
];

export default function InternationalCooperationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundGlow />

      <div className="max-w-7xl mx-auto px-8 py-16 space-y-20">

        <Breadcrumb items={[{ label: "Международное сотрудничество" }]} />

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8">
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Партнёрство с ведущими ядерными<br className="hidden lg:block" />
              организациями мира
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              ТОО «КАЭС» активно взаимодействует с международными ядерными организациями,
              государственными корпорациями и регуляторами ведущих атомных держав. Цель —
              привлечение лучших мировых технологий и компетенций для реализации атомных
              проектов в Казахстане.
            </p>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Международное сотрудничество охватывает передачу технологий, подготовку
              национальных кадров, развитие регуляторной и нормативно-правовой базы,
              а также участие в международных форумах и конференциях по ядерной тематике.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg bg-[#f8fbff] p-6 shadow-sm text-center">
              <p className="text-5xl font-bold text-[#1E4080]">20+</p>
              <p className="text-gray-600 font-light mt-2">международных партнёров</p>
            </div>
            <div className="rounded-lg  bg-white p-6 shadow-sm text-center">
              <p className="text-5xl font-bold text-[#1E4080]">6</p>
              <p className="text-gray-600 font-light mt-2">стран-партнёров</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <p className="text-5xl font-bold text-[#1E4080]">10+</p>
              <p className="text-gray-600 font-light mt-2">подписанных соглашений</p>
            </div>
          </div>
        </div>

        {/* Partners grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Ключевые партнёры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div
                key={p.org}
                className="group flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm hover:shadow-md hover:border-[#1E4080]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow:xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.flag}</span>
                  <div>
                    <p className="text-xs text-gray-800 uppercase tracking-widest font-medium">
                      {p.country}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">{p.org}</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-600 font-light leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 border-t border-gray-100">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-md font-medium text-[#1E4080] bg-[#eef4ff] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Quick overview — partners + directions */}
        <div className="space-y-6">
          <div className="rounded-lg bg-blue-50 border border-blue-100 p-6">
            <h3 className="text-xl font-bold text-[#1E4080] mb-3">Ключевые направления сотрудничества</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Передача технологий", desc: "Получение реакторных технологий и обучение казахстанских специалистов" },
                { title: "Финансирование", desc: "Привлечение иностранных инвестиций и кредитных линий для строительства" },
                { title: "Ядерное топливо", desc: "Поставка топлива и переработка отработанных материалов" },
                { title: "Безопасность", desc: "Соответствие стандартам МАГАТЭ и международным нормам ядерной безопасности" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#1E4080] shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Хронология сотрудничества
          </h2>
          <div className="relative">
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-[104px] hidden md:flex items-center justify-end">
                    <span className="text-3xl font-bold text-[#1E4080] px-3 py-1.5 rounded-full whitespace-nowrap z-10 relative">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1 rounded-lg border border-[#d9e2f2] bg-white px-6 py-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="md:hidden text-xs font-bold text-[#1E4080] bg-[#eef4ff] px-2.5 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="text-[17px] font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-[15px] text-gray-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Forums */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Международные форумы и конференции
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8">
            КАЭС регулярно участвует в ключевых отраслевых мероприятиях для обмена опытом
            и представления казахстанских ядерных инициатив.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {forums.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg bg-white p-5 shadow-sm duration-300 hover:scale-[1.03] hover:shadow:xl"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#1E4080] flex items-center justify-center text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-snug">{f.name}</h3>
                  <p className="text-md text-gray-500 font-light mt-1">
                    {f.location} · {f.freq}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-[#112250] px-10 py-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl font-bold">Заинтересованы в сотрудничестве?</h2>
            <p className="text-white/75 font-light leading-relaxed">
              Если вы представляете организацию, заинтересованную в партнёрстве с КАЭС,
              свяжитесь с нами через форму на странице Контактов.
            </p>
          </div>
          <a
            href="/contacts"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#E0C58F] text-[#112250] font-medium px-7 py-3.5 hover:bg-[#C9B07A] transition-colors"
          >
            Написать нам
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
