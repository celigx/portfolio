import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center h-16 px-6 lg:px-12 lg:max-w-screen-2xl 2xl:mx-auto 2xl:px-0">
      <ul className="flex">
        <li className="mr-10">
          <Link to={"/"} className="text-md hover:text-gray-500 duration-150">
            Home
          </Link>
        </li>
        <li className="mr-0">
          <Link to={"/projects"} className="text-md hover:text-gray-500 duration-150">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
