
import { Container } from "@/components/ui/Container";
import { Search, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [{
  icon: Search,
  title: "Discovery",
  description: "We analyze your practice's goals and bottlenecks.",
  delay: "0"
}, {
  icon: Settings,
  title: "Customization",
  description: "Tailor the AI Caller and digital tools to your client base.",
  delay: "100"
}, {
  icon: Rocket,
  title: "Deployment",
  description: "Launch with zero disruption to your workflow.",
  delay: "200"
}, {
  icon: TrendingUp,
  title: "Growth",
  description: "Watch qualified leads roll in and your influence expand.",
  delay: "300"
}];

export const HowItWorks = () => {
  return <section id="how-it-works" className="py-12 bg-orbit-cosmos-200/40 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-orbit-cosmos-300/80 to-transparent"></div>
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-purple-500/20 text-orbit-purple-300 text-sm font-medium mb-6 animate-fade-in">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in text-orbit-yellow-200">
            Seamless Integration, Immediate Impact
          </h2>
          <p className="text-orbit-yellow-100/80 animate-fade-in">
            Our team handles the setup, so you don't have to. Within weeks, you'll see more time on your calendar and more opportunities in your pipeline.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-col items-center text-center animate-fade-in-up" 
                style={{
                  animationDelay: `${step.delay}ms`
                }}
              >
                <div className="w-16 h-16 rounded-full bg-orbit-cosmos-400/70 shadow-sm border border-orbit-purple-400/20 flex items-center justify-center mb-3 transition-all duration-500 hover:shadow-lg hover:scale-110">
                  <step.icon className="text-orbit-orange-400" size={24} />
                </div>
                
                {/* Connector Line with animation - moved between icon and text */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-orbit-purple-400/20 z-0" style={{ left: '58%', width: '42%' }}>
                    <div className="h-full bg-orbit-purple-400/60 w-0 animate-progress"></div>
                    <div className="absolute top-0 right-0 transform translate-x-1/2 rotate-[-90deg] animate-pulse-light">
                      <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0L20 4L16 8V0Z" fill="#A693FF" />
                      </svg>
                    </div>
                  </div>
                )}
                
                <div className="mt-5">
                  <h3 className="text-xl font-semibold mb-2 text-orbit-yellow-200">{step.title}</h3>
                  <p className="text-orbit-yellow-100/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>;
};
