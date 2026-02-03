import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#sejarah",
    label: "Sejarah"
  }, {
    href: "#galeri",
    label: "Galeri"
  }, {
    href: "#fitur",
    label: "Fitur"
  },{
    href: "#pengumuman",
    label: "Pengumuman"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className={`font-serif text-xl lg:text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>Trah Sutohaknyono</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}>
                {link.label}
              </a>)}
            <Button
              size="sm"
              className="bg-white text-black hover:bg-gray-100 font-semibold"
              onClick={() => navigate("/login")}
            >
              Masuk ke Akun
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-lg border-t border-border">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(link => <a key={link.href} href={link.href} className="block py-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button 
                size="sm" 
                className="w-full bg-white text-black hover:bg-gray-100 font-semibold mt-4"
                onClick={() => {
                  navigate("/login");
                  setIsMobileMenuOpen(false);
                }}
              >
                Masuk ke Akun
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;