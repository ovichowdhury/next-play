import React, { useState } from "react";
import Brand from "./Brand";
import Toggler from "./Toggler";

export default function Navbar() {
  const [navItemOpen, setNavItemOpen] = useState(false);

  return (
    <>
      {/* navabr container */}
      <div className="w-full text-gray-700 bg-white">
        {/* container for two section of navbar left and right */}
        <div className="flex flex-col max-w-screen-lg px-4 mx-auto md:flex-row md:justify-between md:items-center md:px-6 lg:px-8">
          {/* logo and toggler container */}
          <div className="flex flex-row items-center justify-between p-4">
            {/* brand name and logo */}
            <Brand brandName="Property Land" />
            {/* toggle button */}
            <Toggler
              navItemOpen={navItemOpen}
              setNavItemOpen={setNavItemOpen}
            />
          </div>
          {/* end logo and toggler container */}
          <p>Hello</p>
        </div>
        {/* end container for two section of navbar left and right */}
      </div>
      {/* end navabr container */}
    </>
  );
}
