import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AllocationNote() {
  return (
    <section className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Alert className="border-secondary/40">
          <AlertTitle className="font-semibold">Allocation note</AlertTitle>
          <AlertDescription className="text-sm">
            Typical early participation range: <span className="font-medium">$500–$1,000</span>. This is an illustrative
            example and not financial advice. Actual allocations depend on project parameters and snapshot outcomes.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
