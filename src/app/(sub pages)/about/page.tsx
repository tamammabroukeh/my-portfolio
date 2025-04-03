import Image from "next/image";
import { bgAbout } from "@/assets";
import AboutDetails from "@/components/about";
import { NAME } from "@/data/personal";
export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <Image
        src={bgAbout}
        placeholder="blur"
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10"></div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-5xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            {NAME}
          </h1>
          <p className="font-light text-3xl md:text-4xl text-foreground ">
            MERN stack & Next.js developer
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
