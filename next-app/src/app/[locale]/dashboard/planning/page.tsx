import DashboardLayout from "@/components/layouts/dashboardLayout";
import { Card } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Planning",
};

interface IPlanningPageProps {
  params: Promise<{}>;
}

async function PlanningPage(props: IPlanningPageProps) {
  const t = await getScopedI18n("planning");
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
      <Card className="p-5 h-screen">
      </Card>
    </DashboardLayout>
  );
}

export default PlanningPage;
