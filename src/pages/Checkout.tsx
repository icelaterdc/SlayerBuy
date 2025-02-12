import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { PremiumPlan } from '../types/discord';

interface CheckoutProps {
  plans: Array<{
    id: string;
    name: string;
    price: number;
    duration: string;
    description: string;
    icon: React.ComponentType<any>;
  }>;
}

const Checkout: React.FC<CheckoutProps> = ({ plans }) => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const selectedPlan = plans.find(plan => plan.id === planId);

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Plan Bulunamadı</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-[#25262b] rounded-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-6">Ödeme Detayları</h1>
        
        <div className="mb-8 p-4 bg-[#2c2d32] rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Seçilen Plan</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-300">{selectedPlan.name}</p>
              <p className="text-sm text-gray-400">{selectedPlan.description}</p>
            </div>
            <div className="text-xl font-bold text-white">
              {selectedPlan.price} ₺
              <span className="text-sm text-gray-400 ml-1">/ {selectedPlan.duration}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-white">Özet</h2>
          <div className="flex justify-between text-gray-300">
            <span>Plan Ücreti</span>
            <span>{selectedPlan.price} ₺</span>
          </div>
          <div className="border-t border-gray-700 pt-4 flex justify-between text-white font-bold">
            <span>Toplam</span>
            <span>{selectedPlan.price} ₺</span>
          </div>
        </div>

        <button
          onClick={() => {
            // PayTR entegrasyonu eklenecek
            navigate('/success');
          }}
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
        >
          Ödemeyi Tamamla
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
          Ödemeyi tamamlayarak kullanım koşullarını kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  );
};

export default Checkout;