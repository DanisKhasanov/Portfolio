import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
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
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${colors.primary} rounded-lg mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {project.title}
                    </span>
                  </div>
                </div>

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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1 flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.viewCode}
                    </Button>
                    
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
    </section>
  );
};