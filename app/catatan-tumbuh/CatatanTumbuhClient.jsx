'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/* ── Category filter list ── */
const categories = [
  'Semua Cerita',
  'Event',
  'Kolaborasi',
  'Donasi',
  'Refleksi',
];

/* ── Warm card tint per category ── */
const categoryTint = {
  Event:      '#f0f5e8',
  Donasi:     '#fdf3e7',
  Kolaborasi: '#e8f2f5',
  Refleksi:   '#f5eef8',
  default:    '#f9faf5',
};

function getCategoryTint(cat) {
  return categoryTint[cat] ?? categoryTint.default;
}

/* ── Single blog card ── */
function BlogCard({ post, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px 0px' });
  const col    = index % 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: col * 0.08, ease }}
    >
      <Link href={`/catatan-tumbuh/${post.slug}`} className="group block">
        <article
          className="rounded-2xl overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
          style={{ backgroundColor: getCategoryTint(post.category) }}
        >
          {/* Image — taller portrait crop */}
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Category badge — overlaid at bottom of image */}
            <span className="absolute bottom-3 left-3 inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/90 text-[#4c5a2b]">
              {post.category}
            </span>
          </div>

          {/* Card body */}
          <div className="p-5">
            <h2 className="font-semibold text-[#2d3419] text-base leading-snug mb-2 group-hover:text-[#627238] transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#627238]">
              Baca selengkapnya
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

/* ── Main client component ── */
export default function CatatanTumbuhClient({ posts }) {
  const [activeCategory, setActiveCategory] = useState('Semua Cerita');

  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const filtered = activeCategory === 'Semua Cerita'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#f6f7f0] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-14">
        <div ref={heroRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Leaf icon + label */}
          <motion.div
            className="inline-flex items-center gap-1.5 mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            {/* Leaf SVG */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#627238]">
              <path d="M12 22C6 22 2 16 2 10C2 5 6 2 12 2C18 2 22 6 22 10C22 16 18 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C12 22 12 14 7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C12 22 12 14 17 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-medium text-[#627238]">Catatan Tumbuh</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-[#2d3419] leading-[1.15] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 22 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease }}
          >
            Cerita kecil,
            <br />
            dampak yang terus tumbuh.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            Di sini, kami mendokumentasikan perjalanan setiap langkah —
            dari program, kolaborasi, hingga cerita-cerita baik yang lahir bersama
            komunitas. Karena setiap aksi, sekecil apa pun, adalah bagian dari perubahan.
          </motion.p>
        </div>
      </section>

      {/* ── Content: sidebar + grid ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">

            {/* ── Left sidebar: category filters ── */}
            <aside className="w-full md:w-40 shrink-0">
              <nav className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-1.5">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-[#627238] text-white shadow-sm'
                          : 'bg-white text-gray-600 hover:bg-white hover:text-[#627238]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* ── Right: card grid ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filtered.length > 0
                    ? filtered.map((post, i) => (
                        <BlogCard key={post.id} post={post} index={i} />
                      ))
                    : (
                      <p className="col-span-3 text-center text-gray-400 py-20 text-sm">
                        Belum ada catatan untuk kategori ini.
                      </p>
                    )
                  }
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
