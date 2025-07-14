import { Translation } from "../types";

export const translations: Record<string, Translation> = {
  ru: {
    nav: {
      home: "Главная",
      about: "О себе",
      skills: "Навыки",
      projects: "Проекты",
      resume: "Резюме",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я Данис Хасанов",
      name: "React Developer",
      status: "В поиске работы",
      description:
        "Создаю современные веб-приложения с опытом более 2 лет.\nСпециализируюсь на React/TypeScript и современных библиотеках.",
      contactMe: "Связаться",
    },
    about: {
      title: "О себе",
      description:
        "Готов к сложным задачам, быстро вливаюсь в проекты, изучаю новые фреймворки и библиотеки.\nУмею эффективно общаться с коллегами и участвовать в обсуждении технических решений.\nЗакончил School21 по программированию (Сбербанк)",
      experience: "Опыт работы",
      projects: "Проектов",
      clients: "Клиентов",
    },
    skills: {
      title: "Навыки",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Инструменты",
      mobile: "Мобильная разработка",
    },
    projects: {
      title: "Мои проекты",
      viewCode: "Посмотреть код",
      viewLive: "Демо",
      happyFox: {
        title: "Happy Fox",
        description:
          "Мобильная игра-приложение, где игроки управляют лисой в игровом процессе с механикой падения яиц, системой бустеров и внутриигровой экономикой. Проект включает полноценную игровую экосистему с магазином, системой друзей, розыгрышами, достижениями и профилем пользователя.",
      },
      koorator: {
        title: "Koorator",
        description:
          "Мобильное приложение для пациентов, которое позволяет записываться на прием к врачам, просматривать планы лечения, историю посещений и управлять своим профилем. Приложение интегрировано с Telegram и предоставляет полный цикл взаимодействия пациента с клиникой от записи до отслеживания лечения.",
      },
      agrotat: {
        title: "Agrotat",
        description:
          "Agrotat — это система мониторинга и управления транспортными средствами для сельскохозяйственных предприятий. Приложение позволяет отслеживать местоположение и состояние транспорта в реальном времени, управлять поездками, анализировать данные о пробеге и топливе.",
      },
      barberLink: {
        title: "BarberLink",
        description:
          "Современная система для демо онлайн-записи в барбершопы с удобным интерфейсом и полным функционалом управления записями.",
      },
      onlineShop: {
        title: "Online shop",
        description:
          "Современный демо-интернет-магазин с адаптивным дизайном и полным циклом покупки.",
      },
      cdekOrderPro: {
        title: "Cdek OrderPRO",
        description:
          "Интеграция с сервисом доставки СДЭК, позволяющая автоматически рассчитывать стоимость доставки, создавать и скачивать накладные.",
      },
      priceList: {
        title: "Price List",
        description:
          "Веб-приложение для управления и отображения прайс-листов. Основная цель проекта — упростить процесс создания, обновления и публикации прайс-листов в формате PDF для различных товаров и услуг.",
      },
      customerOrders: {
        title: "Customer Orders",
        description:
          "Веб-приложение, предназначенное для управления заказами клиентов, с функцией автозаполнения для повышения удобства пользователей.",
      },
      koorator_Admin: {
        title: "Admin",
        description:
          "Admin — это десктопное приложение, для управление мобильного приложения Koorator. Обрабатывает все взаимодействия с пациентами с использованием WebSocket. Позволяет медицинскому персоналу отправлять сообщения напрямую в Telegram аккаунты пациентов, делиться медицинскими документами, результатами анализов и планами лечения. Включает просмотр истории сообщений и систему прикрепления файлов.",
      },
    },
    resume: {
      title: "Резюме",
      description:
        "Ознакомьтесь с моим резюме или скачайте его для детального изучения",
      download: "Скачать резюме",
      showPreview: "Показать резюме",
      hidePreview: "Скрыть резюме",
      previewTitle: "Предварительный просмотр",
      previewText:
        "Здесь будет отображаться ваше резюме. Вы можете добавить PDF файл или встроить его просмотр.",
    },
    contact: {
      title: "Связаться со мной",
      description:
        "Вы всегда можете связаться со мной, я отвечу на ваше сообщение как можно скорее",
      email: "Email",
      phone: "Телефон",
      location: "Местоположение",
    },
    cookieNotice: {
      title: "Информация",
      message: "Я использую Google Analytics для анализа посещаемости сайта.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Danis Khasanov",
      name: "React Developer",
      status: "Open to Work",
      description:
        "Building modern web applications with 2+ years of experience.\nSpecializing in React, TypeScript, and cutting-edge technologies.",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      description:
        "Ready for complex tasks, quickly integrate into projects, study new frameworks and libraries.\nI can effectively communicate with colleagues and participate in technical discussions.\nGraduated from School21 programming (Sberbank)",
      experience: "Years Experience",
      projects: "Projects",
      clients: "Happy Clients",
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      mobile: "Mobile Development",
    },
    projects: {
      title: "My Projects",
      viewCode: "View Code",
      viewLive: "Live Demo",
      happyFox: {
        title: "Happy Fox",
        description:
          "Mobile game application where players control a fox in gameplay with egg-dropping mechanics, booster system, and in-game economy. The project includes a complete gaming ecosystem with store, friends system, giveaways, achievements, and user profile.",
      },
      koorator: {
        title: "Koorator",
        description:
          "Mobile application for patients that allows booking doctor appointments, viewing treatment plans, appointment history, and managing user profile. The app is integrated with Telegram and provides a complete patient-clinic interaction cycle from booking to treatment tracking.",
      },
      agrotat: {
        title: "Agrotat",
        description:
          "Agrotat is a monitoring and management system for agricultural enterprises' vehicles. The application allows real-time tracking of vehicle location and status, trip management, and analysis of mileage and fuel data.",
      },
      barberLink: {
        title: "BarberLink",
        description:
          "Modern system for demo online barbershop booking with user-friendly interface and complete appointment management functionality.",
      },
      onlineShop: {
        title: "Online shop",
        description:
          "Modern demo online store with responsive design and complete purchase cycle.",
      },
      cdekOrderPro: {
        title: "Cdek OrderPRO",
        description:
          "Integration with CDEK delivery service, allowing automatic delivery cost calculation, creating and downloading shipping labels.",
      },
      priceList: {
        title: "Price List",
        description:
          "Web application for managing and displaying price lists. The main goal of the project is to simplify the process of creating, updating, and publishing price lists in PDF format for various goods and services.",
      },
      customerOrders: {
        title: "Customer Orders",
        description:
          "Web application designed for managing customer orders, with autofill functionality to enhance user convenience.",
      },
      koorator_Admin: {
        title: "Admin",
        description:
          "Admin is a desktop application for managing the Koorator mobile application. Handles all interactions with patients using WebSocket. Allows medical staff to send messages directly to patients' Telegram accounts, share medical records, test results, and treatment plans. Includes viewing message history and a file attachment system.",
      },
    },
    resume: {
      title: "Resume",
      description: "Check out my resume or download it for detailed review",
      download: "Download Resume",
      showPreview: "Show Resume",
      hidePreview: "Hide Resume",
      previewTitle: "Preview",
      previewText:
        "Your resume will be displayed here. You can add a PDF file or embed its preview.",
    },
    contact: {
      title: "Get In Touch",
      description:
        "You can always contact me, I will respond to your message as soon as possible",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    cookieNotice: {
      title: "Information",
      message: "I use Google Analytics to analyze site traffic.",
    },
  },
};
