import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Code } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Code className="h-6 w-6" />
          <span>SundarCss Documentation</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/docs/grid" className="text-sm font-medium hover:underline">
            Documentation
          </Link>
          <Link href="/examples" className="text-sm font-medium hover:underline">
            Examples
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
