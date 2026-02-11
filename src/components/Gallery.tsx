/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Category =
  | "all"
  | "fade"
  | "cut"
  | "braids"
  | "colour"
  | "beard"
  | "texture";

interface GalleryItem {
  id: string;
  url: string;
  category: Category;
  categoryLabel: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    url: "/fades-1.webp",
    category: "fade",
    categoryLabel: "Fade",
    title: "Precision Fade",
  },
  {
    id: "2",
    url: "/fades-3.webp",
    category: "fade",
    categoryLabel: "Fade",
    title: "Skin Fade",
  },
  {
    id: "3",
    url: "/cuts-1.webp",
    category: "cut",
    categoryLabel: "Cut",
    title: "Precision Scissor Cut",
  },
  {
    id: "4",
    url: "/cuts-2.webp",
    category: "cut",
    categoryLabel: "Cut",
    title: "Textured Cut",
  },
  {
    id: "5",
    url: "/cuts-3.webp",
    category: "cut",
    categoryLabel: "Cut",
    title: "Classic Cut",
  },
  {
    id: "6",
    url: "/cuts-4.webp",
    category: "cut",
    categoryLabel: "Cut",
    title: "Modern Cut",
  },
  {
    id: "7",
    url: "/braids.webp",
    category: "braids",
    categoryLabel: "Braids",
    title: "Braids with Fade",
  },
  {
    id: "8",
    url: "/color.webp",
    category: "colour",
    categoryLabel: "Colour",
    title: "Colour & Styling",
  },
  {
    id: "9",
    url: "/beards.webp",
    category: "beard",
    categoryLabel: "Beard",
    title: "Beard Design",
  },
];

const categories = [
  { value: "all" as const, label: "All" },
  { value: "fade" as const, label: "Fades" },
  { value: "cut" as const, label: "Cuts" },
  { value: "braids" as const, label: "Braids" },
  { value: "colour" as const, label: "Colour" },
  { value: "beard" as const, label: "Beard" },
  { value: "texture" as const, label: "Multi-Texture" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === "all" || item.category === activeFilter,
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length,
    );
  }, [filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <>
      <section className="py-[90px] px-5 md:px-12">
        <div className="max-w-[1200px] mx-auto" id="gallery">
          <p className="section-label">Portfolio</p>
          <h2>The Work</h2>
          <div className="section-divider" />

          {/* Filter Bar */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2 rounded-sm text-sm tracking-wide uppercase cursor-pointer border transition-all ${
                  activeFilter === cat.value
                    ? "border-gold text-gold bg-gold/8"
                    : "border-border text-muted hover:border-gold hover:text-gold hover:bg-gold/8"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-square bg-dark-card border border-border rounded-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] group text-left"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/78 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm tracking-wider text-gold uppercase mb-1">
                    {item.categoryLabel}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: keyboard handled by useEffect */}
      {/* biome-ignore lint/a11y/noStaticElementInteractions: lightbox backdrop */}
      {lightboxOpen && filteredItems[lightboxIndex]?.url && (
        <div
          className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-5 right-7 text-xl text-gold cursor-pointer bg-transparent border-none leading-none hover:opacity-80"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gold cursor-pointer bg-black/40 border-none px-4 py-3 transition-colors hover:bg-gold/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={filteredItems[lightboxIndex].url}
            alt={filteredItems[lightboxIndex].title}
            className="max-w-[90vw] max-h-[88vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gold cursor-pointer bg-black/40 border-none px-4 py-3 transition-colors hover:bg-gold/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="text-sm tracking-wider text-gold uppercase">
              {filteredItems[lightboxIndex].categoryLabel}
            </div>
            <div className="text-base font-bold text-white mt-1">
              {filteredItems[lightboxIndex].title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
