import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import React from "react";

function ServicesPage() {
  return (
    <AdminLayout
      title="Mes prestations"
      breadcrumb={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        "Services"
      ]}
    >
      <Card className="p-5 h-screen">
        <p>Contenu de la page des prestations</p>
      </Card>
    </AdminLayout>
  );
}

export default ServicesPage;
