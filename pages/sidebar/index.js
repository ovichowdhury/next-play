import Navbar from "@components/common/navbar/Navbar";
import Sidebar from "@components/common/sidebar/Sidebar";
import React from "react";

export default function Index() {
  const menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div>
      <Navbar />
      <Sidebar menus={menus} />
    </div>
  );
}
