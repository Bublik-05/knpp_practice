const stages = [
  {
    num: "01",
    title: "Выбор площадки",
    desc: "Геологические, сейсмические и гидрологические исследования. Оценка демографии и инфраструктуры. Получение разрешения регулятора.",
    done: true,
  },
  {
    num: "02",
    title: "Технико-экономическое обоснование",
    desc: "Сравнение технологий реакторов, расчёт стоимости жизненного цикла, оценка рисков и выбор партнёров.",
    done: true,
  },
  {
    num: "03",
    title: "Проектирование",
    desc: "Разработка проектной документации, согласование с МАГАТЭ, подготовка тендеров на строительство.",
    done: false,
  },
  {
    num: "04",
    title: "Строительство",
    desc: "Возведение реакторного здания, машинного зала, вспомогательных систем. Контроль качества на каждом этапе.",
    done: false,
  },
  {
    num: "05",
    title: "Пуско-наладка и лицензирование",
    desc: "Испытания систем безопасности, физический пуск реактора, получение лицензии на эксплуатацию.",
    done: false,
  },
  {
    num: "06",
    title: "Ввод в эксплуатацию",
    desc: "Выход на промышленную мощность, начало коммерческой поставки электроэнергии в сеть.",
    done: false,
  },
];

export default function ConstructionStages() {
  return (
    <div>
      <h2 className="text-3xl font-medium text-gray-900 mb-10">Этапы строительства АЭС</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

        <div className="space-y-6">
          {stages.map((stage) => (
            <div key={stage.num} className="flex gap-8 items-start">

              {/* Circle with number */}
              <div className={`shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-[15px] font-bold border-2 z-10 ${stage.done
                ? "bg-[#1E4080] border-[#1E4080] text-white"
                : "bg-white border-gray-200 text-gray-400"}`}>
                {stage.done
                  ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                  : stage.num}
              </div>

              {/* Content */}
              <div className={`flex-1 rounded-xl border p-5 ${stage.done ? "border-[#1E4080]/20 bg-blue-50/40" : "border-gray-200 bg-white"}`}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={`text-[17px] font-medium ${stage.done ? "text-[#1E4080]" : "text-gray-900"}`}>
                    {stage.title}
                  </h3>
                  {stage.done && (
                    <span className="text-[11px] font-medium text-[#1E4080] bg-blue-100 px-2 py-0.5 rounded-full">
                      Выполнено
                    </span>
                  )}
                </div>
                <p className="text-[15px] text-gray-600 font-light leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
