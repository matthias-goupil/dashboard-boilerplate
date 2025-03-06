import DashboardLayout from "@/components/layouts/dashboardLayout";
import { Card } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import React from "react";

async function ServicesPage() {
  const t = await getScopedI18n("services");
  const tGlobal = await getScopedI18n("global");

  return (
    <DashboardLayout
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
    </DashboardLayout>
  );
}

export default ServicesPage;
