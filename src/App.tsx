import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shield, CreditCard, Server } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servers from './pages/Servers';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

const premiumPlans = [
  {
    id: 'monthly',
    name: '1 Aylık Premium',
    price: 30,
    duration: '1 ay',
    description: 'Temel premium özellikleri',
    icon: Shield
  },
  {
    id: 'quarterly',
    name: '3 Aylık Premium',
    price: 75,
    duration: '3 ay',
    description: 'Uzun dönem tasarruf',
    icon: CreditCard
  },
  {
    id: 'biannual',
    name: '6 Aylık Premium',
    price: 120,
    duration: '6 ay',
    description: 'Ekstra tasarruf',
    icon: Server
  },
  {
    id: 'annual',
    name: '1 Yıllık Premium',
    price: 200,
    duration: '1 yıl',
    description: 'En popüler seçenek',
    icon: Shield
  },
  {
    id: 'lifetime',
    name: 'Sınırsız Premium',
    price: 250,
    duration: 'Sınırsız',
    description: 'Tek seferlik ödeme',
    icon: CreditCard
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1b1e]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home plans={premiumPlans} />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/checkout/:planId" element={<Checkout plans={premiumPlans} />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;