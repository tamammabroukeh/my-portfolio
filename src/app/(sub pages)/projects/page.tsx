import Image from "next/image";
import ProjectList from "@/components/projects";
import { projectsData } from "@/data/data";
import { bgProjects } from "@/assets";
export const metadata = {
    title: "Projects",
};
export default function Projects() {
    return (
        <>
            <Image
                src={bgProjects}
                alt="Next.js Portfolio website's about page background image"
                className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
                priority
                sizes="100vw"
                placeholder="blur"
            />
            <ProjectList projects={projectsData} />
        </>
    );
}
