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
    <section id="section-gallery" className="flex flex-col gap-6 scroll-mt-24">
      <h2 className="text-2xl font-bold text-gray-900">Галерея</h2>

      <div className="grid grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <div key={i} className="relative h-36 rounded-xl overflow-hidden">
            <Image src={src} alt={`Фото ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-[#1E4080] font-medium text-[15px] hover:underline"
        >
          Смотреть все
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
