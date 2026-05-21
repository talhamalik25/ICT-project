import { useState } from 'react';
import { JourneyProvider } from './context/JourneyContext';
import LoadingScreen from './components/LoadingScreen';
import GridOverlay from './components/ui/GridOverlay';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DegreeSelection from './components/DegreeSelection';
import SpecializationSelection from './components/SpecializationSelection';
import RoadmapTimeline from './components/RoadmapTimeline';
import CareerGuidance from './components/CareerGuidance';
import InternshipGuidance from './components/InternshipGuidance';
import SalaryInsights from './components/SalaryInsights';
import FAQ from './components/FAQ';
import MotivationCTA from './components/MotivationCTA';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <JourneyProvider>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="relative min-h-screen bg-[#020617]">
        <GridOverlay />
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <DegreeSelection />
            <SpecializationSelection />
            <RoadmapTimeline />
            <CareerGuidance />
            <InternshipGuidance />
            <SalaryInsights />
            <FAQ />
            <MotivationCTA />
          </main>
          <Footer />
        </div>
      </div>
    </JourneyProvider>
  );
}
