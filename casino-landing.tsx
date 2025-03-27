"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dices, MessageCircle, Trophy, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CasinoLanding() {
  // Function to open WhatsApp with a predefined message
  const openWhatsApp = () => {
    const message = "Hola! Me interesa el 20% de descuento en el casino. ¿Podrían darme más información?"
    const encodedMessage = encodeURIComponent(message)
    // Note: Replace this with your actual phone number
    const phoneNumber = "1234567890"
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dices className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-white">Royal Casino</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#games" className="text-sm font-medium text-zinc-400 hover:text-white">
              Games
            </Link>
            <Link href="#promotions" className="text-sm font-medium text-zinc-400 hover:text-white">
              Promotions
            </Link>
            <Link href="#vip" className="text-sm font-medium text-zinc-400 hover:text-white">
              VIP
            </Link>
            <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-white">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              onClick={openWhatsApp}
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10">
              Login
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Casino background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block rounded-full bg-red-600 px-4 py-1 text-sm font-medium">Exclusive Offer</div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get <span className="text-red-600">20% OFF</span> on Your First Deposit
            </h1>
            <p className="text-xl text-zinc-400">
              Join Royal Casino today and experience the thrill of winning with our exclusive welcome bonus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={openWhatsApp} size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact via WhatsApp
              </Button>
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Play Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 bg-zinc-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Slots", "Poker", "Roulette"].map((game) => (
              <Card key={game} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=600&text=${game}`}
                    alt={game}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{game}</h3>
                  <p className="text-zinc-400 mb-4">
                    Experience the thrill of our premium {game.toLowerCase()} games with amazing graphics and big
                    payouts.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Play Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Special Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-full">
                  <Trophy className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">20% Welcome Bonus</h3>
                  <p className="text-zinc-400 mb-4">
                    Get an extra 20% on your first deposit. Use this bonus to play any of our exciting games.
                  </p>
                  <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-xl border border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-600/20 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Weekend Cashback</h3>
                  <p className="text-zinc-400 mb-4">
                    Enjoy 10% cashback on all your weekend losses. Play more without worrying about losing.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Winning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up now and claim your 20% welcome bonus. Contact us via WhatsApp for exclusive offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={openWhatsApp} size="lg" className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Sign Up Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12 border-t border-zinc-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-4">
                <Dices className="h-8 w-8 text-red-600" />
                <span className="text-xl font-bold">Royal Casino</span>
              </div>
              <p className="text-zinc-400 text-sm">
                The ultimate destination for premium casino games and exciting promotions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Games</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Slots
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Poker
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Roulette
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Blackjack
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <button onClick={openWhatsApp} className="hover:text-white flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" /> WhatsApp
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Royal Casino. All rights reserved.</p>
            <p className="mt-2">Gambling can be addictive. Please play responsibly.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

