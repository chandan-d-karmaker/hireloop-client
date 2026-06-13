import FeaturesSection from "@/components/main/Featured";
import HeroSection from "@/components/main/hero";
import JobsSection from "@/components/main/jobs";
import PricingSection from "@/components/main/pricing";
import NavigationBar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <JobsSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
}
