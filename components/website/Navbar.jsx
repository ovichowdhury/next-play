import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [toggleHam, setToggleHam] = useState(true);
  return (
    <>
      <header>
        <nav className="container flex flex-wrap items-center py-4 mt-4">
          <div className="py-1">
            <Image
              src="/website/logo-bookmark.svg"
              alt="logo"
              width="150px"
              height="50px"
            />
          </div>
          <div
            className="flex flex-1 justify-end items-center sm:hidden"
            onClick={() => setToggleHam(!toggleHam)}
          >
            <FontAwesomeIcon icon={["fas", "fa-bars"]} className="text-2xl" />
          </div>

          <div className="sm:hidden basis-full h-0"></div>

          <ul
            className={classNames({
              "flex-col": true,
              "sm:flex": true,
              "sm:flex-row": true,
              "flex-1": true,
              "justify-end": true,
              "items-center": true,
              "gap-12": true,
              "text-sm": true,
              uppercase: true,
              "text-bookmark-blue": true,
              hidden: toggleHam,
              "text-center": true,
            })}
          >
            <li className="cursor-pointer p-2 sm:p-0">Features</li>
            <li className="cursor-pointer p-2 sm:p-0">Pricing</li>
            <li className="cursor-pointer p-2 sm:p-0">Contact</li>
            <button className="bg-bookmark-red text-white px-5 py-2 rounded-md uppercase">
              Login
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
}
