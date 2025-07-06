import { useState, useEffect } from "react";
import { Menu, Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Button } from "../ui/Button";
import { useActiveSection } from "../../hooks/useActiveSection";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#resume", label: t.nav.resume },
    { href: "#contact", label: t.nav.contact },
  ];

  const sectionIds = navLinks.map((link) => link.href.substring(1));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const getLinkClass = (href: string) => {
    const isActive = `#${activeSection}` === href;
    return `transition-colors duration-200 ${
      isActive
        ? theme === "dark"
          ? "text-white"
          : "text-gray-900 font-bold"
        : theme === "dark"
        ? "text-gray-400 hover:text-white"
        : "text-gray-500 hover:text-gray-900"
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? theme === "dark"
            ? "bg-gray-900"
            : "bg-white"
          : isScrolled
          ? theme === "dark"
            ? "bg-gray-900/90 backdrop-blur-md"
            : "bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      } ${isScrolled || isOpen ? "shadow-lg" : ""}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Навигация на десктопе */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${getLinkClass(
                    link.href
                  )}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Кнопки темы и языка на десктопе */}
          <div className="absolute right-0 flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
              >
                <span className="font-semibold">{language.toUpperCase()}</span>
              </Button>
            </div>

            {/* Кнопка меню на мобильном  */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Навигация на мобильном */}
        {/* Закрывающий элемент */}
        <div
          className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Боковое меню */}
        <div
          className={`fixed top-0 right-0 h-[100vh] w-3/4 max-w-xs z-50 md:hidden transition-all duration-300 ease-in-out ${
            theme === "dark" ? "bg-gray-900" : "bg-white"
          } ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-5 pt-8 h-full flex flex-col">
            <div className="flex-grow flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block px-3 py-2 rounded-md text-lg font-medium w-full text-left ${getLinkClass(
                    link.href
                  )}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div
              className={`border-t pt-4 flex justify-between items-center ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "ru" ? "en" : "ru")}
                className="flex items-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language.toUpperCase()}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
