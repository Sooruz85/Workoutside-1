import React from 'react';

const activities = [
  {
    title: 'Yoga du midi',
    image: 'https://images.unsplash.com/photo-1594737625785-cf7d3a7a38a4?auto=format&fit=crop&w=500&q=60',
    description: 'Relâchez les tensions en 30 minutes.',
    style: 'top-[10%] left-[5%] w-48'
  },
  {
    title: 'Boxe cardio express',
    image: 'https://images.unsplash.com/photo-1611926653458-096d2a5ccf46?auto=format&fit=crop&w=500&q=60',
    description: "Un boost d'énergie rapide et efficace.",
    style: 'top-[20%] right-[10%] w-40'
  },
  {
    title: 'Pilates pour le dos',
    image: 'https://images.unsplash.com/photo-1615361201650-379d26fa0572?auto=format&fit=crop&w=500&q=60',
    description: 'Renforcez vos muscles profonds.',
    style: 'bottom-[15%] left-[20%] w-44'
  },
  {
    title: 'Renfo express',
    image: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=500&q=60',
    description: 'Des circuits intenses et efficaces.',
    style: 'bottom-[25%] right-[15%] w-48'
  },
  {
    title: 'Méditation guidée',
    image: 'https://images.unsplash.com/photo-1587019151574-2f203c80b6fd?auto=format&fit=crop&w=500&q=60',
    description: 'Recharge mentale et focus en douceur.',
    style: 'top-[50%] left-[40%] w-36'
  },
];

const DemoPage = () => {
  return (
    <div className="relative bg-[#f9f7f2] min-h-screen overflow-hidden px-6 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-6 leading-tight">
        Demandez votre <span className="italic">démo</span> personnalisée
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Découvrez notre sélection d'activités pour améliorer le bien-être au travail.
      </p>

      <div className="relative h-[80vh]">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`absolute ${activity.style} text-center`}
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="rounded-lg shadow-lg mb-2"
            />
            <p className="text-sm text-gray-700 font-semibold">{activity.title}</p>
            <p className="text-xs text-gray-500">{activity.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Intéressé ?</h2>
        <p className="text-gray-600 mb-6">Remplissez le formulaire et un coach vous recontacte sous 24h.</p>
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition">
          Demander une démo
        </button>
      </div>
    </div>
  );
};

export default DemoPage;
