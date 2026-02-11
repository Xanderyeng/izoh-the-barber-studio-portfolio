/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
"use client";

import {
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Plus,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  isPlaceholder?: boolean;
}

const initialItems: GalleryItem[] = [
  {
    id: "1",
    url: "",
    category: "fade",
    categoryLabel: "Fade",
    title: "Skin Fade – Head Shave",
    isPlaceholder: true,
  },
  {
    id: "2",
    url: "",
    category: "braids",
    categoryLabel: "Braids",
    title: "Braids with Skin Fade",
    isPlaceholder: true,
  },
  {
    id: "3",
    url: "",
    category: "texture",
    categoryLabel: "Multi-Texture",
    title: "Curly Taper Fade",
    isPlaceholder: true,
  },
  {
    id: "4",
    url: "",
    category: "texture",
    categoryLabel: "Multi-Texture",
    title: "Pompadour – Asian Hair",
    isPlaceholder: true,
  },
  {
    id: "5",
    url: "",
    category: "cut",
    categoryLabel: "Cut",
    title: "Precision Cut – Caucasian Hair",
    isPlaceholder: true,
  },
  {
    id: "6",
    url: "",
    category: "fade",
    categoryLabel: "Fade",
    title: "Low Fade",
    isPlaceholder: true,
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

const categoryOptions = [
  { value: "fade" as const, label: "Fade", defaultTitle: "Skin Fade" },
  { value: "cut" as const, label: "Cut", defaultTitle: "Precision Cut" },
  { value: "braids" as const, label: "Braids", defaultTitle: "Braids + Fade" },
  { value: "colour" as const, label: "Colour", defaultTitle: "Colour Work" },
  { value: "beard" as const, label: "Beard", defaultTitle: "Beard Design" },
  {
    value: "texture" as const,
    label: "Multi-Texture",
    defaultTitle: "Multi-Texture Style",
  },
];

export function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>(initialItems);
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Exclude<
    Category,
    "all"
  > | null>(null);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [pendingIndex, setPendingIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items
    .filter((item) => activeFilter === "all" || item.category === activeFilter)
    .filter((item) => !item.isPlaceholder || item.url);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setPendingFiles(files);
    setPendingIndex(0);
    setShowCategoryModal(true);
    e.target.value = ""; // Reset input
  };

  const handleCategorySelect = (cat: Exclude<Category, "all">) => {
    setSelectedCategory(cat);
    const categoryOption = categoryOptions.find((c) => c.value === cat);
    if (!categoryOption) return;

    const file = pendingFiles[pendingIndex];
    const reader = new FileReader();

    reader.onload = (e) => {
      const url = e.target?.result as string;
      const newItem: GalleryItem = {
        id: Date.now().toString(),
        url,
        category: cat,
        categoryLabel: categoryOption.label,
        title: categoryOption.defaultTitle,
      };

      setItems((prev) => [...prev, newItem]);

      // Move to next file or close modal
      if (pendingIndex < pendingFiles.length - 1) {
        setPendingIndex(pendingIndex + 1);
        setSelectedCategory(null);
      } else {
        setShowCategoryModal(false);
        setPendingFiles([]);
        setPendingIndex(0);
        setSelectedCategory(null);
      }
    };

    reader.readAsDataURL(file);
  };

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
      <div className="py-[90px] px-5 md:px-12">
        <div className="max-w-[1200px] mx-auto" id="gallery">
          <p className="text-[11px] tracking-[4px] text-[#c9a84c] uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-white mb-3">
            The Work
          </h2>
          <div className="w-[50px] h-[2px] bg-[#c9a84c] mb-9" />

          {/* Filter Bar */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveFilter(cat.value)}
                className={`px-5 py-2 rounded-sm text-[10px] tracking-[2px] uppercase cursor-pointer border transition-all ${
                  activeFilter === cat.value
                    ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/8"
                    : "border-[#2a2a2a] text-[#888] hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-[#c9a84c]/8"
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
                className="relative aspect-square bg-[#161616] border border-[#2a2a2a] rounded-sm overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] group text-left"
              >
                {item.url ? (
                  <>
                    {/* biome-ignore lint/performance/noImgElement: user uploaded image from FileReader */}
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/78 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] tracking-[3px] text-[#c9a84c] uppercase mb-1">
                        {item.categoryLabel}
                      </span>
                      <span className="text-[14px] font-bold text-white">
                        {item.title}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center flex-col gap-2 text-[#2a2a2a]">
                    <ImageIcon
                      className="w-7 h-7 opacity-40"
                      strokeWidth={1.5}
                    />
                    <span className="text-[10px] tracking-wide text-[#888]">
                      {item.title}
                    </span>
                  </div>
                )}
              </button>
            ))}

            {/* Add Button */}
            <label className="flex items-center justify-center gap-2 border-2 border-dashed border-[#2a2a2a] text-[#888] cursor-pointer text-[11px] tracking-[2px] uppercase transition-all hover:border-[#c9a84c] hover:text-[#c9a84c] flex-col aspect-square bg-transparent rounded-sm">
              <Plus className="w-7 h-7" strokeWidth={1.5} />
              Add Your Photo
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          </div>

          <p className="text-[#888] text-xs mt-5 tracking-wide">
            💡 Click{" "}
            <strong className="text-[#c9a84c]">
              &ldquo;Add Your Photo&rdquo;
            </strong>{" "}
            to upload your real work images. Click any uploaded image to view
            full screen.
          </p>
        </div>
      </div>

      {/* Category Selection Modal */}
      <Dialog open={showCategoryModal} onOpenChange={setShowCategoryModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-sm tracking-[2px] uppercase mb-6">
              Select a Category
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {categoryOptions.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => handleCategorySelect(cat.value)}
                className={`px-4 py-2 border rounded-sm text-[11px] tracking-[1.5px] uppercase cursor-pointer transition-all ${
                  selectedCategory === cat.value
                    ? "border-[#c9a84c] text-[#c9a84c] bg-[#c9a84c]/10"
                    : "border-[#2a2a2a] text-[#888] hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            onClick={() => setShowCategoryModal(false)}
            className="w-full"
          >
            Cancel
          </Button>
        </DialogContent>
      </Dialog>

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
            className="absolute top-5 right-7 text-[32px] text-gold cursor-pointer bg-transparent border-none leading-none hover:opacity-80"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[26px] text-gold cursor-pointer bg-black/40 border-none px-4 py-3 transition-colors hover:bg-gold/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* biome-ignore lint/performance/noImgElement: user uploaded image from FileReader */}
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
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[26px] text-gold cursor-pointer bg-black/40 border-none px-4 py-3 transition-colors hover:bg-gold/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="text-[10px] tracking-[3px] text-gold uppercase">
              {filteredItems[lightboxIndex].categoryLabel}
            </div>
            <div className="text-base text-white font-bold mt-1">
              {filteredItems[lightboxIndex].title}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
