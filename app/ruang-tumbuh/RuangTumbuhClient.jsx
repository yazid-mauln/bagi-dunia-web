'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1];

/* ── Reusable fade-up wrapper ── */
function FadeUp({ children, delay = 0, className = '' }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── Contribution types ── */
const contributionTypes = [
  {
    type: 'Event',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&q=80',
    desc: 'Ikut serta dalam kegiatan kami seperti aksi sosial, talkshow, workshop, atau kampanye yang terbuka untuk relawan dan komunitas.',
    cta: 'Lihat event mendatang',
    href: '/kontak',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    type: 'Donasi',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop&q=80',
    desc: 'Dukung program kami melalui donasi dalam bentuk dana, barang, atau kebutuhan lainnya untuk menjangkau lebih banyak penerima manfaat.',
    cta: 'Donasi sekarang',
    href: '/kontak',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    type: 'Tim Inti',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&q=80',
    desc: 'Bergabunglah sebagai bagian dari tim inti untuk terlibat lebih dalam dalam perencanaan, pelaksanaan, dan pengembangan program kami.',
    cta: 'Tertarik bergabung',
    href: '/kontak',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

/* ── Open opportunities ── */
const opportunities = [
  {
    status: 'Sedang Dibuka',
    statusBg: 'bg-[#e8f2e8]',
    statusText: 'text-[#4c5a2b]',
    title: 'Open Volunteer – Vol. 13',
    desc: 'Jadi bagian dari tim relawan untuk kegiatan Vol. 13.',
    cta: 'Daftar Sekarang',
    href: '/kontak',
  },
  {
    status: 'Kolaborasi',
    statusBg: 'bg-[#f0f5e8]',
    statusText: 'text-[#627238]',
    title: 'Kolaborasi Donasi – Buku & Alat Tulis',
    desc: 'Mari dukung pendidikan anak-anak melalui donasi buku dan alat tulis.',
    cta: 'Lihat Detail',
    href: '/kontak',
  },
];

export default function RuangTumbuhClient() {
  const heroRef    = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-40px 0px' });

  return (
    <>
      {/* ════════════════════════════════════════════
          HERO — left text + right oval image
      ════════════════════════════════════════════ */}
      <section className="pt-36 pb-16">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <motion.div
                className="inline-flex items-center gap-1.5 mb-4"
                initial={{ opacity: 0, y: 12 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, ease }}
              >
                {/* Leaf icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#627238]">
                  <path d="M12 22C6 22 2 16 2 10C2 5 6 2 12 2C18 2 22 6 22 10C22 16 18 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C12 22 12 14 7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C12 22 12 14 17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-[#627238]">Ruang Tumbuh</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-[#2d3419] leading-[1.15] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.07, ease }}
              >
                Banyak cara untuk
                <br />
                jadi bagian dari perubahan.
              </motion.h1>

              <motion.p
                className="text-sm text-gray-500 leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 18 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.14, ease }}
              >
                Di Bagi Dunia, kamu bisa berkontribusi sesuai dengan minat, waktu, dan kemampuanmu. Setiap langkah kecil, sekecil apa pun, tetap berarti untuk menciptakan lingkungan yang lebih baik.
              </motion.p>
            </div>

            {/* Right: oval image + floating tag */}
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 36 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              {/* Oval image */}
              <div
                className="relative overflow-hidden shadow-md"
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: '#e0ecd4',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop&q=80"
                  alt="Langkah kecil, dampak besar"
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating handwritten note */}
              <div className="absolute top-6 -right-2 sm:right-0 bg-white rounded-2xl px-4 py-3 shadow-lg rotate-[2.5deg]">
                <p
                  className="text-[#2d3419] text-sm font-semibold leading-snug"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Langkah kecil,
                  <br />
                  dampak besar.
                </p>
                <svg className="mt-1.5 text-[#9aaa62]" width="36" height="10" viewBox="0 0 36 10" fill="none">
                  <path d="M2 5C6 2 10 8 14 5C18 2 22 8 26 5C28.5 3.5 31 6 34 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* ════════════════════════════════════════════
          SECTION 2 — Bentuk Kontribusi
      ════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Two-col section header */}
          <FadeUp className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#627238] mb-3">
                Bentuk Kontribusi
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2d3419] leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ada banyak cara
                <br />
                untuk ikut bertumbuh.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-gray-500 leading-relaxed">
                Kamu bisa memilih bentuk kontribusi yang paling sesuai dari passion dan tujuanmu, mulai dari berpartisipasi dalam kegiatan, berdonasi, hingga bergabung menjadi bagian dari tim kami.
              </p>
            </div>
          </FadeUp>

          {/* 3-column contribution cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {contributionTypes.map((item, i) => (
              <FadeUp key={item.type} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full">
                  {/* Photo */}
                  <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                    <Image
                      src={item.image}
                      alt={item.type}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Card content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Circle icon */}
                    <div className="w-10 h-10 rounded-full bg-[#f6f7f0] flex items-center justify-center text-[#627238] mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[#2d3419] text-base mb-2">{item.type}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">{item.desc}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors"
                    >
                      {item.cta}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* ════════════════════════════════════════════
          SECTION 3 — Kabar Terbaru / Opportunities
      ════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Two-col section header */}
          <FadeUp className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#627238] mb-3">
                Kabar Terbaru
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#2d3419] leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Program yang sedang
                <br />
                membuka kesempatan.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-gray-500 leading-relaxed">
                Jangan lewatkan informasi terbaru mengenai program yang sedang berjalan, peluang kolaborasi, atau rekrutmen relawan.
              </p>
            </div>
          </FadeUp>

          {/* Opportunity rows */}
          <div className="flex flex-col gap-3">
            {opportunities.map((opp, i) => (
              <FadeUp key={opp.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 min-w-0">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap self-start sm:self-auto ${opp.statusBg} ${opp.statusText}`}
                    >
                      {opp.status}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-[#2d3419] text-sm">{opp.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{opp.desc}</p>
                    </div>
                  </div>
                  <Link
                    href={opp.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors shrink-0"
                  >
                    {opp.cta}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          BOTTOM CTA BANNER
      ════════════════════════════════════════════ */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="bg-white rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center gap-6">
              {/* Globe icon */}
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#f6f7f0] flex items-center justify-center text-[#627238]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9aaa62] mb-1">
                  Bersama Kita Bisa
                </p>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#2d3419] leading-snug"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Jadi bagian dari perubahan,
                  <br />
                  mulai dari sini.
                </h3>
              </div>

              {/* Squiggle decoration */}
              <svg className="hidden lg:block shrink-0 text-[#9aaa62] opacity-70" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M4 18C9 9 14 27 18 18C22 9 27 27 32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 4C22 7 26 4 28 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>

              {/* Button */}
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#627238] text-white text-sm font-semibold rounded-full hover:bg-[#4c5a2b] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md shrink-0"
              >
                Hubungi Kami
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
