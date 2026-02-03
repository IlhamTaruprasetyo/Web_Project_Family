import { Shield, Network, Image, Search, Heart, Clock } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Shield,
    title: "Privasi Terjaga",
    description:
      "Data silsilah keluarga hanya dapat diakses oleh anggota keluarga yang sudah terverifikasi.",
  },
  {
    icon: Network,
    title: "Pohon Silsilah Interaktif",
    description:
      "Jelajahi hubungan kekerabatan dengan visualisasi pohon keluarga yang mudah dinavigasi.",
  },
  {
    icon: Image,
    title: "Galeri Foto",
    description:
      "Simpan dan bagikan foto-foto bersejarah keluarga dari berbagai generasi.",
  },
  {
    icon: Search,
    title: "Pencarian Mudah",
    description:
      "Temukan anggota keluarga dengan cepat melalui fitur pencarian yang intuitif.",
  },
  {
    icon: Heart,
    title: "Catatan Biografi",
    description:
      "Setiap anggota keluarga memiliki halaman profil dengan biografi dan informasi lengkap.",
  },
  {
    icon: Clock,
    title: "Arsip Sejarah",
    description:
      "Dokumentasikan peristiwa penting dan sejarah keluarga untuk generasi mendatang.",
  },
];

const Features = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block text-accent-foreground font-medium text-sm tracking-widest uppercase mb-4">
            Fitur Unggulan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mengapa Website Ini?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Platform modern untuk melestarikan warisan keluarga dengan berbagai
            fitur yang memudahkan eksplorasi silsilah.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-accent/30 ${gridInView ? "animate-slide-in-up" : "opacity-0"}`}
              style={{ animationDelay: gridInView ? `${index * 100}ms` : "0ms" }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
