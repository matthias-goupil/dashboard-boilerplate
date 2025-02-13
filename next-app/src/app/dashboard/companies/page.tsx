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
      <div className="w-full bg-white flex flex-col h-screen gap-4">
        <div className="bg-red-200 h-96 w-full">

        </div>

        <div className="bg-green-200 flex-1 w-full">

        </div>
      </div>
    </AdminLayout>
  );
}

export default page;
