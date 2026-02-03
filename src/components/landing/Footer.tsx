import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold">Silsilah Keluarga</h3>
            <p className="text-primary-foreground/70 mt-2">
              Melestarikan ikatan keluarga lintas generasi
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20 mx-auto my-8" />

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            Dibuat dengan
            <Heart className="w-4 h-4 text-accent fill-accent" />
            untuk keluarga • {new Date().getFullYear()}
          </p>

          {/* Privacy Notice */}
          <p className="text-primary-foreground/40 text-xs mt-4">
            Website ini bersifat privat dan hanya untuk keperluan keluarga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
