import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Loading from "./Loading";
import NotFound from "./NotFound";

const Home = () => {
  const { data, error, loading } = useProjects();

  if (loading) return <Loading />;
  if (error) return <NotFound />;

  // Show the number of project cards
  const CARD_NUMBER = 4;

  return (
    <>
      <div className="h-186 overflow-clip p-6 mb-6 md:h-198 lg:h-full lg:overflow-auto lg:p-12 lg:mb-12" style={{ background: "#cfecf4" }}>
        <div className="lg:max-w-screen-2xl lg:mx-auto lg:flex lg:items-center lg:justify-between lg:w-full">
          <div className="mb-12 lg:mb-0 lg:mr-10">
            <h1 className="text-7xl font-medium md:text-9xl">Code.</h1>
            <h1 className="text-7xl md:text-9xl">Design.</h1>
            <h1 className="text-7xl font-medium mb-6 md:text-9xl">Create.</h1>
            <p className="text-xl mb-6 md:text-2xl">To turn an idea into reality, one must first code, design, and create.</p>
            <button className="bg-slate-900 hover:bg-slate-700 duration-150 text-white rounded-full px-6 py-3 md:text-xl md:px-12 md:py-4">
              Explore projects
            </button>
          </div>
          <figure className="flex flex-1 items-center justify-center">
            <picture>
              <img src="/iphone-14-pro.png" alt="" className="w-full" />
            </picture>
          </figure>
        </div>
      </div>
      <div className="p-6 max-w-screen-2xl mx-auto xl:p-0">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold mb-6">My work</h1>
          <Link to={"/projects"} className="text-2xl font-semibold underline hover:text-gray-600 mb-6">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-5">
          {data.projects.slice(0, CARD_NUMBER).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
