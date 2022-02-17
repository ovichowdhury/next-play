import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="container flex items-center py-4 mt-4">
          <div className="py-1">
            <Image
              src="/website/logo-bookmark.svg"
              alt="logo"
              width="150px"
              height="50px"
            />
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-sm uppercase text-bookmark-blue">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <button className="bg-bookmark-red text-white px-5 py-2 rounded-md uppercase">
              Login
            </button>
          </ul>
          <div className="flex flex-1 justify-end items-center sm:hidden">
            <FontAwesomeIcon icon={["fas", "fa-bars"]} className="text-2xl" />
          </div>
        </nav>
      </header>
    </>
  );
}
