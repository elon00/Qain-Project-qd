export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Qain. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground">
              Docs
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground">
              Security
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
