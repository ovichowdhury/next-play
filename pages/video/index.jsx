import React from "react";

export default function Index() {
  return (
    <div className=" mx-10 h-screen">
      <h1>My Video</h1>
      <video controls className=" w-full h-2/3 object-cover">
        <source src="/video/demo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
