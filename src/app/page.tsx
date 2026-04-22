import { db } from '@/db';
import { news, management } from '@/db/schema';
import { TickerBar } from '@/components/TickerBar';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Statistics } from '@/components/Statistics';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Sustainability } from '@/components/Sustainability';
import { Management } from '@/components/Management';
import { News } from '@/components/News';
import { Footer } from '@/components/Footer';

export default async function Home() {
  const latestNews = await db.select().from(news).limit(4);
  const directors = await db.select().from(management);

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden font-sans">
      <TickerBar />
      <Navbar />
      <HeroSection />
      <Statistics />
      <About />
      <Services />
      <Sustainability />
      <Management data={directors} />
      <News data={latestNews} />
      <Footer />
    </main>
  );
}
