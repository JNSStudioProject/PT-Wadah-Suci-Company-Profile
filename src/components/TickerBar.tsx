'use client';
import { motion } from 'framer-motion';

export const TickerBar = () => {
  return (
    <div className="bg-red-700 text-white text-xs py-1.5 overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex space-x-12"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex space-x-8 items-center font-medium tracking-wide">
            <span className="flex items-center space-x-2">
              <span className="font-bold">IDX: WDHS</span>
              <span className="text-green-300">▲ 6,450.00 (+1.2%)</span>
            </span>
            <span className="text-white/40">|</span>
            <span>Berita Terkini: PT Wadah Suci Resmikan Fasilitas Pabrik Baru di Jawa Timur</span>
            <span className="text-white/40">|</span>
            <span>Pengumuman RUPS Tahunan 2026</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
