import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { AnimatedGroup } from '@/components/AnimatedSection';

export const metadata = {
  title: 'Program — Bagi Dunia',
  description: 'Program-program Bagi Dunia untuk mendorong kolaborasi dan perubahan sosial.',
};

/* ── Kanal Program data ── */
const channels = [
  {
    label: 'Aksi Langsung',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {/* leaf / plant sprout */}
        <path d="M24 38V22" />
        <path d="M24 22C24 22 14 20 14 10C14 10 24 10 28 18C32 10 38 10 38 10C38 20 30 22 24 22Z" />
      </svg>
    ),
    iconBg: '#e8f0dc',
    iconColor: '#627238',
  },
  {
    label: 'Edukasi &\nAwareness',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {/* open book */}
        <path d="M8 12C8 12 14 10 24 12C34 10 40 12 40 12V38C40 38 34 36 24 38C14 36 8 38 8 38V12Z" />
        <path d="M24 12V38" />
      </svg>
    ),
    iconBg: '#f0ede4',
    iconColor: '#8b6342',
  },
  {
    label: 'Kolaborasi\n& Community',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {/* people / community */}
        <circle cx="18" cy="17" r="5" />
        <circle cx="30" cy="17" r="5" />
        <path d="M8 38C8 32 12.5 28 18 28" />
        <path d="M40 38C40 32 35.5 28 30 28" />
        <path d="M18 28C18 28 21 26 24 26C27 26 30 28 30 28C30 28 33 30 33 38H15C15 30 18 28 18 28Z" />
      </svg>
    ),
    iconBg: '#e4eedc',
    iconColor: '#4c5a2b',
  },
  {
    label: 'Dukungan\n& Donasi',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {/* heart */}
        <path d="M24 38L10 24C7 21 7 16 10 13C13 10 17 10 20 13L24 17L28 13C31 10 35 10 38 13C41 16 41 21 38 24L24 38Z" />
      </svg>
    ),
    iconBg: '#fce8e8',
    iconColor: '#c0514a',
  },
];

/* ── Target Program cards ── */
const targetPrograms = [
  {
    id: 'vol-kecil',
    title: 'Vol Kecil',
    description:
      'Small steps, real actions. Aksi sederhana dalam lingkup kecil yang bisa dilakukan bersama, seperti berbagi, kegiatan sosial, atau aksi kepedulian di sekitar.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=420&fit=crop&q=80',
    href: '/program/vol-kecil',
  },
  {
    id: 'vol-sedang',
    title: 'Vol Sedang',
    description:
      'Growing together. Program dengan skala yang lebih luas, melibatkan lebih banyak anak muda dan komunitas untuk menciptakan pengalaman serta dampak bersama.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=420&fit=crop&q=80',
    href: '/program/vol-sedang',
  },
  {
    id: 'vol-besar',
    title: 'Vol Besar',
    description:
      'Bigger circle, wider impact. Program kolaboratif yang melibatkan lebih banyak relawan, komunitas, dan mitra untuk menjangkau kebutuhan serta dampak yang lebih luas.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=420&fit=crop&q=80',
    href: '/program/vol-besar',
  },
  {
    id: 'community-expand',
    title: 'Community Expand',
    description:
      'Grow the good. Ruang untuk memperluas jaringan, bertukar cerita, belajar bersama, dan membangun kolaborasi agar kebiasaan baik dapat tumbuh di lebih banyak tempat.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=420&fit=crop&q=80',
    href: '/program/community-expand',
  },
];

export default function ProgramPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ══════════════════════════════════════════════
          SECTION 1 — Hero
          Left: breadcrumb + big heading
          Right: description paragraph
      ══════════════════════════════════════════════ */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <AnimatedSection delay={0} duration={0.5}>
            <p className="text-xs font-medium text-gray-400 mb-6 tracking-wide">
              Program
            </p>
          </AnimatedSection>

          {/* Two-column: heading + description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <AnimatedSection delay={0.08} duration={0.7} direction="up">
              <h1
                className="text-4xl sm:text-5xl font-bold text-[#2d3419] leading-[1.15]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Dari kebiasaan kecil, kita tumbuhkan dampak bersama.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.18} duration={0.7} direction="up">
              <p className="text-sm text-gray-500 leading-relaxed">
                Bagi Dunia menghadirkan berbagai program sebagai ruang bagi anak muda 
                untuk belajar, berbagi, dan mengambil bagian dalam aksi nyata. 
                Setiap program dirancang untuk menumbuhkan kepedulian dan mengubah langkah-langkah kecil menjadi 
                kebiasaan baik yang berkelanjutan—melalui aksi, edukasi, kampanye, hingga kolaborasi.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — Kanal Program
          Left: heading + description text
          Right: 4 icon channel cards in a row
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — heading + description */}
            <AnimatedSection direction="up" duration={0.65} delay={0}>
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#2d3419] mb-4 leading-snug"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Kanal Program
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                  Program Bagi Dunia bergerak melalui beberapa kanal yang membuka berbagai cara untuk ikut mengambil bagian. Mulai dari turun langsung, berbagi pengetahuan, membangun komunitas, hingga mendukung gerakan kebaikan.
                </p>
              </div>
            </AnimatedSection>

            {/* Right — 4 channel icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 mt-6 ">
              {channels.map((ch, i) => (
                <AnimatedSection key={ch.label} delay={0.1 + i * 0.08} duration={0.6} direction="up">
                  <div className="flex flex-col items-center text-center gap-3">
                    {/* Icon circle */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      style={{ backgroundColor: ch.iconBg, color: ch.iconColor }}
                    >
                      {ch.icon}
                    </div>
                    {/* Label — allow line breaks */}
                    <p className="text-xs font-semibold text-[#2d3419] leading-snug whitespace-pre-line">
                      {ch.label}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — Target Program
          Header + 2×2 grid of program cards
          Each card: landscape photo left + text right
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <AnimatedSection direction="up" duration={0.65} delay={0}>
            <div className="mb-10">
              <h2
                className="text-2xl sm:text-3xl font-bold text-[#2d3419] mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Target Program
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Program Bagi Dunia terbuka bagi anak muda, komunitas, dan siapa pun yang ingin ikut bertumbuh dalam kebaikan. Skalanya dapat dimulai dari langkah sederhana hingga gerakan yang melibatkan lebih banyak orang dan kolaborator.
              </p>
            </div>
          </AnimatedSection>

          {/* 2×2 Program cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetPrograms.map((prog, i) => (
              <AnimatedSection
                key={prog.id}
                direction="up"
                duration={0.65}
                delay={0.08 + i * 0.1}
              >
                <div className="group flex flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 bg-white">

                  {/* Left — square image */}
                  <div className="relative w-36 sm:w-44 shrink-0 overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 144px, 176px"
                    />
                  </div>

                  {/* Right — text content */}
                  <div className="flex flex-col justify-between p-5 flex-1 min-w-0">
                    <div>
                      <h3
                        className="text-base font-bold text-[#2d3419] mb-2 leading-snug"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {prog.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {prog.description}
                      </p>
                    </div>

                    {/* CTA link */}
                    <Link
                      href={prog.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors mt-4 group/link"
                    >
                      Lihat detail program
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — CTA bottom strip (optional, keeps site consistent)
      ══════════════════════════════════════════════ */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" duration={0.65} delay={0}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-[#2d3419] mb-2 leading-snug"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Tertarik bergabung dalam salah satu program?
                </h2>
                <p className="text-sm text-gray-500 max-w-md">
                  Hubungi kami dan ceritakan minat serta kapasitasmu. Kami akan menghubungkan kamu
                  dengan program yang paling sesuai.
                </p>
              </div>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d3419] text-white text-sm font-semibold rounded-full hover:bg-[#3a4421] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md shrink-0"
              >
                Hubungi Kami
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
