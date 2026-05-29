import Hero from '../components/Hero';
import DegreeSelection from '../components/DegreeSelection';
import SpecializationSelection from '../components/SpecializationSelection';
import RoadmapTimeline from '../components/RoadmapTimeline';
import CareerGuidance from '../components/CareerGuidance';
import InternshipGuidance from '../components/InternshipGuidance';
import SalaryInsights from '../components/SalaryInsights';
import FAQ from '../components/FAQ';
import MotivationCTA from '../components/MotivationCTA';

export default function Home() {
  return (
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
  );
}
