import React from "react";
import { Send, Instagram, Github, Linkedin } from "lucide-react";
import { SiWhatsapp } from 'react-icons/si';
import { AnimatedSection } from "../ui/AnimatedSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { getThemeColors } from "../../utils/theme";

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  const contactLinks = [
    {
      icon: <SiWhatsapp className="w-7 h-7" />,
      href: "https://wa.me/79991234567",
      label: "Whatsapp",
    },
    {
      icon: <Send className="w-7 h-7" />,
      href: "https://t.me/yourusername",
      label: "Telegram",
    },
    {
      icon: <Instagram className="w-7 h-7" />,
      href: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <Github className="w-7 h-7" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-7 h-7" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.contact.title}
            </h2>
            <div
              className={`w-[20rem] h-1 bg-gradient-to-r ${colors.primary} mx-auto mb-6`}
            ></div>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.contact.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="flex justify-center items-center space-x-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className={`w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110
                  ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-300 hover:bg-gradient-to-br from-blue-500 to-purple-600 hover:text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gradient-to-br from-blue-500 to-purple-600 hover:text-white"
                  }
                `}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
