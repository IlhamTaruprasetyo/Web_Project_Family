import { BookOpen, Heart, Users } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const History = () => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className={`text-center mb-16 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}>
          <span className="inline-block text-accent-foreground font-medium text-sm tracking-widest uppercase mb-4">
            Tentang Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sejarah Keluarga
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>

        {/* Story Content */}
        <div ref={contentRef} className={`max-w-4xl mx-auto ${contentInView ? "animate-slide-in-left" : "opacity-0"}`}>
          <div className="prose prose-lg mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              Keluarga besar kami bermula dari pernikahan{" "}
              <span className="text-foreground font-semibold">
                Eyang Kakung dan Eyang Putri
              </span>{" "}
              pada tahun 1940-an di sebuah desa kecil di Jawa Tengah. Dari
              pernikahan yang diberkahi tersebut, lahirlah 12 orang anak yang
              masing-masing kini telah memiliki keluarga sendiri.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              Selama lebih dari 80 tahun, keluarga kami telah berkembang menjadi
              sebuah keluarga besar yang tersebar di berbagai penjuru Indonesia.
              Meski jarak memisahkan, ikatan kekeluargaan tetap erat dijaga
              melalui tradisi berkumpul setiap tahun dan kini melalui arsip
              digital ini.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Website ini dibuat sebagai bentuk penghormatan kepada leluhur kami
              dan sebagai warisan untuk generasi mendatang agar mereka mengenal
              akar dan silsilah keluarga dengan baik.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className={`text-center p-8 rounded-xl bg-background shadow-md hover:shadow-lg transition-shadow duration-300 ${statsInView ? "animate-slide-in-up" : "opacity-0"}`} style={{ animationDelay: "0ms" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-4xl font-bold text-primary mb-2">
              12
            </h3>
            <p className="text-muted-foreground">Anak Utama</p>
          </div>

          <div className={`text-center p-8 rounded-xl bg-background shadow-md hover:shadow-lg transition-shadow duration-300 ${statsInView ? "animate-slide-in-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-4xl font-bold text-primary mb-2">
              80+
            </h3>
            <p className="text-muted-foreground">Tahun Perjalanan</p>
          </div>

          <div className={`text-center p-8 rounded-xl bg-background shadow-md hover:shadow-lg transition-shadow duration-300 ${statsInView ? "animate-slide-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-4xl font-bold text-primary mb-2">
              4
            </h3>
            <p className="text-muted-foreground">Generasi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
