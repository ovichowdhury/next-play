import Navbar from "@components/common/navbar/Navbar";
import SidebarNested from "@components/common/sidebar-nested/SidebardNested";
import Sidebar from "@components/common/sidebar/Sidebar";
import React from "react";

export default function Index() {
  /** for previous sidebar */
  // const menus = [
  //   { title: "Dashboard", src: "Chart_fill", icon: "dashboard" },
  //   { title: "Inbox", src: "Chat", icon: "inbox" },
  //   { title: "Accounts", src: "User", gap: true, icon: "accounts" },
  //   { title: "Schedule ", src: "Calendar", icon: "schedule" },
  //   { title: "Search", src: "Search", icon: "search" },
  //   { title: "Analytics", src: "Chart", icon: "analytics" },
  //   { title: "Files ", src: "Folder", gap: true, icon: "files" },
  //   { title: "Setting", src: "Setting", icon: "settings" },
  // ];

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
    // { title: "Analytics", icon: "analytics" },
    // { title: "Files ", gap: false, icon: "files" },
    // { title: "Setting", icon: "settings" },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Sidebar menus={menus} /> */}
      <SidebarNested menus={menus}>
        <h1>Dashboard Section</h1>
      </SidebarNested>
    </div>
  );
}
