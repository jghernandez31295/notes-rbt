import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import { WeeklyCalendar } from "@/components/dashboard/weekly-calendar"
import { ClientSelector } from "@/components/dashboard/client-selector"

export const metadata: Metadata = {
  title: "Calendario | NotasClínicas IA",
  description: "Gestiona tus sesiones y notas para pacientes",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Calendario de sesiones</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Visualiza y gestiona tus sesiones y notas para pacientes</p>
          </div>
          <ClientSelector />
        </div>
        <WeeklyCalendar />
      </div>
    </DashboardShell>
  )
}
