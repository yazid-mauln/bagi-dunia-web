import Image from 'next/image';
import Link from 'next/link';
import team from '@/data/team.json';

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-4">Tim Kami</p>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#2d3419] max-w-sm leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Tim Bagi Dunia
            </h2>
          </div>
          <Link
            href="/tentang-kami"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors shrink-0"
          >
            Semua Anggota
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member) => (
            <div key={member.id} className="group text-center">
              {/* Avatar */}
              <div className="relative mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24">
                {/* Background ring that expands on hover */}
                <div className="absolute inset-0 rounded-full ring-4 ring-[#eaecdc] group-hover:ring-[#9aaa62] transition-all duration-300 group-hover:scale-110" />
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Name & role */}
              <h4 className="font-semibold text-[#2d3419] text-sm leading-snug">{member.name}</h4>
              <p className="text-xs text-[#627238] mt-1 font-medium">{member.role}</p>

              {/* Bio on hover (visible on larger screens only) */}
              <p className="hidden lg:block text-xs text-gray-400 mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[140px] mx-auto line-clamp-3">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
