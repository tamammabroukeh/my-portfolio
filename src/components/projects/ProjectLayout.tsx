// import IconLink from "@/utils/IconLink";
import Links from "@/utils/Links";
import IconLink from "@/utils/IconLink";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ListCollapse } from "lucide-react";
import { IProjectData } from "@/interfaces/interfaces";
import Skills from "@/components/projects/Skills";
import Date from "@/utils/Date";
import Typography from "@/utils/Typography";
const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};
const ProjectLayout = ({
  name,
  description,
  links,
  images,
  id,
  date,
  skills,
}: IProjectData) => {
  return (
    <motion.div
      variants={item}
      className="flex flex-col justify-between gap-y-3 w-full rounded-lg p-4 md:p-6 custom-bg max-w-96 lg:max-w-full"
    >
      <Link
        target="_blank"
        href={`/projects/${id}`}
        className="flex flex-col gap-y-3"
      >
        <div className="lg:h-72">
          <Image
            src={images[0]}
            alt={name}
            priority
            placeholder="blur"
            className="h-full shadow-md shadow-secondary border-2 border-secondary rounded-lg"
          />
        </div>
        <Typography
          variants="title"
          className="text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {name}
        </Typography>
        <Typography
          variants="description"
          className="indent-0 hover:indent-1 text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {description}
        </Typography>
        <Skills skills={skills} />
      </Link>
      <div>
        <hr className="mb-3" />
        <div className="flex flex-row flex-wrap justify-between items-end gap-1">
          <Date date={date} />
          <Links links={links}>
            <IconLink
              target="_blank"
              href={`/projects/${id}`}
              title={"More Details"}
            >
              <ListCollapse />
            </IconLink>
          </Links>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectLayout;
