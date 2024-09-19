import { Github, Twitter, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoBanky from "/public/images/logos/bankylogo.png";
import LogoBankylight from "/public/images/logos/bankylight.png";
import Logoploylight from "/public/images/logos/plolight.webp";
import LogoPloyco from "/public/images/logos/Ploycologo.png";
import LogoTriggaTech from "/public/images/logos/TriggaTech.png";
import ProjectBanky from "/public/images/Analyimg.png";
import ProjectPloyco from "/public/images/ployco.jpg";
import ProjectAi from "/public/images/OpenAi.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Ayeobasan",
  GITHUB_REPO: "https://github.com/Ayeobasan",
  TWITTER: "https://x.com/Johnnle_js",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Ayeobasan",
  },
  {
    icon: Twitter,
    url: "https://x.com/Johnnle_js",
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/johnnie-js-%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB-978a45241/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoBanky,
    darkModeLogo: LogoBankylight,
    logoAlt: "Banky logo",
    position: "Lead Frontend developer",
    startDate: new Date(2023, 3),
    currentlyWorkHere: true,
    summary: [
      "Boosted monthly productivity by 60% through development of organizational software.",
      "Collaborated with cross-functional teams to integrate frontend components using TypeScript, Node.js, and Next.js",
      "Enhanced website accessibility, ensuring compliance with standards and improving inclusivity",
      "Created a reliable payment confirmation system and detailed transaction tracking platform",
      "Leveraged Stripe technology to build a secure cross-border payment platform",
    ],
  },
  {
    logo: Logoploylight,
    darkModeLogo: LogoPloyco,
    logoAlt: "ployco logo",
    position: "Frontend developer",
    startDate: new Date(2023, 9),
    endDate: new Date(2024, 2),
    summary: [
      "Implemented React in 90% of projects, resulting in a 30% increase in project efficiency.",
      "Collaborated with UX/UI designers and backend developers to implement design mockups with 95% alignment to project requirements.",
      "Conceptualized and implemented new website designs.",
      "Designed architecture of different projects (frontend + backend).",
      "Worked on enterprise-level projects for a variety of clients.",
      "Handled sprint planning & task distribution.",
    ],
  },
  {
    logo: LogoTriggaTech,
    darkModeLogo: LogoTriggaTech,
    logoAlt: "LogoTriggaTech logo",
    position: "Web Developer",
    startDate: new Date(2024, 7),
    currentlyWorkHere: true,
    summary: [
      "Worked as a web developer (React / Next).",
      "Implemented new technologies/frameworks, such as React, in 90% of projects, resulting in a 30% increase in project efficiency.",
      "Actively engaged in research and development activities, staying abreast of emergingtechnologies and trends.",
      "implementing innovative solutions to address evolving market demands.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Banky",
    description:
      "A platform for that provides financial infrastructure to enable individuals and businesses to get paid, make payments, get personalized credit offerings.",
    url: "https://www.banky.ca",
    previewImage: ProjectBanky,
    technologies: ["React", "Vite", "Css", "Tailwindcss"],
  },
  {
    name: "PLoyco",
    description:
      "A  platform is easy to use, with an intuitive interface that makes it easy for artists to upload and distribute their music. This helps to save time and reduce frustration, allowing artists to focus on creating their music.",
    url: "https://Ployco.com",
    previewImage: ProjectPloyco,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Css",
      "Tailwindcss",
      "React Query",
    ],
  },
  {
    name: "SumZ",
    description:
      "A platform for Simplifing your reading with Summize,an open-source articles summarizer that transforms any website or lengthy articles into clear and concise summarizer for easy understanding.",
    url: "https://johnnie-openaiwebsite-summarizer.netlify.app/",
    previewImage: ProjectAi,
    technologies: [
      "React",
      "Vite",
      "Open AI",
      "Css",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
