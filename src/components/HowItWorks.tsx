import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="h-8 w-8 text-indigo-600" />,
      title: "Localise ton bureau",
      description: "Entre ton adresse et découvre toutes les activités disponibles autour de toi"
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Choisis ton créneau",
      description: "Sélectionne l'activité et l'horaire qui te conviennent le mieux"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Rejoins la session",
      description: "Réserve en un clic et retrouve ton coach et les autres participants"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Comment ça marche ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;