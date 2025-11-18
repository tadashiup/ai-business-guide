import { Hero } from "@/components/Hero";
import { ToolsSection } from "@/components/ToolsSection";
import { IntroSection } from "@/components/IntroSection";
import { RevolutionSection } from "@/components/RevolutionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ToolsSection />
      <IntroSection />
      <RevolutionSection />
    </div>
  );
};

export default Index;
