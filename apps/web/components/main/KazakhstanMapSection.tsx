"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type City = {
    id: string;
    name: string;
    x: string;
    y: string;
    badge: string;
    summary: string;
    meta: string[];
    image: string | null;
};

const cities: City[] = [
    {
        id: "balkhash",
        name: "Балхаш",
        x: "68.8%",
        y: "63%",
        badge: "Потенциальная площадка",
        summary:
            "Балхаш рассматривается как одна из возможных площадок для развития энергетической инфраструктуры и будущих проектов в атомной сфере.",
        meta: ["Предварительное рассмотрение", "Крупный энергетический объект"],
        image: "/images/балхаш.png",
    },
    {
        id: "moyinkul",
        name: "Мойнкуль",
        x: "75%",
        y: "21%",
        badge: "Перспективная зона",
        summary:
            "Локация пока используется как рабочая заготовка для макета. Позже здесь можно разместить уточнённую информацию о площадке и статусе проекта.",
        meta: ["Рабочая гипотеза", "Резервная площадка"],
        image: "/images/мойынкуль.png",
    },
];

function CityImage({ city }: { city: City }) {
    if (city.image) {
        return (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-[#eef4ff]">
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
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-[#eef4ff] via-[#dde8fb] to-[#cfdcf5]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.72),transparent_38%)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
                <div className="h-14 w-14 rounded-lg border border-white/70 bg-white/40 backdrop-blur-sm" />
                <p className="text-sm font-medium text-[#1E4080]">Фото площадки</p>
                <p className="text-xs text-[#1E4080]/75">
                    Здесь позже можно добавить изображение
                </p>
            </div>
        </div>
    );
}

function FlagMarker({ active }: { active: boolean }) {
    return (
        <div className="relative flex flex-col items-center">
            <span
                className={`absolute top-1 h-8 w-8 rounded-full blur-md transition-all duration-300 ${active ? "bg-[#1E4080]/22 scale-110" : "bg-[#1E4080]/14"
                    }`}
            />

            <div className="relative z-10 flex h-12 items-start">
                <span
                    className={`block h-12 w-[3px] rounded-full ${active ? "bg-[#1E4080]" : "bg-[#224b93]"
                        }`}
                />

                <span
                    className={`block h-7 w-6 rounded-r-lg rounded-tl-sm shadow-sm ${active ? "bg-[#1E4080]" : "bg-[#224b93]"
                        }`}
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 82% 50%, 100% 100%, 0 100%)",
                    }}
                />
            </div>

            <span
                className={`relative z-10 block h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm ${active ? "bg-[#1E4080]" : "bg-[#224b93]"
                    }`}
            />
        </div>
    );
}

export default function KazakhstanMapSection({ className }: { className?: string }) {
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
        <section className={className ?? "flex flex-col gap-8 px-30 pb-30"}>
            <div className="flex max-w-3xl flex-col gap-3">
                <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                    Карта Казахстана
                </h2>
                <p className="text-lg font-light leading-relaxed text-gray-600">
                    Интерактивная карта-заготовка для будущих объектов. Нажмите на
                    метку, чтобы открыть краткую информацию о локации.
                </p>
            </div>

            <div className="rounded-lg border border-[#d9e2f2] bg-[#f8fbff] p-6 shadow-sm md:p-8">
                <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg border border-[#e5ebf5] bg-white md:aspect-[16/9] md:min-h-0 min-h-[520px]">
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
                                    y2="29%"
                                    stroke="#1E4080"
                                    strokeWidth="2.5"
                                    strokeDasharray="8 8"
                                    opacity="0.55"
                                />
                                <circle
                                    cx={activeCity.x}
                                    cy={activeCity.y}
                                    r="4.5"
                                    fill="#1E4080"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="50%"
                                    cy="29%"
                                    r="5.5"
                                    fill="white"
                                    stroke="#1E4080"
                                    strokeWidth="2"
                                />
                            </svg>

                            <div className="absolute left-1/2 top-1/2 z-50 w-[min(92%,420px)] -translate-x-1/2 -translate-y-1/2">
                                <div className="flex flex-col overflow-hidden rounded-lg border border-[#d9e2f2] bg-white shadow-[0_24px_60px_rgba(20,40,80,0.16)]">
                                    <CityImage city={activeCity} />

                                    <div className="flex flex-col gap-4 p-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex flex-col gap-3">
                                                <span className="inline-flex w-fit rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-medium text-[#1E4080]">
                                                    {activeCity.badge}
                                                </span>

                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    {activeCity.name}
                                                </h3>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => setActiveCityId(null)}
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-[#1E4080] hover:text-[#1E4080]"
                                                aria-label="Закрыть карточку"
                                            >
                                                ×
                                            </button>
                                        </div>

                                        <p className="text-[15px] font-light leading-relaxed text-gray-600">
                                            {activeCity.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {activeCity.meta.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-lg border border-[#e7eef9] bg-[#f8fbff] px-3 py-2 text-sm text-gray-700"
                                                >
                                                    {item}
                                                </span>
                                            ))}
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
                                className={`absolute -translate-x-1/2 -translate-y-full ${isActive ? "z-25" : "z-40"
                                    }`}
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
                                    className="group flex flex-col items-center gap-2 outline-none"
                                    aria-label={`Открыть информацию: ${city.name}`}
                                >

                                    <div className="relative flex flex-col items-center">
                                        <span
                                            className={`absolute top-[-6px] h-10 w-10 rounded-full blur-md transition-all duration-300 ${isActive ? "bg-[#1E4080]/30 scale-110" : "bg-[#1E4080]/18 group-hover:scale-110"
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
                                    </div>

                                    <span
                                        className={`rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition-all duration-300 ${isActive
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

                    <div className="absolute bottom-5 left-5 z-10 rounded-full border border-[#dbe5f4] bg-white/95 px-4 py-2 text-sm text-gray-600 shadow-sm">
                        {activeCity
                            ? "Нажмите в любое место, чтобы закрыть"
                            : "Нажмите на метку"}
                    </div>
                </div>
            </div>
        </section>
    );
}