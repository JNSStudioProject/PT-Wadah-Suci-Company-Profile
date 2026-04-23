'use client';
import { motion } from 'framer-motion';

const stats = [
  { value: '25+', label: 'Tahun Pengalaman' },
  { value: '150+', label: 'Proyek Strategis' },
  { value: '4', label: 'Fasilitas Pabrik' },
  { value: '5K+', label: 'Karyawan Dedikatif' },
];

export const Statistics = () => {
  return (
    <div id="hubungan-investor" className="py-20 bg-slate-50 relative -mt-20 z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-xl shadow-2xl p-10 md:p-16 flex flex-wrap justify-between items-center relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-50 rounded-full opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-50 rounded-full opacity-50" />

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="w-full md:w-1/4 text-center mb-8 md:mb-0 relative z-10"
            >
              <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
