"use client";

import Image from "next/image";

const cities = [
    { name: "Балхаш", x: "68.8%", y: "58.2%" },
    { name: "Мынколь", x: "75%", y: "15.5%" },
];

export default function KazakhstanMapSection() {
    return (
        <section className="px-30 py-24 flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-w-3xl">
                <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
                    Карта Казахстана
                </h2>
                <p className="font-light text-lg text-gray-600 leading-relaxed">
                    Интерактивная карта-заготовка для будущих объектов. Пока здесь можно
                    просто наводить на города.
                </p>
            </div>

            <div className="rounded-[28px] border border-[#d9e2f2] bg-[#f8fbff] p-6 md:p-8 shadow-sm">
                <div className="relative mx-auto w-full max-w-6xl aspect-[16/9] rounded-[24px] bg-white border border-[#e5ebf5] overflow-hidden">
                    {/* Настоящая карта Казахстана */}
                    <div className="absolute inset-0">
                        <Image
                            src="images/Blank_map_of_Kazakhstan.svg"
                            alt="Карта Казахстана"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Точки городов */}
                    {cities.map((city) => (
                        <div
                            key={city.name}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group"
                            style={{ left: city.x, top: city.y }}
                        >
                            <div className="relative flex items-center justify-center">
                                <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#1E4080]/15 group-hover:scale-125 transition-transform duration-200" />
                                <span className="relative z-10 h-3.5 w-3.5 rounded-full bg-[#1E4080] border-2 border-white shadow-md" />

                                <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-[#1E4080] px-3 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-1">
                                    {city.name}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="absolute left-5 bottom-5 rounded-full border border-[#dbe5f4] bg-white/95 px-4 py-2 text-sm text-gray-600 shadow-sm">
                        Наведи на точку
                    </div>
                </div>
            </div>
        </section>
    );
}