import React from 'react';
import { Building2, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';


const ForCompanies = () => {
  const benefits = [
    {
      icon: <Building2 className="h-8 w-8 text-indigo-600" />,
      title: "Améliore le bien-être",
      description: "Offrez à vos équipes des activités sportives et bien-être adaptées à leur emploi du temps"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Renforce la cohésion",
      description: "Créez des moments de partage et de team building autour du sport"
    },
    {
      icon: <BarChart className="h-8 w-8 text-indigo-600" />,
      title: "Suivez l'engagement",
      description: "Accédez à des statistiques détaillées sur la participation et la satisfaction"
    }
  ];

  return (
    <section id="companies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pour les entreprises
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
        <div className="mt-12 text-center">
  <Link
    to="/demo"
    className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
  >
    Demander une démo
  </Link>
</div>

        </div>
      </div>
    </section>
  );
}

export default ForCompanies;