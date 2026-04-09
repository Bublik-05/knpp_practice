"use client";

export default function MultimediaSection() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-medium">
                Интерактив / мультимедиа
            </h2>

            <p className="text-lg text-gray-700 font-light leading-relaxed">
                В этом разделе собраны интерактивные и мультимедийные материалы,
                которые помогают лучше понять, как работает атомная энергетика.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-medium mb-2">
                        Видеоэкскурсии и интервью
                    </h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        Здесь будут размещены видеоэкскурсии, интервью с экспертами,
                        объяснения принципов работы АЭС и другие полезные материалы
                        в удобном формате.
                    </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-medium mb-2">
                        Викторины и тесты
                    </h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        В этом блоке можно будет пройти викторины и небольшие тесты
                        в формате «Проверь свои знания об атоме», чтобы закрепить
                        полученную информацию.
                    </p>
                </div>
            </div>
        </div>
    );
}
