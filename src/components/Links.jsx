import React from "react";

const Links = ({ data }) => {
  return (
    <div className="px-6 mb-6 md:px-20 md:pb-20 lg:max-w-screen-xl lg:mx-auto">
      <h1 className="text-4xl md:text-6xl mb-6">{data.project.link.title}</h1>
      <div className="flex flex-col md:flex-row">
        <a
          href={data.project.link?.website}
          className="bg-gray-200 hover:bg-gray-300 text-gray-500 flex flex-col items-center justify-center flex-1 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl uppercase font-medium py-6 md:py-16 lg:py-24"
        >
          <img src={data.project.link.websiteIcon.url} alt="" className="w-10 h-10 mb-3" />
          Website
        </a>
        <a
          href={data.project.link?.github}
          className="bg-gray-200 hover:bg-gray-300 text-gray-500 flex flex-col items-center justify-center flex-1 rounded-b-2xl md:rounded-bl-none  md:rounded-r-2xl uppercase font-medium py-6 md:py-16 lg:py-24"
        >
          <img src={data.project.link.githubIcon.url} alt="" className="w-10 h-10 mb-3" />
          Github
        </a>
      </div>
    </div>
  );
};

export default Links;
