import DashboardLayout from "@/components/layouts/dashboardLayout";
import { Card } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import React from "react";

async function DashboardPage() {
  const t = await getScopedI18n("dashboard");

  return (
    <DashboardLayout title={t("pageTitle")} breadcrumb={[t("pageTitle")]}>
      <Card className="p-5 h-screen">
      </Card>
    </DashboardLayout>
  );
}

export default DashboardPage;
