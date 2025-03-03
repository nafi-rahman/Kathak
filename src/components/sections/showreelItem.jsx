import React from "react";
import test from "/assets/test.mp4";
export default function ShowreelItem() {
  return (
    <div class="group relative block bg-black border-4 border-black">
  <video class="absolute inset-0 h-full w-full object-cover z-10" controls  >
  <source src={test} type="video/mp4"/>
  Your browser does not support the video tag.
</video>

  <div class="relative p-20">
    

    {/* <p class="text-2xl font-bold text-white">title of the video</p> */}

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        {/* <p class="text-sm text-white">
          description of the video
        </p> */}
      </div>
    </div>
  </div>
</div>

  );
}
