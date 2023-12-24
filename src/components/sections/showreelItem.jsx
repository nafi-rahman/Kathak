import React, { useState, useEffect, useRef } from 'react';
import test from '/assets/test.mp4';

export default function ShowreelItem() {
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the video element is intersecting
        if (entry.isIntersecting) {
          setLoadVideo(true); // Set to load the video
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the video is visible
    });

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    // Clean up the observer on component unmount
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <div className="group relative block bg-black border-4 border-black">
      <video 
        ref={videoRef} 
        className="absolute inset-0 h-full w-full object-cover z-10" 
        controls
        style={{ display: loadVideo ? 'block' : 'none' }}
      >
        {loadVideo && <source src={test} type="video/mp4"/>}
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
