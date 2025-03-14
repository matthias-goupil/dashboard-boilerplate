import React, { PropsWithChildren, Suspense } from 'react'
import Header from '../organisms/header'
import { getUserById } from '@/services/users'
import HeaderSkeleton from '../molecules/skeletons/headerSkeleton'
import { getJWT } from '@/utils/jwt'

interface IAdminLayoutProps extends PropsWithChildren {
  title: string
  breadcrumb?: ({ label: string; href?: string } | string)[]
}

async function DashboardLayout({
  children,
  ...headerProps
}: IAdminLayoutProps) {
  const jwtData = await getJWT()
  if (!jwtData?.payload) {
    return null
  }
  const user = await getUserById(jwtData.payload.userId)

  if (!user) return null
  return (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header {...headerProps} user={user} />
      </Suspense>
      <main className="w-full">{children}</main>
    </>
  )
}

export default DashboardLayout
