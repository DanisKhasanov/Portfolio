import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
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
    githubUrl: "https://github.com/username/ecommerce-platform",
  },
  {
    id: "2",
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
    githubUrl: "https://github.com/username/telegram-mini-app",
  },
  {
    id: "3",
    title: "BarberLink",
    description:
      "Современная система для онлайн-записи в барбершопы с удобным интерфейсом и полным функционалом управления записями.",
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
    githubUrl: "https://github.com/DanisKhasanov/BarberLink",
  },
  {
    id: "4",
    title: "Customer_orders",
    description:
      "Dеб-приложение, предназначенное для управления заказами клиентов, с функцией автозаполнения для повышения удобства пользователей.",
    technologies: [
      "React",
      "TypeScript",
      "React-router-dom",
      "Redux Toolkit",
      "Material React Table",
      "Notistack",
    ],
    githubUrl: "https://github.com/DanisKhasanov/Customer_orders",
  },
  {
    id: "5",
    title: "PriceList",
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
    githubUrl: "https://github.com/DanisKhasanov/PriceList",
  },
  {
    id: "6",
    title: "Cdek_Order_PRO",
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
    githubUrl: "https://github.com/DanisKhasanov/Cdek_Order_PRO",
  },
  {
    id: "7",
    title: "Online_shop",
    description:
      "Современный интернет-магазин с адаптивным дизайном и полным циклом покупки.",
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
  },
];
