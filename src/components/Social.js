import React from 'react'
import { UsersIcon } from "@heroicons/react/solid";
import { SocialIcon } from 'react-social-icons';


export default function Social() {
  return (
    <section id="socialmedia">
    <div className="container px-5 py-10 mx-auto text-center">
      <UsersIcon className="w-10 inline-block mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Social Media
      </h1>
      <div className='flex justify-center space-x-5 md:space-x-8 sm:space-x-2'>
        <SocialIcon url="https://twitter.com/boudenjalmohci1" />
        <SocialIcon url="https://www.linkedin.com/in/mohcineboudenjal/" />
        <SocialIcon url="https://api.whatsapp.com/send/?phone=0694464332" />
        <SocialIcon url="https://github.com/boudenjal-mohcine" />
        <SocialIcon url="https://www.facebook.com/boudnjalmohcine" />
        <SocialIcon url="https://www.instagram.com/mohcinebd/" />
        <SocialIcon url="https://discord.com/users/Mohcine#2607" />

      </div>

    </div>
  </section>
  )
}
