'use client';
import { motion } from 'framer-motion';

type NewsArticle = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

export const News = ({ data }: { data: NewsArticle[] }) => {
  return (
    <div className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Berita Terkini</h2>
            <p className="text-slate-600">Informasi terbaru seputar inovasi, pencapaian, dan kegiatan perusahaan.</p>
          </div>
          <button className="hidden md:inline-flex text-red-600 font-bold hover:text-red-700 transition-colors items-center">
            Lihat Semua Berita
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col h-full"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-400 text-xs font-semibold mb-3">{article.date}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-red-600 text-sm font-semibold group-hover:underline">Baca Selengkapnya &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="text-red-600 font-bold hover:text-red-700 transition-colors inline-flex items-center">
            Lihat Semua Berita
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};
