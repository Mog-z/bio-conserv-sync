import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "About Us",
      children: [
        { label: "General Objective", href: "#objective" },
        { label: "Specific Objectives", href: "#specific" },
        { label: "Thematic Areas", href: "#thematic" },
      ],
    },
    {
      label: "Members",
      children: [
        { label: "Coordinators", href: "#coordinators" },
        { label: "Steering Committee", href: "#committee" },
        { label: "All Members", href: "#members" },
      ],
    },
    {
      label: "Institutions",
      children: [
        { label: "Federal Universities", href: "#federal" },
        { label: "State Universities", href: "#state" },
        { label: "International Partners", href: "#international" },
      ],
    },
    { label: "Current Events", href: "#events" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <img 
              src={logo} 
              alt="INCT-CERBC Logo" 
              className="h-20 md:h-24 lg:h-28 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.children ? (
                  <>
                    <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden animate-fade-in">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollToSection(child.href)}
                            className="block w-full text-left px-4 py-3 text-card-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => link.href && scrollToSection(link.href)}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Contact
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-slide-up">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full text-foreground font-medium py-2"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="pl-4 space-y-2 mt-2">
                        {link.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollToSection(child.href)}
                            className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => link.href && scrollToSection(link.href)}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
