"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const sections = [
    {
      title: "Getting Started",
      links: [{ href: "/docs/variables", label: "Variables" }],
    },
    {
      title: "Layout",
      links: [
        { href: "/docs/grid", label: "Grid System" },
        { href: "/docs/spacing", label: "Spacing" },
      ],
    },
    {
      title: "Content",
      links: [
        { href: "/docs/typography", label: "Typography" },
        { href: "/docs/colors", label: "Colors" },
      ],
    },
    {
      title: "Utilities",
      links: [
        { href: "/docs/flexbox", label: "Flexbox" },
        { href: "/docs/animations", label: "Animations" },
      ],
    },
  ]

  return (
    <div className={cn("space-y-6", className)}>
      {sections.map((section) => (
        <div key={section.title} className="space-y-2">
          <h4 className="font-medium text-sm">{section.title}</h4>
          <ul className="space-y-1">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block text-sm py-1 px-2 rounded-md hover:bg-accent",
                    pathname === link.href ? "bg-accent font-medium" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
