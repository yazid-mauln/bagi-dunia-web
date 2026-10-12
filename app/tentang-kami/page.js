import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import AnimatedSection, { AnimatedGroup } from '@/components/AnimatedSection';
import team from '@/data/team.json';

export const metadata = {
  title: 'Tentang Kami — Bagi Dunia',
  description: 'Kenali visi, misi, nilai, dan tim di balik Bagi Dunia.',
};

export default function TentangKami() {
  return (
    <main>
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-[#f6f7f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0} duration={0.5}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#627238] mb-4">
              Tentang Kami
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} duration={0.65}>
            <h1
              className="text-4xl sm:text-5xl font-semibold text-[#2d3419] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Siapa Kami dan Mengapa Kami Ada
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2} duration={0.6}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Bagi Dunia adalah komunitas gerakan sosial yang percaya pada kekuatan kolaborasi
              untuk menciptakan perubahan yang bermakna dan berkelanjutan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" duration={0.7}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#627238] mb-4">
                  Visi
                </p>
                <h2
                  className="text-3xl font-semibold text-[#2d3419] leading-tight mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Dunia di mana setiap individu memiliki akses dan kesempatan yang sama untuk
                  tumbuh dan berkontribusi.
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami membayangkan sebuah dunia yang lebih adil, inklusif, dan berkelanjutan —
                  di mana kekayaan pengetahuan, sumber daya, dan kesempatan dapat diakses oleh
                  semua orang, tanpa terkecuali.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" duration={0.7} delay={0.1}>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Visi Bagi Dunia"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#f6f7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" duration={0.7} className="relative h-80 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
                alt="Misi Bagi Dunia"
                fill
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection direction="right" duration={0.7} delay={0.1} className="order-1 md:order-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#627238] mb-4">
                  Misi
                </p>
                <h2
                  className="text-3xl font-semibold text-[#2d3419] leading-tight mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Membangun ekosistem kolaborasi yang memberdayakan komunitas.
                </h2>
                <ul className="space-y-4">
                  {[
                    'Menyediakan platform dan ruang untuk pertemuan antar komunitas',
                    'Mendokumentasikan dan menyebarkan pengetahuan dari gerakan sosial',
                    'Memfasilitasi dialog antara warga dan pemangku kebijakan',
                    'Menguatkan kapasitas individu dan organisasi masyarakat sipil',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#eaecdc] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#627238]" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <AnimatedSection direction="up" duration={0.65}>
        <section className="py-16 bg-[#2d3419] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { stat: '?', label: 'Tahun Bergerak' },
                { stat: '?', label: 'Program Dijalankan' },
                { stat: '?', label: 'Komunitas Terhubung' },
                { stat: '?', label: 'Individu Terdampak' },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p
                    className="text-4xl font-bold text-[#9aaa62] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {stat}
                  </p>
                  <p className="text-sm text-gray-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" duration={0.65}>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#627238] mb-4">
                Tim Kami
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-[#2d3419] leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Orang-orang di Balik Bagi Dunia
              </h2>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                Individu-individu berdedikasi yang bekerja setiap hari untuk mendorong perubahan
                sosial yang bermakna.
              </p>
            </div>
          </AnimatedSection>

          {/* Team cards — staggered via AnimatedGroup */}
          <AnimatedGroup
            stagger={0.1}
            delay={0.05}
            direction="up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-[#f6f7f0] rounded-2xl p-6 flex items-start gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2d3419]">{member.name}</h3>
                  <p className="text-sm text-[#627238] mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      <Footer />
    </main>
  );
}
