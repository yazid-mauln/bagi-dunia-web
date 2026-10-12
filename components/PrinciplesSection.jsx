'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import principles from '@/data/principles.json';

const EASE = [0.22, 1, 0.36, 1];

const IconPeople = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const IconPlant = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-5 4-5 10a5 5 0 0010 0c0-6-5-10-5-10z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8M9 18c0 0 1.5-2 3-2s3 2 3 2" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
  </svg>
);

const icons = { people: <IconPeople />, plant: <IconPlant />, globe: <IconGlobe /> };

const cardBg    = ['bg-[#f6f7f0]', 'bg-[#2d3419]', 'bg-[#627238]'];
const textColor = ['text-[#2d3419]', 'text-white', 'text-white'];
const descColor = ['text-gray-600', 'text-white/70', 'text-white/80'];
const iconBg    = ['bg-white', 'bg-white/15', 'bg-white/20'];
const iconColor = ['text-[#627238]', 'text-[#9aaa62]', 'text-white'];

export default function PrinciplesSection() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-72px 0px' });

  const gridRef    = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px 0px' });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="section-label mb-5">Prinsip Utama</p>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#2d3419] leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Dalam langkahnya, kami berpegang tiga prinsip utama yang menjadi dasar gerak Bagi Dunia
          </h2>
        </motion.div>

        {/* Cards — staggered */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.id}
              className={`${cardBg[i]} rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 36 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: EASE }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${iconBg[i]} ${iconColor[i]} flex items-center justify-center mb-6`}>
                {icons[p.icon]}
              </div>

              {/* Number */}
              <p
                className={`text-5xl font-bold ${i === 0 ? 'text-[#d4d9b8]' : 'text-white/20'} mb-2`}
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                0{p.id}
              </p>

              <h3
                className={`text-2xl font-semibold ${textColor[i]} mb-4`}
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {p.title}
              </h3>
              <p className={`text-sm leading-relaxed ${descColor[i]}`}>
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
