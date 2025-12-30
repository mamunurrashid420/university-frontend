import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CampusLifeSection from '@/components/CampusLifeSection';
import RankingsSection from '@/components/RankingsSection';
import BlogsEventsSection from '@/components/BlogsEventsSection';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <ProgramsSection />
      <BenefitsSection />
      <FeaturesSection />
      <StatsSection />
      <CampusLifeSection />
      <RankingsSection />
      <BlogsEventsSection />
    </main>
  );
}
