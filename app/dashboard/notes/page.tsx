import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import { NotesTable } from "@/components/dashboard/notes-table"

export const metadata: Metadata = {
  title: "Notas | NotasClínicas IA",
  description: "Gestiona tus notas clínicas",
}

export default function NotesPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notas</h1>
          <p className="text-muted-foreground">Gestiona tus notas clínicas para todos los clientes.</p>
        </div>
        <NotesTable />
      </div>
    </DashboardShell>
  )
}
