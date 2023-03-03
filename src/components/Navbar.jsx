import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 px-6">
      <ul className="flex">
        <li className="mr-10">
          <Link to={"/"}>
            <a href="" className="text-md hover:text-gray-500">
              Home
            </a>
          </Link>
        </li>
        <li className="mr-10">
          <Link to={"/projects"}>
            <a href="" className="text-md hover:text-gray-500">
              Projects
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
