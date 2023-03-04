import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 px-6 md:px-20 lg:max-w-screen-xl lg:mx-auto">
      <ul className="flex">
        <li className="mr-10">
          <Link to={"/portfolio"} className="text-md hover:text-gray-500 duration-150">
            Home
          </Link>
        </li>
        <li className="mr-10">
          <Link to={"/portfolio/projects"} className="text-md hover:text-gray-500 duration-150">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
