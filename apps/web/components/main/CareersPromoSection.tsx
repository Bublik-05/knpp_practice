import Link from "next/link";
import Image from "next/image";

interface CareersPromoSectionProps {
    vacanciesCount?: number;
}

export default function CareersPromoSection({
    vacanciesCount = 12,
}: CareersPromoSectionProps) {
    return (
        <section className="px-30 py-30">
            <div className="mx-auto w-full max-w-7xl">
                <Link
                    href="/vacancies"
                    className="group block overflow-hidden rounded-lg border border-[#d9e2f2] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef4ff] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(30,64,128,0.14)]"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="relative p-8 md:p-10 lg:p-12">
                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#1E4080]/6 blur-3xl" />
                            <div className="relative z-10 flex h-full flex-col">
                                <span className="inline-flex w-fit rounded-full border border-[#dbe5f4] bg-[#E0C58F] px-4 py-2 text-sm font-medium text-[#1E4080]">
                                    Карьера в компании
                                </span>

                                <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    Присоединяйтесь к команде и станьте частью будущих энергетических проектов
                                </h2>

                                <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-gray-600">
                                    На странице вакансий собраны актуальные предложения, направления
                                    работы и возможности для профессионального роста.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <div className="min-w-[180px] rounded-lg border border-[#dbe5f4] bg-white px-5 py-4 shadow-sm">
                                        <p className="text-sm text-gray-500">Актуальные вакансии</p>
                                        <p className="mt-2 text-3xl font-bold text-[#1E4080]">
                                            {vacanciesCount}+
                                        </p>
                                    </div>

                                    <div className="min-w-[180px] rounded-lg border border-[#dbe5f4] bg-white px-5 py-4 shadow-sm">
                                        <p className="text-sm text-gray-500">Формат</p>
                                        <p className="mt-2 text-lg font-semibold text-gray-900">
                                            Офис · Производство · IT
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <span className="inline-flex items-center gap-3 rounded-full bg-[#1E4080] px-6 py-3 text-white font-medium transition-all duration-300 group-hover:bg-[#163465]">
                                        Смотреть вакансии
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.8}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-[320px] border-t border-[#dbe5f4] bg-[#eef4ff] lg:min-h-[620px] lg:border-l lg:border-t-0">
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/generated_human.png"
                                    alt="Вакансии"
                                    fill
                                    className="object-cover object-[center_15%]"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#10284f]/30 via-transparent to-transparent" />

                            <div className="absolute left-5 top-5 rounded-lg border border-white/60 bg-white/80 px-4 py-3 backdrop-blur-sm">
                                <p className="text-sm text-gray-500">Направления</p>
                                <p className="mt-1 font-semibold text-gray-900">
                                    Инженерия · Безопасность · Аналитика
                                </p>
                            </div>

                            <div className="absolute bottom-5 right-5 rounded-lg border border-white/60 bg-white/85 px-4 py-3 backdrop-blur-sm shadow-sm">
                                <p className="text-sm text-gray-500">Команда</p>
                                <p className="mt-1 font-semibold text-[#1E4080]">
                                    Открыты новые позиции
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}