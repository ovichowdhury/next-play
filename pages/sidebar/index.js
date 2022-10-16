import Navbar from "@components/common/navbar/Navbar";
import SidebarNested from "@components/common/sidebar-nested/SidebardNested";
import Sidebar from "@components/common/sidebar/Sidebar";
import React from "react";

export default function Index() {
  const menus = [
    { title: "Dashboard", src: "Chart_fill", icon: "dashboard" },
    { title: "Inbox", src: "Chat", icon: "inbox" },
    { title: "Accounts", src: "User", gap: true, icon: "accounts" },
    { title: "Schedule ", src: "Calendar", icon: "schedule" },
    { title: "Search", src: "Search", icon: "search" },
    { title: "Analytics", src: "Chart", icon: "analytics" },
    { title: "Files ", src: "Folder", gap: true, icon: "files" },
    { title: "Setting", src: "Setting", icon: "settings" },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Sidebar menus={menus} /> */}
      <SidebarNested menus={menus}></SidebarNested>
    </div>
  );
}
