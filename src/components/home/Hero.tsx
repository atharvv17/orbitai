
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-32 pb-20 md:pt-36 md:pb-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(37,112,255,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
      <div className="absolute inset-y-0 right-0 -z-10 w-[40%] bg-[radial-gradient(90%_90%_at_100%_0%,rgba(120,119,198,0.3)_0%,rgba(255,255,255,0)_100%)]"></div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-blue-100 text-orbit-blue-700 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orbit-blue-500 mr-2 animate-pulse-light"></span>
            Intelligent Automation for Finance Professionals
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in-down text-balance">
            Unleash Your Financial Practice's
            <span className="text-orbit-blue-600"> Full Potential</span>
          </h1>
          
          <p className="text-lg text-orbit-gray-600 mx-auto max-w-2xl mb-8 animate-fade-in-up delay-100 text-pretty">
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
          <div className="aspect-[16/9] bg-orbit-gray-900 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orbit-blue-600/90 to-orbit-blue-800/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card rounded-xl p-6 md:p-8 max-w-lg backdrop-blur-md bg-white/10 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-white/70">Orbit AI Dashboard</div>
                </div>
                <div className="h-44 md:h-60 bg-orbit-gray-800/40 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white/70 text-center px-6">
                    <p className="font-medium mb-2">AI-driven analytics visualized in real-time</p>
                    <div className="flex justify-between items-end h-28 mb-2">
                      <div className="w-8 md:w-12 bg-orbit-blue-500/50 rounded-t"></div>
                      <div className="w-8 md:w-12 bg-orbit-blue-500/70 rounded-t h-16"></div>
                      <div className="w-8 md:w-12 bg-orbit-blue-500/90 rounded-t h-24"></div>
                      <div className="w-8 md:w-12 bg-orbit-blue-500 rounded-t h-20"></div>
                      <div className="w-8 md:w-12 bg-white/30 rounded-t h-12"></div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-8 bg-orbit-gray-800/40 rounded"></div>
                  <div className="h-8 bg-orbit-blue-500/60 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
