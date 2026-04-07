import Image from "next/image";
import type { GalleryItem } from "@/lib/galleries";

type Props = {
  gallery: GalleryItem;
  onOpenGallery: (slug: string) => void;
};

export default function GalleryCard({ gallery, onOpenGallery }: Props) {
  const photos = gallery.previewImages;

  return (
    <button
      type="button"
      onClick={() => onOpenGallery(gallery.slug)}
      className="
        w-full text-left bg-white rounded-lg p-6 border border-gray-100
        shadow-md
      "
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-900">{gallery.title}</h2>
          <p className="text-gray-600 max-w-3xl">{gallery.shortDescription}</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="relative col-span-2 h-[300px] rounded-lg overflow-hidden">
              <Image
                src={photos[0]?.src ?? "/images/news1-img.jpg"}
                alt={photos[0]?.alt ?? "Фото 1"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative h-[144px] rounded-lg overflow-hidden">
                <Image
                  src={photos[1]?.src ?? "/images/news2-img.jpg"}
                  alt={photos[1]?.alt ?? "Фото 2"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="relative h-[144px] rounded-lg overflow-hidden">
                <Image
                  src={photos[2]?.src ?? "/images/news3-img.jpg"}
                  alt={photos[2]?.alt ?? "Фото 3"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="relative h-36 rounded-lg overflow-hidden">
              <Image
                src={photos[3]?.src ?? "/images/news4-img.jpg"}
                alt={photos[3]?.alt ?? "Фото 4"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="relative h-36 rounded-lg overflow-hidden">
              <Image
                src={photos[4]?.src ?? "/images/news5-img.jpg"}
                alt={photos[4]?.alt ?? "Фото 5"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="relative h-36 rounded-lg overflow-hidden">
              <Image
                src={photos[5]?.src ?? "/images/news1-img.jpg"}
                alt={photos[5]?.alt ?? "Фото 6"}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <span className="inline-flex items-center gap-2 text-[#1E4080] font-light rounded-full py-4 px-6 pl-7 hover:bg-[#1E4080] hover:text-white transition-colors duration-300">
            Смотреть галерею
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}