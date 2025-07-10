import { useEffect } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const Analytics = () => {
  const { trackEvent, trackPageView } = useAnalytics(GA_MEASUREMENT_ID);

  useEffect(() => {
    // Отслеживаем начальную загрузку страницы
    trackPageView('Portfolio Home', window.location.href);

    // Отслеживаем информацию о пользователе
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenResolution = `${screen.width}x${screen.height}`;
    
    trackEvent('page_load', {
      user_agent: userAgent,
      language: language,
      screen_resolution: screenResolution,
      timestamp: new Date().toISOString(),
    });

    // Отслеживаем время на странице
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_site', {
        duration_seconds: timeSpent,
      });
    };

    // Отслеживаем клики по ссылкам
    const handleLinkClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        const text = link.textContent?.trim();
        
        trackEvent('link_click', {
          link_url: href,
          link_text: text,
          section: getSection(target),
        });
      }
    };

    // Отслеживаем скролл до секций
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || entry.target.className;
          trackEvent('section_view', {
            section_name: sectionId,
            visibility_percentage: Math.round(entry.intersectionRatio * 100),
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Трекать когда секция видна на 50%
    });

    // Находим все секции для отслеживания
    const sections = document.querySelectorAll('section, [id]');
    sections.forEach((section) => observer.observe(section));

    // Добавляем обработчики событий
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleLinkClick);
      observer.disconnect();
    };
  }, [trackEvent, trackPageView]);

  return null; // Компонент не рендерит UI
};

// Вспомогательная функция для определения секции
function getSection(element: HTMLElement): string {
  const section = element.closest('section');
  if (section) {
    return section.id || section.className.split(' ')[0] || 'unknown';
  }
  
  const header = element.closest('header');
  if (header) return 'header';
  
  const footer = element.closest('footer');
  if (footer) return 'footer';
  
  return 'unknown';
} 