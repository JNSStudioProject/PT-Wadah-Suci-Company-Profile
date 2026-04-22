'use client';
import { motion } from 'framer-motion';

type Director = {
  id: number;
  name: string;
  position: string;
  initials: string;
};

export const Management = ({ data }: { data: Director[] }) => {
  return (
    <div className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Jajaran Manajemen</h2>
          <p className="text-slate-600">Dipimpin oleh profesional berpengalaman yang mendedikasikan visi dan strateginya untuk pertumbuhan berkelanjutan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-48 h-48 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-all duration-300">
                <span className="text-5xl font-bold text-slate-300 group-hover:text-red-100 transition-colors duration-300">
                  {person.initials}
                </span>
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
                {person.name}
              </h4>
              <p className="text-slate-500 font-medium text-sm">{person.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
