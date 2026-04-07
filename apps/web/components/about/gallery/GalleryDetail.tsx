import Image from "next/image";
import { galleries } from "@/lib/galleries";

type Props = {
  slug: string;
  onBack: () => void;
};

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

export default function GalleryDetail({ slug, onBack }: Props) {
  const gallery = galleries.find((item) => item.slug === slug);

  if (!gallery) {
    return <div>Галерея не найдена</div>;
  }

  const imageGroups = chunkArray(gallery.images, 5);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white bg-[#1E4080] font-light rounded-full py-3 px-5 pr-7 hover:bg-[#0B1C3C] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Назад к галереям
          </button>
        </div>

        <h1 className="text-4xl font-medium text-gray-900">{gallery.title}</h1>
        <p className="text-gray-600 max-w-3xl">{gallery.description}</p>
      </div>

      <div className="flex flex-col gap-8">
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col gap-3">
            {/* Первая строка: 2 фото */}
            {group.length >= 1 && (
              <div className="grid grid-cols-3 gap-3">
                <div className="relative col-span-2 h-[320px] rounded-lg overflow-hidden">
                  <Image
                    src={group[0].src}
                    alt={group[0].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {group[1] && (
                  <div className="relative col-span-1 h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={group[1].src}
                      alt={group[1].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Вторая строка: 3 фото */}
            {(group[2] || group[3] || group[4]) && (
              <div className="grid grid-cols-3 gap-3">
                {group[2] && (
                  <div className="relative h-[180px] rounded-lg overflow-hidden">
                    <Image
                      src={group[2].src}
                      alt={group[2].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {group[3] && (
                  <div className="relative h-[180px] rounded-lg overflow-hidden">
                    <Image
                      src={group[3].src}
                      alt={group[3].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {group[4] && (
                  <div className="relative h-[180px] rounded-lg overflow-hidden">
                    <Image
                      src={group[4].src}
                      alt={group[4].alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}