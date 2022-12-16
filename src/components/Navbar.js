import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";


export default function Navbar({ fixed }) {

const [navbarOpen, setNavbarOpen] = React.useState(false);

const lastNameStyle={

  'color':'#233dff',

}
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container flex justify-center p-5 md:justify-start lg:justify-start">
        <a className="title-font font-medium text-white flex justify-center pr-4 md:justify-start lg:justify-start">
          <a href="#about" className="ml-3 text-3xl">
            <b>M</b><b style={lastNameStyle}>B</b>
          </a>
        </a>
       <div  className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex float-left" : " hidden")
            }
            id="example-navbar-danger">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-row items-center text-base justify-center">
          <ul className="flex flex-col lg:flex-row md:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#projects"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#skills"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#certifications"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>Certifications
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#eperiences"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>Experiences
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#social"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>Social
                </a>
              </li>
               <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#contact"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>Contact
                </a>
              </li>
            </ul>
        </nav>
        </div>
        <button
              className="text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
          {navbarOpen ?
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        
          }
       </button>
      </div>
    </header>
  );
}
