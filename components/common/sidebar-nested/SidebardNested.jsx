/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SideDropdown from "./SideDropdown";
import SideItem from "./SideItem";
// import getIcon from "./icons";

export default function SidebarNested({ menus, children }) {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      {/** Sidebar section */}
      <div
        className={`relative h-screen bg-gray-200 ${
          open ? "w-64" : "w-20"
        } duration-300 p-5 pt-8`}
      >
        {/**Control button */}
        <img
          src="/sidebar/control.png"
          alt="Control"
          className={`absolute cursor-pointer w-7 border-2 border-blue-400 -right-3 top-9 rounded-full ${
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
            className={`text-gray-700 origin-left font-medium text-xl duration-300 uppercase ${
              !open && "scale-0"
            }`}
          >
            My Brand
          </h1>
        </div>
        {/** Menus */}
        <ul className="pt-6">
          {menus.map((menu, index) => (
            <li key={index} className={`${menu.gap ? "mt-9" : "mt-2"} `}>
              {menu.children ? (
                <SideDropdown menu={menu} open={open} />
              ) : (
                <SideItem menu={menu} open={open} />
              )}
            </li>
          ))}
        </ul>
      </div>
      {/** Right Panel */}
      <div className="p-4 flex-1 relative overflow-x-auto">{children}</div>
    </div>
  );
}
