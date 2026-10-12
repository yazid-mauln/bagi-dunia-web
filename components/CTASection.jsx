'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

export default function CTASection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-72px 0px' });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=700&fit=crop&q=80"
          alt="Bergerak bersama"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2d3419]/85" />
      </div>

      {/* Decorative circles */}
      <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-80 h-80 rounded-full border border-white/5" />
      <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-56 h-56 rounded-full border border-white/5" />
      <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 w-72 h-72 rounded-full border border-white/5" />

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE }}
      >
        <motion.p
          className="text-xs font-bold uppercase tracking-[0.2em] text-[#9aaa62] mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Bergabung Bersama Kami
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18, ease: EASE }}
        >
          Siap untuk Bergerak dan Membuat Perbedaan?
        </motion.h2>

        <motion.p
          className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
        >
          Bergabunglah dengan ribuan individu dan komunitas yang sudah bergerak bersama Bagi
          Dunia untuk menciptakan dampak yang nyata.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.34, ease: EASE }}
        >
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#9aaa62] text-white font-semibold rounded-full hover:bg-[#7d8f47] transition-all text-sm"
          >
            Mulai Berkolaborasi
          </Link>
          <Link
            href="/tentang-kami"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-full border border-white/30 hover:bg-white/10 transition-all text-sm"
          >
            Kenali Lebih Dalam
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
