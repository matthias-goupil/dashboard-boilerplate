import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import React from "react";

interface IClientsPageProps {
  params: Promise<{}>;
}

async function ClientsPage(props: IClientsPageProps) {
  const t = await getScopedI18n("customers");
  const tGlobal = await getScopedI18n("global");

  return (
    <AdminLayout
      title={t("pageTitle")}
      breadcrumb={[
        {
          label: tGlobal("dashboard"),
          href: "/dashboard",
        },
        t("pageTitle"),
      ]}
    >
      <Card className="p-5 h-screen"></Card>
    </AdminLayout>
  );
}

export default ClientsPage;
