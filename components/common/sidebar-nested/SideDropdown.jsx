import React, { useState } from "react";
import getIcon from "./icons";
import { AiOutlineDown } from "react-icons/ai";
import SideItem from "./SideItem";

export default function SideDropdown({ menu, open }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="flex relative rounded-md p-2 cursor-pointer bg-gray-300 hover:bg-slate-400 text-gray-600 text-md font-semibold items-center gap-x-4 "
        onClick={() => setToggle(!toggle)}
      >
        {getIcon(menu.icon)}
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {menu.title}
        </span>
        <span className={`${!open && "hidden"} absolute right-3`}>
          <AiOutlineDown
            className={`${toggle && "rotate-180"} transition delay-150`}
          />
        </span>
      </div>
      {/** Sub Menus */}
      <ul
        className={`pl-2 ${
          toggle ? "block" : "hidden"
        } animate__animated animate__fadeIn`}
      >
        {menu.children.map((subMenu, index) => (
          <li key={index} className={`${menu.gap ? "mt-9" : "mt-2"} `}>
            <SideItem menu={subMenu} open={open} />
          </li>
        ))}
      </ul>
    </>
  );
}
