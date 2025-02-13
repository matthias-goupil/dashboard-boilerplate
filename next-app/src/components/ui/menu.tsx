"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeftRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ISidebarMenuProps extends PropsWithChildren {}

const MenuContext = createContext(true);

export function SidebarMenu({ children }: ISidebarMenuProps) {
  const [extended, setExtended] = useState(true);

  return (
    <div
      className={cn(
        "relative h-screen transition-all duration-300 bg-white border-r",
        extended ? "w-72" : "w-24"
      )}
    >
      <button
        className="w-10 h-10 rounded-full border bg-white absolute right-[-1.25rem] top-[6.75rem] flex items-center justify-center hover:bg-slate-50 transition-colors"
        onClick={() => {
          setExtended((curr) => !curr);
        }}
      >
        <ChevronsLeftRight className="text-[#A3AED0]" />
      </button>
      <div className="w-full h-32 flex items-center justify-center border-b overflow-hidden">
        <p className="text-3xl font-bold text-blue-700 whitespace-nowrap">
          {extended ? (
            <>
              Saas <span className="font-light">Inc</span>
            </>
          ) : (
            "S"
          )}
        </p>
      </div>
      <MenuContext.Provider value={extended}>
        <nav className={"py-9 overflow-hidden"}>
          <ul className="flex flex-col items-start gap-4 px-4 w-full">
            {children}
          </ul>
        </nav>
      </MenuContext.Provider>
    </div>
  );
}

interface IMenuItemProps {
  label: string;
  href: string;
  icon: ReactNode;
  selectedIcon?: ReactNode;
}

export function MenuItem({ label, href, icon, selectedIcon }: IMenuItemProps) {
  const extended = useContext(MenuContext);
  const pathName = usePathname();

  const selected = href === pathName;

  return (
    <li
      className={cn(
        "font-medium text-lg text-[#A3AED0] relative",
        "before:content-[''] before:block before:absolute before:left-[-1rem] before:bg-blue-800 before:rounded-r-xl before:w-1.5 before:h-full before:transition-all",
        selected
          ? "text-[#2B3674] before:translate-x-0"
          : "before:translate-x-[-1rem]",
        extended ? "w-full " : "w-fit"
      )}
    >
      <Link
        className={cn(
          "w-full flex items-center gap-3 p-4 rounded-md justify-start",
          !extended && "justify-center",
          !selected && "hover:bg-slate-50"
        )}
        href={href}
      >
        <span className="w-8">
          {selected && selectedIcon ? selectedIcon : icon}
        </span>
        <span
          className={cn(
            "overflow-hidden whitespace-nowrap",
            !extended && "hidden"
          )}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
