import React from "react";
import Link from "next/link";

export default function NavDropdownItem({ children, title, desc, href }) {
  return (
    <Link href={href}>
      <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
        <div className="bg-teal-500 text-white rounded-lg p-3">{children}</div>
        <div className="ml-3">
          <p className="font-semibold">{title}</p>
          <p className="text-sm">{desc}</p>
        </div>
      </a>
    </Link>
  );
}
