import React from "react";
import getIcon from "./icons";

export default function SideItem({ menu, open }) {
  return (
    <div className="flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-600 text-md font-semibold items-center gap-x-4 ">
      {getIcon(menu.icon)}
      <span className={`${!open && "hidden"} origin-left duration-200`}>
        {menu.title}
      </span>
    </div>
  );
}
