import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { PanelPreview } from "@/components/sections/panel-preview";
import { StatsSection } from "@/components/sections/stats";
import { FeaturesSection } from "@/components/sections/features";
import { SecuritySection } from "@/components/sections/security";
import { PricingSection } from "@/components/sections/pricing";
import { InstallationSection } from "@/components/sections/installation";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PanelPreview />
      <StatsSection />
      <FeaturesSection />
      <SecuritySection />
      <PricingSection />
      <InstallationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
