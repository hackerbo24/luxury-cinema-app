"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ROWS = ["A", "B", "C", "D", "E"];
const SEATS_PER_ROW = 8;

export default function SeatMap() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  // This ensures the component only renders after it is mounted in the browser,
  // preventing hydration errors that break interactivity.
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSeat = (id: string) => {
    setSelectedSeats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length > 0) {
      // You can replace this with your actual navigation path
      window.location.href = "/concessions";
    }
  };

  if (!isClient) return null;

  return (
    <div className="flex flex-col items-center p-8 bg-[#0A0A0A] text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-[#D4AF37]">Select Your Seats</h2>
      
      {/* Screen Indicator */}
      <div className="w-full max-w-md h-2 bg-[#D4AF37]/20 rounded-t-full mb-12 shadow-[0_-5px_15px_rgba(212,175,55,0.3)]">
        <p className="text-center text-xs text-[#D4AF37] mt-3">SCREEN THIS WAY</p>
      </div>

      {/* Seat Grid */}
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

      {/* Booking Summary Bar */}
      {selectedSeats.length > 0 && (
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 p-6 bg-[#1A1A1A] border-t border-[#333] flex justify-between items-center px-10 z-50"
        >
          <div>
            <p className="text-gray-400 text-sm">Seats: {selectedSeats.join(", ")}</p>
            <p className="text-xl font-bold">Total: ₱{selectedSeats.length * 450}</p>
          </div>
          <button 
            onClick={handleProceed}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition cursor-pointer"
          >
            Proceed to Food & Drinks
          </button>
        </motion.div>
      )}
    </div>
  );
}