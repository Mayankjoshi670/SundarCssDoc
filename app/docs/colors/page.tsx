import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Palette } from "lucide-react"

export default function ColorsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Colors</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            The color system includes a predefined set of colors that can be used for text, backgrounds, and more.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Palette className="h-4 w-4" />
            <span>
              Variable: <code className="bg-muted px-1 py-0.5 rounded">$colors</code>
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Color Variables</h2>
          <p className="text-muted-foreground mb-4">
            The library includes a set of predefined colors that can be customized.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded-md">
                <div>
                  <div className="h-16 bg-blue-600 rounded-md mb-2"></div>
                  <div className="text-sm">primary: #007bff</div>
                </div>
                <div>
                  <div className="h-16 bg-gray-600 rounded-md mb-2"></div>
                  <div className="text-sm">secondary: #6c757d</div>
                </div>
                <div>
                  <div className="h-16 bg-green-600 rounded-md mb-2"></div>
                  <div className="text-sm">success: #28a745</div>
                </div>
                <div>
                  <div className="h-16 bg-red-600 rounded-md mb-2"></div>
                  <div className="text-sm">danger: #dc3545</div>
                </div>
                <div>
                  <div className="h-16 bg-yellow-500 rounded-md mb-2"></div>
                  <div className="text-sm">warning: #ffc107</div>
                </div>
                <div>
                  <div className="h-16 bg-cyan-600 rounded-md mb-2"></div>
                  <div className="text-sm">info: #17a2b8</div>
                </div>
                <div>
                  <div className="h-16 bg-gray-100 rounded-md mb-2"></div>
                  <div className="text-sm">light: #f8f9fa</div>
                </div>
                <div>
                  <div className="h-16 bg-gray-800 rounded-md mb-2"></div>
                  <div className="text-sm">dark: #343a40</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`$colors: (
  'primary': #007bff,
  'secondary': #6c757d,
  'success': #28a745,
  'danger': #dc3545,
  'warning': #ffc107,
  'info': #17a2b8,
  'light': #f8f9fa,
  'dark': #343a40
);`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
          <p className="text-muted-foreground mb-4">Change the text color using the text-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-2">
                <p className="text-blue-600">.text-primary</p>
                <p className="text-gray-600">.text-secondary</p>
                <p className="text-green-600">.text-success</p>
                <p className="text-red-600">.text-danger</p>
                <p className="text-yellow-500">.text-warning</p>
                <p className="text-cyan-600">.text-info</p>
                <p className="text-gray-100 bg-gray-800 p-1">.text-light</p>
                <p className="text-gray-800">.text-dark</p>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`@each $color-name, $color-value in $colors {
  .text-#{$color-name} {
    color: $color-value !important;
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Background Colors</h2>
          <p className="text-muted-foreground mb-4">Change the background color using the bg-* classes.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-blue-600 text-white rounded">.bg-primary</div>
                <div className="p-4 bg-gray-600 text-white rounded">.bg-secondary</div>
                <div className="p-4 bg-green-600 text-white rounded">.bg-success</div>
                <div className="p-4 bg-red-600 text-white rounded">.bg-danger</div>
                <div className="p-4 bg-yellow-500 text-white rounded">.bg-warning</div>
                <div className="p-4 bg-cyan-600 text-white rounded">.bg-info</div>
                <div className="p-4 bg-gray-100 rounded">.bg-light</div>
                <div className="p-4 bg-gray-800 text-white rounded">.bg-dark</div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`@each $color-name, $color-value in $colors {
  .bg-#{$color-name} {
    background-color: $color-value !important;
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Dark Mode</h2>
          <p className="text-muted-foreground mb-4">
            The library includes a dark mode that can be toggled by adding the .dark class to the body element.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md bg-gray-800 text-gray-100">
                <div className="mb-4">.dark (Dark mode enabled)</div>
                <div className="p-4 bg-gray-700 rounded mb-2">.dark header, .dark footer</div>
                <div className="p-4 bg-gray-600 rounded">.dark .bg-light</div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.dark {
  background-color: map-get($colors, 'dark');
  color: map-get($colors, 'light');

  a {
    color: map-get($colors, 'light');
  }

  header,
  footer {
    background-color: lighten(map-get($colors, 'dark'), 5%);
    color: map-get($colors, 'light');
  }

  .bg-light {
    background-color: #555 !important;
  }

  .text-dark {
    color: #eee !important;
  }

  .toggle-btn {
    background-color: #444;
    color: #fff;
    border: 1px solid #666;
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}
