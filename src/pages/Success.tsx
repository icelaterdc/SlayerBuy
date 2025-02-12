import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#25262b] rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">
          Ödeme Başarılı!
        </h1>
        <p className="text-gray-400 mb-6">
          Premium özellikleriniz aktif edildi. Sunucunuzda premium özellikleri kullanmaya başlayabilirsiniz.
        </p>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default Success;