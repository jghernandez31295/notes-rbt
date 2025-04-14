import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import { ClientsTable } from "@/components/dashboard/clients-table"

export const metadata: Metadata = {
  title: "Clientes | NotasClínicas IA",
  description: "Gestiona tus clientes",
}

export default function ClientsPage() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-muted-foreground">Gestiona tus clientes (máximo 2 simultáneos).</p>
        </div>
        <ClientsTable />
      </div>
    </DashboardShell>
  )
}
