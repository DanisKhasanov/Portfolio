import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeColors } from '../../utils/theme';
import { projects } from '../../data/projects';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  // Состояния для модального окна и текущей картинки
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section id="projects" className={`py-20 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {t.projects.title}
            </h2>
            <div className={`w-[15rem] h-1 bg-gradient-to-r ${colors.primary} mx-auto`}></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fadeInUp"
              delay={index * 100}
            >
              <Card className="h-full flex flex-col">
                {/* Project Image/Slider */}
                {project.images && project.images.length > 0 ? (
                  <div className={`h-64 rounded-xl mb-6 relative flex items-center justify-center shadow-lg overflow-hidden group transition-all ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                    <img
                      src={project.images && project.images[0]}
                      alt={project.title}
                      className="object-contain max-h-full max-w-full mx-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      style={{ maxHeight: '15rem' }}
                      onClick={() => project.images && setModalImage(project.images[1])}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => project.images && setModalImage(project.images[1])}
                    >
                      <ZoomIn className="w-10 h-10 text-white drop-shadow-lg bg-black/50 rounded-full p-2" />
                    </div>
                  </div>
                ) : project.images && project.images.length > 0 ? (
                  <div className="h-48 rounded-lg mb-6 relative overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="object-contain h-full w-full"
                    />
                  </div>
                ) : (
                  <div className={`h-60 bg-gradient-to-br ${colors.primary} rounded-lg mb-6 relative overflow-hidden flex items-center justify-center`}>
                    <span className="text-white text-lg font-semibold">
                      {project.title}
                    </span>
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-4 flex-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1 flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.viewCode}
                    </Button>
                    )}                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.projects.viewLive}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Модальное окно для увеличения фото */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setModalImage(null)}>
          <div className="relative flex items-center justify-center w-full h-full">
            <button
              className="absolute top-6 right-6 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg transition-all"
              onClick={e => {
                e.stopPropagation();
                setModalImage(null);
              }}
              aria-label="Закрыть"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg transition-all"
              onClick={e => {
                e.stopPropagation();
                const project = projects.find(p => p.images && p.images.includes(modalImage));
                if (project && project.images && project.images.length > 1) {
                  const idx = project.images.indexOf(modalImage);
                  const prevIdx = (idx - 1 + project.images.length) % project.images.length;
                  setModalImage(project.images[prevIdx]);
                }
              }}
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <img src={modalImage} alt="project" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl " />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 shadow-lg transition-all"
              onClick={e => {
                e.stopPropagation();
                const project = projects.find(p => p.images && p.images.includes(modalImage));
                if (project && project.images && project.images.length > 1) {
                  const idx = project.images.indexOf(modalImage);
                  const nextIdx = (idx + 1) % project.images.length;
                  setModalImage(project.images[nextIdx]);
                }
              }}
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            {(() => {
              const project = projects.find(p => p.images && p.images.includes(modalImage));
              if (project && project.images && project.images.length > 1) {
                const idx = project.images.indexOf(modalImage);
                return (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full shadow">
                    {idx + 1} / {project.images.length}
                  </div>
                );
              }
              return null;
            })()}
          </div>
        </div>
      )}
    </section>
  );
};