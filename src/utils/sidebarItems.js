import dashboard from "../assets/dashboard/sidebar/dashboard.svg";
import appointments from "../assets/dashboard/sidebar/appointments.svg";
import statistics from "../assets/dashboard/sidebar/statistics.svg";
import chat from "../assets/dashboard/sidebar/chat.svg";
import settings from "../assets/dashboard/sidebar/settings.svg";
import logout from "../assets/dashboard/sidebar/logout.svg";

const sidebarItems = [
  {
    name: "Dashboard",
    to: "/",
    icon: dashboard,
    isActive: true,
  },
  {
    name: "Appointments",
    to: "/appointments",
    icon: appointments,
    isActive: false,
  },
  {
    name: "Statistics",
    to: "/statistics",
    icon: statistics,
    isActive: false,
  },
  {
    name: "Chat",
    to: "/chat",
    icon: chat,
    isActive: false,
  },
  {
    name: "Settings",
    to: "/settings",
    icon: settings,
    isActive: false,
  },
  {
    name: "Logout",
    to: "/logout",
    icon: logout,
    isActive: false,
  },
];

export default sidebarItems;
