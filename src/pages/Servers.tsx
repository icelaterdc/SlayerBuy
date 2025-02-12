import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserGuilds, checkPremiumStatus } from '../lib/api';
import type { DiscordGuild } from '../types/discord';
import { Shield } from 'lucide-react';

const Servers: React.FC = () => {
  const [guilds, setGuilds] = useState<DiscordGuild[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGuilds = async () => {
      try {
        const userGuilds = await getUserGuilds();
        const guildsWithPremium = await Promise.all(
          userGuilds.map(async (guild) => ({
            ...guild,
            hasPremium: await checkPremiumStatus(guild.id)
          }))
        );
        setGuilds(guildsWithPremium);
      } catch (err) {
        setError('Sunucular yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    fetchGuilds();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#5865F2]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <p className="text-red-500 text-center mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md"
        >
          Tekrar Dene
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Sunucularınız</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guilds.map((guild) => (
          <div
            key={guild.id}
            className="bg-[#25262b] rounded-lg p-6 border border-gray-800"
          >
            <div className="flex items-center space-x-4">
              {guild.icon ? (
                <img
                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                  alt={guild.name}
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#5865F2] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {guild.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">{guild.name}</h3>
                {guild.hasPremium ? (
                  <div className="flex items-center text-[#5865F2] mt-1">
                    <Shield className="w-4 h-4 mr-1" />
                    <span className="text-sm">Premium Aktif</span>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm mt-1">Premium Yok</p>
                )}
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              disabled={guild.hasPremium}
              className={`w-full mt-4 px-4 py-2 rounded-md text-white font-medium ${
                guild.hasPremium
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-[#5865F2] hover:bg-[#4752C4]'
              }`}
            >
              {guild.hasPremium ? 'Premium Aktif' : 'Premium Satın Al'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servers;