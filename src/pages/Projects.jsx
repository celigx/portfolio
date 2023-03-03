import React from "react";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Error from "./Error";
import Loading from "./Loading";

const Projects = () => {
  const { data, error, loading } = useProjects();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="p-6 md:px-20 lg:max-w-screen-xl lg:mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Get inspired.</h1>
      <p className="text-lg mb-6 md:text-xl">Find Inspiration and Motivation to Pursue Your Own Creative Endeavors</p>
      {data.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
