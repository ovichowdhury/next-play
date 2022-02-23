import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [toggleHam, setToggleHam] = useState(true);
  return (
    <>
      <header className="sticky top-0 z-20 bg-white rounded-b-2xl">
        <nav className="container flex flex-wrap items-center py-4 mt-2">
          <div className="py-1">
            <Image
              src="/website/logo-bookmark.svg"
              alt="logo"
              width="250px"
              height="50px"
            />
          </div>
          <div
            className="flex flex-1 justify-end items-center sm:hidden"
            onClick={() => setToggleHam(!toggleHam)}
          >
            <FontAwesomeIcon
              icon={["fas", "fa-bars"]}
              className="text-2xl hover:text-bookmark-purple"
            />
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
              "gap-8": true,
              "text-sm": true,
              uppercase: false,
              "text-bookmark-blue": true,
              hidden: toggleHam,
              "text-center": true,
            })}
          >
            <li className="cursor-pointer p-2 hover:text-bookmark-purple font-semibold hover:bg-bookmark-white hover:rounded-md">
              Features
            </li>
            <li className="cursor-pointer p-2 hover:text-bookmark-purple font-semibold hover:bg-bookmark-white hover:rounded-md">
              Pricing
            </li>
            <li className="cursor-pointer p-2 hover:text-bookmark-purple font-semibold hover:bg-bookmark-white hover:rounded-md">
              Contact
            </li>

            <button className="inline-flex gap-1 items-center bg-bookmark-red text-white px-5 py-2 rounded-md font-semibold hover:bg-bookmark-grey active:bg-bookmark-blue mt-2 sm:mt-0">
              <FontAwesomeIcon
                icon={["fas", "fa-right-to-bracket"]}
                className="text-sm"
              />
              <span>Login</span>
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
}
