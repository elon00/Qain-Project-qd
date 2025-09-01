import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Layers, Lock } from "lucide-react"

const items = [
  {
    icon: Shield,
    title: "Fully Secure",
    desc: "Quantum‑safe primitives and audited smart contracts protect your deposits.",
  },
  {
    icon: Zap,
    title: "Fastest Finality",
    desc: "Optimized execution on Yellow Protocol delivers rapid confirmations.",
  },
  {
    icon: Layers,
    title: "Scalable Launchpad",
    desc: "Designed to scale with ecosystem growth and multi‑project launches.",
  },
  {
    icon: Lock,
    title: "Non‑Custodial",
    desc: "Control stays with you—no centralized custody or withdrawal gates.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-balance text-2xl font-semibold">Why Qain</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Fast, secure, and scalable by design—so you can focus on discovering the next standout projects.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/80">
                    <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
