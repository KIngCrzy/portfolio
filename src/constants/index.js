import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Linke,
  Allstar,
  Influradar,
  Peecang,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Algorithm Engineer (Intern)",
    company_name: "Allstar Medical Technology Co., Ltd.",
    icon: Allstar,
    iconBg: "#383E56",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Developed deep learning models (e.g., UNet, Transformer) for automatic segmentation of complex medical images, including blood vessels and tumors.",
      "Built interactive segmentation tools and integrated real-time image processing pipelines into surgical navigation systems.",
      "Applied PyTorch and TensorFlow to implement and optimize medical image analysis workflows.",
      "Enhanced segmentation accuracy by integrating multi-scale feature fusion and attention mechanisms to handle edge blurring and fine-grained detail.",
      "Collaborated with cross-disciplinary teams to design AI-powered imaging solutions and contributed to patent documentation in the fields of medical image segmentation and generation.",
    ],
  },
  {
    title: "Front End Developer (Intern)",
    company_name: "Influradar",
    icon: Influradar,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Jul 2024",
    points: [
      "Contributed to the development of the company’s internal business platform using React. ",
      "Collaborated with back-end developers and product managers to build secure, scalable, and responsive web interfaces.",
      "Integrated AWS services including Lambda, Cognito, and API Gateway to support a serverless architecture. ",
      "Focused on improving user experience and application performance through code optimization and agile delivery.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Peecang Future Technology Co., Ltd.",
    icon: Peecang,
    iconBg: "#383E56",
    date: "Aug 2021 - Feb 2023",
    points: [
      "Developed a SaaS platform for human resource management, aiming to streamline and automate HR workflows across PC, H5, and mini program environments.",
      "Frontend: Built cross-platform user interfaces using React, ensuring a consistent experience across desktop, mobile, and mini-app terminals.",
      "Backend: Developed RESTful APIs using Egg.js; designed efficient database schemas to support resume parsing and flexible data retrieval.",
      "Databases: Utilized MySQL, MongoDB, and Redis for robust data storage and performance optimization.",
      "Messaging Queue: Integrated RabbitMQ to manage asynchronous tasks and improve system responsiveness and reliability.",
      "DevOps: Containerized services with Docker and deployed using Kubernetes (K8s) for cluster management, achieving scalable and high-availability infrastructure.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Linke Technology Co., Ltd.",
    icon: Linke,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jul 2021",
    points: [
      "Designed and developed a cross-platform mobility service platform, supporting multi-system integration and Single Sign-On (SSO) for seamless user authentication.",
      "Built responsive front-end interfaces using React, incorporating real-time vehicle tracking with WebSocket and interactive dashboards using Ant Design and bizChart.",
      "Managed data across MySQL, MongoDB, and Redis for efficient and reliable storage.",
      "Implemented asynchronous message processing with Kafka to support high-concurrency workloads.",
      "Containerized services with Docker and deployed the system on Alibaba Cloud using scalable infrastructure to ensure high availability and extensibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jason proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jason does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jason optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
