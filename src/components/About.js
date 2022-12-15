import React from "react";


const lastNameStyle={

  'color':'#233dff',

}

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi<span role="img" aria-label="hi">👋</span>, I'm <b>Mohcine</b>  <b style={lastNameStyle}>Boudenjal</b>.
            <span className="text-3xl"><br className="hidden lg:inline-block" />Building useful and amazing apps<span role="img" aria-label="smile">💻</span>...That's my job<span role="img" aria-label="smile">😄</span></span>
          </h1>
          <p className="mb-8 leading-relaxed">
            My name is Mohcine Boudenjal, From Casablanca Morocco. Im 21 years old and i'm a Software nd Smart systems Engineering Student
            at FST Tangier. I am very passionate about development web and mobile apps.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-blue-100 text-blue rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/4 w-9/10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./logo_mb.svg"
          />
        </div>
      </div>
    </section>
  );
}
