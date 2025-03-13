import React from 'react'
import { Skeleton } from '../../atoms/skeleton'

function headerSkeleton() {
  return (
    <header className="flex items-center justify-between w-full mb-10 h-32 sticky top-0 backdrop-blur-xl ">
      <div className="space-y-2">
        <Skeleton className="h-5 w-60 rounded-xl" />
        <Skeleton className="h-10 w-72 rounded-xl" />
      </div>
      <Skeleton className="h-14 w-14 rounded-full" />
    </header>
  )
}

export default headerSkeleton
