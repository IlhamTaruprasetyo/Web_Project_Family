import { useState } from "react";
import galeriSarapan from "@/assets/galeri/sarapan.jpg";
import galeriVilla from "@/assets/galeri/villa.jpg";
import galeriWisatapurwo from "@/assets/galeri/wisatapurwo.jpg";
import galeriTrah from "@/assets/galeri/Trah Sutohagnyono-Sampul.jpg";
import galeriWisataRaden from "@/assets/galeri/wisataraden.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  year: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: galeriSarapan,
    title: "Sarapan Keluarga",
    year: "2024",
    description: "Momen sarapan bersama keluarga di pagi hari",
  },
  {
    id: 2,
    src: galeriVilla,
    title: "Liburan di Villa",
    year: "2024",
    description: "Berkumpul keluarga di sebuah Villa di Kemuning indah",
  },
  {
    id: 3,
    src: galeriWisatapurwo,
    title: "Wisata Purwokerto",
    year: "2024",
    description: "Kebersamaan keluarga di tempat wisata Batu Raden, Purwokerto",
  },
  {
    id: 4,
    src: galeriTrah,
    title: "Sampul Trah Sutohagnyono",
    year: "2024",
    description: "Dokumentasi sampul resmi Trah Sutohagnyono untuk arsip keluarga",
  },
  {
    id: 5,
    src: galeriWisataRaden,
    title: "Wisata Batu Raden",
    year: "2024",
    description: "Keluarga berkumpul di destinasi wisata Batu Raden yang indah",
  },
];

// Duplicate items untuk infinite marquee effect
const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent-foreground font-medium text-sm tracking-widest uppercase mb-4">
            Kenangan Indah
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Galeri Foto Keluarga
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Koleksi foto bersejarah yang menyimpan momen-momen berharga keluarga
            kami dari generasi ke generasi.
          </p>
        </div>

        {/* Infinite Marquee Gallery */}
        <div className="max-w-7xl mx-auto mb-12">
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }

            .marquee-container {
              overflow: hidden;
              background: linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.1) 100%);
              border-radius: 12px;
              padding: 8px;
            }

            .marquee-content {
              display: flex;
              animation: marquee 30s linear infinite;
              gap: 24px;
              width: fit-content;
            }

            .marquee-content:hover {
              animation-play-state: paused;
            }

            .marquee-item {
              flex: 0 0 calc(25% - 18px);
              min-width: 220px;
              max-width: 280px;
            }

            @media (max-width: 768px) {
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .marquee-content {
                gap: 16px;
              }

              .marquee-item {
                flex: 0 0 calc(50% - 8px);
                min-width: 150px;
                max-width: 200px;
              }
            }

            @media (max-width: 640px) {
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }

              .marquee-item {
                flex: 0 0 100%;
                min-width: 100%;
                max-width: 100%;
              }
            }
          `}</style>

          <div className="marquee-container">
            <div className="marquee-content">
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="marquee-item group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-accent text-xs font-medium">
                      {image.year}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-primary-foreground mt-1 line-clamp-1">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-xs mt-1 line-clamp-2">
                      {image.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            💡 Hover untuk pause, Klik foto untuk lihat detail
          </p>
        </div>

        {/* View More Button */}
        {galleryImages.length > 0 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="border-accent/30 text-accent-foreground hover:bg-accent/10 hover:border-accent hover:text-accent font-medium gap-2"
            >
              <span>{showAll ? "Sembunyikan Detail Foto" : "Lihat Detail Semua Foto"}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Button>
          </div>
        )}

        {/* Gallery Grid - Detail View */}
        {showAll && (
          <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              Semua Foto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 animate-in fade-in"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-accent text-sm font-medium">
                      {image.year}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary-foreground mt-1">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mt-2">
                      {image.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden">
          {selectedImage && (
            <div>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <span className="text-accent-foreground text-sm font-medium">
                  {selectedImage.year}
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground mt-1">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground mt-2">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
