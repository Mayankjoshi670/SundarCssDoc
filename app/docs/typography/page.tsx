import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Type, TextCursorInput } from "lucide-react"

export default function TypographyPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Typography</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            Typography utilities for controlling font size, weight, line height, and text alignment.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Type className="h-4 w-4" />
            <span>
              Base font:{" "}
              <code className="bg-muted px-1 py-0.5 rounded">
                $font-family-base: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
              </code>
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Font Sizes</h2>
          <p className="text-muted-foreground mb-4">Control the font size of an element using the text-* classes.</p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <TextCursorInput className="h-4 w-4" />
            <span>
              Variables: <code className="bg-muted px-1 py-0.5 rounded">$font-sizes</code>
            </span>
          </div>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <p className="text-xs">.text-xs (0.75rem)</p>
                <p className="text-sm">.text-sm (0.875rem)</p>
                <p className="text-base">.text-base (1rem)</p>
                <p className="text-lg">.text-lg (1.125rem)</p>
                <p className="text-xl">.text-xl (1.25rem)</p>
                <p className="text-2xl">.text-2xl (1.5rem)</p>
                <p className="text-3xl">.text-3xl (1.875rem)</p>
                <p className="text-4xl">.text-4xl (2.25rem)</p>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`$font-sizes: (
  'xs': 0.75rem,
  'sm': 0.875rem,
  'base': 1rem,
  'lg': 1.125rem,
  'xl': 1.25rem,
  '2xl': 1.5rem,
  '3xl': 1.875rem,
  '4xl': 2.25rem
);

@each $size, $value in $font-sizes {
  .text-#{$size} {
    font-size: $value !important;
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Font Weight</h2>
          <p className="text-muted-foreground mb-4">Control the font weight of an element using the font-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <p className="font-light">.font-light (300)</p>
                <p className="font-normal">.font-normal (400)</p>
                <p className="font-semibold">.font-semibold (600)</p>
                <p className="font-bold">.font-bold (700)</p>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.font-bold { font-weight: 700 !important; }
.font-semibold { font-weight: 600 !important; }
.font-normal { font-weight: 400 !important; }
.font-light { font-weight: 300 !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Line Height</h2>
          <p className="text-muted-foreground mb-4">Control the line height of an element using the lh-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <p className="lh-1 border-b pb-2">
                  .lh-1 (1)
                  <br />
                  This text has a line height of 1. Notice how the lines are very close together.
                </p>
                <p className="lh-sm border-b pb-2">
                  .lh-sm (1.25)
                  <br />
                  This text has a line height of 1.25. It provides a bit more spacing between lines.
                </p>
                <p className="lh-base border-b pb-2">
                  .lh-base (1.5)
                  <br />
                  This text has a line height of 1.5. This is typically the default line height for body text.
                </p>
                <p className="lh-lg">
                  .lh-lg (2)
                  <br />
                  This text has a line height of 2. Notice the generous spacing between lines.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.lh-1 { line-height: 1 !important; }
.lh-sm { line-height: 1.25 !important; }
.lh-base { line-height: 1.5 !important; }
.lh-lg { line-height: 2 !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Text Alignment</h2>
          <p className="text-muted-foreground mb-4">Control the text alignment using the text-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <p className="text-left">.text-left - This text is left aligned.</p>
                <p className="text-center">.text-center - This text is centered.</p>
                <p className="text-right">.text-right - This text is right aligned.</p>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.text-center { text-align: center !important; }
.text-left { text-align: left !important; }
.text-right { text-align: right !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Text Transform</h2>
          <p className="text-muted-foreground mb-4">
            Control the text casing of an element using the text transform classes.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <p className="uppercase">.uppercase - this text is uppercase</p>
                <p className="lowercase">.lowercase - THIS TEXT IS LOWERCASE</p>
                <p className="capitalize">.capitalize - this text is capitalized</p>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.uppercase { text-transform: uppercase !important; }
.lowercase { text-transform: lowercase !important; }
.capitalize { text-transform: capitalize !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}
