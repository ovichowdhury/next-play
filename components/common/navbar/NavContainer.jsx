import React from "react";
import classNames from "classnames";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";
import NavDropdownItem from "./NavDropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavContainer({ navItemOpen }) {
  return (
    <nav
      className={classNames({
        hidden: !navItemOpen,
        flex: navItemOpen,
        "flex-col": true,
        "flex-grow": true,
        "pb-4": true,
        "md:pb-0": true,
        "md:justify-end": true,
        "md:flex": true,
        "md:flex-row": true,
      })}
    >
      <NavItem title="Products" href="/" />
      <NavItem title="About" href="/" />
      <NavItem title="Contact" href="/" />
      <NavDropdown title="Others">
        <NavDropdownItem title="Report" desc="Reporting dashboard" href="/">
          <FontAwesomeIcon icon={["fas", "fa-bars"]} className="text-2xl" />
        </NavDropdownItem>
        <NavDropdownItem title="Chat" desc="Chat dashboard" href="/">
          <FontAwesomeIcon icon={["fas", "fa-bars"]} className="text-2xl" />
        </NavDropdownItem>
      </NavDropdown>
      <NavDropdown title="More">
        <NavDropdownItem title="Privacy" desc="Privacy Policy" href="/">
          <FontAwesomeIcon icon={["fas", "fa-bars"]} className="text-2xl" />
        </NavDropdownItem>
      </NavDropdown>
    </nav>
  );
}
