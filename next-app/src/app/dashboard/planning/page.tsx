import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Planning",
};

function PlanningPage() {
  return (
    <AdminLayout
      title="Planning"
      breadcrumb={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        "Planning",
      ]}
    >
      <Card className="p-5 h-screen">
        <p>Contenu de la page du planning</p>
      </Card>
    </AdminLayout>
  );
}

export default PlanningPage;
