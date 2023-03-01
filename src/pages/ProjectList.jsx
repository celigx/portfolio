import React from "react";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";

const ProjectList = () => {
  const { data, error, loading } = useProjects();

  if (loading) return <div className="">loading...</div>;
  if (error) return <div className="">Something went wrong.</div>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold mb-6">Get inspired.</h1>
      <p className="text-lg mb-6 md:text-xl">Find Inspiration and Motivation to Pursue Your Own Creative Endeavors</p>
      {data.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
