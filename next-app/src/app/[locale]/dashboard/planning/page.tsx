import DashboardLayout from '@/components/templates/dashboardLayout'
import { Card } from '@/components/atoms/card'
import { getScopedI18n } from '@/utils/i18n/server'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Planning',
}

async function PlanningPage() {
  const t = await getScopedI18n('planning')
  const tGlobal = await getScopedI18n('global')
  return (
    <DashboardLayout
      title={t('pageTitle')}
      breadcrumb={[
        {
          label: tGlobal('dashboard'),
          href: '/dashboard',
        },
        t('pageTitle'),
      ]}
    >
      <Card className="p-8"></Card>
    </DashboardLayout>
  )
}

export default PlanningPage
