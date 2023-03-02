import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="text-white rounded-xl p-6 mb-6 overflow-clip md:flex md:p-12" style={{ background: project.card.backColor.hex }}>
        <article className="flex flex-col flex-1 mb-3 md:mr-6 md:mb-0">
          <h2 className="text-lg uppercase mb-3 md:text-xl">{project.card.name}</h2>
          <h1 className="text-2xl font-medium mb-3 md:text-4xl">{project.card.title}</h1>
          <p className="text-md hidden md:block">{project.card.description}</p>
        </article>
        <figure className="flex-1 h-96 md:h-0">
          <picture>
            <img className="w-full object-cover" src={project.card.image.url} alt="" />
          </picture>
        </figure>
      </div>
    </Link>
  );
};

export default ProjectCard;
