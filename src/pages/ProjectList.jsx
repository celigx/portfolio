import React, { useState } from "react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Loading from "./Loading";

const ProjectList = () => {
  const [show, setShow] = useState(2);

  const { data, error, loading } = useProjects();

  if (loading) return <Loading />;
  if (error) return <Error />;

  const showMore = () => {
    // Get number of projects
    const projectLength = data.projects.length;

    setShow(projectLength);
  };

  return (
    <div className="p-6 md:px-20 lg:max-w-screen-xl lg:mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Our work</h1>
      {data.projects.slice(0, show).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <div className="flex items-center justify-center">
        <button
          onClick={showMore}
          className="bg-gray-200 hover:bg-gray-400 duration-150 text-gray-500 hover:text-white font-bold uppercase tracking-widest rounded-3xl px-20 py-3"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
