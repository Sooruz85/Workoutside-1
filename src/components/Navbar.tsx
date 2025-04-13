import React from 'react';
import { Dumbbell } from 'lucide-react';
import { SignInButton, SignUpButton, SignedOut, SignedIn, UserButton } from '@clerk/clerk-react';



const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">WorkOutSide</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">Comment ça marche</a>
            <a href="#companies" className="text-gray-600 hover:text-gray-900">Entreprises</a>
            <a href="#coaches" className="text-gray-600 hover:text-gray-900">Coachs</a>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700">Connexion</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Inscription
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
