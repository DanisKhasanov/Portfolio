import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    translationKey: "happyFox",
    title: "Happy Fox",
    description:
      "Мобильная игра-приложение, где игроки управляют лисой в игровом процессе с механикой падения яиц, системой бустеров и внутриигровой экономикой. Проект включает полноценную игровую экосистему с магазином, системой друзей, розыгрышами, достижениями и профилем пользователя.",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "Telegram API",
    ],
    images: [
      `${import.meta.env.BASE_URL}HF/Заставка.png`,
      `${import.meta.env.BASE_URL}HF/photo_2025-07-03_20-45-07.jpg`,
      `${import.meta.env.BASE_URL}HF/photo_2025-07-03_20-45-13.jpg`,
      `${import.meta.env.BASE_URL}HF/photo_2025-07-03_20-45-28.jpg`,
      `${import.meta.env.BASE_URL}HF/photo_2025-07-03_20-45-33.jpg`,
      `${import.meta.env.BASE_URL}HF/photo_2025-07-03_20-45-39-Photoroom.png`,
      `${import.meta.env.BASE_URL}HF/photo_2025-07-03_20-24-32-Photoroom.png`,
    ],
  },
  {
    id: "2",
    translationKey: "koorator",
    title: "Koorator",
    description:
      "Мобильное приложение для пациентов, которое позволяет записываться на прием к врачам, просматривать планы лечения, историю посещений и управлять своим профилем. Приложение интегрировано с Telegram и предоставляет полный цикл взаимодействия пациента с клиникой от записи до отслеживания лечения.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "RTK Query",
      "React-router-dom",
      "Telegram API",
    ],
    images: [
      `${import.meta.env.BASE_URL}Koorator/1.png`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-13-45-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-15-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-26-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-30-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-33-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-37-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-42-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-45-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-49-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-52-Photoroom.jpg`,
      `${
        import.meta.env.BASE_URL
      }Koorator/photo_2025-07-03_21-14-57-Photoroom.jpg`,
    ],
  },
  {
    id: "9",
    translationKey: "koorator_Admin",
    title: "Admin",
    description:
      "Admin — это десктопное приложение, для управление мобильного приложения Koorator. Обрабатывает все взаимодействия с пациентами с использованием WebSocket. Позволяет медицинскому персоналу отправлять сообщения напрямую в Telegram аккаунты пациентов, делиться медицинскими документами, результатами анализов и планами лечения. Включает просмотр истории сообщений и систему прикрепления файлов.",
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "Tailwind CSS",
      "Axios",
      "Vite",
    ],
    images: [
      `${import.meta.env.BASE_URL}Admin/1.png`,
      `${import.meta.env.BASE_URL}Admin/2.png`,
      `${import.meta.env.BASE_URL}Admin/3.png`,
      `${
        import.meta.env.BASE_URL
      }Admin/4.png`,
      `${import.meta.env.BASE_URL}Admin/5.png`,
    
    ],
  },
  {
    id: "8",
    translationKey: "agrotat",
    title: "Agrotat",
    description:
      "Agrotat — это система мониторинга и управления транспортными средствами для сельскохозяйственных предприятий. Приложение позволяет отслеживать местоположение и состояние транспорта в реальном времени, управлять поездками, анализировать данные о пробеге и топливе, ",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React-router-dom",
      "Axios",
      "Vite",
      "Notistack",
    ],
    githubUrl: "https://github.com/DanisKhasanov/Agrotat",
    images: [
      `${import.meta.env.BASE_URL}Agrotat/1.png`,
      `${import.meta.env.BASE_URL}Agrotat/Модальное окно  "Мониторинг".png`,
      `${import.meta.env.BASE_URL}Agrotat/Страница Уведомления.png`,
      `${
        import.meta.env.BASE_URL
      }Agrotat/Страница Анализ ( анализ пробега).png`,
      `${import.meta.env.BASE_URL}Agrotat/Страница отчеты (Заправки).png`,
      `${
        import.meta.env.BASE_URL
      }Agrotat/Создание поездки (автокомплит городов).png`,
      `${import.meta.env.BASE_URL}Agrotat/Страница Машины.png`,
    ],
  },
  {
    id: "3",
    translationKey: "barberLink",
    title: "BarberLink",
    description:
      "Современная система для демо онлайн-записи в барбершопы с удобным интерфейсом и полным функционалом управления записями.",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "Vite",
      "Notistack",
    ],
    images: [
      `${import.meta.env.BASE_URL}Barber/1.png`,
      `${import.meta.env.BASE_URL}Barber/photo_2025-06-12_01-03-48.jpg`,
      `${import.meta.env.BASE_URL}Barber/photo_2025-06-12_01-43-26.jpg`,
      `${
        import.meta.env.BASE_URL
      }Barber/Снимок экрана 2025-06-12 в 01.52.59.png`,
      `${
        import.meta.env.BASE_URL
      }Barber/Снимок экрана 2025-06-12 в 02.01.15.png`,
      `${
        import.meta.env.BASE_URL
      }Barber/Снимок экрана 2025-06-12 в 02.03.43.png`,
      `${
        import.meta.env.BASE_URL
      }Barber/Снимок экрана 2025-06-12 в 02.04.54.png`,
    ],
    githubUrl: "https://github.com/DanisKhasanov/BarberLink",
  },
  {
    id: "7",
    translationKey: "onlineShop",
    title: "Online shop",
    description:
      "Современный демо-интернет-магазин с адаптивным дизайном и полным циклом покупки.",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Axios",
      "Vite",
      "Notistack",
    ],
    githubUrl: "https://github.com/DanisKhasanov/touch_it",
    liveUrl: "https://daniskhasanov.github.io/touch_it/",
    images: [
      `${
        import.meta.env.BASE_URL
      }OnlineShop/Снимок экрана от 2025-07-03 21-31-22.png`,
    ],
  },
  {
    id: "6",
    translationKey: "cdekOrderPro",
    title: "Cdek OrderPRO",
    description:
      "Интеграция с сервисом доставки СДЭК, позволяющая автоматически рассчитывать стоимость доставки, создавать и скачивать накладные.",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Axios",
      "Vite",
      "React-Dadata",
      "Notistack",
    ],
    images: [
      `${import.meta.env.BASE_URL}Cdek/0.png`,
      `${import.meta.env.BASE_URL}Cdek/1.png`,
      `${import.meta.env.BASE_URL}Cdek/2.png`,
      `${import.meta.env.BASE_URL}Cdek/3.png`,
      `${import.meta.env.BASE_URL}Cdek/4.png`,
      `${import.meta.env.BASE_URL}Cdek/5.png`,
      `${import.meta.env.BASE_URL}Cdek/6.png`,
    ],
    githubUrl: "https://github.com/DanisKhasanov/Cdek_Order_PRO",
  },
  {
    id: "5",
    translationKey: "priceList",
    title: "Price List",
    description:
      "Веб-приложение для управления и отображения прайс-листов. Основная цель проекта — упростить процесс создания, обновления и публикации прайс-листов в формате PDF для различных товаров и услуг",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Material UI",
      "Material React Table",
      "Axios",
      "Vite",
      "PDF Make",
    ],
    images: [
      `${import.meta.env.BASE_URL}PriceList/0.png`,
      `${import.meta.env.BASE_URL}PriceList/1.png`,
      `${import.meta.env.BASE_URL}PriceList/2.png`,
      `${import.meta.env.BASE_URL}PriceList/3.png`,
    ],
    githubUrl: "https://github.com/DanisKhasanov/PriceList",
  },
  {
    id: "4",
    translationKey: "customerOrders",
    title: "Customer Orders",
    description:
      "Веб-приложение, предназначенное для управления заказами клиентов, с функцией автозаполнения для повышения удобства пользователей.",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Redux Toolkit",
      "Material UI",
      "Material React Table",
      "Notistack",
    ],
    images: [],
    githubUrl: "https://github.com/DanisKhasanov/Customer_orders",
  },
];
