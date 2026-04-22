import { db } from './index';
import { news, management } from './schema';

async function main() {
  console.log('Seeding database...');
  
  // Seed Management
  await db.insert(management).values([
    { name: 'Budi Santoso', position: 'Direktur Utama', initials: 'BS' },
    { name: 'Andi Wijaya', position: 'Direktur Keuangan', initials: 'AW' },
    { name: 'Siti Aminah', position: 'Direktur Operasional', initials: 'SA' },
    { name: 'Reza Rahardian', position: 'Direktur SDM', initials: 'RR' },
  ]);

  // Seed News
  await db.insert(news).values([
    {
      title: 'PT Wadah Suci Raih Penghargaan Industri Hijau 2026',
      category: 'Penghargaan',
      date: '22 April 2026',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
      excerpt: 'Komitmen berkelanjutan membawa PT Wadah Suci memenangkan penghargaan tertinggi dalam penerapan industri hijau.'
    },
    {
      title: 'Ekspansi Pabrik Baru di Jawa Timur',
      category: 'Korporat',
      date: '15 Maret 2026',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
      excerpt: 'Merespon tingginya permintaan pasar, perusahaan meresmikan fasilitas produksi modern.'
    },
    {
      title: 'Laporan Keuangan Q1: Pertumbuhan Laba 15%',
      category: 'Keuangan',
      date: '02 Maret 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      excerpt: 'Performa solid tercermin dalam laporan keuangan kuartal pertama tahun ini.'
    },
    {
      title: 'Program CSR Tanam 10.000 Pohon',
      category: 'Tanggung Jawab Sosial',
      date: '10 Februari 2026',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop',
      excerpt: 'Sebagai upaya pelestarian lingkungan, perusahaan menyelenggarakan program penanaman pohon.'
    }
  ]);

  console.log('Database seeded successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
