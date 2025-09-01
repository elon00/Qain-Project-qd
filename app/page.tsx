// You can remove this link or set / as the Qain page later.
import Link from "next/link"

export default function Home() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <p className="mt-2 text-sm text-muted-foreground">Go to the Qain landing page:</p>
      <p className="mt-3">
        <Link href="/qain" className="text-amber-600 underline underline-offset-4 hover:text-amber-500">
          Open Qain Launchpad
        </Link>
      </p>
    </main>
  )
}
