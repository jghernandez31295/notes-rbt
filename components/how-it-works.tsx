import { MessageSquare, SmilePlus, FileText } from "lucide-react"

const steps = [
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    description: "Habla o escribe tu resumen del caso",
  },
  {
    icon: <SmilePlus className="h-8 w-8 text-primary" />,
    description: "La IA convierte tu resumen en una nota profesional",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    description: "Exporta tu nota, lista para enviar o guardar",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container space-y-16 py-24 md:py-32 border-t">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cómo funciona</h2>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">{step.icon}</div>
            <p className="text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
