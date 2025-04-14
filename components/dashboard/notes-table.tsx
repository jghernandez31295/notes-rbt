"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { MoreHorizontal, Search, Plus } from "lucide-react"

// Mock data for notes
const mockNotes = [
  {
    id: "1",
    clientId: "1",
    clientName: "Juan Pérez",
    date: new Date(2025, 3, 15),
    title: "Sesión de comportamiento",
    status: "completed",
  },
  {
    id: "2",
    clientId: "1",
    clientName: "Juan Pérez",
    date: new Date(2025, 3, 16),
    title: "Evaluación semanal",
    status: "pending",
  },
  {
    id: "3",
    clientId: "2",
    clientName: "María García",
    date: new Date(2025, 3, 14),
    title: "Terapia de lenguaje",
    status: "completed",
  },
  {
    id: "4",
    clientId: "2",
    clientName: "María García",
    date: new Date(2025, 3, 17),
    title: "Sesión de habilidades sociales",
    status: "pending",
  },
]

export function NotesTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredNotes = mockNotes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.clientName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar notas..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva nota
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fecha</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredNotes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No se encontraron notas
                </TableCell>
              </TableRow>
            ) : (
              filteredNotes.map((note) => (
                <TableRow key={note.id}>
                  <TableCell>{format(note.date, "d 'de' MMMM, yyyy", { locale: es })}</TableCell>
                  <TableCell>{note.clientName}</TableCell>
                  <TableCell>{note.title}</TableCell>
                  <TableCell>
                    <Badge variant={note.status === "completed" ? "default" : "outline"}>
                      {note.status === "completed" ? "Completada" : "Pendiente"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Abrir menú</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/notes/${note.id}`}>Editar</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Duplicar</DropdownMenuItem>
                        <DropdownMenuItem>Eliminar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
