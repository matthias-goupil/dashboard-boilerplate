"use client";

import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../atoms/breadcrumb";
import UserSettings from "../molecules/userDropdown";
import Link from "next/link";
import LocaleSwitcher from "../molecules/localeSwitcher";
import { users } from "@/models";
import { Skeleton } from "../atoms/skeleton";

interface IHeaderProps {
  title: string;
  user: {
    email: typeof users.$inferSelect.email;
    name: typeof users.$inferSelect.name;
    picture:  typeof users.$inferSelect.picture
  };
  breadcrumb?: ({ label: string; href?: string } | string)[];
}

function Header({ title, breadcrumb, user}: IHeaderProps) {
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
        <Suspense fallback={<Skeleton className="h-14 w-14 rounded-full" />}>
          <LocaleSwitcher />
        </Suspense>
        <UserSettings
          {...user}
        />
      </div>
    </header>
  );
}

export default Header;
