"use client";

import React, { useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import UserSettings from "./userSettings";
import Link from "next/link";
import { UserContext } from "../providers/userProvider";

interface IHeaderProps {
  title: string;
  breadcrumb?: ({ label: string; href?: string } | string)[];
}

function Header({ title, breadcrumb }: IHeaderProps) {
  const user = useContext(UserContext);

  return (
    <header className="flex items-center justify-between w-full mb-10 h-32 sticky top-0 backdrop-blur-xl ">
      <div className="space-y-1">
        {breadcrumb && (
          <Breadcrumb className="text-slate-600">
            <BreadcrumbList>
              {breadcrumb
                ?.reduce<({ label: string; href?: string } | string)[]>(
                  (acc, curr, index) =>
                    index % 2 === 0 ? [...acc, curr] : [...acc, "/", curr],
                  []
                )
                ?.map((element, index) => {
                  return element === "/" ? (
                    <BreadcrumbSeparator key={index} />
                  ) : (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbPage>
                        {typeof element === "string" ? (
                          element
                        ) : element.href ? (
                          <BreadcrumbLink asChild>
                            <Link href={element.href}>{element.label}</Link>
                          </BreadcrumbLink>
                        ) : (
                          element.label
                        )}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  );
                })}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <h1>{title}</h1>
      </div>
      <div className="p-2 w-fit h-fit flex items-center gap-5 bg-white rounded-full">
        <Button size="icon" variant="rounded">
          <Bell className="w-8" />
        </Button>
        {user && (
          <UserSettings
            name={user.name}
            email={user.email}
            picture="https://avatars.githubusercontent.com/u/31575276?v=4"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
