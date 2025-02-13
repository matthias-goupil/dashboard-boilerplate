import QueryTabs from "@/components/custom-ui/queryTabs";
import UpdatePasswordForm from "@/components/forms/users/admin/updatePasswordForm";
import AdminLayout from "@/components/layouts/adminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

async function SettingsPage() {
  return (
    <AdminLayout
      title="Paramètres"
      breadcrumb={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        "Settings",
      ]}
    >
      <QueryTabs
        queryName="settingsTab"
        tabs={[
          {
            label: "Paramètres",
            value: "general",
            component: (
              <Card className="p-4">
                <p>Test</p>
              </Card>
            ),
          },
          {
            label: "Profil",
            value: "profil",
            component: (
              <Card className="p-4">
                <p>Gestion Profil</p>
              </Card>
            ),
          },
          {
            label: "Mot de passe",
            value: "password",
            component: (
              <Card>
                <CardHeader>
                  <CardTitle>
                    <h3 className="font-bold text-[#2B3674]">
                      Gestion du mot de passe
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <UpdatePasswordForm />
                </CardContent>
              </Card>
            ),
          },
          {
            label: "Abonnement",
            value: "subscription",
            component: (
              <Card className="p-4">
                <p>Gestion Mot de l'abonnement</p>
              </Card>
            ),
          },
        ]}
        defaultValue="general"
      ></QueryTabs>
    </AdminLayout>
  );
}

export default SettingsPage;
