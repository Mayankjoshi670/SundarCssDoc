import { Variable } from "lucide-react"

export default function VariablesPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Sundarcss Variables</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-muted-foreground mb-4">
            Our  library Sundarcss  uses SASS variables to maintain consistency across the codebase and make customization easier.
            These variables control everything from colors and spacing to grid settings and many more .
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Variable className="h-4 w-4" />
            <span>These variables are defined at the top of the SASS file and can be customized.</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Grid Variables</h2>
          <p className="text-muted-foreground mb-4"> These Variables  Control the grid system.</p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`$grid-columns: 12;
$grid-gap: 1rem;
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px
);`}</code>
          </pre>

          <div className="mt-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$grid-columns</code>: Number of columns in the grid
                system (default: 12)
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$grid-gap</code>: Spacing between grid columns (default:
                1rem)
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$breakpoints</code>:  Breakpoint define the neames of their pixel values 
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Color Variables</h2>
          <p className="text-muted-foreground mb-4">These define the color-</p>

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

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              The <code className="bg-muted px-1 py-0.5 rounded">$colors</code> This  contains key-value pairs of color
              names and their hex values. These colors are used throughout the library for text, backgrounds, and other
              UI elements (easy to use and simple naming convention).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Spacing Variables</h2>
          <p className="text-muted-foreground mb-4"> control spacing throughout the UI.</p>

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

          <div className="mt-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$spacer</code>: Base spacing unit (default: 1rem)
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$spacers</code>: Spacing scale values used for
                margin, padding, and gap utilities
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Typography Variables</h2>
          <p className="text-muted-foreground mb-4">
            Variables that control font family, sizes, and other typography settings.
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`$font-family-base: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
$font-sizes: (
  'xs': 0.75rem,
  'sm': 0.875rem,
  'base': 1rem,
  'lg': 1.125rem,
  'xl': 1.25rem,
  '2xl': 1.5rem,
  '3xl': 1.875rem,
  '4xl': 2.25rem
);`}</code>
          </pre>

          <div className="mt-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$font-family-base</code>: Default font stack
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$font-sizes</code>: Map of font size names to their rem
                values
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Animation Variables</h2>
          <p className="text-muted-foreground mb-4">Variables that control transitions and animations.</p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{`$transition-speed: 0.3s;`}</code>
          </pre>

          <div className="mt-4 text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">$transition-speed</code>: Default transition duration
                (default: 0.3s)
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Customizing Variables</h2>
          <p className="text-muted-foreground mb-4">
            To customize the library, you can override these variables before importing the library.
          </p>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
            <code>{` 
$grid-columns: 24;  
$spacer: 0.8rem; 
$colors: (
  'primary': #6200ee,  
  'secondary': #03dac6,
  'success': #28a745,
  'danger': #dc3545,
  'warning': #ffc107,
  'info': #17a2b8,
  'light': #f8f9fa,
  'dark': #121212
);
 `}</code>
          </pre>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              By overriding variables before importing the library, you can customize the entire UI to match your brand
              or design system.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
