"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/qain" className="flex items-center gap-2">
          <div aria-hidden className="h-6 w-6 rounded border bg-primary" />
          <span className="text-sm font-semibold">Qain Launchpad</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm sm:flex">
          <Link href="#how" className="hover:underline underline-offset-4">
            How it works
          </Link>
          <Link href="#features" className="hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#testimonials" className="hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:underline underline-offset-4">
            FAQ
          </Link>
          <Link href="#litepaper" className="hover:underline underline-offset-4">
            Litepaper
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex bg-transparent">
            <Link href="#litepaper">Docs</Link>
          </Button>
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href="#join">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-foreground/10 bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80">
      {children}
    </span>
  )
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
}) {
  const base = "mx-auto max-w-2xl"
  return (
    <div className={cn(base, align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <div className={cn("mb-2", align === "center" ? "justify-center" : "", "flex")}>
          <Pill>{eyebrow}</Pill>
        </div>
      ) : null}
      <h2 className="text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

function FeatureItem({
  title,
  desc,
  icon,
}: {
  title: string
  desc: string
  icon: React.ReactNode
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  )
}

function Testimonial({
  quote,
  name,
  role,
  avatarAlt,
}: {
  quote: string
  name: string
  role: string
  avatarAlt: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <img src="/diverse-user-avatar.png" alt={avatarAlt} className="h-12 w-12 rounded-full border" />
          <div>
            <p className="text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {name} • {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function QainLandingPage() {
  return (
    <main className="font-sans">
      <Header />

      {/* Hero */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Pill>Quantum‑Resistant</Pill>
            <Pill>Yellow Protocol</Pill>
          </div>
          <h1 className="text-balance text-3xl font-semibold sm:text-4xl">Deposit QAIN. Earn Future Airdrops.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A security‑first launchpad on Yellow Protocol. Lock your QAIN into non‑custodial smart contracts to qualify
            for airdrops from projects launching inside our ecosystem. Typical early participation range: $500–$1,000.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
              <Link href="#join">Get Started</Link>
            </Button>
            <Button variant="outline" asChild className="hover:bg-muted bg-transparent">
              <Link href="#litepaper">Read the Litepaper</Link>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Chain" value="Yellow Protocol" />
            <Stat label="Security" value="Post‑Quantum" />
            <Stat label="Model" value="Deposit → Airdrop" />
            <Stat label="Audits" value="In Progress" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-4 py-10 sm:py-12">
        <SectionTitle
          eyebrow="How it works"
          title="Simple, transparent participation"
          subtitle="Qualify for future airdrops from projects launching on Qain by locking QAIN in a non‑custodial smart contract."
        />
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <FeatureItem
            title="1. Deposit QAIN"
            desc="Lock QAIN in a non‑custodial smart contract. Withdrawals and terms are transparent on‑chain."
            icon={
              <span className="inline-flex h-6 w-6 items-center justify-center rounded border bg-primary/20 text-foreground">
                1
              </span>
            }
          />
          <FeatureItem
            title="2. Maintain Eligibility"
            desc="Your deposit snapshot powers eligibility for partner airdrops launching on the Qain Launchpad."
            icon={
              <span className="inline-flex h-6 w-6 items-center justify-center rounded border bg-primary/20 text-foreground">
                2
              </span>
            }
          />
          <FeatureItem
            title="3. Claim Airdrops"
            desc="When projects launch, eligible users can claim allocations directly to their wallet."
            icon={
              <span className="inline-flex h-6 w-6 items-center justify-center rounded border bg-primary/20 text-foreground">
                3
              </span>
            }
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-10 sm:py-12">
        <SectionTitle eyebrow="Why Qain" title="Built for the next era of security and fairness" />
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureItem
            title="Quantum‑Resistant"
            desc="Forward‑secure assumptions protect eligibility proofs and airdrop claims in a post‑quantum world."
            icon={<div className="h-6 w-6 rounded border bg-primary/20" aria-hidden="true" />}
          />
          <FeatureItem
            title="On Yellow Protocol"
            desc="Launch and settle on Yellow Protocol to leverage speed, cost‑efficiency, and security."
            icon={<div className="h-6 w-6 rounded border bg-primary/20" aria-hidden="true" />}
          />
          <FeatureItem
            title="Non‑Custodial"
            desc="Smart contracts enforce rules—your wallet stays under your control with on‑chain transparency."
            icon={<div className="h-6 w-6 rounded border bg-primary/20" aria-hidden="true" />}
          />
          <FeatureItem
            title="Fair Allocations"
            desc="Eligibility is driven by clearly defined snapshots and deposit windows—no hidden terms."
            icon={<div className="h-6 w-6 rounded border bg-primary/20" aria-hidden="true" />}
          />
          <FeatureItem
            title="Developer‑Friendly"
            desc="A streamlined project onboarding flow, documentation, and a predictable launch lifecycle."
            icon={<div className="h-6 w-6 rounded border bg-primary/20" aria-hidden="true" />}
          />
          <FeatureItem
            title="Composability"
            desc="Airdrop proofs and allocations interoperate with the broader Yellow Protocol ecosystem."
            icon={<div className="h-6 w-6 rounded border bg-primary/20" aria-hidden="true" />}
          />
        </div>
      </section>

      {/* Allocation / Participation note */}
      <section id="allocations" className="px-4 py-10 sm:py-12">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-base">Typical Early Participation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-semibold">$500–$1,000</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Early projects on the launchpad often target this range per eligible participant. Final amounts vary by
                project, demand, and allocation rules published before each launch.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
                  <Link href="#join">Get Eligibility Updates</Link>
                </Button>
                <Button asChild className="bg-secondary text-secondary-foreground hover:opacity-90">
                  <Link href="#litepaper">Read the Litepaper</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-4 py-10 sm:py-12">
        <SectionTitle eyebrow="Testimonials" title="What builders and early users are saying" />
        <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="The deposit-to-airdrop model is refreshingly straightforward. Our launch was smooth and fair."
            name="A. Kumar"
            role="Core Contributor, L2 Tooling Project"
            avatarAlt="Portrait of A. Kumar"
          />
          <Testimonial
            quote="Yellow Protocol plus Qain’s security posture gives me confidence to participate early."
            name="J. Rivera"
            role="Early Ecosystem User"
            avatarAlt="Portrait of J. Rivera"
          />
          <Testimonial
            quote="Documentation and onboarding were excellent—we shipped our token event in record time."
            name="S. Lee"
            role="Founder, DeFi Analytics"
            avatarAlt="Portrait of S. Lee"
          />
        </div>
      </section>

      {/* Litepaper / Docs */}
      <section id="litepaper" className="px-4 py-10 sm:py-12">
        <SectionTitle
          eyebrow="Learn more"
          title="Explore the Qain Litepaper"
          subtitle="See how quantum‑resistant design principles and transparent allocation rules come together on Yellow Protocol."
        />
        <div className="mx-auto mt-6 max-w-md text-center">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Dive into security assumptions, contract architecture, snapshot methodology, and launch ops.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Button variant="outline" asChild className="hover:bg-muted bg-transparent">
                  <Link href="#">View Litepaper (PDF)</Link>
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
                  <Link href="#join">Join the Waitlist</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-10 sm:py-12">
        <SectionTitle eyebrow="FAQ" title="Common questions" />
        <div className="mx-auto mt-6 max-w-3xl space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Is my QAIN locked forever?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                No. Deposits are governed by transparent smart contract terms. Each launch defines its eligibility
                window and withdrawal conditions in advance.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How are airdrops determined?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Partner projects publish allocation rules, which typically include deposit snapshots and eligibility
                thresholds. Claims are made on‑chain from those rules.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">What does quantum‑resistant mean here?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We align with forward‑secure, post‑quantum assumptions for critical proofs and claim flows, aiming to
                mitigate future quantum adversaries. Full details are in the litepaper.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA + disclaimer */}
      <section id="join" className="px-4 pb-14 pt-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-pretty text-2xl font-semibold">Be first to access Qain launches</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Join the waitlist for early access, updates, and eligibility timelines.
          </p>
          <div className="mt-5 flex items-center justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thanks! You’re on the list.")
              }}
              className="flex w-full max-w-md items-center gap-2"
              aria-label="Join the waitlist"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-md border border-border bg-input px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                aria-label="Email address"
              />
              <Button type="submit" className="bg-primary text-primary-foreground hover:opacity-90">
                Notify me
              </Button>
            </form>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">
            By joining, you agree to receive updates from Qain. Not investment advice. Participation may be restricted
            in some regions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div aria-hidden className="h-5 w-5 rounded border bg-primary" />
              <span className="text-sm font-semibold">Qain</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">A quantum‑resistant launchpad on Yellow Protocol.</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">Links</p>
            <div className="mt-2 flex flex-col gap-1">
              <Link href="#how" className="text-muted-foreground hover:underline underline-offset-4">
                How it works
              </Link>
              <Link href="#features" className="text-muted-foreground hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="#litepaper" className="text-muted-foreground hover:underline underline-offset-4">
                Litepaper
              </Link>
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium">Legal</p>
            <p className="mt-2 text-xs text-muted-foreground">
              The information on this site does not constitute investment advice. Availability may vary by jurisdiction.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
