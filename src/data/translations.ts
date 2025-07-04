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
        "Создаю современные веб-приложения с опытом более 2 лет. Специализируюсь на React, TypeScript, и современных технологиях.",
      contactMe: "Связаться",
    },
    about: {
      title: "О себе",
      description:
        "React Developer с опытом более 2 лет. Использую как готовые компоненты (MUI), так и создаю собственные решения с Tailwind CSS. Имею опыт работы с Redux Toolkit, RTK Query, Axios, разработки мобильных приложений на Telegram Mini Apps, работы с WebSocket, Git, TypeScript, сборщиком Vite, React Router и React Native.",
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
        "Building modern web applications with 2+ years of experience. Specializing in React, TypeScript, and cutting-edge technologies.",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      description:
        "React Developer with 2+ years of experience. I work with both ready-made components (MUI) and create custom solutions with Tailwind CSS. Experienced with Redux Toolkit, RTK Query, Axios, Telegram Mini Apps development, WebSocket, Git, TypeScript, Vite bundler, React Router, and React Native.",
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
        "Ready to discuss your project or collaboration opportunities",
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
  },
};
