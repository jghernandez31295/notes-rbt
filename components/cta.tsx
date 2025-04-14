import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Empieza hoy. Redacta tu primera nota en menos de 1 minuto.
        </h2>
        <Button size="lg" className="mt-4 px-8 py-6 text-lg">
          Probar gratis ahora
        </Button>
      </div>
    </section>
  )
}
