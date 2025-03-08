
import { Container } from "@/components/ui/Container";
import { UserPlus, Globe, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "Client Acquisition Simplified",
    description: "Our AI Caller engages prospects, qualifies leads, and follows up relentlessly—delivering warm opportunities straight to your desk.",
    icon: UserPlus,
    delay: "0",
  },
  {
    title: "Effortless Digital Presence",
    description: "Boost your visibility across social platforms and search engines, positioning you as the go-to expert in your market—without lifting a finger.",
    icon: Globe,
    delay: "100",
  },
  {
    title: "Time Reclaimed for Strategy",
    description: "Automate the operational grind and redirect your focus to crafting wealth-building strategies for your clients.",
    icon: Clock,
    delay: "200",
  },
];

export const Benefits = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-orbit-cosmos-300/80 backdrop-blur-sm"></div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in text-orbit-yellow-200">
            Designed for Financial Excellence
          </h2>
          <p className="text-orbit-yellow-100/80 max-w-2xl mx-auto animate-fade-in">
            Our platform empowers you to focus on what truly matters: growing your business and serving your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-orbit-cosmos-400/70 rounded-xl p-8 shadow-sm border border-orbit-purple-400/20 card-hover",
                "animate-fade-in-up backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-lg",
              )}
              style={{ animationDelay: `${benefit.delay}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-orbit-orange-500/20 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:rotate-12">
                <benefit.icon className="text-orbit-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orbit-yellow-200">{benefit.title}</h3>
              <p className="text-orbit-yellow-100/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
