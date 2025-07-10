import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useAnalytics = (measurementId?: string) => {
  useEffect(() => {
    if (!measurementId) return;

    // Добавляем скрипт Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Инициализируем gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: any[]) => {
      window.dataLayer.push(args);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Очистка при размонтировании
      const scripts = document.querySelectorAll(`script[src*="googletagmanager"]`);
      scripts.forEach(script => script.remove());
    };
  }, [measurementId]);

  // Функция для трекинга событий
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (window.gtag && measurementId) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Функция для трекинга просмотров страниц
  const trackPageView = (page_title: string, page_location?: string) => {
    if (window.gtag && measurementId) {
      window.gtag('config', measurementId, {
        page_title,
        page_location: page_location || window.location.href,
      });
    }
  };

  return { trackEvent, trackPageView };
}; 