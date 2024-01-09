import { Button } from "components/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>

      <div className="flex-center gap-6">
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </div>

      <div className="flex-center gap-6">
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="md">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
      </div>

      <div className="flex-center gap-6">
        <Button variant="ghost" size="sm">
          Button
        </Button>
        <Button variant="ghost" size="md">
          Button
        </Button>
        <Button variant="ghost" size="lg">
          Button
        </Button>
      </div>
    </main>
  )
}
