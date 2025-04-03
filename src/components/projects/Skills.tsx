import { SKILLS } from "@/interfaces/interfaces";
const Skills = ({ skills }: { skills: SKILLS[] }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {skills.map((skill, index) => {
        return <Skill key={index} skill={skill} />;
      })}
    </div>
  );
};
export default Skills;

const Skill = ({ skill }: { skill: SKILLS }) => {
  return (
    <span className="py-1 px-2 bg-background shadow-sm shadow-secondary border border-secondary text-nowrap rounded-md text-xs xs:text-sm font-normal">
      {skill}
    </span>
  );
};
