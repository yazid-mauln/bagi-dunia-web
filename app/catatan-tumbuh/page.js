import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import blog from '@/data/blog.json';
import CatatanTumbuhClient from './CatatanTumbuhClient';

export const metadata = {
  title: 'Catatan Tumbuh — Bagi Dunia',
  description: 'Kumpulan cerita, refleksi, dan langkah kecil yang membawa dampak.',
};

export default function CatatanTumbuhPage() {
  return (
    <main>
      <Navbar />
      <CatatanTumbuhClient posts={blog} />
      <Footer />
    </main>
  );
}
