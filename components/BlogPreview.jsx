import Image from 'next/image';
import Link from 'next/link';
import blog from '@/data/blog.json';

export default function BlogPreview() {
  const [featured, ...rest] = blog.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-[#f6f7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-4">Catatan Tumbuh</p>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-[#2d3419] max-w-lg leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Refleksi &amp; Cerita dari Lapangan
            </h2>
          </div>
          <Link
            href="/catatan-tumbuh"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#627238] hover:text-[#4c5a2b] transition-colors shrink-0"
          >
            Semua Catatan
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Layout: featured large + 3 small */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Featured post */}
          <Link href={`/catatan-tumbuh/${featured.slug}`} className="group lg:col-span-3">
            <article className="relative h-72 sm:h-96 lg:h-full min-h-[360px] rounded-3xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="inline-block text-xs font-semibold text-[#9aaa62] bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                  {featured.category}
                </span>
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-2 group-hover:text-[#d4d9b8] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {featured.title}
                </h3>
                <p className="text-sm text-white/70 line-clamp-2">{featured.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>
                    {new Date(featured.date).toLocaleDateString('id-ID', {
                      day: 'numeric', month: 'short', year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Secondary posts */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((post) => (
              <Link href={`/catatan-tumbuh/${post.slug}`} key={post.id} className="group">
                <article className="card-base flex gap-4 p-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-[#627238]">{post.category}</span>
                    <h3 className="font-semibold text-[#2d3419] text-sm leading-snug mt-1 mb-1.5 group-hover:text-[#627238] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
