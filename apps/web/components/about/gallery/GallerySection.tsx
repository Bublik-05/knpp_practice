import { galleries } from "@/lib/galleries";
import GalleryCard from "./GalleryCard";

type Props = {
  onOpenGallery: (slug: string) => void;
};

export default function GallerySection({ onOpenGallery }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-5xl font-bold text-gray-900">Галерея</h1>

      <div className="flex flex-col gap-8">
        {galleries.map((gallery) => (
          <GalleryCard
            key={gallery.id}
            gallery={gallery}
            onOpenGallery={onOpenGallery}
          />
        ))}
      </div>
    </section>
  );
}