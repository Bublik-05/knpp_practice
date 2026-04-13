export const metadata = {
    title: "Послание президента",
    description: "Раздел с материалами, связанными с посланием президента.",
};

export default function PresidentMessagePage() {
    return (
        <main className="px-30 py-20 flex flex-col gap-14">
            <section className="max-w-5xl flex flex-col gap-5">

                <h1 className="font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
                    Послание президента
                </h1>

                <p className="font-light text-lg leading-relaxed text-gray-600 max-w-4xl">
                    В данном разделе будет размещаться информация, связанная с посланием
                    президента, ключевыми направлениями, инициативами и материалами для
                    ознакомления.
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8">
                <div className="rounded-[28px] border border-[#d9e2f2] bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-medium text-gray-900 mb-4">
                        Основная информация
                    </h2>

                    <div className="space-y-4 text-gray-600 font-light leading-relaxed text-lg">
                        <p>
                            Этот раздел пока находится в стадии наполнения. В дальнейшем здесь
                            могут быть размещены ключевые тезисы, выдержки, поясняющие
                            материалы и сопутствующая информация.
                        </p>

                        <p>
                            Страница подготовлена как отдельное пространство для дальнейшего
                            развития и структурирования материалов.
                        </p>
                    </div>
                </div>

                <div className="rounded-[28px] border border-[#d9e2f2] bg-[#f8fbff] p-8 shadow-sm">
                    <h2 className="text-2xl font-medium text-gray-900 mb-4">
                        Статус раздела
                    </h2>

                    <div className="space-y-4">
                        <div className="inline-flex rounded-full bg-[#1E4080] px-4 py-2 text-white text-sm font-medium">
                            Раздел в разработке
                        </div>

                        <p className="text-gray-600 font-light leading-relaxed">
                            В ближайшем будущем здесь можно будет разместить документы,
                            публикации, инфографику, архив материалов и дополнительные
                            разъяснения.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-6">
                <div>
                    <h2 className="text-3xl font-bold leading-tight">
                        Будущее наполнение
                    </h2>
                    <p className="mt-2 text-lg font-light text-gray-600 leading-relaxed">
                        Ниже — возможная структура, которую позже можно будет наполнить
                        реальным контентом.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[
                        "Ключевые тезисы",
                        "Официальные материалы",
                        "Разъяснения и комментарии",
                        "Архив публикаций",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-[24px] border border-[#d9e2f2] bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-xl font-medium text-gray-900 mb-3">{item}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                Контент будет добавлен позже.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}