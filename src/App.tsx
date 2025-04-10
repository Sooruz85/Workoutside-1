// App.tsx
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <div className="p-4">
      <header className="flex justify-end">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Connexion
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>

      <main className="mt-8 text-center">
        <h1 className="text-xl font-semibold">
          Bienvenue dans l'app Workoutfit 🚀
        </h1>
      </main>
    </div>
  )
}

export default App
