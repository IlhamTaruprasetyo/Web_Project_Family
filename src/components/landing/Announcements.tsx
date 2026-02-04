import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* =====================
   TYPE
===================== */
export type Announcement = {
  id: number;
  title: string;
  when: string;
  link?: string;
  description: string;
  location?: string;
};

/* =====================
   DATA (digabung di sini)
===================== */
const announcements: Announcement[] = [
  { 
    id: 1, 
    title: "Rapat Keluarga Tahunan", 
    when: "Minggu, 14 Feb • 10:00",
    description:
      "Pertemuan rutin keluarga besar Trah Sutohaknyono untuk membahas perkembangan keluarga, program tahunan, dan koordinasi kegiatan. Semua anggota keluarga diundang untuk hadir dan berbagi informasi.",
    location: "Rumah Bapak Marsan, Demangan Pijiharjo, Manyaran",
    link: "#pengumuman",
  },
  { 
    id: 2, 
    title: "Silaturahmi & Arisan Bulanan", 
    when: "Sabtu, 13 Feb • 18:30",
    description:
      "Acara silaturahmi rutin sambil mengadakan arisan bulanan. Kesempatan yang baik untuk berkumpul, berbagi cerita, dan saling mempererat hubungan keluarga. Harap membawa makanan atau minuman untuk dibagikan.",
    location: "Pendopo Desa, Kompleks Trah Sutohaknyono",
    link: "#pengumuman",
  },
];

/* =====================
   COMPONENT
===================== */
const Announcements = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<number | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  const selected = announcements.find(a => a.id === selectedAnnouncement);

  return (
    <>
      <section
        id="pengumuman"
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background/95 to-background"
      >
        <div className="container mx-auto px-4">
          <div
            ref={headerRef}
            className={`text-center mb-12 ${
              headerInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
              Pengumuman
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Informasi terbaru mengenai kegiatan dan pertemuan keluarga
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {announcements.map((a, index) => (
              <div
                key={a.id}
                className={`p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md ${
                  gridInView ? "animate-slide-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: gridInView ? `${index * 100}ms` : "0ms" }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  📅 {a.when}
                </p>
                <button
                  onClick={() => setSelectedAnnouncement(a.id)}
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
                >
                  Lihat Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog
        open={selectedAnnouncement !== null}
        onOpenChange={() => setSelectedAnnouncement(null)}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selected?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              📅 {selected?.when}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Deskripsi
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected?.description}
              </p>
            </div>

            {selected?.location && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  📍 Lokasi
                </h4>
                <p className="text-sm text-muted-foreground">
                  {selected.location}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Announcements;
