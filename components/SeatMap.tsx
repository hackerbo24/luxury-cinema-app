"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ROWS = ["A", "B", "C", "D", "E"];
const SEATS_PER_ROW = 8;

export default function SeatMap() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const toggleSeat = (id: string) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col items-center p-8 bg-[#0A0A0A] text-white">
      <h2 className="text-2xl font-bold mb-8 text-[#D4AF37]">Select Your Seats</h2>
      
      <div className="w-full max-w-md h-2 bg-[#D4AF37]/20 rounded-t-full mb-12 shadow-[0_-5px_15px_rgba(212,175,55,0.3)]">
        <p className="text-center text-xs text-[#D4AF37] mt-3">SCREEN THIS WAY</p>
      </div>

      <div className="grid gap-3">
        {ROWS.map((row) => (
          <div key={row} className="flex gap-2">
            {[...Array(SEATS_PER_ROW)].map((_, i) => {
              const seatId = `${row}${i + 1}`;
              const isSelected = selectedSeats.includes(seatId);
              
              return (
                <motion.button
                  key={seatId}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => toggleSeat(seatId)}
                  className={`w-8 h-8 rounded-t-lg transition-all duration-300 ${
                    isSelected 
                      ? "bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" 
                      : "bg-[#1A1A1A] border border-[#333] hover:border-[#D4AF37]"
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {selectedSeats.length > 0 && (
        <motion.div 
          initial={{ y: 50 }} 
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 p-6 bg-[#1A1A1A] border-t border-[#333] flex justify-between items-center px-10"
        >
          <div>
            <p className="text-gray-400 text-sm">Seats: {selectedSeats.join(", ")}</p>
            <p className="text-xl font-bold">Total: ₱{selectedSeats.length * 450}</p>
          </div>
          <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
            Proceed to Food & Drinks
          </button>
        </motion.div>
      )}
    </div>
  );
}