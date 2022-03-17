import React from "react";
import Link from "next/link";

export default function NavItem({ title, href }) {
  return (
    <Link href={href}>
      <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200 focus:text-gray-900 focus:bg-gray-200 active:text-purple-900">
        {title}
      </a>
    </Link>
  );
}
