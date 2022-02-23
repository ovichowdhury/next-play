import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="bg-bookmark-blue py-8">
        {/* container */}
        <div className="container flex flex-col md:flex-row items-center sm:w-3/4">
          {/* Left side of the footer */}
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <Image
              src="/website/logo-bookmark-white.png"
              alt="logo"
              width="150px"
              height="30px"
            />
            <ul className="flex text-white uppercase gap-10 text-xs">
              <li className="cursor-pointer p-2 sm:p-0 hover:text-bookmark-purple">
                Features
              </li>
              <li className="cursor-pointer p-2 sm:p-0 hover:text-bookmark-purple">
                Pricing
              </li>
              <li className="cursor-pointer p-2 sm:p-0 hover:text-bookmark-purple">
                Contact
              </li>
            </ul>
          </div>
          {/* Right side of the footer */}
          <div className="flex gap-10 mt-12 md:mt-0">
            <FontAwesomeIcon
              icon={["fab", "fa-twitter"]}
              className="text-white hover:text-bookmark-purple hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={["fab", "fa-facebook-square"]}
              className="text-white hover:text-bookmark-purple hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={["fab", "fa-linkedin-in"]}
              className="text-white hover:text-bookmark-purple hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={["fab", "fa-youtube"]}
              className="text-white hover:text-bookmark-purple hover:cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
