'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import collaborators from '@/data/collaborators.json';

const EASE = [0.22, 1, 0.36, 1];

const logoColors = [
  'bg-[#2d3419]',
  'bg-[#627238]',
  'bg-[#4c5a2b]',
  'bg-[#3a4421]',
  'bg-[#9aaa62]',
  'bg-[#7d8f47]',
];

export default function CollaboratorsSection() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-72px 0px' });

  const listRef    = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: '-60px 0px' });

  return (
    <section className="py-24 md:py-32 bg-[#f6f7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="section-label mb-5">Kolaborator</p>
          <h2
            className="text-3xl sm:text-4xl font-semibold text-[#2d3419] max-w-2xl mx-auto leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Bersama, Kita Lebih Berdampak
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Kami percaya, dampak yang lebih besar hanya bisa tercipta lewat kolaborasi yang
            tulus dan berkelanjutan.
          </p>
        </motion.div>

        {/* Partner logos — staggered */}
        <div ref={listRef} className="flex flex-wrap justify-center gap-3 mb-16">
          {collaborators.map((c, i) => (
            <motion.div
              key={c.id}
              className="bg-white rounded-2xl border border-[#eaecdc] flex items-center gap-3 px-5 py-3.5 hover:shadow-sm hover:border-[#b8c08d] transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <div
                className={`w-8 h-8 rounded-lg ${logoColors[i % logoColors.length]} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
              >
                {c.logo}
              </div>
              <span className="text-sm font-medium text-[#4c5a2b] whitespace-nowrap">{c.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
