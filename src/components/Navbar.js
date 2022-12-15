import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar({ fixed }) {

const [navbarOpen, setNavbarOpen] = React.useState(false);

const lastNameStyle={

  'color':'#233dff',

}
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl">
            <b>M</b><b style={lastNameStyle}>B</b>
          </a>
        </a>
        <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              -------
          </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#certifications" className="mr-5 hover:text-white">
            Certifications
          </a>
          <a href="#professional" className="mr-5 hover:text-white">
            Experiences
          </a>
          <a href="#professional" className="mr-5 hover:text-white">
            Social Media
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Contact me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
    
  );
}
