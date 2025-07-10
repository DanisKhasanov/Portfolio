import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    // Проверяем, показывали ли уведомление ранее
    const hasShown = localStorage.getItem('cookie-notice-shown');
    if (!hasShown) {
      // Показываем уведомление через 2 секунды после загрузки
      const showTimer = setTimeout(() => setIsVisible(true), 2000);
      
      // Автоматически скрываем через 8 секунд
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem('cookie-notice-shown', 'true');
      }, 10000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('cookie-notice-shown', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-14 sm:bottom-4 left-0 right-4 z-50 animate-slide-up">
      <div className={`
        max-w-xs sm:max-w-md mx-auto p-4 sm:p-5 rounded-xl shadow-2xl border backdrop-blur-sm
        ${theme === 'dark' 
          ? 'bg-gray-800/95 border-gray-700 text-white' 
          : 'bg-white/95 border-gray-200 text-gray-900'
        }
      `}>
        <div className="flex items-start gap-3">
          <Shield className={`w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`} />
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-2 text-sm sm:text-base">
              {t?.cookieNotice?.title || 'Информация'}
            </h3>
            
            <p className={`text-xs sm:text-sm leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t?.cookieNotice?.message 
              }
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className={`
              p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0 touch-manipulation
              ${theme === 'dark'
                ? 'hover:bg-gray-700 text-gray-400'
                : 'hover:bg-gray-100 text-gray-500'
              }
            `}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}; 