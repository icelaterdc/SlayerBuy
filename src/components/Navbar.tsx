import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDiscordLogin = () => {
    const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_DISCORD_REDIRECT_URI;
    const scope = 'identify guilds';
    
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
  };

  return (
    <nav className="bg-[#1a1b1e] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/slayer.png" alt="Slayer Bot" className="h-8 w-8 mr-2" />
              <span className="text-white text-xl font-bold">Slayer Buy</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Ana Sayfa
              </Link>
              <button
                onClick={handleDiscordLogin}
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
              >
                <Bot className="mr-2 h-4 w-4" />
                Discord ile Giriş Yap
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Ana Sayfa
            </Link>
            <button
              onClick={handleDiscordLogin}
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white w-full px-3 py-2 rounded-md text-base font-medium flex items-center justify-center"
            >
              <Bot className="mr-2 h-4 w-4" />
              Discord ile Giriş Yap
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
