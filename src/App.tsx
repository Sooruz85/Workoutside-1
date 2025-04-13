import React from 'react';
import { MapPin, Calendar, Users, Star, ArrowRight, Dumbbell } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForCompanies from './components/ForCompanies';
import ForCoaches from './components/ForCoaches';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import DemoPage from './pages/DemoPage';


function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête supprimé car géré par la Navbar */}
      <Navbar />

      <main>
        <Hero />
        <HowItWorks />
        <ForCompanies />
        <ForCoaches />
        <Testimonials />
        <CallToAction />
      </main>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© 2024 WorkOutSide. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
