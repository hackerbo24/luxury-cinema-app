"use client"; // Required for Framer Motion animations in Next.js

import { motion } from "framer-motion";
import { Play, Ticket, Star, ChevronRight } from "lucide-react";

// Mock data for our "Now Showing" section
const MOVIES = [
  { id: 1, title: "Dune: Part Three", rating: "PG-13", genre: "Sci-Fi / Action", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Oppenheimer: Extended", rating: "R", genre: "Drama / History", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Interstellar (IMAX Re-release)", rating: "PG-13", genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "The Dark Knight", rating: "PG-13", genre: "Action", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=800&auto=format&fit=crop" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Overlay & Simulated Trailer Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Cinema Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Experience Cinema in <span className="text-[#D4AF37]">Ultimate Luxury</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book VIP seating, pre-order gourmet concessions, and skip the lines. The future of moviegoing is here.
            </p>
            
            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105">
                <Ticket className="w-5 h-5" />
                Book Tickets Now
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all">
                <Play className="w-5 h-5" />
                View Showtimes
              </button>
            </div>
          </motion.div>

          {/* Social Proof / Urgency metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              324 people booking right now
            </div>
          </motion.div>
        </div>
      </section>

      {/* NOW SHOWING SECTION */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              Now Showing <span className="text-[#D4AF37]"><Star className="w-6 h-6 fill-current" /></span>
            </h2>
            <p className="text-gray-400">Reserve your favorite seats before they're gone.</p>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-[#D4AF37] hover:underline">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOVIES.map((movie, i) => (
            <motion.div 
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-xl mb-4">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Book Button on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full text-sm">
                    Get Tickets
                  </button>
                </div>
              </div>
              <h3 className="font-semibold text-lg">{movie.title}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
                <span className="px-2 py-0.5 border border-gray-600 rounded text-xs">{movie.rating}</span>
                <span>{movie.genre}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}