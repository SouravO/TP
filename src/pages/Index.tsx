import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CultureSection from '@/components/CultureSection';
import ServicesSection from '@/components/ServicesSection';
import GlobalSection from '@/components/GlobalSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import OverlayComponent from '@/components/OverlayComponent';
import Categorylist from '@/components/Categorylist';
const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <CustomCursor />
      {!isLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <main>
          {/* <OverlayComponent/> */}
          <HeroSection />
          <Categorylist />
          <CultureSection />
          <ServicesSection />
          <GlobalSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
