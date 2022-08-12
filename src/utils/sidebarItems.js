import dashboard from "../assets/dashboard/sidebar/dashboard.svg";
import appointments from "../assets/dashboard/sidebar/appointments.svg";
import statistics from "../assets/dashboard/sidebar/statistics.svg";
import chat from "../assets/dashboard/sidebar/chat.svg";
import settings from "../assets/dashboard/sidebar/settings.svg";
import logout from "../assets/dashboard/sidebar/logout.svg";

const sidebarItems = [
  {
    id: 0,
    name: "Dashboard",
    to: "/",
    icon: dashboard,
    isActive: true,
  },
  {
    id: 1,
    name: "Appointments",
    to: "/appointments",
    icon: appointments,
    isActive: false,
  },
  {
    id: 2,
    name: "Statistics",
    to: "/statistics",
    icon: statistics,
    isActive: false,
  },
  {
    id: 3,
    name: "Chat",
    to: "/chat",
    icon: chat,
    isActive: false,
  },
  {
    id: 4,
    name: "Settings",
    to: "/settings",
    icon: settings,
    isActive: false,
  },
  {
    id: 5,
    name: "Logout",
    to: "/logout",
    icon: logout,
    isActive: false,
  },
];

export default sidebarItems;
