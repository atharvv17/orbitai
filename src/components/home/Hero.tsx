
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { ArrowRight } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="pt-32 pb-12 md:pt-36 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(139,112,255,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
      <div className="absolute inset-y-0 right-0 -z-10 w-[40%] bg-[radial-gradient(90%_90%_at_100%_0%,rgba(255,143,102,0.15)_0%,rgba(255,255,255,0)_100%)]"></div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-purple-500/10 text-orbit-purple-300 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orbit-purple-400 mr-2 animate-pulse-light"></span>
            Intelligent Automation for Finance Professionals
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in-down text-balance text-orbit-yellow-200">
            Unleash Your Financial Practice's
            <span className="orbit-gradient-text"> Full Potential</span>
          </h1>
          
          <p className="text-lg text-orbit-yellow-100/80 mx-auto max-w-2xl mb-8 animate-fade-in-up delay-100 text-pretty">
            Streamline operations, nurture client relationships, and focus on high-value strategies with intelligent automation built for finance professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <CustomButton size="lg" className="w-full sm:w-auto">
              Discover How Orbit AI Works
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </CustomButton>
            <CustomButton variant="outline" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </CustomButton>
          </div>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl animate-fade-in-up delay-300">
          
        </div>
      </Container>
    </section>;
};
