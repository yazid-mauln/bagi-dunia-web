import Navbar               from '@/components/Navbar';
import Footer               from '@/components/Footer';
import HeroSection          from '@/components/HeroSection';
import StatsBar             from '@/components/StatsBar';
import PrinciplesSection    from '@/components/PrinciplesSection';
import ValuesSection        from '@/components/ValuesSection';
import ProgramsPreview      from '@/components/ProgramsPreview';
import CollaboratorsSection from '@/components/CollaboratorsSection';
import CTASection           from '@/components/CTASection';
import AnimatedSection      from '@/components/AnimatedSection';

export const metadata = {
  title: 'Bagi Dunia — Bersama kita berbagi, membangun peluang, dan menumbuhkan dampak',
  description:
    'Bagi Dunia adalah komunitas gerakan sosial yang membuka ruang untuk berbagi, bertumbuh, dan bergerak bersama demi dunia yang lebih baik.',
};

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Hero is above the fold — no animation needed */}
      <HeroSection />

      {/* Stats bar fades in as user scrolls past hero */}
      <AnimatedSection direction="up" duration={0.6}>
        <StatsBar />
      </AnimatedSection>

      {/* Each subsequent section slides up on scroll */}
      <AnimatedSection direction="up" delay={0} duration={0.7}>
        <PrinciplesSection />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0} duration={0.7}>
        <ValuesSection />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0} duration={0.7}>
        <ProgramsPreview />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0} duration={0.7}>
        <CollaboratorsSection />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0} duration={0.7}>
        <CTASection />
      </AnimatedSection>

      <Footer />
    </main>
  );
}
