'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import programs from '@/data/programs.json';

const EASE = [0.22, 1, 0.36, 1];

export default function ProgramsPreview() {
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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div>
            <p className="section-label mb-4">Program</p>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#2d3419] max-w-md leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ruang untuk Bergerak Bersama
            </h2>
          </div>
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors shrink-0"
          >
            Semua Program
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>`

        {/* Program cards grid — staggered */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
            >
              <Link
                href={`/program/${prog.slug}`}
                className="group relative rounded-3xl overflow-hidden flex flex-col block"
                style={{ minHeight: i === 0 ? '380px' : '320px' }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <span className="inline-block text-xs font-semibold text-[#9aaa62] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3 self-start">
                    {prog.category}
                  </span>
                  <h3
                    className="text-xl font-semibold text-white leading-snug mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {prog.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                    {prog.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#9aaa62] opacity-0 group-hover:opacity-100 transition-opacity">
                    Pelajari
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
