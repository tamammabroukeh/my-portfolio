// "use client";
import React from "react";
import Image from "next/image";
import ItemLayout from "@/components/about/ItemLayout";
import { projectsData } from "@/data/data";
import { redirect, useRouter } from "next/navigation";
import Skills from "@/components/projects/Skills";
import Date from "@/utils/Date";
import Links from "@/utils/Links";
import Typography from "@/utils/Typography";
import type { Metadata, ResolvingMetadata } from "next";
import Error from "@/app/error";
type Props = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.projectId;
  const project = projectsData.find((project) => project.id === +id);
  if (project === undefined) return redirect("/error");
  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json())
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  return {
    title: project?.name,
    description: project?.description,
    openGraph: {
      images: [
        {
          url: project ? project.images[0].src : "/images/my-portfolio.jpg",
          width: 1200,
          height: 630,
          href: `https://3d-portfolio-hadee13-bimkywnoz-hadeel13s-projects.vercel.app${
            project ? project.images[0].src : "/images/my-portfolio.jpg"
          }`,
          alt: "Open Graph image",
        },
        // ...previousImages,
      ],
    },
  };
}
const Projectpage = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  const data = projectsData.find((project) => project.id === +projectId);
  const router = useRouter();
  if (data === undefined)
    return (
      <Error error={"Some thing went wrong"} reset={() => router.refresh()} />
      // redirect("/error")
      // <div>x</div>
    );
  // console.log(data);
  return (
    <div className="flex flex-col gap-y-7">
      <ItemLayout className="justify-start">
        <div className="flex flex-col gap-y-7 w-full">
          <div className="flex flex-wrap justify-between items-center gap-7">
            <Typography variants="title">{data?.name as string}</Typography>
            <Links links={data?.links} />
          </div>
          <Date date={data?.date} />
          <Skills skills={data?.skills} />
          <Typography
            className="text-justify whitespace-pre-line"
            variants="description"
          >
            {data?.description as string}
          </Typography>
        </div>
      </ItemLayout>
      <ItemLayout>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-7 space-y-7">
          {data?.images.map((img, index) => (
            <Image
              key={index}
              className="rounded-xl w-full"
              src={img}
              alt={data?.name}
              priority
              placeholder="blur"
            />
          ))}
        </div>
      </ItemLayout>
    </div>
  );
};
export default Projectpage;
