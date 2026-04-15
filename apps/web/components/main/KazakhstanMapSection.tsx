"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type City = {
    id: string;
    name: string;
    x: string;
    y: string;
    badge: string;
    description: string;
    details: string[];
    image: string | null;
};

const cities: City[] = [
    {
        id: "balkhash",
        name: "Балхаш",
        x: "68.8%",
        y: "58.2%",
        badge: "Потенциальная площадка",
        description:
            "Балхаш рассматривается как одна из возможных площадок для развития крупной энергетической инфраструктуры. В макете здесь можно показывать краткую информацию о статусе обсуждения, преимуществах площадки и перспективах проекта.",
        details: [
            "Макетный статус: предварительное рассмотрение",
            "Формат: крупный энергетический объект",
            "Фокус: развитие атомной энергетики и инфраструктуры",
        ],
        image: null,
    },
    {
        id: "moyinkul",
        name: "Мойнкуль",
        x: "75%",
        y: "15.5%",
        badge: "Перспективная зона",
        description:
            "Вторая локация пока оставлена как рабочая заготовка для дальнейшего уточнения. Здесь можно разместить информацию о возможной площадке, этапах проработки и ее роли в энергетическом развитии страны.",
        details: [
            "Макетный статус: рабочая гипотеза",
            "Формат: резервная или альтернативная площадка",
            "Фокус: расширение карты будущих проектов",
        ],
        image: null,
    },
];

function CityImage({ city }: { city: City }) {
    if (city.image) {
        return (
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eef4ff]">
                <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover"
                />
            </div>
        );
    }

    return (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#eef4ff] via-[#dde8fb] to-[#cfdcf5]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_38%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <div className="mb-3 h-14 w-14 rounded-2xl border border-white/70 bg-white/40 backdrop-blur-sm" />
                <p className="text-sm font-medium text-[#1E4080]">Фото площадки</p>
                <p className="mt-1 text-xs text-[#1E4080]/75">
                    Сюда позже можно поставить реальное изображение
                </p>
            </div>
        </div>
    );
}

export default function KazakhstanMapSection() {
    const [activeCityId, setActiveCityId] = useState<string | null>(null);

    const activeCity = useMemo(
        () => cities.find((city) => city.id === activeCityId) ?? null,
        [activeCityId]
    );

    useEffect(() => {
        if (!activeCityId) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveCityId(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeCityId]);

    return (
        <section className="px-30 pb-30 flex flex-col gap-8">
            <div className="flex flex-col gap-3 max-w-3xl">
                <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
                    Карта Казахстана
                </h2>
                <p className="font-light text-lg text-gray-600 leading-relaxed">
                    Интерактивная карта-заготовка для будущих объектов. Нажмите на
                    метку, чтобы открыть карточку с краткой информацией.
                </p>
            </div>

            <div className="rounded-lg border border-[#d9e2f2] bg-[#f8fbff] p-6 md:p-8 shadow-sm">
                <div className="relative mx-auto w-full max-w-6xl min-h-[520px] md:min-h-0 md:aspect-[16/9] rounded-lg border border-[#e5ebf5] bg-white overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/Blank_map_of_Kazakhstan.svg"
                            alt="Карта Казахстана"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {activeCity && (
                        <>
                            <button
                                type="button"
                                aria-label="Закрыть карточку"
                                onClick={() => setActiveCityId(null)}
                                className="absolute inset-0 z-20 bg-white/0"
                            />

                            <svg
                                className="pointer-events-none absolute inset-0 z-30 h-full w-full"
                                preserveAspectRatio="none"
                            >
                                <line
                                    x1={activeCity.x}
                                    y1={activeCity.y}
                                    x2="50%"
                                    y2="28%"
                                    stroke="#1E4080"
                                    strokeWidth="2.5"
                                    strokeDasharray="8 8"
                                    opacity="0.7"
                                />
                                <circle
                                    cx={activeCity.x}
                                    cy={activeCity.y}
                                    r="5.5"
                                    fill="#1E4080"
                                    stroke="white"
                                    strokeWidth="2.5"
                                />
                                <circle
                                    cx="50%"
                                    cy="28%"
                                    r="6.5"
                                    fill="white"
                                    stroke="#1E4080"
                                    strokeWidth="2.5"
                                />
                            </svg>

                            <div className="absolute left-1/2 top-1/2 z-30 w-[min(92%,430px)] -translate-x-1/2 -translate-y-1/2">
                                <div className="overflow-hidden rounded-[26px] border border-[#d9e2f2] bg-white shadow-[0_24px_60px_rgba(20,40,80,0.18)]">
                                    <CityImage city={activeCity} />

                                    <div className="p-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <span className="inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-medium text-[#1E4080]">
                                                    {activeCity.badge}
                                                </span>

                                                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                                    {activeCity.name}
                                                </h3>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setActiveCityId(null)}
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#1E4080] hover:text-[#1E4080]"
                                                aria-label="Закрыть карточку"
                                            >
                                                ×
                                            </button>
                                        </div>

                                        <div className="mt-4 max-h-[220px] overflow-y-auto pr-1">
                                            <p className="text-sm leading-relaxed text-gray-600">
                                                {activeCity.description}
                                            </p>

                                            <div className="mt-4 rounded-2xl border border-[#e7eef9] bg-[#f8fbff] p-4">
                                                <p className="text-xs uppercase tracking-[0.14em] text-[#1E4080]/70">
                                                    Краткая информация
                                                </p>

                                                <div className="mt-3 space-y-2">
                                                    {activeCity.details.map((item) => (
                                                        <div
                                                            key={item}
                                                            className="rounded-xl bg-white px-3 py-2 text-sm text-gray-700 border border-[#edf2fa]"
                                                        >
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {cities.map((city) => {
                        const isActive = activeCityId === city.id;

                        return (
                            <div
                                key={city.id}
                                className="absolute z-40 -translate-x-1/2 -translate-y-full"
                                style={{ left: city.x, top: city.y }}
                            >
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveCityId((prev) =>
                                            prev === city.id ? null : city.id
                                        );
                                    }}
                                    className="group relative flex flex-col items-center outline-none"
                                    aria-label={`Открыть информацию: ${city.name}`}
                                >
                                    <span
                                        className={`absolute top-[-6px] h-10 w-10 rounded-full blur-md transition-all duration-300 ${isActive
                                                ? "bg-[#1E4080]/30 scale-110"
                                                : "bg-[#1E4080]/18 group-hover:scale-110"
                                            }`}
                                    />

                                    <span
                                        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 ${isActive
                                                ? "border-white bg-[#1E4080] scale-110"
                                                : "border-white bg-[#224b93] group-hover:scale-105"
                                            }`}
                                    >
                                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                                    </span>

                                    <span
                                        className={`z-10 h-7 w-[3px] rounded-full transition-all duration-300 ${isActive ? "bg-[#1E4080]" : "bg-[#224b93]"
                                            }`}
                                    />

                                    <span
                                        className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition-all duration-300 ${isActive
                                                ? "border-[#1E4080]/20 bg-white text-[#1E4080]"
                                                : "border-[#dbe5f4] bg-white/95 text-[#1E4080] group-hover:border-[#1E4080]/20"
                                            }`}
                                    >
                                        {city.name}
                                    </span>
                                </button>
                            </div>
                        );
                    })}

                    <div className="absolute left-5 bottom-5 rounded-full border border-[#dbe5f4] bg-white/95 px-4 py-2 text-sm text-gray-600 shadow-sm z-10">
                        {activeCity
                            ? "Нажмите в любое место, чтобы закрыть"
                            : "Нажмите на метку"}
                    </div>
                </div>
            </div>
        </section>
    );
}