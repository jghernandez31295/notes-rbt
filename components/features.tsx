import { Brain, Lock, Clock } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-8 w-8 text-primary" />,
    title: "Redacción inteligente",
    description: "Genera notas a partir de tu resumen verbal o escrito",
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "Privacidad garantizada",
    description: "100% confidencial y seguro",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Ahorra tiempo",
    description: "Hasta 5x más rápido que hacerlo manual.",
  },
]

export default function Features() {
  return (
    <section id="features" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Características</h2>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              {feature.icon}
              <h3 className="font-bold">{feature.title}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
