"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Popcorn, Coffee, Utensils } from "lucide-react";

const MENU_ITEMS = [
  { id: 'popcorn', name: "Signature Caramel Popcorn", price: 180, icon: <Popcorn /> },
  { id: 'drink', name: "Large Iced Soda", price: 120, icon: <Coffee /> },
  { id: 'combo', name: "Premium Cinema Combo", price: 350, icon: <Utensils />, badge: "Best Value" },
];

export default function ConcessionsPage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateCart = (id: string, delta: number) => {
    setCart(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) }));
  };

  const calculateTotal = () => {
    return MENU_ITEMS.reduce((sum, item) => sum + (cart[item.id] || 0) * item.price, 0);
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-[#D4AF37]">Enhance Your Experience</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {MENU_ITEMS.map((item) => (
          <motion.div 
            key={item.id} 
            className="p-6 bg-[#1A1A1A] border border-[#333] rounded-2xl flex justify-between items-center relative overflow-hidden"
          >
            {item.badge && (
              <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                {item.badge}
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className="text-[#D4AF37]">{item.icon}</div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-400">₱{item.price}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button onClick={() => updateCart(item.id, -1)} className="p-2 bg-[#333] rounded-full"><Minus size={16}/></button>
              <span className="w-8 text-center">{cart[item.id] || 0}</span>
              <button onClick={() => updateCart(item.id, 1)} className="p-2 bg-[#D4AF37] text-black rounded-full"><Plus size={16}/></button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sticky Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#1A1A1A] border-t border-[#333] flex justify-between items-center px-10">
        <p className="text-xl font-bold">Food Total: ₱{calculateTotal()}</p>
        <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
          Confirm & Pay
        </button>
      </div>
    </main>
  );
}