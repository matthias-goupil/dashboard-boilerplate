import QueryTabs from "@/components/custom-ui/queryTabs";
import UpdatePasswordForm from "@/components/forms/users/admin/updatePasswordForm";
import DashboardLayout from "@/components/layouts/dashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import React from "react";

interface ISettingsPageProps {
  params: Promise<{ locale:string }>;
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
                <p>Test</p>
              </Card>
            ),
          },
          {
            label: t("tabs.userInformations"),
            value: "profil",
            component: (
              <Card className="p-4">
                <CardHeader>
                  <CardTitle>
                    <h3 className="font-bold text-[#2B3674]">Mon profil</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row gap-4">
                  <div>
                    <Avatar className="w-96 h-96">
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/31575276?v=4"
                        alt="picture"
                      />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                  </div>
                </CardContent>
              </Card>
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
                <p>Gestion Mot de l'abonnement</p>
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
