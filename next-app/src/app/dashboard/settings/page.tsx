import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import React from "react";

function SettingsPage() {
  return (
    <AdminLayout
      title="Mes prestations"
      breadcrumb={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        "Settings"
      ]}
    >
      <Card className="p-5 h-screen">
        <p>Contenu de la page des paramètres</p>
      </Card>
    </AdminLayout>
  );
}

export default SettingsPage;
