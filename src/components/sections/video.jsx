import React from "react";
import test from "/assets/test.mp4";
export default function Video() {
    return (
    <>


  <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/75TwwtXF9vo" title="Caught In The Rain - Shankar Tucker (ft. Rohan Kymal) (Original) | Music Video" frameborder="0"  allowfullscreen></iframe>

  <video class="w-full" autoplay muted >
  <source src={test} type="video/mp4"/>
  Your browser does not support the video tag.
</video>    

</>

    )
}
