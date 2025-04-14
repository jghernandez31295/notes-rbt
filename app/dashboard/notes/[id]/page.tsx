import type { Metadata } from "next"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import { NoteEditor } from "@/components/dashboard/note-editor"

export const metadata: Metadata = {
  title: "Editar Nota | NotasClínicas IA",
  description: "Edita y gestiona notas clínicas",
}

export default function NotePage({ params }: { params: { id: string } }) {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editar Nota</h1>
          <p className="text-muted-foreground">ID de la nota: {params.id}</p>
        </div>
        <NoteEditor noteId={params.id} />
      </div>
    </DashboardShell>
  )
}
