import React from "react";
import { useState } from "react";
import { send } from 'emailjs-com';


export default function Contact() {



  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'mohcineboudenjal@gmail.com',
    message: '',
    reply_to: '',
    name:'',
  });


  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_portfolio',
      'template_portfolio',
       toSend,
      '87kWZ_u2VlKYu6ENI'
    )
      .then((response) => {
        alert("Thank you for sending message !! I will reply soon :)")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });  
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.632274175822!2d-5.858368274299969!3d35.735261222569854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b87074e187801%3A0x8b169cbad275e99d!2sQuartier%20Hassani%2C%20Tanger!5e0!3m2!1sfr!2sma!4v1671126062934!5m2!1sfr!2sma"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md opacity-30 hover:opacity-100 ">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                LOT ELBARAKA 2 Complexe Hassani <br />
                Tangier, Morocco 90090
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                mohcineboudenjal@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+212 6 94 46 43 32</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          onSubmit={onSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center">
            Contact
          </h2> <br></br>
          <p className="leading-relaxed mb-5">
            If you want to contact me, you can just use my email address or my number phone
            or by this small form. I'm all the time ready to talk to you <span role="img" aria-label="">????</span>
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={toSend.name}
              onChange={handleChange}
              name="name"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='from_name'
              value={toSend.from_name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={toSend.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
