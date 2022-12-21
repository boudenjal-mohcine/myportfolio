import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { languages,backEnd,frontEnd,cicd } from "../data";

export default function Skills() {

  const blue={

    'color':'#233dff',
  
  }

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            
          </p>
        </div>

        {/* Programmation languages */}

        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          Programmation-<span style={blue}>Languages</span>
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {languages.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <br/>

        {/* Back end */}

        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            Back-<span style={blue}>End</span>
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {backEnd.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <br/>

        {/* Front end */}

        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
           Front-<span style={blue}>End</span>
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {frontEnd.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <br/>

          {/* Ci Cd */}

          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            CI/<span style={blue}>CD</span>
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {cicd.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
