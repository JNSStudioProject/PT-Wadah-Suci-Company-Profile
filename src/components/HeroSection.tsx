'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
    title: 'Membangun Masa Depan Berkelanjutan',
    subtitle: 'Solusi bahan bangunan inovatif untuk infrastruktur kokoh dan ramah lingkungan.',
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
    title: 'Transformasi Industri Nasional',
    subtitle: 'Berkomitmen menjadi pelopor dalam teknologi dan efisiensi industri semen di Asia Tenggara.',
  },
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop',
    title: 'Kekuatan yang Membangun Negeri',
    subtitle: 'Berkontribusi pada proyek strategis nasional dengan kualitas tanpa kompromi.',
  }
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slides[current].image}
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center pt-20">
        <div className="max-w-3xl">
          <motion.h1
            key={`title-${current}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${current}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-200 mb-10"
          >
            {slides[current].subtitle}
          </motion.p>
          <motion.div
            key={`btns-${current}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm transition-all transform hover:scale-105">
              Lebih Lanjut
            </button>
            <button className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white font-bold rounded-sm transition-all">
              Hubungi Kami
            </button>
          </motion.div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 w-full z-20">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#f8fafc"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 right-12 z-30 flex space-x-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === current ? 'bg-red-600 scale-125' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
