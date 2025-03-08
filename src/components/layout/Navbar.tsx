
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { cn } from "@/lib/utils";
import { Menu, X, DollarSign } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#value-stacking", icon: DollarSign },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        {
          "bg-white/70 shadow-sm py-3": isScrolled,
          "bg-transparent py-5": !isScrolled,
        }
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#" className="relative z-10">
            <h1 className="text-2xl font-bold text-orbit-blue-600">
              Orbit<span className="text-orbit-gray-900">AI</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-orbit-gray-700 hover:text-orbit-blue-600 font-medium text-sm transition-colors flex items-center"
                  >
                    {item.icon && <item.icon size={16} className="mr-1" />}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <CustomButton size="sm">Get Started</CustomButton>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden z-20 text-orbit-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Overlay */}
          <div
            className={cn(
              "fixed inset-0 bg-white z-10 flex flex-col justify-center items-center transition-transform duration-300 md:hidden",
              {
                "translate-x-0": mobileMenuOpen,
                "translate-x-full": !mobileMenuOpen,
              }
            )}
          >
            <ul className="flex flex-col space-y-6 items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-orbit-gray-900 text-lg font-medium flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon size={18} className="mr-2" />}
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <CustomButton onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </CustomButton>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
