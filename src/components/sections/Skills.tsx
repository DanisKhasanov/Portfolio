import { useState, useRef } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { getThemeColors } from "../../utils/theme";
import { skills } from "../../data/skills.tsx";

export const Skills = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const extendedSkills = [...skills, ...skills];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section
      id="skills"
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
              {t.skills.title}
            </h2>
            <div
              className={`w-[12rem] h-1 bg-gradient-to-r ${colors.primary} mx-auto`}
            ></div>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className={`relative w-full overflow-x-auto no-scrollbar cursor-grab ${
            isDragging ? "cursor-grabbing" : ""
          }`}
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`flex ${
              !isDragging
                ? "animate-infinite-scroll hover:[animation-play-state:paused]"
                : ""
            }`}
          >
            {extendedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 mx-4 flex flex-col items-center justify-center p-6 rounded-lg
                          bg-white/5 border border-white/10 shadow-lg select-none"
              >
                <div
                  className={`text-5xl mb-4 ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  {skill.icon}
                </div>
                <span
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
