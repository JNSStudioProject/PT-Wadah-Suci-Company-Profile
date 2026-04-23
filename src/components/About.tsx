'use client';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div id="tentang-kami" className="py-24 bg-white relative overflow-hidden">
      {/* Background Geometrics */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 bg-red-100 text-red-700 font-bold tracking-wider text-xs uppercase rounded-sm mb-6">
              Tentang Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              Membangun Fondasi Masa Depan Indonesia
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              PT Wajah baru adalah pelopor industri bahan bangunan terintegrasi di Indonesia. Sejak didirikan, kami telah berkomitmen untuk menyediakan solusi konstruksi inovatif dan berkelanjutan.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dengan fasilitas produksi berteknologi mutakhir dan sumber daya manusia yang handal, kami terus memperkuat jejak langkah dalam mendukung pembangunan infrastruktur nasional yang tangguh dan ramah lingkungan.
            </p>
            <button className="text-red-600 font-bold border-b-2 border-red-600 pb-1 hover:text-red-700 hover:border-red-700 transition-colors inline-flex items-center">
              Jelajahi Sejarah Kami
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" 
                alt="Fasilitas Pabrik Wajah baru"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <blockquote className="text-white">
                  <span className="text-5xl text-red-500 font-serif leading-none absolute -top-4 -left-2 opacity-50">"</span>
                  <p className="text-xl font-medium italic relative z-10">
                    Inovasi adalah kunci kami untuk terus relevan dan memberikan nilai tambah yang nyata bagi kemajuan bangsa.
                  </p>
                  <footer className="mt-4 text-sm text-slate-300 font-semibold uppercase tracking-wider">
                    — Dewan Direksi PT Wajah baru
                  </footer>
                </blockquote>
              </div>
            </div>
            {/* Geometric Accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600 rounded-sm -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-slate-200 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
