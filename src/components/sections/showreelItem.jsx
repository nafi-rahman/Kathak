import React from "react";
import test from "/assets/test.mp4";
export default function ShowreelItem({ title, description, link }) {
  return (
    <a href={link} class="group relative block bg-black border-4 border-black">
  <video class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" autoPlay muted  >
  <source src={test} type="video/mp4"/>
  Your browser does not support the video tag.
</video>

  <div class="relative p-8">
    

    <p class="text-2xl font-bold text-white">{title}</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          {description}
        </p>
      </div>
    </div>
  </div>
</a>

  );
}
