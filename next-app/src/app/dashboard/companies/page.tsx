import AdminLayout from "@/components/layouts/adminLayout";
import { Card } from "@/components/ui/card";
import React from "react";

function page() {
  return (
    <AdminLayout
      title="Mon entreprise"
      breadcrumb={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        "Company",
      ]}
    >
      <Card className="p-5 h-screen">
        <p>Contenu de la page de l'entreprise</p>
      </Card>
    </AdminLayout>
  );
}

export default page;
