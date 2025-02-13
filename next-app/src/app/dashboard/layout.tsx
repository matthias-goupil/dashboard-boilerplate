import { MenuItem, SidebarMenu } from "@/components/ui/menu";
import React, { PropsWithChildren } from "react";
import {
  HomeIcon as HomeIconSolid,
  BuildingOfficeIcon as BuildingOfficeIconSolid,
  BanknotesIcon as BanknotesIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  UsersIcon as UsersIconSolid,
  CalendarIcon as CalendarIconSolid,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  BuildingOfficeIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  UsersIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const menu = [
  {
    label: "Dashboard",
    title: "Dashboard",
    icon: <HomeIcon className="w-8" />,
    selectedIcon: <HomeIconSolid className="w-8" />,
    href: "/dashboard",
  },
  {
    label: "Mon entreprise",
    title: "Mon entreprise",
    icon: <BuildingOfficeIcon className="w-8" />,
    selectedIcon: <BuildingOfficeIconSolid className="w-8" />,
    href: "/dashboard/companies",
  },
  {
    label: "Mes prestations",
    title: "Mes prestations",
    icon: <BanknotesIcon className="w-8" />,
    selectedIcon: <BanknotesIconSolid className="w-8" />,
    href: "/dashboard/services",
  },
  {
    label: "Planning",
    title: "Planning",
    icon: <CalendarIcon className="w-8" />,
    selectedIcon: <CalendarIconSolid className="w-8" />,
    href: "/dashboard/planning",
  },
  {
    label: "Clients",
    title: "Clients",
    icon: <UsersIcon className="w-8" />,
    selectedIcon: <UsersIconSolid className="w-8" />,
    href: "/dashboard/clients",
  },
  {
    label: "Settings",
    title: "Settings",
    icon: <Cog6ToothIcon className="w-8" />,
    selectedIcon: <Cog6ToothIconSolid className="w-8" />,
    href: "/dashboard/settings",
  },
];

async function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-screen h-screen flex relative">
      <SidebarMenu>
        {menu.map(({ title, ...item }) => (
          <MenuItem key={item.href} {...item} />
        ))}
      </SidebarMenu>
      <div className="flex-1 w-screen px-10 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
