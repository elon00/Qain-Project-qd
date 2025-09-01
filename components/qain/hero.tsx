import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-pretty text-3xl font-semibold leading-tight sm:text-4xl">
            Quantum‑Resistant Launchpad on Yellow Protocol
          </h1>
          <p className="mt-3 text-pretty text-sm text-muted-foreground sm:text-base">
            The fastest, fully secure, and scalable way to access early allocations. Deposit QAIN into our non‑custodial
            smart contract to qualify for airdrops from projects launching on the Qain launchpad.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-primary text-primary-foreground hover:opacity-90" aria-label="Deposit QAIN now">
              Deposit QAIN
            </Button>
            <Button variant="secondary" className="hover:opacity-90" aria-label="Explore the launchpad projects">
              Explore Projects
            </Button>
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" aria-hidden />
              Quantum‑safe cryptography
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" aria-hidden />
              Non‑custodial, auditable contracts
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" aria-hidden />
              Fast finality on Yellow Protocol
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" aria-hidden />
              Scales with ecosystem growth
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-lg border bg-card p-3">
            <Image
              src={"/placeholder.svg?height=320&width=560&query=abstract%20quantum%20circuit%20diagram"}
              alt="Abstract quantum circuit illustration"
              width={560}
              height={320}
              className="h-auto w-full rounded-md"
              priority
            />
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">TPS</p>
                <p className="text-lg font-semibold">High</p>
              </div>
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">Security</p>
                <p className="text-lg font-semibold">Quantum‑resistant</p>
              </div>
              <div className="rounded-md border p-3">
                <p className="text-xs text-muted-foreground">Chain</p>
                <p className="text-lg font-semibold">Yellow Protocol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
