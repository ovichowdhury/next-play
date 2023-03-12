import React, { useEffect } from "react";
import TableView from "@components/common/TableView";
import { Accordion } from "flowbite-react";
import SidebarNested from "@components/common/sidebar-nested/SidebardNested";

export default function Table() {
  const menus = [
    { title: "Dashboard", icon: "dashboard" },
    { title: "Inbox", icon: "inbox" },
    {
      title: "User",
      icon: "user",
      children: [
        { title: "Search", icon: "search" },
        { title: "Analytics", icon: "analytics" },
      ],
    },
    { title: "Accounts", gap: false, icon: "accounts" },
    { title: "Schedule ", icon: "schedule" },
    { title: "Search", icon: "search" },
    { title: "Analytics", icon: "analytics" },
    { title: "Files ", gap: false, icon: "files" },
    { title: "Setting", icon: "settings" },
  ];

  return (
    <>
      <SidebarNested menus={menus}>
        <Accordion collapseAll={true}>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <TableView />
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content></Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </SidebarNested>
    </>
  );
}
