import Link from 'next/link';

const navColumns = [
  {
    title: 'Tentang Kami',
    links: [
      { label: 'Visi & Misi',      href: '/tentang-kami' },
      { label: 'Tim Kami',         href: '/tentang-kami' },
      { label: 'Perjalanan',       href: '/tentang-kami' },
      { label: 'Nilai & Prinsip',  href: '/tentang-kami' },
    ],
  },
  {
    title: 'Program',
    links: [
      { label: 'Ruang Tumbuh',    href: '/program/ruang-tumbuh' },
      { label: 'Catatan Tumbuh',  href: '/program/catatan-tumbuh' },
      { label: 'Forum Kota',      href: '/program/forum-kota' },
      { label: 'Belajar Bersama', href: '/program/belajar-bersama' },
    ],
  },
  {
    title: 'Lainnya',
    links: [
      { label: 'Blog',            href: '/catatan-tumbuh' },
      { label: 'Bergabung',       href: '/kontak' },
      { label: 'Donasi',          href: '/kontak' },
      { label: 'Kontak',          href: '/kontak' },
    ],
  },
];

const socials = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
  },
  {
    label: 'Twitter / X',
    href: '#',
    path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-7a2 2 0 110 4 2 2 0 010-4z',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1f0e] text-white">
      {/* Top strip: newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3
                className="text-lg font-semibold mb-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ikuti Perkembangan Bagi Dunia
              </h3>
              <p className="text-sm text-gray-400">
                Dapatkan catatan terbaru dan undangan kegiatan langsung ke inbox Anda.
              </p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#9aaa62] transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#627238] text-white text-sm font-semibold rounded-full hover:bg-[#4c5a2b] transition-colors shrink-0"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#627238] flex items-center justify-center text-white text-xs font-bold">
                BD
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Bagi Dunia
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
            A space to gather, explore your good, and grow with young changemakers.
            </p>

            {/* Contact details */}
            <ul className="space-y-2.5 text-sm text-gray-400 mb-7">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#9aaa62]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>hj buang</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0 text-[#9aaa62]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:halo@bagidunia.org" className="hover:text-[#9aaa62] transition-colors">
                  email bagdun
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0 text-[#9aaa62]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+62211234567" className="hover:text-[#9aaa62] transition-colors">
                  + no telp
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#627238] hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#9aaa62] mb-5">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {year} Bagi Dunia. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
