import { IProjectData, ISkill } from "@/interfaces/interfaces";
// skills
import {
  Html,
  Css,
  JS,
  jquery,
  bootstrap,
  Typescript,
  TailwindCss,
  React,
  Redux,
  Next,
  Framer,
  reactHookForm,
  materialUI,
  reactQuery,
  shadcnUI,
  reactRouter,
  vite,
  zod,
  lottiefiles,
  swiper,
  prisma,
  nextAuth,
  clerk,
  formik,
  npm,
} from "@/assets";

// projects
import {
  SnapUp,
  SnapUp1,
  SnapUp2,
  SnapUp3,
  Dashboard,
  Dashboard1,
  Dashboard2,
  Dashboard3,
  Portifolio,
  Crypto,
  Crypto1,
  Crypto2,
  Netflix,
  Netflix1,
  Netflix2,
  Netflix3,
  Ecommerce,
  Remostart,
  Remostart1,
  Remostart2,
  Remostart3,
  Remostart4,
  Remostart5,
  Travel,
  Coponice,
  Coponice1,
  Coponice3,
  Coponice2,
  Coponice4,
  Coponice5,
  Coponice6,
  Coponice7,
  Kohli,
  Kohli1,
  Kohli2,
  Kohli3,
  Kohli4,
  NewHome,
  NewHome1,
  NewHome2,
  NewHome3,
  NewHome4,
  NewHome5,
  NewHome6,
  NewHome7,
  TSP1,
  TSP2,
  TSP3,
} from "@/assets";
// let uuid = self.crypto.randomUUID();
export const projectsData: IProjectData[] = [
  {
    id: 12,
    images: [TSP1, TSP2, TSP3],
    name: "TSP(Travel Salesman Problem) Website",
    description:
      "This project is about the traveling salesman algorithm. The project takes income from the user, representing the capacity of the trucks that will distribute the items and the value of each item, in addition to the city to which the item will go, as well as the distance between all cities, and then the algorithm distributes the trucks to the goods in the optimal way.",
    date: new Date("2024-6-20"),
    skills: [
      "Next JS",
      "Flask",
      "Rest api",
      "TypeScript",
      "TailwindCSS",
      "D3",
      "Framer Motion",
      "react-graph-vis",
      "react-hook-form",
    ],
    links: {
      demo: "https://bia-tsp-project.vercel.app/",
      repo: "https://github.com/tamammabroukeh/BIA-Project",
    },
  },
  {
    id: 11,
    images: [Netflix, Netflix1, Netflix2, Netflix3],
    name: "NETFLIX Website",
    description:
      "A Website similar to Netflix, where the user logs in using Google, GitHub, or email.\n It contains many movies, displaying the trailer and information for each movie, with the ability to add the movie to favorites and add it to the user list.",
    date: new Date("2024-3-1"),
    skills: [
      "Next JS",
      "NextAuth",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Shadcn UI",
      "TailwindCSS",
    ],
    links: {
      demo: "https://netflix-app-v1.vercel.app",
      repo: "https://github.com/tamammabroukeh/Netflix-app",
    },
  },
  {
    id: 10,
    images: [
      Coponice,
      Coponice1,
      Coponice2,
      Coponice3,
      Coponice4,
      Coponice5,
      Coponice6,
      Coponice7,
    ],
    name: "Coponice Website",
    description: `'Coponice' is a site that offers discounts on various products and services.
        Users can search for coupons and special offers from different stores and use them to get discounts when buying online.
        The site aims to provide opportunities for consumers to save money and get good deals when shopping online.
        1. Optimizing web pages for maximum speed and scalability.
        2. Authentication, Authorization and protected pages.
        3. It is easy to use and manage website through "a control panel".`,
    date: new Date("2024-03-22"),
    skills: [
      "React JS",
      "Redux",
      "API",
      "Material UI",
      "Formik",
      "Yup",
      "Redux toolkit",
    ],
    links: {
      demo: "https://coponice.com/",
    },
  },
  {
    id: 9,
    images: [Ecommerce],
    name: "Happy Shop Website",
    description:
      "An online store that contains many pages such as the products page and the search page in addition to the shopping cart.",
    date: new Date("2023-10-1"),
    skills: [
      "React JS",
      "Redux",
      "AXIOS",
      "Swiper.js",
      "Material UI",
      "TailwindCSS",
      "React Router DOM",
    ],
    links: {
      demo: "https://github.com/Hadeel-13/E-commerce-Website",
      repo: "https://e-commerce-website-chi-ten.vercel.app/",
    },
  },
  {
    id: 8,
    images: [SnapUp, SnapUp1, SnapUp2, SnapUp3],
    name: "E-commerce website",
    description: `An online store that contains many pages such as the products page and the search page in addition to the shopping cart.`,
    date: new Date("2022-08-15"),
    skills: [
      "React JS",
      "Redux",
      "react-slick",
      "API",
      "SASS",
      "Redux toolkit",
      "React Router DOM",
    ],
    links: {
      demo: "https://snap-up.netlify.app/",
      repo: "https://github.com/tamammabroukeh/Snap-Up",
    },
  },
  {
    id: 7,
    images: [
      Remostart,
      Remostart1,
      Remostart2,
      Remostart3,
      Remostart4,
      Remostart5,
    ],
    name: "Landing page",
    description: "It is a Training Website",
    date: new Date("2022-09-15"),
    skills: ["React JS", "React Router DOM", "Material UI", "Swiper.js"],
    links: {
      demo: "https://remo-start.vercel.app/",
      repo: "https://github.com/Hadeel-13/RemoStart",
    },
  },
  {
    id: 6,
    images: [Portifolio],
    name: "Portfolio website",
    description: `A personal website that contains works, projects, and 
    ways to communicate with the owner of the site`,
    date: new Date("2022-06-20"),
    skills: [
      "React JS",
      "TailwindCSS",
      "Email.js",
      "Swiper.js",
      "Framer Motion",
    ],
    links: {
      demo: "https://tamammabroukeh.github.io/androw-portifolio/",
      repo: "https://github.com/tamammabroukeh/androw-portifolio",
    },
  },
  {
    id: 5,
    images: [Crypto, Crypto1, Crypto2],
    name: "Crypto-verse website",
    description: `Cryptocurrency website that contains an explanation of
    digital currencies, in addition to the currency search feature`,
    date: new Date("2022-07-12"),
    skills: [
      "React JS",
      "Redux",
      "Rapid API",
      "Chart.js",
      "AXIOS",
      "Redux toolkit",
      "React Router DOM",
    ],
    links: {
      demo: "https://tamammabroukeh.github.io/cryptoverse-currencies/",
      repo: "https://github.com/tamammabroukeh/cryptoverse-currencies",
    },
  },
  {
    id: 4,
    images: [Travel],
    name: "Travel-and-Tourism website",
    description: "It is a Training Website",
    date: new Date("2023-08-04"),
    skills: [
      "React JS",
      "day.js",
      "Material UI",
      "Swiper.js",
      "TailwindCSS",
      "React Router DOM",
    ],
    links: {
      demo: "https://travel-and-tourism-gamma.vercel.app/",
      repo: "https://github.com/Hadeel-13/Travel-and-Tourism/",
    },
  },
  {
    id: 3,
    images: [Dashboard, Dashboard1, Dashboard2, Dashboard3],
    name: "Dashboard page",
    description: "It is a Training Website",
    date: new Date("2022-09-10"),
    skills: [
      "React JS",
      "Material UI",
      "React Router DOM",
      "React Google Charts",
    ],
    links: {
      repo: "https://tamammabroukeh.github.io/Dashboard/",
      demo: "https://github.com/tamammabroukeh/Dashboard",
    },
  },
  {
    id: 2,
    images: [Kohli, Kohli1, Kohli2, Kohli3, Kohli4],
    name: "KohliFonts Website",
    description: `It is a website for selling fonts, which can be used in graphic design, advertising, and other fields.
        It caters to the needs of designers, artists, and companies in need of unique and attractive fonts, Additionally, the website has a support team that can be contacted for assistance.
        
        Features:
        1. Dark | Light mode.
        2. Searching for special font.`,
    date: new Date("2023-05-26"),
    skills: [
      "API",
      "Redux",
      "React JS",
      "Email.js",
      "TailwindCSS",
      "React Router DOM",
    ],
    links: {
      demo: "https://www.kohlifonts.com/",
    },
  },
  {
    id: 1,
    images: [
      NewHome,
      NewHome1,
      NewHome2,
      NewHome3,
      NewHome4,
      NewHome5,
      NewHome6,
      NewHome7,
    ],
    name: "New Home Website",
    description: `Website for Buying and Selling Real Estate with user preferences.
        It is my Graduation Project with a grade of 93%.`,
    date: new Date("2022-06-30"),
    skills: [
      "HTML 5",
      "CSS 3",
      "Bootstrap",
      "JavaScript",
      "Jquery",
      "Chart.js",
      "Google Maps",
    ],
    links: {
      demo: "https://drive.google.com/file/d/1HTppssDuny7upUK0cNeF5HnKbyjh4ewC/view?usp=drive_link&usp=embed_facebook",
      repo: "https://github.com/Hadeel-13/New_Home",
    },
  },
];
export const SkillData: ISkill[] = [
  {
    name: "HTML 5",
    Image: Html,
    width: 80,
    height: 80,
  },
  {
    name: "CSS 3",
    Image: Css,
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: JS,
    width: 80,
    height: 80,
  },
  {
    name: "Jquery",
    Image: jquery,
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap",
    Image: bootstrap,
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: Typescript,
    width: 80,
    height: 80,
  },
  {
    name: "Vite",
    Image: vite,
    width: 80,
    height: 80,
  },
  {
    name: "React JS",
    Image: React,
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: Redux,
    width: 80,
    height: 80,
  },
  {
    name: "React Query",
    Image: reactQuery,
    width: 80,
    height: 80,
  },
  {
    name: "Next JS",
    Image: Next,
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: Framer,
    width: 80,
    height: 80,
  },

  {
    name: "Material UI",
    Image: materialUI,
    width: 80,
    height: 80,
  },
  {
    name: "Shadcn UI",
    Image: shadcnUI,
    width: 80,
    height: 80,
  },
  {
    name: "Prisma",
    Image: prisma,
    width: 80,
    height: 80,
  },
  {
    name: "NextAuth",
    Image: nextAuth,
    width: 80,
    height: 80,
  },
  {
    name: "Clerk",
    Image: clerk,
    width: 80,
    height: 80,
  },
  {
    name: "Lottie Files",
    Image: lottiefiles,
    width: 80,
    height: 80,
  },
  {
    name: "Swiper.js",
    Image: swiper,
    width: 80,
    height: 80,
  },
  {
    name: "React Hook Form",
    Image: reactHookForm,
    width: 80,
    height: 80,
  },
  {
    name: "Formik",
    Image: formik,
    width: 80,
    height: 80,
  },
  {
    name: "Zod",
    Image: zod,
    width: 80,
    height: 80,
  },
  {
    name: "React Router DOM",
    Image: reactRouter,
    width: 80,
    height: 80,
  },

  {
    name: "TailwindCSS",
    Image: TailwindCss,
    width: 80,
    height: 80,
  },
  {
    name: "npm",
    Image: npm,
    width: 80,
    height: 80,
  },
];
