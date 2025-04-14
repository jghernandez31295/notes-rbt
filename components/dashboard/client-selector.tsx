"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, FileText, User } from "lucide-react"

// Mock data for clients (patients)
const clients = [
  { id: "1", name: "Juan Pérez", age: 8, diagnosis: "TEA" },
  { id: "2", name: "María García", age: 10, diagnosis: "TDAH" },
]

export function ClientSelector() {
  const [selectedClient, setSelectedClient] = useState(clients[0].id)

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-[220px] justify-between bg-background border shadow-sm hover:bg-muted/10 text-sm font-normal"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <User className="h-3 w-3 text-primary" />
              </div>
              <span>{clients.find((client) => client.id === selectedClient)?.name || "Seleccionar paciente"}</span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[220px]" align="start">
          <DropdownMenuLabel className="text-xs text-muted-foreground">Mis Pacientes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={selectedClient} onValueChange={setSelectedClient}>
            {clients.map((client) => (
              <DropdownMenuRadioItem key={client.id} value={client.id} className="text-sm py-1.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-3 w-3 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span>{client.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {client.age} años - {client.diagnosis}
                    </span>
                  </div>
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="outline" size="sm" className="h-9 shadow-sm">
        <FileText className="h-4 w-4 mr-1" />
        Crear nota
      </Button>
    </div>
  )
}
