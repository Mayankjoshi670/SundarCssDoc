import type React from "react"
import Link from "next/link"
import { ArrowRight, Code, Grid, Palette, Type, Box, Layers, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SundarCss Utility Library Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive guide to all the utility classes and SASS variables available in the library.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Grid System"
          description="Container, rows, columns, and responsive breakpoints"
          icon={<Grid className="h-6 w-6" />}
          href="/docs/grid"
        />
        <CategoryCard
          title="Typography"
          description="Font sizes, weights, line heights, and text utilities"
          icon={<Type className="h-6 w-6" />}
          href="/docs/typography"
        />
        <CategoryCard
          title="Colors"
          description="Color variables, text colors, and background colors"
          icon={<Palette className="h-6 w-6" />}
          href="/docs/colors"
        />
        <CategoryCard
          title="Spacing"
          description="Margin, padding, and gap utilities"
          icon={<Box className="h-6 w-6" />}
          href="/docs/spacing"
        />
        <CategoryCard
          title="Flexbox"
          description="Flex containers, direction, alignment, and wrapping"
          icon={<Layers className="h-6 w-6" />}
          href="/docs/flexbox"
        />
        <CategoryCard
          title="Animations"
          description="Transitions, keyframes, and animation utilities"
          icon={<Zap className="h-6 w-6" />}
          href="/docs/animations"
        />
        <CategoryCard
          title="Variables"
          description="SASS variables and how to customize them"
          icon={<Code className="h-6 w-6" />}
          href="/docs/variables"
          className="md:col-span-2 lg:col-span-3"
        />
      </div>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
}

function CategoryCard({ title, description, icon, href, className = "" }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`block p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="rounded-full bg-primary/10 p-2 text-primary">{icon}</div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center text-primary font-medium">
        View documentation <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </Link>
  )
}
