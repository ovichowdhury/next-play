import React from "react";

export default function Staging() {
  return (
    <div className=" h-screen w-full flex gap-6 justify-center items-center text-center ">
      {/* <span className="bg-[url('/loading.gif')] bg-no-repeat bg-cover h-20 w-20"></span> */}
      <div className="animate-spin h-16 w-16 rounded-lg bg-purple-600  "></div>
      <div className="animate-spin h-16 w-16 rounded-lg bg-purple-500"></div>
      <div className="animate-spin h-16 w-16 rounded-lg bg-purple-400"></div>
    </div>
  );
}
