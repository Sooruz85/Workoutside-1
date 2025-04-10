import React from 'react';
import { Target, Calendar, CreditCard } from 'lucide-react';

const ForCoaches = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Augmentez votre visibilité",
      description: "Touchez une nouvelle clientèle de professionnels actifs"
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Gérez vos créneaux",
      description: "Proposez des sessions adaptées aux horaires de bureau"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
      title: "Paiement sécurisé",
      description: "Recevez vos paiements automatiquement après chaque séance"
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pour les coachs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Devenir coach partenaire
          </button>
        </div>
      </div>
    </section>
  );
}

export default ForCoaches;