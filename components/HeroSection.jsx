import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop&q=80"
          alt="Kegiatan komunitas Bagi Dunia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient: strong left, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        {/* Bottom fade for section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/10 to-transparent" />
      </div>

      {/* ── Decorative corner mark ── */}
      <div className="absolute top-28 right-8 md:right-16 hidden md:block opacity-30">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="58" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="60" cy="60" r="40" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#9aaa62]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9aaa62]">
              Gerakan Sosial · Jakarta
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Bagi
            <br />
            <span className="text-[#9aaa62]">Dunia.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
            A space to gather, explore your good, and grow with young changemakers.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#627238] text-white font-semibold rounded-full hover:bg-[#4c5a2b] transition-all text-sm"
            >
              Kenali Kami
            </Link>
            <Link
              href="/program"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-full border border-white/40 hover:bg-white/15 transition-all text-sm backdrop-blur-sm"
            >
              Lihat Program
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick stats row */}
          {/* <div className="mt-16 flex flex-wrap gap-8">
            {[
              { num: '?',   label: 'Tahun Bergerak' },
              { num: '?',  label: 'Program Aktif' },
              { num: '?', label: 'Individu Terdampak' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {num}
                </p>
                <p className="text-xs text-white/60 mt-0.5">{label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50">
          Gulir
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
