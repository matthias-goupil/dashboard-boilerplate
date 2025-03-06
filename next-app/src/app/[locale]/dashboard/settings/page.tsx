import QueryTabs from "@/components/custom-ui/queryTabs";
import UpdatePasswordForm from "@/components/forms/users/admin/updatePasswordForm";
import DashboardLayout from "@/components/layouts/dashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import React from "react";

interface ISettingsPageProps {
  params: Promise<{ locale: string }>;
}

async function SettingsPage(props: ISettingsPageProps) {
  const { locale } = await props.params;
  const t = await getScopedI18n("settings");
  const tGlobal = await getScopedI18n("global");

  return (
    <DashboardLayout
      title={t("pageTitle")}
      breadcrumb={[
        {
          label: tGlobal("dashboard"),
          href: `/${locale}/dashboard`,
        },
        t("pageTitle"),
      ]}
    >
      <QueryTabs
        queryName="settingsTab"
        tabs={[
          {
            label: t("tabs.settings"),
            value: "general",
            component: (
              <Card className="p-4">
                <CardTitle className="p-4">
                  <h3 className="font-bold text-[#2B3674] mb-8">Settings</h3>
                </CardTitle>
              </Card>
            ),
          },
          {
            label: t("tabs.userInformations"),
            value: "profil",
            component: (
              <div className="p-4">
                <h3 className="font-bold text-[#2B3674] mb-8">Mon profil</h3>
                <div className="flex gap-8">
                  <Card className="p-4 ">
                    <p>Test</p>
                  </Card>
                  <Card className="p-4 flex-1">
                    <p>Test</p>
                  </Card>
                </div>
              </div>
            ),
          },
          {
            label: t("tabs.password"),
            value: "password",
            component: (
              <Card className="p-4">
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
            label: t("tabs.subscription"),
            value: "subscription",
            component: (
              <Card className="p-4">
              <CardTitle className="p-4">
                <h3 className="font-bold text-[#2B3674] mb-8">Mon abonnement</h3>
              </CardTitle>
            </Card>
            ),
          },
        ]}
        defaultValue="general"
      ></QueryTabs>
    </DashboardLayout>
  );
}

export default SettingsPage;
