import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsContent from '@/components/news/NewsContent';

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <NewsContent />
      <Footer />
    </main>
  );
}
