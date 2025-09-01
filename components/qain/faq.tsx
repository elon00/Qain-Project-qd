import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-balance text-2xl font-semibold">FAQ</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does eligibility for airdrops work?</AccordionTrigger>
              <AccordionContent>
                Deposits are snapshotted at intervals. Projects set distribution rules. If your deposit meets the
                criteria at snapshot time, you’ll be eligible for the corresponding airdrop.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is my QAIN locked?</AccordionTrigger>
              <AccordionContent>
                Deposits are non‑custodial and withdrawable subject to each pool’s parameters. Pool pages display lock,
                cooldown, or cap rules clearly before you deposit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Which chain do you use?</AccordionTrigger>
              <AccordionContent>
                Qain operates on Yellow Protocol for its speed and reliability. Smart contracts are auditable and
                designed with quantum‑resistant considerations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do I need KYC?</AccordionTrigger>
              <AccordionContent>
                Requirements depend on project and jurisdiction. Always review individual project pages for compliance
                information prior to participating.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
