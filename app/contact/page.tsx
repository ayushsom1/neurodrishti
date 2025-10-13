import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactContent from '@/components/contact/ContactContent';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
