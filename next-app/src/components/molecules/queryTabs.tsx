'use client'

import React, { PropsWithChildren, ReactNode } from 'react'
import { useQueryState } from 'nuqs'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../atoms/tabs'

interface IQueryTabsProps extends PropsWithChildren {
  queryName: string
  defaultValue: IQueryTabsProps['tabs'][number]['value']
  tabs: { label: string; value: string; component?: ReactNode }[]
}

function QueryTabs({ queryName, tabs, defaultValue }: IQueryTabsProps) {
  const [tab, setTab] = useQueryState(queryName, { defaultValue })

  return (
    <Tabs value={tab || 'global'} onValueChange={setTab}>
      <TabsList className="mb-5 relative">
        {tabs.map(({ value, label }) => (
          <TabsTrigger value={value} key={value}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ value, component }) => (
        <TabsContent value={value} key={value}>
          {component}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default QueryTabs
