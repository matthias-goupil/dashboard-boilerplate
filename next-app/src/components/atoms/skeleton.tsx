import React from "react"
import { cn } from "@/utils/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted bg-white", className)}
      {...props}
    />
  )
}

export { Skeleton }
