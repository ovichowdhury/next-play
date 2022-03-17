import React from "react";

export default function Brand({ brandName }) {
  return (
    <>
      <a
        href="#"
        className="text-lg font-semibold text-gray-900 uppercase rounded-lg focus:outline-none tracking-widest"
      >
        {brandName}
      </a>
    </>
  );
}
