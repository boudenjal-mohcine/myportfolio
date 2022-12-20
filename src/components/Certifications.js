import React from 'react'
import { certifications } from '../data'

export default function Certifications() {

  const imgStyle={

    'width':900,

  }


  return (
    <section id="certifications" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-80">
        <div className="flex flex-col w-full mb-6">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Cerifications
          </h1>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
      {certifications.map(function (certification) {

        if (certification.id < 9) {

          return <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={certification.id}
            aria-label={"Slide " + certification.id++}
            nothing={certification.id--}
          ></button>
        }
        return null;
      })}
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    {/* data */}
    {certifications.map((certification) => (

          <div class={(certification.id===1)?"carousel-item active relative float-left w-full":"carousel-item relative float-left w-full"}>
          <img
            style={imgStyle}
            src={certification.img}
            class="block w-full"
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center bg-gray-900 opacity-50 hover:opacity-100">
            <h5 class="text-xl">{certification.title}</h5>
            <p class="p-4">{certification.description}</p>
          </div>
          </div>
    ))}
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat bg-black opacity-30 hover:opacity-100" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat bg-black opacity-30 hover:opacity-100" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>
    </section>

  )
}
