import React, { PropsWithChildren } from "react";
import Header from "../custom-ui/header";
import { getSession } from "@/services/sessions";
import { redirect } from "next/navigation";
import UserProvider from "../providers/userProvider";

interface IAdminLayoutProps extends PropsWithChildren {
  title: string;
  breadcrumb?: ({ label: string; href?: string } | string)[];
}

async function AdminLayout({ children, ...headerProps }: IAdminLayoutProps) {
  const session = await getSession();
  if (!session) redirect("/auth/signin");

  return (
    <UserProvider user={session.user}>
      <Header {...headerProps} />
      <main className="w-full">{children}</main>
    </UserProvider>
  );
}

export default AdminLayout;
