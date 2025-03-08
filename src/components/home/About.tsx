
import { Container } from "@/components/ui/Container";

export const About = () => {
  return (
    <section id="about" className="py-12 bg-orbit-cosmos-300/80 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orbit-purple-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orbit-orange-400 rounded-full opacity-10 blur-3xl"></div>
      
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-orbit-purple-600/40 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orbit-purple-400/50 to-orbit-purple-800/50 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/10 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm mb-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5"/>
                          <path d="M8.5 12H15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M12 15.5V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-orbit-yellow-200">Your Partner in Growth</h3>
                    <p className="max-w-xs mx-auto text-sm text-orbit-yellow-100/80">
                      Founded to create tools that work as hard as finance professionals do
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-64 h-48 bg-orbit-cosmos-400/70 rounded-lg shadow-lg p-6 glass-card">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h4 className="font-semibold text-orbit-yellow-200 mb-2">Our Mission</h4>
                    <p className="text-sm text-orbit-yellow-100/80">
                      To free you from administrative drag and amplify your ability to deliver results
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-1 mt-4">
                    <div className="h-1 bg-orbit-orange-400/50 rounded-full"></div>
                    <div className="h-1 bg-orbit-orange-500/50 rounded-full"></div>
                    <div className="h-1 bg-orbit-purple-500/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-orange-500/20 text-orbit-orange-300 text-sm font-medium mb-6">
              About Orbit AI
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-orbit-yellow-200">
              Your Partner in Financial Practice Growth
            </h2>
            
            <p className="text-orbit-yellow-100/80 mb-6">
              Orbit AI was founded to solve a simple problem: finance professionals deserve tools that work as hard as they do. We've built a system that blends cutting-edge AI with a deep understanding of the financial landscape.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="bg-orbit-orange-500/20 text-orbit-orange-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-orbit-yellow-200 mb-1">Precision Automation</h3>
                  <p className="text-orbit-yellow-100/80">Tailored solutions that align with your workflow.</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-orbit-orange-500/20 text-orbit-orange-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-orbit-yellow-200 mb-1">Client-Centric Design</h3>
                  <p className="text-orbit-yellow-100/80">Technology that enhances trust and connection.</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-orbit-orange-500/20 text-orbit-orange-300 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-orbit-yellow-200 mb-1">Growth-Focused Innovation</h3>
                  <p className="text-orbit-yellow-100/80">Tools that scale with your ambitions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
