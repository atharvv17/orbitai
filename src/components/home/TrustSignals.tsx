
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

export const TrustSignals = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Trusted by Leading Financial Advisors
            </h2>
            <p className="text-orbit-gray-600 mb-8">
              Join the growing community of finance professionals who have transformed their practice with Orbit AI.
            </p>
            
            <div className="bg-orbit-blue-50 rounded-xl p-8 border border-orbit-blue-100 relative">
              <Quote className="absolute top-4 left-4 text-orbit-blue-200" size={32} />
              <blockquote className="pl-6 relative">
                <p className="text-lg text-orbit-gray-800 mb-6 italic">
                  "Orbit AI turned my practice into a client-attracting machine. I've doubled my close rate in six months."
                </p>
                <footer className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-orbit-gray-200 mr-4"></div>
                  <div>
                    <cite className="font-semibold text-orbit-gray-900 not-italic">John D.</cite>
                    <p className="text-orbit-gray-600 text-sm">Wealth Advisor</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-100">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">
                Industry Recognized Excellence
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orbit-gray-50 rounded-lg p-6 flex items-center justify-center h-24">
                  <div className="text-center">
                    <div className="text-orbit-gray-400 font-bold text-sm uppercase tracking-wide">Certified by</div>
                    <div className="text-orbit-gray-800 font-bold mt-1">CFP Board</div>
                  </div>
                </div>
                
                <div className="bg-orbit-gray-50 rounded-lg p-6 flex items-center justify-center h-24">
                  <div className="text-center">
                    <div className="text-orbit-gray-400 font-bold text-sm uppercase tracking-wide">Member of</div>
                    <div className="text-orbit-gray-800 font-bold mt-1">CFA Institute</div>
                  </div>
                </div>
                
                <div className="bg-orbit-gray-50 rounded-lg p-6 flex items-center justify-center h-24">
                  <div className="text-center">
                    <div className="text-orbit-gray-400 font-bold text-sm uppercase tracking-wide">Recognized by</div>
                    <div className="text-orbit-gray-800 font-bold mt-1">FinTech 500</div>
                  </div>
                </div>
                
                <div className="bg-orbit-gray-50 rounded-lg p-6 flex items-center justify-center h-24">
                  <div className="text-center">
                    <div className="text-orbit-gray-400 font-bold text-sm uppercase tracking-wide">Trusted by</div>
                    <div className="text-orbit-gray-800 font-bold mt-1">10,000+ Advisors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
