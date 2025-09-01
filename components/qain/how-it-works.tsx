export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect Wallet",
      desc: "Use your preferred wallet to connect. No custody—your keys, your funds.",
    },
    {
      step: "02",
      title: "Deposit QAIN",
      desc: "Deposit QAIN to the smart contract to secure eligibility for upcoming airdrops.",
    },
    {
      step: "03",
      title: "Receive Airdrops",
      desc: "As projects launch on Qain, eligible depositors receive airdrops automatically.",
    },
  ]

  return (
    <section id="how" className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-balance text-2xl font-semibold">How it works</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Join with a single deposit. Eligibility snapshots and distribution logic are transparent and auditable.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-lg border bg-card p-5">
              <div className="text-sm font-mono text-secondary">{s.step}</div>
              <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
