"use client";

import { useState } from "react";

type EnergySource = "coal" | "gas" | "nuclear" | "solar" | "wind";

interface SourceConfig {
    id: EnergySource;
    label: string;
    factor: number; // кг CO2 / МВт·ч
}

interface CalculationResult {
    volume: number;
    source: SourceConfig;
    emissionsKg: number;
    emissionsTons: number;
    carsEquivalent: number;
    comparison: Array<{
        id: EnergySource;
        label: string;
        tons: number;
        factor: number;
    }>;
    ratioToNuclear: number;
    insightText: string;
}

const SOURCES: SourceConfig[] = [
    { id: "coal", label: "Уголь", factor: 820 },
    { id: "gas", label: "Газ", factor: 490 },
    { id: "nuclear", label: "Атомная энергия", factor: 12 },
    { id: "solar", label: "Солнечная энергия", factor: 40 },
    { id: "wind", label: "Ветровая энергия", factor: 8 },
];

const DEFAULT_SOURCE: EnergySource = "coal";
const DEFAULT_VOLUME = "1000";
const CAR_TONS_PER_YEAR = 4.5;

function formatNumber(value: number, maximumFractionDigits = 0): string {
    return new Intl.NumberFormat("ru-RU", {
        maximumFractionDigits,
    }).format(value);
}

function getInsightText(
    source: SourceConfig,
    emissionsTons: number,
    ratioToNuclear: number,
    carsEquivalent: number
): string {
    if (source.id === "nuclear") {
        return `При выбранном объеме атомная энергия формирует низкий уровень выбросов CO₂. Это один из самых экологичных вариантов генерации и значительно чище угля и газа.`;
    }

    if (source.id === "wind") {
        return `При выбранном объеме ветровая энергия показывает один из самых низких уровней выбросов CO₂. Это значительно экологичнее ископаемых источников и сопоставимо с лучшими низкоуглеродными решениями.`;
    }

    if (source.id === "solar") {
        return `При выбранном объеме солнечная энергия формирует сравнительно низкий уровень выбросов CO₂. Это заметно лучше угля и газа, хотя атомная и ветровая энергия дают еще более низкий углеродный след.`;
    }

    return `При выбранном объеме генерации ${source.label.toLowerCase()} формирует значительно более высокий уровень выбросов CO₂ по сравнению с низкоуглеродными источниками. Это сопоставимо примерно с ${formatNumber(
        carsEquivalent
    )} автомобилями в год и в ${formatNumber(
        ratioToNuclear,
        1
    )} раз больше, чем атомная энергия.`;
}

function calculateEmissions(
    sourceId: EnergySource,
    volume: number
): CalculationResult {
    const source =
        SOURCES.find((item) => item.id === sourceId) ?? SOURCES[0];

    const emissionsKg = volume * source.factor;
    const emissionsTons = emissionsKg / 1000;
    const carsEquivalent = emissionsTons / CAR_TONS_PER_YEAR;

    const comparison = SOURCES.map((item) => ({
        id: item.id,
        label: item.label,
        tons: (volume * item.factor) / 1000,
        factor: item.factor,
    }));

    const nuclearTons =
        comparison.find((item) => item.id === "nuclear")?.tons ?? 0;

    const ratioToNuclear =
        nuclearTons > 0 ? emissionsTons / nuclearTons : 0;

    return {
        volume,
        source,
        emissionsKg,
        emissionsTons,
        carsEquivalent,
        comparison,
        ratioToNuclear,
        insightText: getInsightText(
            source,
            emissionsTons,
            ratioToNuclear,
            carsEquivalent
        ),
    };
}

export default function EnvironmentSection() {
    const [selectedSource, setSelectedSource] =
        useState<EnergySource>(DEFAULT_SOURCE);
    const [volume, setVolume] = useState<string>(DEFAULT_VOLUME);
    const [error, setError] = useState<string>("");
    const [result, setResult] = useState<CalculationResult>(
        calculateEmissions(DEFAULT_SOURCE, Number(DEFAULT_VOLUME))
    );

    const handleCalculate = () => {
        const parsedVolume = Number(volume);

        if (!volume.trim() || Number.isNaN(parsedVolume) || parsedVolume <= 0) {
            setError("Введите корректный объем электроэнергии в МВт·ч.");
            return;
        }

        setError("");
        setResult(calculateEmissions(selectedSource, parsedVolume));
    };

    const handleReset = () => {
        setSelectedSource(DEFAULT_SOURCE);
        setVolume(DEFAULT_VOLUME);
        setError("");
        setResult(calculateEmissions(DEFAULT_SOURCE, Number(DEFAULT_VOLUME)));
    };

    const selectedComparison =
        result.comparison.find((item) => item.id === result.source.id) ??
        result.comparison[0];

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h2 className="text-3xl font-medium">Атомная энергия и экология</h2>

                <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Атомная энергия — один из самых экологически чистых источников
                    электроэнергии.
                </p>
            </div>

            <div className="space-y-6">
                <ul className="list-disc ml-6 text-lg text-gray-700 font-light space-y-3 leading-relaxed">
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

                <div className="rounded-2xl border border-[#dbe5f4] bg-gradient-to-br from-white to-[#f7faff] p-6 md:p-8 shadow-sm space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-medium text-[#1E4080]">
                            Онлайн-калькулятор выбросов CO₂
                        </h3>
                        <p className="text-gray-700 font-light leading-relaxed">
                            Сравните выбросы CO₂ при одинаковом объеме генерации для разных
                            источников энергии.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-6">
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-5">
                            <div className="space-y-2">
                                <label
                                    htmlFor="energy-source"
                                    className="block text-sm font-medium text-gray-800"
                                >
                                    Источник энергии
                                </label>
                                <select
                                    id="energy-source"
                                    value={selectedSource}
                                    onChange={(e) =>
                                        setSelectedSource(e.target.value as EnergySource)
                                    }
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#1E4080] focus:ring-2 focus:ring-[#1E4080]/10"
                                >
                                    {SOURCES.map((source) => (
                                        <option key={source.id} value={source.id}>
                                            {source.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="energy-volume"
                                    className="block text-sm font-medium text-gray-800"
                                >
                                    Объем электроэнергии, МВт·ч
                                </label>
                                <input
                                    id="energy-volume"
                                    type="number"
                                    min="0"
                                    step="1"
                                    value={volume}
                                    onChange={(e) => setVolume(e.target.value)}
                                    placeholder="Например: 1000"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-[#1E4080] focus:ring-2 focus:ring-[#1E4080]/10"
                                />
                            </div>

                            {error ? (
                                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {error}
                                </div>
                            ) : null}

                            <div className="flex flex-wrap gap-3 pt-1">
                                <button
                                    type="button"
                                    onClick={handleCalculate}
                                    className="inline-flex items-center justify-center rounded-full bg-[#1E4080] px-6 py-3 text-white font-medium transition hover:bg-[#163465]"
                                >
                                    Рассчитать
                                </button>

                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-800 font-medium transition hover:border-[#1E4080] hover:text-[#1E4080]"
                                >
                                    Сбросить
                                </button>
                            </div>

                            <div className="rounded-2xl bg-[#f5f8fd] p-4 border border-[#dbe5f4]">
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Расчет является ориентировочным и основан на усредненных
                                    коэффициентах выбросов. Фактические значения могут отличаться
                                    в зависимости от технологий и условий эксплуатации.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="rounded-2xl bg-[#1E4080] text-white p-6 shadow-sm">
                                <p className="text-sm uppercase tracking-[0.18em] text-white/70 mb-2">
                                    Выбросы CO₂
                                </p>
                                <div className="text-4xl md:text-5xl font-semibold leading-none">
                                    {formatNumber(result.emissionsTons)} т
                                </div>
                                <p className="mt-3 text-white/80 font-light">
                                    {result.source.label} · {formatNumber(result.volume)} МВт·ч
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Сравнение с атомной энергией
                                    </p>
                                    <p className="text-3xl font-semibold text-[#1E4080]">
                                        {result.source.id === "nuclear"
                                            ? "1×"
                                            : `${formatNumber(result.ratioToNuclear, 1)}×`}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-700 font-light leading-relaxed">
                                        {result.source.id === "nuclear"
                                            ? "Это базовый низкоуглеродный уровень."
                                            : `Это во столько раз больше, чем у атомной энергии при том же объеме.`}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                    <p className="text-sm text-gray-500 mb-2">
                                        Эквивалент автомобилей
                                    </p>
                                    <p className="text-3xl font-semibold text-[#1E4080]">
                                        ≈ {formatNumber(result.carsEquivalent)}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-700 font-light leading-relaxed">
                                        Принято из расчета 4.5 тонны CO₂ на 1 автомобиль в год.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <h4 className="text-xl font-medium text-gray-900">
                                        Сравнение по источникам
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                        при {formatNumber(result.volume)} МВт·ч
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    {result.comparison.map((item) => {
                                        const isActive = item.id === selectedComparison.id;
                                        const widthPercent =
                                            result.comparison.length > 0
                                                ? (item.tons /
                                                    Math.max(
                                                        ...result.comparison.map((entry) => entry.tons)
                                                    )) *
                                                100
                                                : 0;

                                        return (
                                            <div
                                                key={item.id}
                                                className={`rounded-xl border p-4 transition ${isActive
                                                        ? "border-[#1E4080] bg-[#f5f8fd]"
                                                        : "border-gray-200 bg-white"
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between gap-4 mb-3">
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {item.label}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {item.factor} кг CO₂ / МВт·ч
                                                        </p>
                                                    </div>
                                                    <p className="text-lg font-semibold text-[#1E4080]">
                                                        {formatNumber(item.tons)} т
                                                    </p>
                                                </div>

                                                <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                                                    <div
                                                        className="h-full rounded-full bg-[#1E4080]"
                                                        style={{ width: `${widthPercent}%` }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-[#dbe5f4] bg-[#f7faff] p-5 shadow-sm">
                                <h4 className="text-lg font-medium text-[#1E4080] mb-2">
                                    Пояснение
                                </h4>
                                <p className="text-gray-700 font-light leading-relaxed">
                                    {result.insightText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}