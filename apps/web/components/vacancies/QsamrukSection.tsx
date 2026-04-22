const advantages = [
  "Официальные вакансии",
  "Удобная подача заявки",
  "Безопасный отклик",
];

export default function QsamrukSection() {
  return (
    <section className="bg-[#112250] py-16 px-8 rounded-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E0C58F] flex items-center justify-center">
            <span className="text-[#112250] font-bold text-2xl leading-none">Q</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-2xl font-bold leading-snug">
              Актуальные вакансии публикуются на платформе Qsamruk
            </h2>
            <p className="text-white/75 font-light text-lg leading-relaxed">
              Qsamruk — официальная платформа подбора персонала АО «Самрук-Казына». Здесь размещаются
              актуальные вакансии ТОО «КАЭС» и всех дочерних компаний фонда.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {advantages.map((adv) => (
            <div
              key={adv}
              className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#E0C58F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-white font-light">{adv}</span>
            </div>
          ))}
        </div>

        <div>
          <a
            href="https://qsamruk.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E0C58F] text-[#112250] font-medium rounded-full px-8 py-3.5 hover:bg-[#C9B07A] transition-colors text-lg"
          >
            Перейти на Qsamruk
          </a>
        </div>
      </div>
    </section>
  );
}
