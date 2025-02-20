import AdminLayout from "@/components/layouts/adminLayout";
import { getScopedI18n } from "@/locales/server";
import React from "react";

interface ICompanyPageProps {
  params: Promise<{ locale: string }>;
}

async function CompanyPage(props: ICompanyPageProps) {
  const tGlobal = await getScopedI18n("global");
  const t = await getScopedI18n("company");

  return (
    <AdminLayout
      title={t("pageTitle")}
      breadcrumb={[
        {
          label: tGlobal("dashboard"),
          href: `/dashboard`,
        },
        t("pageTitle"),
      ]}
    ></AdminLayout>
  );
}

export default CompanyPage;
