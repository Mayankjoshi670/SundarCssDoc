import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <Sidebar className="md:w-64 shrink-0" />
      <div className="flex-1">{children}</div>
    </div>
  )
}
