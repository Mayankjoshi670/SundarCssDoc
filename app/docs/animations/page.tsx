import { Tabs, TabsContent, TabsItem, TabsList } from "@/components/ui/tabs"
import { Zap } from "lucide-react"

export default function AnimationsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Animations</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            The animation utilities provide a set of transitions and animations to add motion to your UI elements.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Zap className="h-4 w-4" />
            <span>
              Base variable: <code className="bg-muted px-1 py-0.5 rounded">$transition-speed: 0.3s</code>
            </span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transitions</h2>
          <p className="text-muted-foreground mb-4">Add smooth transitions to elements when their properties change.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.transition (0.3s)</div>
                  <button className="bg-primary/10 p-2 rounded transition hover:bg-primary/30">Hover me</button>
                </div>
                <div>
                  <div className="text-sm mb-2">.transition-fast (0.15s)</div>
                  <button className="bg-primary/10 p-2 rounded transition-fast hover:bg-primary/30">Hover me</button>
                </div>
                <div>
                  <div className="text-sm mb-2">.transition-slow (0.5s)</div>
                  <button className="bg-primary/10 p-2 rounded transition-slow hover:bg-primary/30">Hover me</button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`$transition-speed: 0.3s;

.transition {
  transition: all $transition-speed ease-in-out !important;
}

.transition-fast {
  transition: all 0.15s ease-in-out !important;
}

.transition-slow {
  transition: all 0.5s ease-in-out !important;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Animations</h2>
          <p className="text-muted-foreground mb-4">Add predefined animations to elements.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.animate-fade-in</div>
                  <div className="bg-primary/10 p-4 rounded animate-fade-in">Fades in</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.animate-slide-up</div>
                  <div className="bg-primary/10 p-4 rounded animate-slide-up">Slides up</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.animate-slide-down</div>
                  <div className="bg-primary/10 p-4 rounded animate-slide-down">Slides down</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-down {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-in-out forwards !important;
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out forwards !important;
}

.animate-slide-down {
  animation: slide-down 0.5s ease-out forwards !important;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced Animations</h2>
          <p className="text-muted-foreground mb-4">More complex animations for creating engaging UI effects.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.animate-bounce</div>
                  <div className="bg-primary/10 p-4 rounded inline-block animate-bounce">Bounces</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.animate-pulse</div>
                  <div className="bg-primary/10 p-4 rounded inline-block animate-pulse">Pulses</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.animate-flip</div>
                  <div className="bg-primary/10 p-4 rounded inline-block animate-flip">Flips</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.animate-slide-fade-left</div>
                  <div className="bg-primary/10 p-4 rounded inline-block animate-slide-fade-left">Slides from left</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.animate-slide-fade-right</div>
                  <div className="bg-primary/10 p-4 rounded inline-block animate-slide-fade-right">
                    Slides from right
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: ease-in-out;
  }
  50% {
    transform: translateY(-25px);
    animation-timing-function: ease-in-out;
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes flip {
  from {
    transform: rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

.animate-flip {
  animation: flip 0.8s ease-out forwards;
  transform-style: preserve-3d;
}

@keyframes slide-fade-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-fade-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-fade-left {
  animation: slide-fade-left 0.6s ease-out forwards;
}

.animate-slide-fade-right {
  animation: slide-fade-right 0.6s ease-out forwards;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Animation Modifiers</h2>
          <p className="text-muted-foreground mb-4">Control animation duration, delay, and fill mode.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">Duration: .duration-300, .duration-500, .duration-1000</div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded animate-fade-in duration-300">0.3s</div>
                    <div className="bg-primary/10 p-2 rounded animate-fade-in duration-500">0.5s</div>
                    <div className="bg-primary/10 p-2 rounded animate-fade-in duration-1000">1s</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">Delay: .delay-100, .delay-500</div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-2 rounded animate-fade-in delay-100">0.1s delay</div>
                    <div className="bg-primary/10 p-2 rounded animate-fade-in delay-500">0.5s delay</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-2">Fill mode: .fill-forwards</div>
                  <div className="bg-primary/10 p-2 rounded animate-fade-in fill-forwards">
                    Stays visible after animation
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`// Animation durations
.duration-300 { animation-duration: 0.3s !important; }
.duration-500 { animation-duration: 0.5s !important; }
.duration-1000 { animation-duration: 1s !important; }

// Animation delays
.delay-100 { animation-delay: 0.1s !important; }
.delay-500 { animation-delay: 0.5s !important; }

// Animation fill modes
.fill-forwards { animation-fill-mode: forwards !important; }`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Hover Animations</h2>
          <p className="text-muted-foreground mb-4">Animations that trigger on hover.</p>

          <Tabs defaultValue="example">
            <TabsList>
              <TabsItem value="example">Example</TabsItem>
              <TabsItem value="code">Code</TabsItem>
            </TabsList>
            <TabsContent value="example">
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <div className="text-sm mb-2">.hover-zoom</div>
                  <div className="bg-primary/10 p-4 rounded inline-block hover-zoom">Hover to zoom</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.hover-shadow</div>
                  <div className="bg-primary/10 p-4 rounded inline-block hover-shadow">Hover for shadow</div>
                </div>
                <div>
                  <div className="text-sm mb-2">.hover-animate-bounce</div>
                  <div className="bg-primary/10 p-4 rounded inline-block hover-animate-bounce">Hover to bounce</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="code">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                <code>{`.hover-zoom {
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}

.hover-shadow {
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
}

.hover-animate-bounce {
  transition: transform 0.3s ease-in-out;
  &:hover {
    animation: bounce 1s infinite;
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
