import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Redacta notas clínicas en
          <br />
          segundos con ayuda de IA
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Nuestra herramienta está diseñada para RBTs y analistas de comportamiento: ahorra tiempo, mejora la calidad de
          tus reportes, y enfócate en lo que realmente importa: tus pacientes.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button size="lg" className="px-8 py-6 text-lg">
          Probar gratis
        </Button>
        <p className="text-sm text-muted-foreground">Sin tarjeta de crédito · Listo en 1 minuto</p>
      </div>
    </section>
  )
}
