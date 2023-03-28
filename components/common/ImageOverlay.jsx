import Image from "next/image";
import React from "react";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";

export default function ImageOverlay() {
  return (
    <div className="relative w-72 h-72 group rounded-lg">
      <Image
        layout="fill"
        objectFit="contain"
        src="/img/dhaka.jpg"
        alt="Image"
      />
      <div className="flex gap-8 justify-center absolute bottom-0 z-10 text-gray-100 bg-slate-600 w-full text-center p-6 opacity-0 group-hover:opacity-90 transition ease-in-out delay-100">
        <p>
          <AiFillEdit className=" text-4xl cursor-pointer" />
        </p>
        <p>
          <AiFillDelete className=" text-4xl  cursor-pointer" />
        </p>
      </div>
    </div>
  );
}
