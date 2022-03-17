import React, { useState } from "react";
import Brand from "./Brand";
import NavContainer from "./NavContainer";
import Toggler from "./Toggler";

export default function Navbar() {
  const [navItemOpen, setNavItemOpen] = useState(false);

  return (
    <>
      {/* navabr container */}
      <div className="w-full text-gray-700 bg-white sticky top-0 z-20">
        {/* container for two section of navbar left and right */}
        <div className="flex flex-col px-2 md:flex-row md:justify-between md:items-center md:px-6 lg:px-8">
          {/* logo and toggler container */}
          <div className="flex flex-row items-center justify-between py-4 px-1">
            {/* brand name and logo */}
            <Brand brandName="Property Land" />
            {/* toggle button */}
            <Toggler
              navItemOpen={navItemOpen}
              setNavItemOpen={setNavItemOpen}
            />
          </div>
          {/* end logo and toggler container */}
          <NavContainer navItemOpen={navItemOpen} />
        </div>
        {/* end container for two section of navbar left and right */}
      </div>
      {/* end navabr container */}
    </>
  );
}
