import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RuangTumbuhClient from './RuangTumbuhClient';

export const metadata = {
  title: 'Ruang Tumbuh — Bagi Dunia',
  description: 'Banyak cara untuk jadi bagian dari perubahan. Temukan cara berkontribusi sesuai passionmu bersama Bagi Dunia.',
};

export default function RuangTumbuhPage() {
  return (
    <main className="bg-[#f6f7f0]">
      <Navbar />
      <RuangTumbuhClient />
      <Footer />
    </main>
  );
}
