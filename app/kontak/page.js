import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Kontak Kami — Bagi Dunia',
  description: 'Hubungi tim Bagi Dunia untuk kolaborasi, pertanyaan, atau bergabung sebagai relawan.',
};

const contactItems = [
  {
    title: 'Alamat',
    detail: 'Jl. Kemang Raya No. 18, Jakarta Selatan, DKI Jakarta 12730',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    detail: 'halo@bagidunia.org',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Telepon',
    detail: '+62 21 1234 5678',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Jam Operasional',
    detail: 'Senin – Jumat, 09.00 – 17.00 WIB',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function KontakPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f6f7f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0} duration={0.5}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#627238] mb-4">
              Kontak Kami
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} duration={0.65}>
            <h1
              className="text-4xl sm:text-5xl font-semibold text-[#2d3419] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Mari Bergerak Bersama
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2} duration={0.6}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Ada pertanyaan, ingin berkolaborasi, atau bergabung dengan komunitas kami? Kami
              senang mendengar dari Anda.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact form */}
            <AnimatedSection direction="left" duration={0.7} delay={0}>
              <div>
                <h2
                  className="text-2xl font-semibold text-[#2d3419] mb-8"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Kirim Pesan
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#4c5a2b] mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9aaa62] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4c5a2b] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@anda.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9aaa62] focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4c5a2b] mb-2">
                      Organisasi / Komunitas
                    </label>
                    <input
                      type="text"
                      placeholder="Nama organisasi Anda (opsional)"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9aaa62] focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4c5a2b] mb-2">
                      Topik
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9aaa62] focus:border-transparent transition text-gray-600 bg-white">
                      <option value="">Pilih topik</option>
                      <option>Kolaborasi Program</option>
                      <option>Bergabung sebagai Relawan</option>
                      <option>Pertanyaan Umum</option>
                      <option>Media &amp; Liputan</option>
                      <option>Donasi &amp; Dukungan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4c5a2b] mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tuliskan pesan Anda..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9aaa62] focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#627238] text-white font-semibold rounded-xl hover:bg-[#4c5a2b] transition-colors"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection direction="right" duration={0.7} delay={0.1}>
              <div>
                <h2
                  className="text-2xl font-semibold text-[#2d3419] mb-8"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Informasi Kontak
                </h2>

                <div className="space-y-6 mb-10">
                  {contactItems.map(({ title, detail, icon }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#f6f7f0] flex items-center justify-center shrink-0 text-[#627238]">
                        {icon}
                      </div>
                      <div>
                        <p className="font-medium text-[#2d3419] text-sm">{title}</p>
                        <p className="text-gray-500 text-sm mt-1">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Volunteer CTA */}
                <div className="p-6 bg-[#f6f7f0] rounded-2xl">
                  <h3
                    className="text-lg font-semibold text-[#2d3419] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Bergabung sebagai Relawan
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Tertarik untuk berkontribusi langsung? Daftarkan diri Anda sebagai relawan
                    dan jadilah bagian dari gerakan perubahan bersama Bagi Dunia.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors"
                  >
                    Daftar sebagai Relawan
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Social links */}
                <div className="mt-8">
                  <p className="text-sm font-medium text-[#2d3419] mb-4">Ikuti Kami</p>
                  <div className="flex gap-3">
                    {[
                      { label: 'Instagram', href: '#', path: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                      { label: 'Twitter', href: '#', path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                      { label: 'LinkedIn', href: '#', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-7a2 2 0 110 4 2 2 0 010-4z' },
                    ].map(({ label, href, path }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 rounded-full bg-[#f6f7f0] flex items-center justify-center text-[#627238] hover:bg-[#627238] hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d={path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
