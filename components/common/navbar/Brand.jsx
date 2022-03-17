import React from "react";
import Image from "next/image";

export default function Brand({ brandName }) {
  return (
    <>
      <div className="flex flex-row gap-1 items-center justify-center m-0">
        <Image
          src="/house-logo.webp"
          alt="logo"
          height="50px"
          width="50px"
        ></Image>
        <a className="text-2xl font-semibold text-gray-900 uppercase rounded-lg focus:outline-none tracking-widest">
          {brandName}
        </a>
      </div>
    </>
  );
}
