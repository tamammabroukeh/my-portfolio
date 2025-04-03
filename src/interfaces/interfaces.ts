import { StaticImageData } from "next/image";
export interface IChildren {
  children: React.ReactNode;
}
export interface IItemLayout {
  className?: string;
  children: React.ReactNode;
}

export interface IProjectData {
  id: number;
  images: StaticImageData[];
  name: string;
  skills: SKILLS[];
  description: string;
  date: Date;
  links: {
    demo?: string;
    repo?: string;
  };
  // demoLink: string;
  // repoLink?: string;
}
export interface IProjectsData {
  projects: IProjectData[];
}
export interface IBtnList {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

export type ITemplateForm = {
  [key: string]: string;
};
export type IFormData = {
  name: string;
  email: string;
  message: string;
};

export interface IcreateFirefly {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
}

export interface IProjectButton {
  title: string;
  classes?: string;
  to: string;
}
export interface ISkill {
  name: SKILLS;
  Image: any;
  width?: number;
  height?: number;
}
export interface IError {
  reset: () => void;
  error: string;
  // error: Error;
}
export interface INavButton {
  x: string | number;
  y: string | number;
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
  labelDirection?: string;
}
export type SKILLS =
  | "HTML 5"
  | "CSS 3"
  | "JavaScript"
  | "Jquery"
  | "Bootstrap"
  | "Vite"
  | "React Query"
  | "Clerk"
  | "Lottie Files"
  | "React Hook Form"
  | "Zod"
  | "Next JS"
  | "NextAuth"
  | "TypeScript"
  | "Prisma"
  | "Supabase"
  | "Shadcn UI"
  | "TailwindCSS"
  | "React JS"
  | "Redux"
  | "Redux toolkit"
  | "API"
  | "Material UI"
  | "Formik"
  | "Yup"
  | "AXIOS"
  | "React Router DOM"
  | "npm"
  | "Swiper.js"
  | "react-slick"
  | "API"
  | "SASS"
  | "Email.js"
  | "Swiper.js"
  | "Framer Motion"
  | "Rapid API"
  | "Chart.js"
  | "day.js"
  | "React Google Charts"
  | "Google Maps"
  | "Flask"
  | "Rest api"
  | "D3"
  | "react-graph-vis"
  | "react-hook-form"
  | "Next UI"
  | "Node JS"
  | "Express JS"
  | "Mongo DB"
  | "next-safe-action"
  | "nuqs";
