import React from 'react';

const sessions = [
  {
    title: "Yoga du midi",
    description: "Relâchez les tensions en 30 minutes.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07c",
  },
  {
    title: "Méditation guidée",
    description: "Recharge mentale et focus en douceur.",
    image: "https://images.unsplash.com/photo-1556909218-31f5d3e8d3d5",
  },
  {
    title: "Boxe cardio express",
    description: "Un boost d'énergie rapide et efficace.",
    image: "https://images.unsplash.com/photo-1616627981265-e92f8e7d985d",
  },
  {
    title: "Pilates pour le dos",
    description: "Renforcez vos muscles profonds.",
    image: "https://images.unsplash.com/photo-1615392269967-2b6e9275c57e",
  },
  {
    title: "Renfo express",
    description: "Des circuits intenses et efficaces.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
];

const Demo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Nos sessions express
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={session.image}
                alt={session.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
                <p className="text-gray-600">{session.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demo;
