import React from "react";
import { useParams } from "react-router";
import Link from "../components/Link";
import Links from "../components/Links";
import { useProjectDetail } from "../hooks/useProjectDetail";
import Loading from "./Loading";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useProjectDetail(id);

  if (loading) return <Loading />;
  if (error) return <NotFound />;

  return (
    <>
      {/* Hero */}
      <div className="flex mb-6 md:mb-0 lg:h-screen" style={{ background: data.project.card.backColor.hex, color: data.project.card.textColor.hex }}>
        <div className="p-6 md:flex md:items-center md:py-20 md:px-20 lg:max-w-screen-xl lg:mx-auto">
          <article className="flex flex-col flex-1 mb-6 md:mr-6 md:mb-0">
            <h2 className="text-lg uppercase mb-6 md:text-xl">{data.project.card.name}</h2>
            <h1 className="text-3xl font-medium mb-6 md:text-4xl lg:text-6xl">{data.project.card.title}</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light md:block">{data.project.card.description}</p>
          </article>

          <div className="flex flex-1 justify-center">
            <img className="w-3/5 object-cover md:w-4/5 lg:w-80" src={data.project.card.image?.url} alt="" />
          </div>
        </div>
      </div>

      {/* Idea */}
      <div className="px-6 mb-6 md:px-20 md:py-20 lg:max-w-screen-xl lg:mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6">{data.project.idea.title}</h1>
        <p className="text-lg md:text-xl md:font-light mb-6">{data.project.idea.description}</p>
        <img src={data.project.idea.image?.url} alt="" className="rounded-2xl" />
      </div>

      {/* Design */}
      <div className="px-6 mb-6 md:px-20 md:pb-20 lg:max-w-screen-xl lg:mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6">{data.project.design.title}</h1>
        <p className="text-lg md:text-xl md:font-light mb-6">{data.project.design.description}</p>
        <img src={data.project.design.image?.url} alt="" className="rounded-2xl" />
      </div>

      {/* Development */}
      <div className="px-6 mb-6 md:px-20 md:pb-20 lg:max-w-screen-xl lg:mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6">{data.project.development.title}</h1>
        <p className="text-lg md:text-xl md:font-light mb-6">{data.project.development.description}</p>
        <img src={data.project.development.image?.url} alt="" className="rounded-2xl" />
      </div>

      {/* Link */}
      {data.project.link.website === null ? <Link data={data} /> : <Links data={data} />}
    </>
  );
};

export default ProjectDetail;
