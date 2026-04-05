import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { resumePath } from "@/config/site";

const navLinks = [
  { label: "About", target: "/about" },
  { label: "Skills", target: "/skills" },
  { label: "Projects", target: "/projects" },
  { label: "Experience", target: "/experience" },
  { label: "Contact", target: "/contact" },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    navigate(target);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold tracking-tighter text-black"
        >
          JD<span className="text-[#ff3b2f]">.</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="text-sm font-bold text-black/60 hover:text-black transition-colors uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-black/60 hover:text-black transition-colors uppercase tracking-widest"
          >
            Resume
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.target)}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Resume
          </a>
          <button onClick={toggleTheme} className="text-sm text-muted-foreground hover:text-primary">
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
