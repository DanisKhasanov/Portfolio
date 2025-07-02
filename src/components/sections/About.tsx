import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeColors } from '../../utils/theme';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Импортируем фотографии
import photo1 from '../../assets/about/1.jpg';
import photo2 from '../../assets/about/2.jpg';
import photo3 from '../../assets/about/3.jpg';
import photo4 from '../../assets/about/4.jpg';

const photos = [photo1, photo2, photo3, photo4];

export const About: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.about.title}
            </h2>
            <div className={`w-[7rem] h-1 bg-gradient-to-r ${colors.primary} mx-auto`}></div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Image Column */}
          <AnimatedSection animation="fadeInRight" delay={200} className="md:col-span-2">
            <div className="relative">
              {/* Основная фотография */}
              <div className={`relative w-full max-w-md mx-auto aspect-square rounded-2xl p-1 bg-gradient-to-br ${colors.primary} shadow-2xl transform transition-all duration-500 hover:scale-105`}>
                <img 
                  src={photos[currentPhotoIndex]} 
                  alt={`Photo ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {/* Overlay с градиентом */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>

              {/* Предварительный просмотр - полоска с миниатюрами */}
              <div className="mt-4 flex justify-center space-x-2">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className={`relative w-12 h-12 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      index === currentPhotoIndex 
                        ? `ring-2 ${colors.ring} scale-110` 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    onClick={() => goToPhoto(index)}
                  >
                    <img 
                      src={photo} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentPhotoIndex && (
                      <div className={`absolute inset-0 ${colors.accent}/20`}></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Кнопки навигации */}
              <button 
                onClick={prevPhoto}
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 ${
                  theme === 'dark' 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-black/20 text-white hover:bg-black/30'
                } backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button 
                onClick={nextPhoto}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 ${
                  theme === 'dark' 
                    ? 'bg-white/20 text-white hover:bg-white/30' 
                    : 'bg-black/20 text-white hover:bg-black/30'
                } backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </AnimatedSection>

          {/* Text Column */}
          <AnimatedSection animation="fadeInLeft" delay={400} className="md:col-span-3">
            <div className="text-left space-y-6">
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t.about.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};