import { Navigation } from "@/types";

export const studentDashboardLinks: Navigation = {
  data: [
    {
      title: "Students",
      href: "/students",
      icon: "dashboard",
    },
    {
      title: "Settings",
      href: "/students/settings",
      icon: "settings",
    },
  ],
};

export const teacherDashboardLinks: Navigation = {
  data: [
    {
      title: "Teachers",
      href: "/teachers",
      icon: "dashboard",
    },
    {
      title: "Settings",
      href: "/students/settings",
      icon: "settings",
    },
  ],
};
