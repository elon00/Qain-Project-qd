"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Qain home">
          <div className="h-6 w-6 rounded-md bg-primary" aria-hidden />
          <span className="text-base font-semibold tracking-tight">Qain</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link href="#how" className="text-sm text-muted-foreground hover:text-foreground">
            How it works
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary" asChild>
            <Link href="#docs" aria-label="Read litepaper and docs">
              Read Litepaper
            </Link>
          </Button>
          <Button aria-label="Connect wallet to start" className="bg-primary text-primary-foreground hover:opacity-90">
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  )
}
