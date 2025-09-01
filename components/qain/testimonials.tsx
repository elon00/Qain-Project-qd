import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    initials: "AL",
    name: "Alex Liu",
    role: "Early Participant",
    quote:
      "Qain made it simple to qualify for multiple airdrops with one deposit. The process is transparent and fast.",
  },
  {
    initials: "RM",
    name: "Riya Mehta",
    role: "Builder, Yellow Ecosystem",
    quote:
      "As a project, the launchpad tooling and clarity around eligibility were spot on. Great experience for teams.",
  },
  {
    initials: "JD",
    name: "Jordan Diaz",
    role: "Security Researcher",
    quote: "Appreciate the quantum‑safe approach and auditability. The non‑custodial design is the right call.",
  },
]

export function Testimonials() {
  return (
    <section className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-balance text-2xl font-semibold">What people say</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Trusted by early participants, builders, and security researchers in the Yellow Protocol ecosystem.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
