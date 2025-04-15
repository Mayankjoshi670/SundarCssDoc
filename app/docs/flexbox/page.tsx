import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"

export default function FlexboxPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Flexbox</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            Flexbox utilities for controlling how flex items are positioned, sized, and spaced.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Display Flex</h2>
          <p className="text-muted-foreground mb-4">Use the .d-flex class to create a flexbox container.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md">
                <div className="d-flex bg-muted p-2 rounded-md">
                  <div className="bg-primary/20 p-2 rounded">Flex item 1</div>
                  <div className="bg-primary/20 p-2 rounded">Flex item 2</div>
                  <div className="bg-primary/20 p-2 rounded">Flex item 3</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.d-flex { display: flex !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Flex Direction</h2>
          <p className="text-muted-foreground mb-4">
            Control the direction of flex items with .flex-row and .flex-column classes.
          </p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.flex-row</div>
                  <div className="d-flex flex-row bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item 1</div>
                    <div className="bg-primary/20 p-2 rounded">Item 2</div>
                    <div className="bg-primary/20 p-2 rounded">Item 3</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.flex-column</div>
                  <div className="d-flex flex-column bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded mb-2">Item 1</div>
                    <div className="bg-primary/20 p-2 rounded mb-2">Item 2</div>
                    <div className="bg-primary/20 p-2 rounded">Item 3</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.flex-row { flex-direction: row !important; }
.flex-column { flex-direction: column !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Justify Content</h2>
          <p className="text-muted-foreground mb-4">Control how flex items are positioned along the main axis.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.justify-content-start</div>
                  <div className="d-flex justify-content-start bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.justify-content-center</div>
                  <div className="d-flex justify-content-center bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.justify-content-end</div>
                  <div className="d-flex justify-content-end bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.justify-content-between</div>
                  <div className="d-flex justify-content-between bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.justify-content-start { justify-content: flex-start !important; }
.justify-content-center { justify-content: center !important; }
.justify-content-end { justify-content: flex-end !important; }
.justify-content-between { justify-content: space-between !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Align Items</h2>
          <p className="text-muted-foreground mb-4">Control how flex items are positioned along the cross axis.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.align-items-start</div>
                  <div className="d-flex align-items-start bg-muted p-2 rounded-md" style={{ height: "100px" }}>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.align-items-center</div>
                  <div className="d-flex align-items-center bg-muted p-2 rounded-md" style={{ height: "100px" }}>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.align-items-end</div>
                  <div className="d-flex align-items-end bg-muted p-2 rounded-md" style={{ height: "100px" }}>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                    <div className="bg-primary/20 p-2 rounded">Item</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.align-items-start { align-items: flex-start !important; }
.align-items-center { align-items: center !important; }
.align-items-end { align-items: flex-end !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Flex Wrap</h2>
          <p className="text-muted-foreground mb-4">Control whether flex items wrap onto multiple lines.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.flex-wrap</div>
                  <div className="d-flex flex-wrap bg-muted p-2 rounded-md" style={{ width: "250px" }}>
                    <div className="bg-primary/20 p-2 m-1 rounded">Item 1</div>
                    <div className="bg-primary/20 p-2 m-1 rounded">Item 2</div>
                    <div className="bg-primary/20 p-2 m-1 rounded">Item 3</div>
                    <div className="bg-primary/20 p-2 m-1 rounded">Item 4</div>
                    <div className="bg-primary/20 p-2 m-1 rounded">Item 5</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.flex-nowrap</div>
                  <div className="d-flex flex-nowrap bg-muted p-2 rounded-md overflow-auto" style={{ width: "250px" }}>
                    <div className="bg-primary/20 p-2 m-1 rounded whitespace-nowrap">Item 1</div>
                    <div className="bg-primary/20 p-2 m-1 rounded whitespace-nowrap">Item 2</div>
                    <div className="bg-primary/20 p-2 m-1 rounded whitespace-nowrap">Item 3</div>
                    <div className="bg-primary/20 p-2 m-1 rounded whitespace-nowrap">Item 4</div>
                    <div className="bg-primary/20 p-2 m-1 rounded whitespace-nowrap">Item 5</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.flex-wrap { flex-wrap: wrap !important; }
.flex-nowrap { flex-wrap: nowrap !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Flex Grow and Shrink</h2>
          <p className="text-muted-foreground mb-4">Control how flex items grow and shrink.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.flex-grow-1</div>
                  <div className="d-flex bg-muted p-2 rounded-md">
                    <div className="bg-primary/20 p-2 rounded">Fixed width</div>
                    <div className="bg-primary/20 p-2 rounded flex-grow-1 text-center">
                      Grows to fill available space
                    </div>
                    <div className="bg-primary/20 p-2 rounded">Fixed width</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">.flex-shrink-0</div>
                  <div className="d-flex bg-muted p-2 rounded-md overflow-auto" style={{ width: "300px" }}>
                    <div className="bg-primary/20 p-2 rounded flex-shrink-0" style={{ width: "200px" }}>
                      Won't shrink
                    </div>
                    <div className="bg-primary/20 p-2 rounded">Can shrink</div>
                    <div className="bg-primary/20 p-2 rounded">Can shrink</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.flex-grow-1 { flex-grow: 1 !important; }
.flex-shrink-0 { flex-shrink: 0 !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  )
}
