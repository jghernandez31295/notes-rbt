import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">NotasClínicas IA</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-primary">
            Características
          </Link>
          <Link href="#how-it-works" className="transition-colors hover:text-primary">
            Cómo Funciona
          </Link>
          <Link href="#testimonials" className="transition-colors hover:text-primary">
            Testimonios
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm">Probar Gratis</Button>
        </div>
      </div>
    </header>
  )
}
