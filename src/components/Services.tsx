'use client';
import { motion } from 'framer-motion';
import { Factory, HardHat, Building2, Truck } from 'lucide-react';

const services = [
  {
    icon: Factory,
    title: 'Produksi Semen',
    desc: 'Bahan bangunan berkualitas tinggi dengan standar mutu internasional yang teruji kuat dan presisi.'
  },
  {
    icon: Truck,
    title: 'Logistik & Distribusi',
    desc: 'Jaringan distribusi terpadu memastikan ketersediaan pasokan di seluruh pelosok nusantara.'
  },
  {
    icon: Building2,
    title: 'Solusi Beton',
    desc: 'Ready-mix dan precast untuk memenuhi kebutuhan proyek infrastruktur skala masif.'
  },
  {
    icon: HardHat,
    title: 'Layanan Konstruksi',
    desc: 'Konsultasi teknis dan manajemen proyek dengan tim ahli berpengalaman.'
  }
];

export const Services = () => {
  return (
    <div className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Layanan Unggulan Kami</h2>
          <p className="text-slate-600">Integrasi vertikal bisnis kami menghadirkan efisiensi dan kualitas terbaik di setiap rantai nilai konstruksi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-red-600"
            >
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
