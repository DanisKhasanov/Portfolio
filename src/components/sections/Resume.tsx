import React, { useState } from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeColors } from '../../utils/theme';
import { Download, Eye, EyeOff } from 'lucide-react';

export const Resume: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const handleDownload = () => {
    // Скачивание PDF резюме из public
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Путь к файлу резюме в public
    link.download = 'resume.pdf';
    link.click();
  };

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <section id="resume" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.resume.title}
            </h2>
            <div className={`w-[7rem] h-1 bg-gradient-to-r ${colors.primary} mx-auto`}></div>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="text-center mb-8">
              <p className={`text-lg leading-relaxed mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {t.resume.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleDownload}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${colors.primary} text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <Download className="w-5 h-5" />
                  {t.resume.download}
                </button>
                
                <button
                  onClick={togglePreview}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 ${
                    theme === 'dark' 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  } font-medium hover:scale-105 transition-all duration-300`}
                >
                  {isPreviewVisible ? (
                    <>
                      <EyeOff className="w-5 h-5" />
                      {t.resume.hidePreview}
                    </>
                  ) : (
                    <>
                      <Eye className="w-5 h-5" />
                      {t.resume.showPreview}
                    </>
                  )}
                </button>
              </div>
            </div>
          </AnimatedSection>

          {isPreviewVisible && (
            <AnimatedSection animation="fadeInUp" delay={400}>
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                {/* Встраиваем PDF-файл для предпросмотра */}
                <iframe 
                  src="/resume.pdf" 
                  className="w-full aspect-[3/4] min-h-[60vh] bg-white dark:bg-gray-900"
                  title="Resume Preview"
                />
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
}; 