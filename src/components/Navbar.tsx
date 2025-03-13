
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/utils/animations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  const handleClick = (target: string) => {
    scrollTo(target);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-subtle"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-medium text-gradient"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          alex.dev
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.target)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline py-1"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => handleClick("contact")}
            className="bg-primary/10 hover:bg-primary/20 text-primary"
            variant="ghost"
          >
            Let's Talk
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span 
              className={cn(
                "w-full h-0.5 bg-current block transition-all duration-300 ease-out",
                mobileOpen && "rotate-45 translate-y-2"
              )}
            />
            <span 
              className={cn(
                "w-full h-0.5 bg-current block transition-all duration-300 ease-out",
                mobileOpen && "opacity-0"
              )}
            />
            <span 
              className={cn(
                "w-full h-0.5 bg-current block transition-all duration-300 ease-out",
                mobileOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col md:hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleClick(link.target)}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => handleClick("contact")}
            className="mt-4 w-full"
          >
            Let's Talk
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
