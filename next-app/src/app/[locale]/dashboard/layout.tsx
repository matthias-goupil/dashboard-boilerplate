import { SidebarMenu } from '@/components/atoms/menu'
import React, { PropsWithChildren } from 'react'
import {
  HomeIcon as HomeIconSolid,
  BanknotesIcon as BanknotesIconSolid,
  Cog6ToothIcon as Cog6ToothIconSolid,
  UsersIcon as UsersIconSolid,
  CalendarIcon as CalendarIconSolid,
  BuildingStorefrontIcon as BuildingStorefrontIconSolid,
} from '@heroicons/react/24/solid'
import {
  HomeIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  UsersIcon,
  CalendarIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline'

interface IDashboardLayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>
}

async function DashboardLayout(props: IDashboardLayoutProps) {
  const { children } = props
  const { locale } = await props.params

  const menu = [
    {
      label: 'dashboard',
      icon: <HomeIcon className="w-8" />,
      selectedIcon: <HomeIconSolid className="w-8" />,
      href: `/${locale}/dashboard`,
    },
    {
      label: 'company',
      icon: <BuildingStorefrontIcon className="w-8" />,
      selectedIcon: <BuildingStorefrontIconSolid className="w-8" />,
      href: `/${locale}/dashboard/companies`,
    },
    {
      label: 'services',
      icon: <BanknotesIcon className="w-8" />,
      selectedIcon: <BanknotesIconSolid className="w-8" />,
      href: `/${locale}/dashboard/services`,
    },
    {
      label: 'planning',
      icon: <CalendarIcon className="w-8" />,
      selectedIcon: <CalendarIconSolid className="w-8" />,
      href: `/${locale}/dashboard/planning`,
    },
    {
      label: 'customers',
      icon: <UsersIcon className="w-8" />,
      selectedIcon: <UsersIconSolid className="w-8" />,
      href: `/${locale}/dashboard/clients`,
    },
    {
      label: 'settings',
      icon: <Cog6ToothIcon className="w-8" />,
      selectedIcon: <Cog6ToothIconSolid className="w-8" />,
      href: `/${locale}/dashboard/settings`,
    },
  ]

  return (
    <div className="w-screen h-screen flex relative">
      <SidebarMenu menu={menu} />
      <div className="flex-1 w-screen px-10 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
