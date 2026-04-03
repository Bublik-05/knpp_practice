import Image from "next/image";
import Link from "next/link";

const photos = [
  "/images/news1-img.jpg",
  "/images/news2-img.jpg",
  "/images/news3-img.jpg",
  "/images/news4-img.jpg",
  "/images/news5-img.jpg",
  "/images/news1-img.jpg",
];

export default function GallerySection() {
  return (
    <section id="section-gallery" className="flex flex-col gap-4 scroll-mt-24">
      <h2 className="text-4xl font-bold text-gray-900">Галерея</h2>

      <div className="flex flex-col gap-3">
        {/* Первая строка */}
        <div className="grid grid-cols-3 gap-3">
          <div className="relative col-span-2 h-[300px] rounded-lg overflow-hidden">
            <Image
              src={photos[0]}
              alt="Фото 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        
          <div className="flex flex-col gap-3">
            <div className="relative h-[144px] rounded-lg overflow-hidden">
              <Image
                src={photos[1]}
                alt="Фото 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
        
            <div className="relative h-[144px] rounded-lg overflow-hidden">
              <Image
                src={photos[2]}
                alt="Фото 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Вторая строка */}
        <div className="grid grid-cols-3 gap-3">
          <div className="relative h-36 rounded-lg overflow-hidden">
            <Image
              src={photos[3]}
              alt="Фото 4"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        
          <div className="relative h-36 rounded-lg overflow-hidden">
            <Image
              src={photos[4]}
              alt="Фото 5"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        
          <div className="relative h-36 rounded-lg overflow-hidden">
            <Image
              src={photos[5]}
              alt="Фото 6"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-[#1E4080] font-medium text-[15px] hover:bg-[#1E4080] hover:text-white rounded-full px-7 py-3.5 transition-colors duration-300"
        >
          Смотреть все
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
