import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Box } from "lucide-react"

export default function SpacingPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Spacing</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            The spacing utilities are used to control margin, padding, and gap between elements.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Box className="h-4 w-4" />
            <span>
              Base variable: <code className="bg-muted px-1 py-0.5 rounded">$spacer: 1rem</code>
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Spacing Scale</h2>
          <p className="text-muted-foreground mb-4">
            The spacing scale is based on a base spacer value and provides a consistent set of spacing values.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-primary/10"></div>
                  <div className="ml-2">0: 0</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-primary/20"></div>
                  <div className="ml-2">1: 0.25rem (4px)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-primary/30"></div>
                  <div className="ml-2">2: 0.5rem (8px)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-primary/40"></div>
                  <div className="ml-2">3: 1rem (16px)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-primary/60"></div>
                  <div className="ml-2">4: 1.5rem (24px)</div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-primary/80"></div>
                  <div className="ml-2">5: 3rem (48px)</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3
);`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Margin</h2>
          <p className="text-muted-foreground mb-4">Control the margin of an element using the m-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.m-3 (margin on all sides)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.mt-3 (margin top)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.mr-3 (margin right)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.mb-3 (margin bottom)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.ml-3 (margin left)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.mx-3 (margin left and right)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center">.my-3 (margin top and bottom)</div>
                </div>
                <div className="bg-muted p-4 rounded-md">
                  <div className="bg-primary/20 p-2 text-center mx-auto w-1/2">.mx-auto (center horizontally)</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`$sides: ('t': 'top', 'r': 'right', 'b': 'bottom', 'l': 'left');
$properties: ('m': 'margin', 'p': 'padding');

@each $prop-short, $prop in $properties {
  @each $space-key, $space-value in $spacers {
    .#{$prop-short}-#{$space-key} {
      #{$prop}: $space-value !important;
    }
    
    @each $side-short, $side in $sides {
      .#{$prop-short}#{$side-short}-#{$space-key} {
        #{$prop}-#{$side}: $space-value !important;
      }
    }
  }
}

$axes: ('x': ('left', 'right'), 'y': ('top', 'bottom'));

@each $prop-short, $prop in $properties {
  @each $space-key, $space-value in $spacers {
    @each $axis, $dirs in $axes {
      .#{$prop-short}#{$axis}-#{$space-key} {
        @each $dir in $dirs {
          #{$prop}-#{$dir}: $space-value !important;
        }
      }
    }
  }
}

.mx-auto { margin-left: auto !important; margin-right: auto !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Padding</h2>
          <p className="text-muted-foreground mb-4">Control the padding of an element using the p-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 p-3 text-center">.p-3 (padding on all sides)</div>
                </div>
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 pt-3 text-center">.pt-3 (padding top)</div>
                </div>
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 pr-3 text-center">.pr-3 (padding right)</div>
                </div>
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 pb-3 text-center">.pb-3 (padding bottom)</div>
                </div>
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 pl-3 text-center">.pl-3 (padding left)</div>
                </div>
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 px-3 text-center">.px-3 (padding left and right)</div>
                </div>
                <div className="bg-muted rounded-md">
                  <div className="bg-primary/20 py-3 text-center">.py-3 (padding top and bottom)</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`// Uses the same SASS code as margin, with 'p' prefix instead of 'm'`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gap</h2>
          <p className="text-muted-foreground mb-4">
            Control the gap between flex and grid items using the gap-* classes.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.gap-1 (0.25rem)</div>
                  <div className="flex gap-1 bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.gap-2 (0.5rem)</div>
                  <div className="flex gap-2 bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.gap-3 (1rem)</div>
                  <div className="flex gap-3 bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.gap-4 (1.5rem)</div>
                  <div className="flex gap-4 bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.gap-1 { gap: $spacer * 0.25 !important; }
.gap-2 { gap: $spacer * 0.5 !important; }
.gap-3 { gap: $spacer !important; }
.gap-4 { gap: $spacer * 1.5 !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}
