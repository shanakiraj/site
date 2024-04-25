//"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-5 mb-12 flex sticky top-0 bg-gray-100 w-full z-10">
      <button className="md:hidden block" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen && (
            <path
              fillRule="evenodd"
              d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 011.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!isOpen && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
            />
          )}
        </svg>
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:justify-center md:items-center md:space-x-4`}
      >
        <li>
          <a className="text-Black px-4 py-2 rounded-md hover:text-stone-500" href="#">
            About
          </a>
        </li>
        <li>
          <a className="text-Black px-4 py-2 rounded-md hover:text-stone-500" href="#Education">
            Education
          </a>
        </li>
        <li>
          <a className="text-black px-4 py-2 rounded-md hover:text-stone-500" href="#Experience">
            Experience
          </a>
        </li>
        <li>
          <a className="text-black px-4 py-2 rounded-md hover:text-stone-500" href="#Projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
