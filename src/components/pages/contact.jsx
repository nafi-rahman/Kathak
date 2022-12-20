import React from "react";
import AnimateTest from "../sections/animateTest";
import ContactL from "../sections/ContactL";
import Showreel from "../sections/showreel";
import Video from "../sections/video";

export default function Contact() {
  return (
    <div>
     <div className="flex items-center justify-center h-screen bg-gray-800">
      <form className="bg-white p-4 rounded-md w-1/2">
        <h1 className="text-2xl font-bold mb-2">Contact Form</h1>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="name">Name</label>
          <input className="border p-2 rounded-md w-full" type="text" id="name" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="email">Email</label>
          <input className="border p-2 rounded-md w-full" type="email" id="email" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="message">Message</label>
          <textarea className="border p-2 rounded-md w-full" id="message" rows="4" />
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
      <Video />
      <AnimateTest/>

    </div>
  );
}