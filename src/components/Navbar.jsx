import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 px-6">
      <ul className="flex">
        <li className="mr-10">
          <a href="" className="text-md hover:text-gray-500">
            Home
          </a>
        </li>
        <li className="mr-10">
          <a href="" className="text-md hover:text-gray-500">
            Projects
          </a>
        </li>
        <li className="">
          <a href="" className="text-md hover:text-gray-500">
            About
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
