import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    // Проверяем, согласился ли пользователь ранее
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Показываем уведомление через 2 секунды после загрузки
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    // Здесь можно добавить логику отключения аналитики
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-slide-up">
      <div className={`
        max-w-md mx-auto p-4 rounded-lg shadow-2xl border backdrop-blur-sm
        ${theme === 'dark' 
          ? 'bg-gray-800/95 border-gray-700 text-white' 
          : 'bg-white/95 border-gray-200 text-gray-900'
        }
      `}>
        <div className="flex items-start gap-3">
          <Shield className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
          }`} />
          
          <div className="flex-1">
            <h3 className="font-semibold mb-2">
              {t?.cookieNotice?.title || 'Использование cookies'}
            </h3>
            
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t?.cookieNotice?.message || 
                'Мы используем Google Analytics для анализа посещаемости сайта и улучшения пользовательского опыта. Данные собираются анонимно.'
              }
            </p>
            
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={handleAccept}
                className={`
                  px-4 py-2 text-sm font-medium rounded transition-colors
                  ${theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }
                `}
              >
                {t?.cookieNotice?.accept || 'Принять'}
              </button>
              
              <button
                onClick={handleDecline}
                className={`
                  px-4 py-2 text-sm font-medium rounded border transition-colors
                  ${theme === 'dark'
                    ? 'border-gray-600 hover:bg-gray-700 text-gray-300'
                    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }
                `}
              >
                {t?.cookieNotice?.decline || 'Отклонить'}
              </button>
            </div>
          </div>
          
          <button
            onClick={handleDecline}
            className={`
              p-1 rounded transition-colors flex-shrink-0
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