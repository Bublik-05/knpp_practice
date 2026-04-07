export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export type GalleryItem = {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  previewImages: GalleryImage[];
  images: GalleryImage[];
};

export const galleries: GalleryItem[] = [
  {
    id: 1,
    slug: "objects",
    title: "Объекты",
    shortDescription: "Фотографии объектов компании.",
    description: "Подробная фотогалерея объектов компании.",
    previewImages: [
      { id: 1, src: "/images/news1-img.jpg", alt: "Фото 1" },
      { id: 2, src: "/images/news2-img.jpg", alt: "Фото 2" },
      { id: 3, src: "/images/news3-img.jpg", alt: "Фото 3" },
      { id: 4, src: "/images/news4-img.jpg", alt: "Фото 4" },
      { id: 5, src: "/images/news5-img.jpg", alt: "Фото 5" },
      { id: 6, src: "/images/news1-img.jpg", alt: "Фото 6" },
    ],
    images: [
      { id: 1, src: "/images/news1-img.jpg", alt: "Фото 1" },
      { id: 2, src: "/images/news2-img.jpg", alt: "Фото 2" },
      { id: 3, src: "/images/news3-img.jpg", alt: "Фото 3" },
      { id: 4, src: "/images/news4-img.jpg", alt: "Фото 4" },
      { id: 5, src: "/images/news5-img.jpg", alt: "Фото 5" },
      { id: 6, src: "/images/news1-img.jpg", alt: "Фото 6" },
    ],
  },
  {
    id: 2,
    slug: "construction",
    title: "Строительство",
    shortDescription: "Фотографии строительных площадок.",
    description: "Подробная фотогалерея строительных площадок и этапов работ.",
    previewImages: [
      { id: 1, src: "/images/news2-img.jpg", alt: "Фото 1" },
      { id: 2, src: "/images/news3-img.jpg", alt: "Фото 2" },
      { id: 3, src: "/images/news4-img.jpg", alt: "Фото 3" },
      { id: 4, src: "/images/news5-img.jpg", alt: "Фото 4" },
      { id: 5, src: "/images/news1-img.jpg", alt: "Фото 5" },
      { id: 6, src: "/images/news2-img.jpg", alt: "Фото 6" },
    ],
    images: [
      { id: 1, src: "/images/news2-img.jpg", alt: "Фото 1" },
      { id: 2, src: "/images/news3-img.jpg", alt: "Фото 2" },
      { id: 3, src: "/images/news4-img.jpg", alt: "Фото 3" },
      { id: 4, src: "/images/news5-img.jpg", alt: "Фото 4" },
      { id: 5, src: "/images/news1-img.jpg", alt: "Фото 5" },
      { id: 6, src: "/images/news2-img.jpg", alt: "Фото 6" },
    ],
  },
  {
    id: 3,
    slug: "infrastructure",
    title: "Инфраструктура",
    shortDescription: "Фотографии инфраструктурных объектов.",
    description: "Подробная фотогалерея инфраструктурных объектов.",
    previewImages: [
      { id: 1, src: "/images/news3-img.jpg", alt: "Фото 1" },
      { id: 2, src: "/images/news4-img.jpg", alt: "Фото 2" },
      { id: 3, src: "/images/news5-img.jpg", alt: "Фото 3" },
      { id: 4, src: "/images/news1-img.jpg", alt: "Фото 4" },
      { id: 5, src: "/images/news2-img.jpg", alt: "Фото 5" },
      { id: 6, src: "/images/news3-img.jpg", alt: "Фото 6" },
    ],
    images: [
      { id: 1, src: "/images/news3-img.jpg", alt: "Фото 1" },
      { id: 2, src: "/images/news4-img.jpg", alt: "Фото 2" },
      { id: 3, src: "/images/news5-img.jpg", alt: "Фото 3" },
      { id: 4, src: "/images/news1-img.jpg", alt: "Фото 4" },
      { id: 5, src: "/images/news2-img.jpg", alt: "Фото 5" },
      { id: 6, src: "/images/news3-img.jpg", alt: "Фото 6" },
    ],
  },
];