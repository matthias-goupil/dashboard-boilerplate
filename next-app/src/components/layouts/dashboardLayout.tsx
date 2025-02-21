import React, { PropsWithChildren, Suspense } from "react";
import Header from "../custom-ui/header";
import { getJWT } from "@/lib/jwt";
import { getUserById } from "@/services/users";
import HeaderSkeleton from "../skeletons/headerSkeleton";

interface IAdminLayoutProps extends PropsWithChildren {
  title: string;
  breadcrumb?: ({ label: string; href?: string } | string)[];
}

async function DashboardLayout({
  children,
  ...headerProps
}: IAdminLayoutProps) {
  const userId = await getJWT();
  const user = await getUserById(userId!);

  if (!user) return <p>non</p>;

  return (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header {...headerProps} user={user} />
      </Suspense>
      <main className="w-full">{children}</main>
    </>
  );
}

export default DashboardLayout;
