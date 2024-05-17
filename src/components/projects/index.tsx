"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import { IProjectData, IProjectsData } from "@/interfaces/interfaces";
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 1.5,
        },
    },
};

const ProjectList = ({ projects }: IProjectsData) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full px-0 xs:px-3 grid gap-7 grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-stretch"
        >
            {projects.map((project: IProjectData, index: number) => {
                return <ProjectLayout key={index} {...project} />;
            })}
        </motion.div>
    );
};
export default ProjectList;
