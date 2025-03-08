
import { Container } from "@/components/ui/Container";
import { Search, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your practice's goals and bottlenecks.",
    delay: "0",
  },
  {
    icon: Settings,
    title: "Customization",
    description: "Tailor the AI Caller and digital tools to your client base.",
    delay: "100",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launch with zero disruption to your workflow.",
    delay: "200",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Watch qualified leads roll in and your influence expand.",
    delay: "300",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-orbit-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-blue-100 text-orbit-blue-700 text-sm font-medium mb-6 animate-fade-in">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in">
            Seamless Integration, Immediate Impact
          </h2>
          <p className="text-orbit-gray-600 animate-fade-in">
            Our team handles the setup, so you don't have to. Within weeks, you'll see more time on your calendar and more opportunities in your pipeline.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-orbit-blue-100 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-col items-center text-center animate-fade-in-up"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-orbit-gray-100 flex items-center justify-center mb-6">
                  <step.icon className="text-orbit-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-orbit-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 rotate-[-90deg]">
                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 0L20 4L16 8V0Z" fill="#BFDBFE" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 border border-orbit-gray-100 shadow-sm animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-orbit-blue-600 mb-2">75%</div>
              <p className="text-orbit-gray-700">reduction in time spent on client follow-ups</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orbit-blue-600 mb-2">40%</div>
              <p className="text-orbit-gray-700">increase in qualified leads within 90 days</p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold text-orbit-blue-600 mb-2">2x</div>
              <p className="text-orbit-gray-700">social engagement for advisors using our system</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
