import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import BenefitsSection from '@/components/BenefitsSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import CampusLifeSection from '@/components/CampusLifeSection';
import RankingsSection from '@/components/RankingsSection';
import BlogsEventsSection from '@/components/BlogsEventsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
      <Footer />
    </div>
  );
}
