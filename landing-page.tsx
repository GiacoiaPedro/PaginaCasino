"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Home, Users, WalletCardsIcon as Cards, History, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Función para abrir WhatsApp con un mensaje predefinido
  const abrirWhatsApp = () => {
    const mensaje =
      "Hola! Me interesa la promoción con 20% de descuento en RegalaMonedas. ¿Podrían darme más información?"
    const mensajeCodificado = encodeURIComponent(mensaje)
    // Nota: Reemplazar con tu número de teléfono real
    const numeroTelefono = "1234567890"
    window.open(`https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Barra de navegación */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-full border border-zinc-700 px-4 py-2 text-sm"
          >
            Menú
          </button>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-amber-500">REGALA</span>
                <div className="mx-2 h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-black font-bold">M</span>
                </div>
                <span className="text-xl font-bold text-amber-500">MONEDAS</span>
              </div>
            </div>
          </div>

          <div>
            <Button onClick={abrirWhatsApp} className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 pt-16">
          <div className="container py-8">
            <div className="space-y-6">
              <Link href="#" className="flex items-center gap-3 text-lg font-medium text-amber-500">
                <Home className="h-5 w-5" /> Inicio
              </Link>
              <Link href="#" className="flex items-center gap-3 text-lg font-medium text-zinc-400 hover:text-amber-500">
                <Users className="h-5 w-5" /> Dealers en Vivo
              </Link>
              <Link href="#" className="flex items-center gap-3 text-lg font-medium text-zinc-400 hover:text-amber-500">
                <Cards className="h-5 w-5" /> Juegos de Mesa
              </Link>
              <Link href="#" className="flex items-center gap-3 text-lg font-medium text-zinc-400 hover:text-amber-500">
                <History className="h-5 w-5" /> Últimos Juegos
              </Link>
              <Link href="#" className="flex items-center gap-3 text-lg font-medium text-zinc-400 hover:text-amber-500">
                <Star className="h-5 w-5" /> Favoritos
              </Link>
              <div className="pt-4">
                <Button onClick={abrirWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sección Hero */}
      <section className="relative">
        <div className="relative h-[500px] w-full overflow-hidden">
          <Image
            src="/images/casino-background.png"
            alt="Casino RegalaMonedas"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-amber-500">Jackpots</h1>
              <h2 className="text-4xl font-bold text-white">Expert</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Promoción */}
      <section className="py-16 bg-gradient-to-b from-black to-amber-900/40">
        <div className="container text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="inline-block rounded-full bg-amber-500 px-4 py-1 text-sm font-medium text-black">
              Oferta Exclusiva
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Obtén <span className="text-amber-500">20% DE DESCUENTO</span> en tu primera recarga
            </h2>
            <p className="text-xl text-zinc-300">
              Únete a RegalaMonedas hoy y experimenta la emoción de ganar con nuestro bono exclusivo de bienvenida.
            </p>
            <Button
              onClick={abrirWhatsApp}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Categorías */}
      <section className="py-8 bg-black">
        <div className="container">
          <div className="flex justify-center items-center gap-2 md:gap-4 overflow-x-auto py-4">
            <Link href="#" className="flex flex-col items-center min-w-[80px]">
              <div className="bg-zinc-800 rounded-full p-3 mb-2">
                <Home className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-xs text-center">INICIO</span>
            </Link>
            <Link href="#" className="flex flex-col items-center min-w-[80px]">
              <div className="bg-zinc-800 rounded-full p-3 mb-2">
                <Users className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-xs text-center">DEALERS EN VIVO</span>
            </Link>
            <Link href="#" className="flex flex-col items-center min-w-[80px]">
              <div className="bg-zinc-800 rounded-full p-3 mb-2">
                <Cards className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-xs text-center">JUEGOS DE MESA</span>
            </Link>
            <Link href="#" className="flex flex-col items-center min-w-[80px]">
              <div className="bg-zinc-800 rounded-full p-3 mb-2">
                <History className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-xs text-center">ÚLTIMOS JUEGOS</span>
            </Link>
            <Link href="#" className="flex flex-col items-center min-w-[80px]">
              <div className="bg-zinc-800 rounded-full p-3 mb-2">
                <Star className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-xs text-center">FAVORITOS</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección CTA Final */}
      <section className="py-16 bg-gradient-to-r from-amber-900/60 to-amber-700/60">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar a ganar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos ahora por WhatsApp y reclama tu 20% de descuento en tu primera recarga.
          </p>
          <Button
            onClick={abrirWhatsApp}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 h-auto"
          >
            <MessageCircle className="mr-2 h-6 w-6" />
            Contactar por WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 border-t border-zinc-800">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-amber-500">REGALA</span>
              <div className="mx-2 h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-black font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-amber-500">MONEDAS</span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              El mejor destino para juegos de casino premium y promociones exclusivas.
            </p>
            <div className="mt-6">
              <Button onClick={abrirWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contactar por WhatsApp
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500 w-full">
              <p>© {new Date().getFullYear()} RegalaMonedas.net. Todos los derechos reservados.</p>
              <p className="mt-2">El juego puede ser adictivo. Por favor juega responsablemente.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

