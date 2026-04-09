"use client";

export default function EnvironmentSection() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-medium">
                Атомная энергия и экология
            </h2>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
                Атомная энергия — один из самых экологически чистых источников электроэнергии.
            </p>

            <div className="space-y-6">
                <ul className="list-disc ml-6 text-lg text-gray-700 font-light space-y-2 leading-relaxed">
                    <li>
                        При выработке 1 кВт⋅ч атомная станция выделяет всего около 12 граммов
                        CO₂, что в десятки раз меньше, чем угольные или газовые станции.
                    </li>
                    <li>
                        Одна АЭС мощностью 1000 МВт предотвращает выброс до 4 миллионов тонн
                        CO₂ в год — это эквивалентно удалению с дорог около 1 миллиона
                        автомобилей.
                    </li>
                    <li>
                        Такой эффект сопоставим с очисткой воздуха, которую обеспечивают
                        200 миллионов деревьев, или с сохранением сотен тысяч гектаров леса.
                    </li>
                    <li>
                        Развитие атомной энергетики помогает Казахстану сокращать углеродный
                        след и защищать окружающую среду для будущих поколений.
                    </li>
                </ul>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-medium mb-2">
                        Онлайн интерактивный калькулятор выбросов CO₂
                    </h3>
                    <p>
                        Сравнение выбросов CO₂ при разных источниках энергии.
                    </p>
                </div>
            </div>
        </div>
    );
}