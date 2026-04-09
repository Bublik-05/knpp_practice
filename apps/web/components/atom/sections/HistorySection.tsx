"use client";

export default function HistorySection() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-semibold">
                История атомной отрасли Казахстана
            </h2>

            <p className="text-lg text-gray-700">
                Атомная отрасль Казахстана имеет долгую и насыщенную историю,
                начавшуюся ещё в советский период и продолжающуюся по настоящее время.
            </p>

            <div className="space-y-6">

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        1950–1956 г. Начало атомной эры
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Обнаружено первое урановое месторождение — Кордай (Жамбылская обл.)</li>
                        <li>Создание Семипалатинск-21, научных лабораторий (г. Курчатов)</li>
                        <li>Старт промышленности добычи урана в КазССР</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">1956–1959 г.</h3>
                    <p className="text-gray-700">
                        Начало работ по созданию исследовательских реакторов и испытательных площадок
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">1960–1980 г.</h3>

                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold">1960–1965 г.</h4>
                            <ul className="list-disc ml-6 text-gray-700">
                                <li>Пуск и выход на проектную мощность реактора ИГР</li>
                                <li>Разработка урановых бассейнов Шу-Сарысу</li>
                                <li>Создание урановой геологии как отрасли</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold">1966–1969 г.</h4>
                            <p className="text-gray-700">
                                Расширение предприятий, рост доли Казахстана в уране СССР
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">1970–1972 г.</h4>
                            <p className="text-gray-700">
                                Развитие технологий подземного выщелачивания
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">1973 г.</h4>
                            <p className="text-gray-700">
                                Запуск БН-350 в Актау — реактор для энергии и опреснения
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">1972–1975 г.</h4>
                            <p className="text-gray-700">
                                Пуск исследовательского реактора ИВГ.1
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">1974–1979 г.</h4>
                            <ul className="list-disc ml-6 text-gray-700">
                                <li>Рост добычи урана, расширение институтов</li>
                                <li>Создание систем радиационного контроля</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold">1980–1985 г.</h4>
                            <ul className="list-disc ml-6 text-gray-700">
                                <li>Казахстан — один из крупнейших производителей урана в СССР</li>
                                <li>Развитие реакторных исследовательских программ</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold">1986–1988 г.</h4>
                            <ul className="list-disc ml-6 text-gray-700">
                                <li>Усиление радиационного контроля после Чернобыля</li>
                                <li>Исследования на Семипалатинском полигоне</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        1989–1991 г. Закрытие полигона
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>1989 г. — движение «Невада-Семей»</li>
                        <li>1990 г. — ограничение испытаний</li>
                        <li>1991 г. — 29 августа полигон закрыт окончательно</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        1991–1995 г. Независимость и разоружение
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Казахстан наследует 1410 ядерных зарядов</li>
                        <li>Принятие решения стать безъядерным государством</li>
                        <li>1993 г. — ДНЯО</li>
                        <li>1994 г. — программа «Нанна-Лугара»</li>
                        <li>1995 г. — вывоз зарядов в РФ</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        1996–2000 г.
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Реорганизация отрасли</li>
                        <li>Создание Казатомпром (1997)</li>
                        <li>Переход к ISL технологии</li>
                        <li>Выход в мировые лидеры</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        2001–2010 г.
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Новые месторождения и международные проекты</li>
                        <li>ISL — основная технология добычи</li>
                        <li>2009 — мировой лидер по добыче урана</li>
                        <li>2010 — переход к атомной энергетике</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-blue-600">
                        2011–2025 г.
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700 space-y-1">
                        <li>Модернизация реакторов и сотрудничество</li>
                        <li>2014 — создание КАЭС</li>
                        <li>Банк урана МАГАТЭ</li>
                        <li>2018–2019 — до 40% мировой добычи</li>
                        <li>2022 — Улькен (АЭС)</li>
                        <li>2024 — референдум (71,12% «за»)</li>
                        <li>2025 — запуск проекта АЭС</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}