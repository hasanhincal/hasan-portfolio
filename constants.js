import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

export const socials = [
  { icon: <FaGithub />, path: "https://www.github.com/hasanhincal" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hasan-hincal-4b292a24a/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@HasanHasan-dn9hc" },
  { icon: <FaTwitter />, path: "" },
];

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 53,
    text: "Project completed",
  },
  {
    num: 8,
    text: "Technolojies mastered",
  },
  {
    num: 300,
    text: "Code commits",
  },
];

export const services = [
  {
    num: "01",
    title: "Web Development",
    href: "",
    description:
      "Creating responsive, dynamic, and user-friendly websites using modern web technologies.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    href: "",
    description:
      "Designing intuitive and visually appealing interfaces that enhance user experience.",
  },
  {
    num: "03",
    title: "Performance Optimization",
    href: "",
    description:
      "Boosting website speed and efficiency, ensuring optimal performance across all devices.",
  },
  {
    num: "04",
    title: "SEO",
    href: "",
    description:
      "Implementing strategies to improve search engine rankings, driving organic traffic to your site.",
  },
];

// abaut data

export const about = {
  title: "About me",
  description:
    "I am a passionate React Frontend Developer with over 3 years of experience. I specialize in building responsive, user-friendly interfaces and am committed to delivering high-quality work that meets the needs of clients and end-users alike. I am constantly learning and staying up-to-date with the latest technologies in the frontend ecosystem to provide the best possible solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hasan Hınçal",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+90) 542 141 14 14",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Hasan.14",
    },
    {
      fieldName: "Email",
      fieldValue: "hasanh643@yahoo.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Turkish, English",
    },
  ],
};

// experience data

export const experience = {
  icon: "/resume/badge.svg",
  title: "My Experience",
  description:
    "With 3 years of experience in software development, I have been specializing in frontend development at EmaarTech since 2022. My work focuses on creating dynamic, responsive, and user-friendly interfaces that enhance user experience.",
  items: [
    {
      company: "EmaarTech",
      position: "Frontend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Frontend Developer Intern",
      duration: "Summer - 2021",
    },
    {
      company: "E Commerce Startup",
      position: "Freelance Web Developer",
      duration: "2022 - 2023",
    },
    {
      company: "Tech Acedemy",
      position: "Teaching Assistant",
      duration: "Summer - 2022",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2022 - 2023",
    },
  ],
};

// education data

export const education = {
  icon: "/resume/cap.svg",
  title: "My Education",
  description:
    "I have pursued extensive training in frontend web development, algorithms, and data structures through various reputable platforms. My education includes completing a comprehensive Frontend Web Development Bootcamp at Udemig in 2023, which solidified my expertise in modern web technologies. I also gained a deep understanding of algorithm programming and data structures through BTK Academy in 2022, and further honed my frontend skills through additional courses on Udemy and other online platforms.",
  items: [
    {
      institution: "Udemig",
      degree: "Frontend Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "BTK Academy",
      degree: "Algorithm Programming and Data Structures",
      duration: "2022",
    },
    {
      institution: "Udemy",
      degree: "Frontend Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2021",
    },
  ],
};

// skills data

export const skills = {
  title: "My Skills",
  description:
    "With a strong foundation in modern web technologies, I specialize in creating responsive, dynamic, and user-friendly web applications. My expertise includes HTML5, CSS3, and JavaScript, ensuring clean and efficient code. I excel in building complex interfaces using React.js and Next.js, along with Tailwind CSS for styling. Additionally, I am proficient in TypeScript for robust type-safe code, and Firebase for backend services and real-time databases.",
  skillist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
  ],
};

// projects data
export const projects = [
  {
    num: "01",
    category: "frontent",
    title: "hotels app",
    description:
      "A React application for managing and exploring hotels. This app allows users to search for hotels, create new hotel entries, view details, and filter/sort hotels based on various criteria.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
    ],
    image: "/work/thumb1.png",
    live: "",
    github: "https://github.com/hasanhincal/Hotels-App-tanstack-query",
  },
  {
    num: "02",
    category: "fullstack",
    title: "restaurant app",
    description:
      "A responsive restaurant application built with Next.js, Prisma, and Stripe. This project includes order management, responsive design, and payment functionalities.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Prisma" }],
    image: "/work/thumb2.png",
    live: "",
    github: "https://github.com/hasanhincal/restaurant-nextjs-full",
  },
  {
    num: "03",
    category: "frontent",
    title: "youtube clone app",
    description:
      "This project is a web application developed to emulate the basic functionality of YouTube. Users can search for videos, watch them and add them to their favorite lists. The project was developed using modern web technologies and popular libraries.",
    stack: [
      { name: "React.js" },
      { name: "RapitAPI YT API" },
      { name: "Tailwind CSS" },
    ],
    image: "/work/thumb3.png",
    live: "",
    github: "https://github.com/hasanhincal/Youtube-Clone-Project-React",
  },
  {
    num: "04",
    category: "frontent",
    title: "twitter clone app",
    description:
      "Users can create, edit, like and delete tweets.View tweet updates in real time.User-friendly interface design.",
    stack: [
      { name: "React.js" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
    ],
    image: "/work/thumb4.png",
    live: "https://twitter-clone-firebase-alpha.vercel.app/",
    github: "https://github.com/hasanhincal/Youtube-Clone-Project-React",
  },
  {
    num: "05",
    category: "frontent",
    title: "chat app",
    description:
      "This project aims to create a simple chat application using Firebase. Firebase provides features such as real-time database and authentication, enabling you to build fast and reliable chat applications.",
    stack: [{ name: "React.js" }, { name: "Firebase" }, { name: "CSS 3" }],
    image: "/work/thumb5.png",
    live: "https://chat-app-fire-base.vercel.app/",
    github: "https://github.com/hasanhincal/Chat-App-FireBase",
  },
  {
    num: "06",
    category: "frontent",
    title: "D-506 Game Portal app",
    description:
      "Welcome to the D-503 Game Portal! This repository houses the code for a vibrant gaming hub designed to connect gamers and provide an immersive experience with a variety of games. Our goal is to create a community-driven platform where users can play, share, and discuss their favorite games.",
    stack: [{ name: "Html 5" }, { name: "Scss" }, { name: "JavaScript" }],
    image: "/work/thumb6.png",
    live: "",
    github: "https://github.com/hasanhincal/Chat-App-FireBase",
  },
];

// project info
export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+90) 514 141 14 14",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hasanfatime14@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Izzet Baysal Street, Central/Bolu 14000",
  },
];

// input data
export const inputData = [
  {
    type: "text",
    placeholder: "Firstname",
  },
  {
    type: "text",
    placeholder: "Lastname",
  },
  {
    type: "email",
    placeholder: "Email address",
  },
  {
    type: "text",
    placeholder: "Phone number",
  },
];
