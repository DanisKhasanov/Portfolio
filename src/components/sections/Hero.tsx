import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { getThemeColors } from "../../utils/theme";
import BlurredCircle from "../ui/BlurredCircle";
import photo from "../../assets/hero/photo.jpg";

export const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <BlurredCircle
        color="#6D28D9"
        size="400px"
        top="10%"
        right="-10%"
        opacity="0.5"
      />
      <BlurredCircle
        color="#6D28D9"
        size="300px"
        bottom="10%"
        left="-100px"
        opacity="0.3"
        delay="0.1s"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Image Column */}
          <AnimatedSection
            animation="fadeInLeft"
            delay={200}
            className="md:col-span-2 flex justify-center"
          >
            <div
              className={`relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br ${colors.primary}`}
            >
              <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center ">
                <img src={photo} alt="Hero Image" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </AnimatedSection>

          {/* Text Column */}
          <div className="md:col-span-3 text-center md:text-left">
            <AnimatedSection animation="fadeInRight" delay={100}>
              <div className="inline-block px-4 py-1 mb-4 border rounded-full text-sm font-semibold tracking-wide
                bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                border-green-400
                text-blue-400
                animate-pulse
              ">
                <span className="relative">
                  {t.hero.status}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <p
                className={`text-lg sm:text-2xl mb-4 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.hero.greeting}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={300}>
              <h1
                className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
                >
                  {t.hero.name}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={400}>
              <p
                className={`text-lg mb-12 max-w-3xl leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t.hero.description}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none"
        aria-label="Scroll down"
      >
        <div className="animate-bounce">
          <ChevronDown
            className={`w-8 h-8 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          />
        </div>
      </button>
    </section>
  );
};
