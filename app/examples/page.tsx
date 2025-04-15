import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Examples</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ExampleCard
          title="Grid Layout"
          description="A responsive grid layout with different column configurations"
          href="/examples/grid"
        />
        <ExampleCard
          title="Card Component"
          description="A card component with various content layouts"
          href="/examples/card"
        />
        <ExampleCard
          title="Navbar"
          description="A responsive navigation bar with dropdown menus"
          href="/examples/navbar"
        />
        <ExampleCard
          title="Form Layout"
          description="A form with various input types and validation"
          href="/examples/form"
        />
        <ExampleCard
          title="Animation Examples"
          description="Various animation effects and transitions"
          href="/examples/animations"
        />
        <ExampleCard
          title="Dark Mode Toggle"
          description="A component that toggles between light and dark mode"
          href="/examples/dark-mode"
        />
      </div>
    </div>
  )
}

interface ExampleCardProps {
  title: string
  description: string
  href: string
}

function ExampleCard({ title, description, href }: ExampleCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link href={href} className="flex items-center text-primary font-medium">
        View example <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}
