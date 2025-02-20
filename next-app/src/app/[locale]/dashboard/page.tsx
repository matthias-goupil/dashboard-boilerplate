import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import React from "react";

interface IDashboardPageProps {
  params: Promise<{}>;
}

async function DashboardPage(props: IDashboardPageProps) {
  const t = await getScopedI18n("dashboard");

  return (
    <AdminLayout title={t("pageTitle")} breadcrumb={[t("pageTitle")]}>
      <Card className="p-5 h-screen">
      </Card>
    </AdminLayout>
  );
}

export default DashboardPage;
