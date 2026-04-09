"use client";

export default function TypesSection() {
    return (
        <section className="py-10">
            <h2 className="text-3xl font-semibold mb-6">
                Типы реакторов, рассматриваемых для Казахстана
            </h2>

            <p className="text-lg text-gray-700 mb-8">
                Ниже представлены основные типы реакторов, которые рассматриваются в
                качестве возможных вариантов для строительства атомной электростанции в
                Казахстане.
            </p>

            <div className="space-y-8">
                {/* ВВЭР-1200 */}
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                    <h3 className="text-2xl font-semibold mb-4">
                        1. Водо-водяной реактор (ВВЭР-1200, Россия)
                    </h3>

                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-medium">Поколение:</span> III+</p>
                        <p><span className="font-medium">Разработчик:</span> Росатом (Россия)</p>
                        <p><span className="font-medium">Тепловая мощность:</span> 3300 МВт(т)</p>
                        <p><span className="font-medium">Электрическая мощность:</span> 1200 МВт(э)</p>
                        <p><span className="font-medium">Активная зона:</span> 163 топливных сборок ТВС</p>
                        <p><span className="font-medium">Схема:</span> четырехпетлевая</p>
                        <p><span className="font-medium">Топливный цикл:</span> 12–18 месяцев (возможность продления)</p>
                    </div>

                    <p className="mt-4 text-gray-700 leading-7">
                        ВВЭР сочетает активные и пассивные системы безопасности,
                        обеспечивая устойчивую работу даже при потере внешнего
                        электропитания. Конструкция соответствует международным стандартам
                        МАГАТЭ для установок поколения III+.
                    </p>

                    <div className="mt-4 text-gray-700 space-y-2">
                        <p>
                            <span className="font-medium">Введён в эксплуатацию:</span> Россия,
                            Беларусь
                        </p>
                        <p>
                            <span className="font-medium">Строится:</span> Египет, Бангладеш,
                            Венгрия, Китай
                        </p>
                    </div>
                </div>

                {/* HPR1000 */}
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                    <h3 className="text-2xl font-semibold mb-4">
                        2. Водо-водяной реактор под давлением (HPR1000, Китай)
                    </h3>

                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-medium">Поколение:</span> III+</p>
                        <p><span className="font-medium">Разработчик:</span> CNNC (Китай)</p>
                        <p><span className="font-medium">Тепловая мощность:</span> 3050 МВт(т)</p>
                        <p><span className="font-medium">Электрическая мощность:</span> 1200 МВт(э)</p>
                        <p><span className="font-medium">Активная зона:</span> 177 топливных сборок CF3 (UO₂)</p>
                        <p><span className="font-medium">Схема:</span> трёхпетлевая</p>
                        <p><span className="font-medium">Топливный цикл:</span> 18 месяцев (возможность продления)</p>
                    </div>

                    <p className="mt-4 text-gray-700 leading-7">
                        HPR1000 сочетает активные и пассивные системы безопасности,
                        обеспечивая устойчивую работу даже при потере внешнего
                        электропитания. Конструкция соответствует международным стандартам
                        МАГАТЭ.
                    </p>

                    <div className="mt-4 text-gray-700">
                        <p className="font-medium mb-2">Введён в эксплуатацию:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Китай — Fuqing-5, Fuqing-6, Fangchenggang-3, Fangchenggang-4, Zhangzhou-1</li>
                            <li>Пакистан — Karachi-2, Karachi-3</li>
                        </ul>
                    </div>
                </div>

                {/* ММР */}
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
                    <h3 className="text-2xl font-semibold mb-4">
                        3. Малый модульный реактор
                    </h3>

                    <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7">
                        <li>Реакторы мощностью до 300 МВт по определению МАГАТЭ</li>
                        <li>
                            Отличаются модульной конструкцией, малой мощностью и высокой
                            безопасностью
                        </li>
                        <li>
                            Оснащены пассивными системами безопасности и имеют упрощённую
                            конструкцию
                        </li>
                        <li>
                            Первые ММР уже работают: плавучая АЭС «Академик Ломоносов»
                            (Россия) и HTR-PM (Китай, 210 МВт)
                        </li>
                        <li>
                            Рассматриваются как перспективное решение для удалённых и
                            арктических регионов, где крупные станции нецелесообразны
                        </li>
                        <li>
                            В настоящее время в разработке находится более 80 концепций ММР
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}