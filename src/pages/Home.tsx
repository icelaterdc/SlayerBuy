import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { PremiumPlan } from '../types/discord';

interface HomeProps {
  plans: Array<{
    id: string;
    name: string;
    price: number;
    duration: string;
    description: string;
    icon: React.ComponentType<any>;
  }>;
}

const Home: React.FC<HomeProps> = ({ plans }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Slayer Bot Premium
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sunucunuzu premium özelliklerle güçlendirin ve topluluğunuza en iyi deneyimi yaşatın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const Icon = plan.icon;
          return (
            <div
              key={plan.id}
              className="bg-[#25262b] rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-800"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#5865F2] rounded-lg mb-4">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-white mb-4">
                {plan.price} ₺
                <span className="text-sm text-gray-400 ml-1">/ {plan.duration}</span>
              </div>
              <button
                onClick={() => navigate(`/checkout/${plan.id}`)}
                className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Satın Al
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Premium Avantajları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-[#25262b] rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Özel Özellikler</h3>
            <p className="text-gray-400">Premium kullanıcılara özel komutlar ve özellikler.</p>
          </div>
          <div className="p-6 bg-[#25262b] rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Öncelikli Destek</h3>
            <p className="text-gray-400">Premium kullanıcılara özel hızlı destek hizmeti.</p>
          </div>
          <div className="p-6 bg-[#25262b] rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Yüksek Performans</h3>
            <p className="text-gray-400">Premium sunucularda daha hızlı ve stabil çalışma.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;