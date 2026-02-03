import { useState } from "react";
import heroFamily from "@/assets/hero/Trah Sutohagnyono-Sampul.jpg";
import { Button } from "@/components/ui/button";
import { Users, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFamily}
          alt="Keluarga Besar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-accent/60" />
            <span className="text-accent font-serif text-lg tracking-widest uppercase">
              Hanebu Sauyun, Hambangun Tuwuh
            </span>
            <div className="h-px w-16 bg-accent/60" />
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Trah Keluarga
            <span className="block text-accent mt-2">Sutohaknyono</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Melestarikan sejarah dan ikatan keluarga melalui arsip digital
            yang menghubungkan generasi masa lalu, kini, dan mendatang.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              // onClick={() => navigate("/login")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Users className="mr-2 h-5 w-5" />
              Jelajahi Silsilah
            </Button>
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Lock className="mr-2 h-5 w-5" />
              Masuk ke Akun
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
