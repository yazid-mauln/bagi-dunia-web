'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const programLinks = [
  { href: '/program/volume-kecil', label: 'Volume Kecil' },
  { href: '/program/volume-sedang', label: 'Volume Sedang' },
  { href: '/program/volume-besar', label: 'Volume Besar' },
  { href: '/program/comunity-expand', label: 'Comunity Expand' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [isOpen,       setIsOpen]       = useState(false);
  const [programOpen,  setProgramOpen]  = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProgramOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const solid    = scrolled || !isHome || isOpen;
  const textCol  = solid ? 'text-[#2d3419]' : 'text-white';
  const logoCol  = solid ? '#4c5a2b' : '#ffffff';

  const navLinkClass = (href) => {
    const active = pathname === href || pathname.startsWith(href + '/');
    return `relative text-sm font-medium transition-colors duration-150 ${textCol} ${
      active ? 'opacity-100' : 'opacity-80 hover:opacity-100'
    } after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:rounded-full after:bg-[#9aaa62] after:transition-all after:duration-200 ${
      active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold transition-colors"
              style={{ background: solid ? '#627238' : 'rgba(255,255,255,0.25)' }}
            >
              BD
            </div>
            <span
              className="text-xl font-bold tracking-tight transition-colors"
              style={{ fontFamily: 'var(--font-serif)', color: logoCol }}
            >
              Bagi Dunia
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {/* <Link href="/tentang-kami" className={navLinkClass('/tentang-kami')}>
              Tentang Kami
            </Link> */}

            {/* Program dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${textCol} opacity-80 hover:opacity-100`}
                onClick={() => setProgramOpen(!programOpen)}
                aria-haspopup="true"
                aria-expanded={programOpen}
              >
                Program
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${programOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {programOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-1.5">
                    {programLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setProgramOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#4c5a2b] font-medium rounded-xl hover:bg-[#f6f7f0] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9aaa62]" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 p-1.5">
                    <Link
                      href="/program"
                      onClick={() => setProgramOpen(false)}
                      className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#627238] rounded-xl hover:bg-[#f6f7f0] transition-colors"
                    >
                      Semua Program
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/catatan-tumbuh" className={navLinkClass('/catatan-tumbuh')}>
              Catatan Tumbuh
            </Link>

            <Link href="/ruang-tumbuh" className={navLinkClass('/ruang-tumbuh')}>
              Ruang Tumbuh
            </Link>

            <Link
              href="/kontak"
              className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shrink-0"
              style={{
                background: solid ? '#627238' : 'rgba(255,255,255,0.18)',
                color: '#fff',
                border: solid ? 'none' : '1.5px solid rgba(255,255,255,0.45)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#4c5a2b'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = solid ? '#627238' : 'rgba(255,255,255,0.18)'; }}
            >
              Bergabung
            </Link>
          </nav>

          {/* ── Hamburger ── */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${solid ? 'text-[#2d3419] hover:bg-[#f6f7f0]' : 'text-white hover:bg-white/15'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100`}
      >
        <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {/* <Link
            href="/tentang-kami"
            className="flex items-center gap-3 px-4 py-3 text-[#2d3419] font-medium rounded-xl hover:bg-[#f6f7f0] transition-colors"
          >
            Tentang Kami
          </Link> */}

          <div className="px-4 pt-2 pb-1">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#9aaa62] mb-1">
              Program
            </p>
          </div>
          {programLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 pl-8 pr-4 py-2.5 text-sm text-[#4c5a2b] font-medium rounded-xl hover:bg-[#f6f7f0] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9aaa62]" />
              {link.label}
            </Link>
          ))}

          <Link
            href="/catatan-tumbuh"
            className="flex items-center gap-3 px-4 py-3 text-[#2d3419] font-medium rounded-xl hover:bg-[#f6f7f0] transition-colors"
          >
            Catatan Tumbuh
          </Link>
          <Link
            href="/kontak"
            className="flex items-center gap-3 px-4 py-3 text-[#2d3419] font-medium rounded-xl hover:bg-[#f6f7f0] transition-colors"
          >
            Kontak Kami
          </Link>

          <div className="pt-2 pb-2">
            <Link
              href="/kontak"
              className="flex items-center justify-center w-full py-3 bg-[#627238] text-white font-semibold rounded-full hover:bg-[#4c5a2b] transition-colors"
            >
              Bergabung Sekarang
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
