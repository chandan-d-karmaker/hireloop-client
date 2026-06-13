import FeaturesSection from "@/components/main/Featured";
import HeroSection from "@/components/main/hero";
import JobsSection from "@/components/main/jobs";
import NavigationBar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <JobsSection/>
      <FeaturesSection/>
    </div>
  );
}
