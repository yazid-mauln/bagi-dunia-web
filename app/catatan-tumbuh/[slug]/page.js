import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blog from '@/data/blog.json';

export async function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Catatan Tumbuh Bagi Dunia`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blog.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main>
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/catatan-tumbuh"
              className="inline-flex items-center gap-2 text-sm text-[#627238] hover:text-[#4c5a2b] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Catatan Tumbuh
            </Link>
          </div>

          {/* Category badge */}
          <span className="inline-block text-xs font-semibold text-[#627238] bg-[#f6f7f0] px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl font-semibold text-[#2d3419] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
            <span className="font-medium text-[#2d3419]">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>
              {new Date(post.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Hero image */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          {/* Body */}
          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p className="font-medium text-[#2d3419]">{post.excerpt}</p>
            <p>{post.content}</p>
            <p>
              Ini adalah bagian dari perjalanan panjang yang terus berlanjut. Setiap langkah
              yang kita ambil hari ini adalah batu pijakan untuk generasi yang akan datang.
              Bersama, kita bisa menciptakan dunia yang lebih baik — satu komunitas pada satu
              waktu.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-[#627238] bg-[#f6f7f0] px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-[#f6f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-semibold text-[#2d3419] mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Catatan Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link href={`/catatan-tumbuh/${p.slug}`} key={p.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold text-[#627238] bg-[#f6f7f0] px-2 py-0.5 rounded-full mb-2">
                      {p.category}
                    </span>
                    <h3 className="font-semibold text-[#2d3419] leading-snug group-hover:text-[#627238] transition-colors text-sm">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
