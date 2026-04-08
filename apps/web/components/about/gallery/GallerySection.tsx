import { galleries } from "@/lib/galleries";
import GalleryCard from "./GalleryCard";
import type { RefObject } from "react";

type Props = {
  onOpenGallery: (slug: string) => void;
  titleRef?: RefObject<HTMLHeadingElement | null>;
};

export default function GallerySection({ onOpenGallery, titleRef }: Props) {
  return (
    <section className="flex flex-col gap-8">
      <h1 ref={titleRef} className="text-5xl font-bold text-gray-900">
        Галерея
      </h1>

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