import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import programs from '@/data/programs.json';

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return {};
  return {
    title: `${program.title} — Program Bagi Dunia`,
    description: program.description,
  };
}

export default function ProgramDetailPage({ params }) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.id !== program.id);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#2d3419] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={program.image} alt={program.title} fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Semua Program
          </Link>
          <span className="inline-block text-xs font-semibold text-[#9aaa62] bg-white/10 px-3 py-1 rounded-full mb-4">
            {program.category}
          </span>
          <h1
            className="text-4xl sm:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {program.title}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            {program.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10">
                <Image src={program.image} alt={program.title} fill className="object-cover" />
              </div>
              <h2
                className="text-2xl font-semibold text-[#2d3419] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Tentang Program
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {program.longDescription}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Program ini merupakan bagian integral dari ekosistem kolaborasi Bagi Dunia.
                Melalui pendekatan yang inklusif dan berbasis komunitas, kami memastikan
                bahwa setiap kegiatan memberikan dampak nyata yang dapat dirasakan langsung
                oleh masyarakat.
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#f6f7f0] rounded-2xl p-6 sticky top-24">
                <h3
                  className="text-lg font-semibold text-[#2d3419] mb-5"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Yang Kami Tawarkan
                </h3>
                <ul className="space-y-3">
                  {program.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#eaecdc] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#627238]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-4">Tertarik bergabung dalam program ini?</p>
                  <Link
                    href="/kontak"
                    className="block text-center py-3 bg-[#627238] text-white font-semibold rounded-xl hover:bg-[#4c5a2b] transition-colors text-sm"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other programs */}
      {others.length > 0 && (
        <section className="py-16 bg-[#f6f7f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-semibold text-[#2d3419] mb-8"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Program Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {others.slice(0, 3).map((p) => (
                <Link href={`/program/${p.slug}`} key={p.id} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-xs font-semibold text-[#627238] bg-[#f6f7f0] px-2 py-0.5 rounded-full mb-2">
                        {p.category}
                      </span>
                      <h3 className="font-semibold text-[#2d3419] group-hover:text-[#627238] transition-colors text-sm leading-snug">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
