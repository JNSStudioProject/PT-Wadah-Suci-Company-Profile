'use client';
import { motion } from 'framer-motion';

const metrics = [
  { value: '30%', label: 'Pengurangan Emisi Karbon' },
  { value: '100%', label: 'Air Daur Ulang' },
  { value: '50MW', label: 'Energi Terbarukan' },
  { value: 'CSR', label: 'Pemberdayaan Masyarakat' }
];

export const Sustainability = () => {
  return (
    <div id="keberlanjutan" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon fill="currentColor" points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl font-extrabold mb-6">Keberlanjutan adalah Nafas Kami</h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Kami tidak hanya membangun infrastruktur, tapi juga menjaga masa depan. Komitmen ESG (Environmental, Social, Governance) terintegrasi dalam setiap langkah operasional kami.
            </p>
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-slate-900 font-semibold rounded-sm transition-colors">
              Laporan Keberlanjutan 2025
            </button>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-sm backdrop-blur-sm"
                >
                  <h4 className="text-3xl font-bold text-red-500 mb-2">{metric.value}</h4>
                  <p className="text-slate-300 font-medium text-sm">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
