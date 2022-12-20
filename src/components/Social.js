import React from 'react'
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";


export default function Social() {
  return (
    <section id="socialmedia">
    <div className="container px-5 py-10 mx-auto text-center">
      <UsersIcon className="w-10 inline-block mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
        Social Media
      </h1>
    </div>
  </section>
  )
}
