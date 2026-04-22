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