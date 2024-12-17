import { Button } from "@/components/ui/button"



export function Header({ showBackButton, onBack }) {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
          >
            ← Back
          </Button>
        )}
        <h1 className="text-2xl font-semibold">Messages</h1>
      </div>
      <Button className="bg-teal-600 hover:bg-teal-700">+ Add Contact</Button>
    </header>
  )
}

