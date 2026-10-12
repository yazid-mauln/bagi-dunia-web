'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const stats = [
  { number: '?', label: 'Tahun Bergerak',      icon: '◎' },
  { number: '?', label: 'Program Dijalankan',  icon: '◈' },
  { number: '?', label: 'Komunitas Terhubung', icon: '◉' },
  { number: '?', label: 'Individu Terdampak',  icon: '◆' },
];

export default function StatsBar() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <section className="bg-[#2d3419] py-12">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map(({ number, label }, i) => (
            <motion.div
              key={label}
              className="text-center lg:px-8"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              <p
                className="text-4xl sm:text-5xl font-bold text-[#9aaa62] mb-1.5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {number}
              </p>
              <p className="text-sm text-white/60 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
