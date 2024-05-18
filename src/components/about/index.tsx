import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";
import { SkillData } from "@/data/data";
import AboutElement from "@/utils/AboutElement";
import Sub from "@/utils/Sub";
import { NUMBER_OF_CLIENTS, YEARS_OF_EXPERIENCE } from "@/data/personal";
const AboutDetails = () => {
  return (
    <section className="py-15 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <AboutElement classes="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating.
          </AboutElement>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <AboutElement classes="font-semibold w-full text-left text-2xl sm:text-4xl">
            <Sub num={NUMBER_OF_CLIENTS} text="clients" />
          </AboutElement>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <AboutElement classes="font-semibold w-full text-left text-2xl sm:text-4xl">
            <Sub num={YEARS_OF_EXPERIENCE} text="years of experience" />
          </AboutElement>
        </ItemLayout>
        <ItemLayout className={"col-span-full p-3"}>
          <div className="flex flex-col gap-9">
            <AboutElement classes="font-bold text-3xl text-center">
              Skills
            </AboutElement>
            <div className="flex flex-wrap justify-center gap-7 items-end">
              {SkillData.map((skill) => {
                return (
                  <div
                    className="flex flex-col items-center justify-end gap-1"
                    key={skill?.Image}
                  >
                    <div className="shadow-inner hover:shadow-lg shadow-foreground rounded-full p-6">
                      <Image
                        src={skill.Image}
                        alt={skill.name}
                        width={70}
                        // height={70}
                      />
                    </div>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap">
                      {skill.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};
export default AboutDetails;
