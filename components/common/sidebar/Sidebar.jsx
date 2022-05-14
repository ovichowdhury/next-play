/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function Sidebar({ menus }) {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      <div
        className={`relative h-screen bg-gray-50 ${
          open ? "w-64" : "w-20"
        } duration-300 p-5 pt-8`}
      >
        {/**Control button */}
        <img
          src="/sidebar/control.png"
          alt="Control"
          className={`absolute cursor-pointer w-7 border-2 border-gray-200 -right-3 top-9 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={toggleOpen}
        />

        {/**Brand Area */}
        <div className="flex items-center gap-x-4">
          <img
            src="/sidebar/logo.png"
            alt="Logo"
            className={`cursor-pointer duration-500`}
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-300 uppercase ${
              !open && "scale-0"
            }`}
          >
            Property
          </h1>
        </div>
        {/** Menus */}
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-200 text-gray-600 text-md font-semibold items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} `}
            >
              <img src={`/sidebar/${menu.src}.png`} alt="icon" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/** Right Panel */}
      <div className="p-7 font-semibold text-2xl flex-1 h-screen">Homepage</div>
    </div>
  );
}
