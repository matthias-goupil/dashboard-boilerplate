import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import React from "react";

function ClientsPage() {
  return (
    <AdminLayout
      title="Mes clients"
      breadcrumb={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        "Clients",
      ]}
    >
      <Card className="p-5 h-screen">
        <p>Contenu de la page des clients</p>
      </Card>
    </AdminLayout>
  );
}

export default ClientsPage;
