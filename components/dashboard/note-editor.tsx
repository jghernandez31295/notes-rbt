"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wand2 } from "lucide-react"

// Mock data for a note
const mockNote = {
  id: "1",
  clientId: "1",
  clientName: "Juan Pérez",
  date: new Date(2025, 3, 15),
  title: "Sesión de comportamiento",
  content: "",
  summary:
    "Juan mostró mejoras en su comportamiento durante la sesión de hoy. Completó todas las actividades asignadas y respondió bien a los refuerzos positivos.",
  generatedContent:
    "El cliente Juan Pérez (8 años) asistió a su sesión programada el 15 de abril de 2025. Durante la sesión de 60 minutos, se trabajó en habilidades de comportamiento social.\n\nObservaciones:\n- El cliente mostró mejoras significativas en su capacidad para mantener contacto visual durante las interacciones sociales.\n- Completó todas las actividades asignadas sin necesidad de redirección.\n- Respondió positivamente a los refuerzos verbales y tangibles.\n\nIntervenciones:\n1. Se utilizaron técnicas de modelado para demostrar comportamientos sociales apropiados.\n2. Se implementó un sistema de economía de fichas para reforzar comportamientos objetivo.\n3. Se practicaron habilidades de conversación en un entorno estructurado.\n\nPlan para la próxima sesión:\n- Continuar trabajando en habilidades de conversación.\n- Introducir actividades de grupo pequeño para generalizar habilidades.\n- Mantener el sistema de refuerzo actual.\n\nEl cliente mostró progreso hacia los objetivos establecidos en su plan de tratamiento.",
}

export function NoteEditor({ noteId }: { noteId: string }) {
  const [activeTab, setActiveTab] = useState("summary")
  const [summary, setSummary] = useState(mockNote.summary)
  const [generatedContent, setGeneratedContent] = useState(mockNote.generatedContent)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
      setActiveTab("generated")
    }, 2000)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="client">Cliente</Label>
              <Input id="client" value={mockNote.clientName} disabled />
            </div>
            <div>
              <Label htmlFor="date">Fecha</Label>
              <Input id="date" type="date" value={mockNote.date.toISOString().split("T")[0]} />
            </div>
          </div>

          <div>
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={mockNote.title} />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="summary">Resumen</TabsTrigger>
              <TabsTrigger value="generated">Nota Generada</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="space-y-4">
              <div className="mt-4">
                <Label htmlFor="summary">Resumen de la sesión</Label>
                <Textarea
                  id="summary"
                  placeholder="Escribe un resumen breve de la sesión..."
                  className="min-h-[200px]"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
              <Button onClick={handleGenerate} disabled={isGenerating}>
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? "Generando..." : "Generar nota completa"}
              </Button>
            </TabsContent>
            <TabsContent value="generated">
              <div className="mt-4">
                <Label htmlFor="generated">Nota clínica generada</Label>
                <Textarea
                  id="generated"
                  className="min-h-[400px]"
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancelar</Button>
        <Button>Guardar nota</Button>
      </CardFooter>
    </Card>
  )
}
