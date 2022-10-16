import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineInbox,
  AiOutlineDollar,
  AiOutlineCalendar,
  AiOutlineSearch,
  AiOutlineBarChart,
  AiOutlineSetting,
  AiOutlineFile,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

export default function getIcon(name) {
  switch (name) {
    case "dashboard":
      return <AiOutlineHome className="text-2xl" />;
    case "inbox":
      return <AiOutlineInbox className="text-2xl" />;
    case "accounts":
      return <AiOutlineDollar className="text-2xl" />;
    case "schedule":
      return <AiOutlineCalendar className="text-2xl" />;
    case "search":
      return <AiOutlineSearch className="text-2xl" />;
    case "analytics":
      return <AiOutlineBarChart className="text-2xl" />;
    case "settings":
      return <AiOutlineSetting className="text-2xl" />;
    case "files":
      return <AiOutlineFile className="text-2xl" />;
    case "user":
      return <AiOutlineUsergroupAdd className="text-2xl" />;
    default:
      return <AiOutlineMenu className="text-2xl" />;
  }
}
