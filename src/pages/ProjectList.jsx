import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ProjectCard from "../components/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import Loading from "./Loading";
import NotFound from "./NotFound";

const ProjectList = () => {
  const { data, error, loading } = useProjects();

  if (loading) return <Loading />;
  if (error) return <NotFound />;

  // Show the number of project cards
  const CARD_NUMBER = 3;

  return (
    <div className="p-6 md:px-20 lg:max-w-screen-xl lg:mx-auto">
      <h1 className="text-4xl font-semibold mb-6">My work.</h1>
      {data.projects.slice(0, CARD_NUMBER).map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <div className="flex items-center justify-center">
        <Link
          to={"/portfolio/projects"}
          className="bg-gray-200 hover:bg-gray-400 duration-150 text-gray-500 hover:text-white font-bold uppercase tracking-widest rounded-3xl px-20 py-3"
        >
          Show all
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
