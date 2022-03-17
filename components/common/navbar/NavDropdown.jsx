import classNames from "classnames";
import React, { useState } from "react";

export default function NavDropdown({ children, title }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4"
      >
        <span>{title}</span>
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          className={classNames({
            inline: true,
            "w-4": true,
            "h-4": true,
            "mt-1": true,
            "ml-1": true,
            "md:-mt-1": true,
            transform: true,
            "duration-200": true,
            "rotate-0": !open,
            "rotate-180": open,
            "transition-transform": true,
          })}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={classNames({
          absolute: true,
          hidden: !open,
          "w-full": true,
          "z-50": true,
          "md:max-w-screen-sm": true,
          "md:w-screen": true,
          "mt-2": true,
          "right-0": true,
          "origin-top-right": true,
          animate__animated: open,
          animate__fadeIn: open,
        })}
      >
        {/* nav container */}
        <div className="px-4 pt-2 pb-4 bg-white rounded-md shadow-lg grid grid-cols-1 md:grid-cols-2 gap-4">
          {children}
        </div>
        {/* end nav container */}
      </div>
    </div>
  );
}
