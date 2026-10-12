'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import values from '@/data/values.json';

const EASE = [0.22, 1, 0.36, 1];

const icons = {
  handshake: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m-7.4 0h7.4" />
    </svg>
  ),
  diversity: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  sustainability: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  action: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

export default function ValuesSection() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-72px 0px' });

  const gridRef    = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-60px 0px' });

  return (
    <section className="py-24 md:py-32 bg-[#f6f7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="section-label mb-5">Nilai Kami</p>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#2d3419] max-w-lg mx-auto leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Nilai dan Arah Gerak
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Empat nilai yang menjadi kompas setiap keputusan dan langkah yang kami ambil.
          </p>
        </motion.div>

        {/* Grid — staggered */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              className="group bg-white rounded-3xl p-8 border border-[#eaecdc] hover:border-[#9aaa62] hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 36 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
            >
              {/* Icon wrapper */}
              <div className="w-12 h-12 rounded-2xl bg-[#f6f7f0] group-hover:bg-[#eaecdc] text-[#627238] flex items-center justify-center mb-6 transition-colors">
                {icons[v.icon]}
              </div>

              <h3
                className="text-xl font-semibold text-[#2d3419] mb-3"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {v.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>

              {/* Animated line */}
              <div className="mt-6 h-0.5 w-0 bg-[#9aaa62] rounded-full group-hover:w-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
