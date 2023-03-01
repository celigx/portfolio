import React from "react";
import { useProjectDetail } from "../hooks/useProjectDetail";

const ProjectDetail = () => {
  const { data, error, loading } = useProjectDetail();

  if (loading) return <div className="">loading...</div>;
  if (error) return <div className="">Something went wrong.</div>;

  console.log(data);

  return (
    <>
      {/* Hero */}
      <div className="text-white p-6 mb-6 md:flex md:items-center md:mb-0 lg:h-screen lg:px-20" style={{ background: data.project.card.backColor.hex }}>
        <article className="flex flex-col flex-1 mb-6 md:mr-6 md:mb-0">
          <h2 className="text-lg uppercase mb-3 md:text-xl">{data.project.card.name}</h2>
          <h1 className="text-2xl font-medium mb-3 md:text-4xl">{data.project.card.title}</h1>
          <p className="text-md md:block">{data.project.card.description}</p>
        </article>

        <div className="flex flex-1 justify-center">
          <img className="w-3/5 object-cover md:w-4/5 lg:w-80" src={data.project.card.image.url} alt="" />
        </div>
      </div>

      {/* Idea */}
      <div className="px-6 mb-10 md:px-20 md:py-20">
        <h1 className="text-4xl md:text-5xl mb-6 ">{data.project.idea.title}</h1>
        <p className="text-lg mb-10 lg:mb-20">{data.project.idea.description}</p>
        <img src={data.project.idea.image.url} alt="" className="rounded-2xl" />
      </div>

      {/* Design */}
      <div className="px-6 mb-10 md:px-20 md:pb-20">
        <h1 className="text-4xl md:text-5xl mb-6">{data.project.design.title}</h1>
        <p className="text-lg mb-6">{data.project.design.description}</p>
        <img src={data.project.design.image.url} alt="" className="rounded-2xl" />
      </div>

      {/* Development */}
      <div className="px-6 mb-10 md:px-20 md:pb-20">
        <h1 className="text-4xl md:text-5xl mb-6">{data.project.development.title}</h1>
        <p className="text-lg mb-6">{data.project.development.description}</p>
        <img src={data.project.development.image.url} alt="" className="rounded-2xl" />
      </div>
    </>
  );
};

export default ProjectDetail;
