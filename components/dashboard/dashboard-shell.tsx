import type React from "react"
export default function DashboardShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 space-y-8">
      <div className="flex items-center justify-between">
        <div></div>
      </div>
      <div>{children}</div>
    </div>
  )
}
