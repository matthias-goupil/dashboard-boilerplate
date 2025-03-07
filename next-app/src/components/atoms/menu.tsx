"use client";

import { useScopedI18n } from "@/utils/i18n/client";
import { cn } from "@/utils/utils";
import { ChevronsLeftRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useState, useMemo, CSSProperties } from "react";

interface ISidebarMenuProps {
  menu: {
    label: string;
    href: string;
    icon: ReactNode;
    selectedIcon?: ReactNode;
  }[];
}

export function SidebarMenu({ menu }: ISidebarMenuProps) {
  const [extended, setExtended] = useState(true);
  const pathname = usePathname();
  const t = useScopedI18n("menu");
  const activeIndex = useMemo(
    () => menu.findIndex(({ href }) => pathname == href),
    [pathname, menu]
  );

  const spanStyles: CSSProperties = useMemo(() => {
    if (activeIndex >= 0) {
      return {
        height: "64px",
        transform: `translateY(${activeIndex * (64 + 16)}px)`,
      };
    }
    return {
      height: 0,
    };
  }, [activeIndex]);

  return (
    <div
      className={cn(
        "relative h-screen transition-all bg-white border-r",
        extended ? "w-72" : "w-24"
      )}
    >
      <ToggleButton onToggle={() => setExtended(!extended)} />
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
      <nav className="py-9 overflow-hidden relative">
        <span
          className="absolute w-1.5 bg-blue-800 transition-all rounded-r-xl"
          style={spanStyles}
        ></span>
        <ul className="flex flex-col items-start gap-4 px-4 w-full">
          {menu?.map(({ href, selectedIcon, icon, label }, index) => {
            const selected = activeIndex === index;
            return (
              <li
                key={index}
                className={cn(
                  "w-full font-medium text-lg text-[#A3AED0] relative",
                  selected && "text-[#2B3674]",
                  !extended && "w-fit"
                )}
              >
                <Link
                  className={cn(
                    "w-full flex items-center gap-3 p-4 rounded-xl transition-colors",
                    extended ? "justify-start" : "justify-center",
                    !selected && "hover:bg-slate-50"
                  )}
                  href={href}
                >
                  <span className="w-8">
                    {selected && selectedIcon ? selectedIcon : icon}
                  </span>
                  {extended && (
                    <span className="overflow-hidden whitespace-nowrap">
                      {t(
                        label as
                          | "settings"
                          | "dashboard"
                          | "company"
                          | "services"
                          | "planning"
                          | "customers"
                      )}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function ToggleButton({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      className="w-10 h-10 rounded-full border bg-white absolute right-[-1.25rem] top-[6.75rem] flex items-center justify-center hover:bg-slate-50 transition-colors z-20"
      onClick={onToggle}
    >
      <ChevronsLeftRight className="text-[#A3AED0]" />
    </button>
  );
}
