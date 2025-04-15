import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Grid, Columns } from "lucide-react"

export default function GridPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Grid System</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            The grid system uses a series of containers, rows, and columns to layout and align content. It's built with
            flexbox and is fully responsive.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Grid className="h-4 w-4" />
            <span>
              Variables: <code className="bg-muted px-1 py-0.5 rounded">$grid-columns: 12</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">$grid-gap: 1rem</code>
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Container</h2>
          <p className="text-muted-foreground mb-4">
            Containers are used to contain, pad, and center the content within them. The library provides two container
            classes.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md mb-4">
                <div className="bg-primary/10 p-4 text-center rounded">.container</div>
              </div>
              <div className="p-4 border rounded-md">
                <div className="bg-primary/10 p-4 text-center rounded">.container-fluid</div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: $grid-gap;
  padding-left: $grid-gap;

  @each $breakpoint, $width in $breakpoints {
    @media (min-width: $width) {
      max-width: $width;
    }
  }
}

.container-fluid {
  width: 100%;
  padding-right: $grid-gap;
  padding-left: $grid-gap;
  margin-right: auto;
  margin-left: auto;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Row and Columns</h2>
          <p className="text-muted-foreground mb-4">
            Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the
            space between them.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md mb-4">
                <div className="bg-muted p-4 rounded-md mb-4">
                  <div className="text-center">.row</div>
                </div>
                <div className="flex flex-wrap -mx-2">
                  {[1, 2, 3, 4].map((col) => (
                    <div key={col} className="w-1/4 px-2 mb-4">
                      <div className="bg-primary/10 p-4 text-center rounded">.col-3</div>
                    </div>
                  ))}
                  {[1, 2].map((col) => (
                    <div key={col} className="w-1/2 px-2 mb-4">
                      <div className="bg-primary/10 p-4 text-center rounded">.col-6</div>
                    </div>
                  ))}
                  <div className="w-full px-2">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-12</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.row {
  display: flex;
  flex-wrap: wrap;
  margin: -($grid-gap / 2);
}

@for $i from 1 through $grid-columns {
  .col-#{$i} {
    flex: 0 0 percentage($i / $grid-columns);
    max-width: percentage($i / $grid-columns);
    padding: $grid-gap / 2;
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Responsive Breakpoints</h2>
          <p className="text-muted-foreground mb-4">
            The grid includes five tiers of predefined classes for building complex responsive layouts.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Columns className="h-4 w-4" />
            <span>
              Breakpoints: <code className="bg-muted px-1 py-0.5 rounded">sm: 576px</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">md: 768px</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">lg: 992px</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded">xl: 1200px</code>
            </span>
          </div>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-12 .col-md-6 .col-lg-4</div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-12 .col-md-6 .col-lg-4</div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-12 .col-md-6 .col-lg-4</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`@each $breakpoint, $width in $breakpoints {
  @media (min-width: $width) {
    @for $i from 1 through $grid-columns {
      .col-#{$breakpoint}-#{$i} {
        flex: 0 0 percentage($i / $grid-columns);
        max-width: percentage($i / $grid-columns);
        padding: $grid-gap / 2;
      }
    }
  }
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Offset and Order</h2>
          <p className="text-muted-foreground mb-4">
            Move columns to the right using offset classes. These classes increase the left margin of a column by a
            specified number of columns. Change the visual order of columns with order classes.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md mb-4">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/3 ml-1/4 px-2 mb-4">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-4 .offset-3</div>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/3 px-2 mb-4 order-2">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-4 .order-2</div>
                  </div>
                  <div className="w-1/3 px-2 mb-4 order-1">
                    <div className="bg-primary/10 p-4 text-center rounded">.col-4 .order-1</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`@for $i from 1 through $grid-columns {
  .offset-#{$i} {
    margin-left: percentage($i / $grid-columns);
  }
  .order-#{$i} {
    order: $i;
  }
}

@each $breakpoint, $width in $breakpoints {
  @media (min-width: $width) {
    @for $i from 1 through $grid-columns {
      .offset-#{$breakpoint}-#{$i} {
        margin-left: percentage($i / $grid-columns);
      }
      .order-#{$breakpoint}-#{$i} {
        order: $i;
      }
    }
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
