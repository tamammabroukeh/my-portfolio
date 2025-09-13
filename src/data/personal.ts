import { IBtnList } from "@/interfaces/interfaces";

export const BtnList: IBtnList[] = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/tamammabroukeh/",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tamam-mabrouka-a0aa37224/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Gitlab",
    link: "https://gitlab.com/tammammabroukeh/",
    icon: "gitlab",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Tammam Mabroukeh Frontend.pdf",
    // link: "/Tammam Mabroukeh MERN stack.pdf",
    icon: "resume",
    newTab: true,
  },
];
export const NAME = "Tammam Mabroukeh"
export const NUMBER_OF_CLIENTS = "+3"
export const YEARS_OF_EXPERIENCE = "+2"