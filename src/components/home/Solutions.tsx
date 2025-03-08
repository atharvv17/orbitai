
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { Phone, BarChart3, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "ai-caller",
    icon: Phone,
    title: "AI Caller",
    tagline: "Your 24/7 Client Engagement Expert",
    description: "Imagine a tireless assistant who answers inquiries, qualifies prospects, and schedules follow-ups—all while sounding as polished as you. Our AI Caller filters out noise, nurtures relationships, and hands you pre-vetted leads ready for your expertise.",
    delay: "0",
    color: "blue",
    visual: (
      <div className="relative h-64 bg-orbit-cosmos-300/50 rounded-lg overflow-hidden border border-orbit-purple-400/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_50%_10%,rgba(139,112,255,0.2)_0%,rgba(255,255,255,0)_100%)]"></div>
        <div className="absolute inset-x-0 top-6 flex justify-center">
          <div className="w-64 h-12 bg-orbit-cosmos-400/70 rounded-full shadow-sm flex items-center px-4 border border-orbit-purple-400/20">
            <div className="w-8 h-8 bg-orbit-orange-500/20 rounded-full flex items-center justify-center mr-3">
              <Phone size={16} className="text-orbit-orange-400" />
            </div>
            <div className="text-orbit-yellow-200 font-medium">AI Caller Active</div>
            <div className="ml-auto w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-24 flex justify-center">
          <div className="glass-card bg-orbit-cosmos-400/70 rounded-lg shadow-sm p-4 w-64 border border-orbit-purple-400/20">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-sm text-orbit-yellow-200">Lead Score</h4>
              <div className="text-orbit-orange-400 text-sm font-semibold">87/100</div>
            </div>
            <div className="h-2 bg-orbit-cosmos-200/50 rounded-full mb-3">
              <div className="h-2 bg-orbit-orange-500 rounded-full w-[87%]"></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-orbit-yellow-100/60">Interest Level</span>
                <span className="text-orbit-yellow-200">Very High</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-orbit-yellow-100/60">Budget Range</span>
                <span className="text-orbit-yellow-200">$500k - $1M</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-orbit-yellow-100/60">Timeline</span>
                <span className="text-orbit-yellow-200">2-4 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "digital-influence",
    icon: BarChart3,
    title: "Digital Influence Amplifier",
    tagline: "Stand Out Where Your Clients Are Looking",
    description: "We elevate your presence on social platforms and search results, ensuring high-net-worth prospects find you first. From crafting compelling posts to optimizing your profile's reach, we make your expertise impossible to ignore.",
    delay: "100",
    color: "indigo",
    visual: (
      <div className="relative h-64 bg-orbit-cosmos-300/50 rounded-lg overflow-hidden border border-orbit-purple-400/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_50%_10%,rgba(139,112,255,0.2)_0%,rgba(255,255,255,0)_100%)]"></div>
        <div className="absolute inset-x-0 top-6 flex justify-center">
          <div className="w-64 h-48 bg-orbit-cosmos-400/70 rounded-lg shadow-sm overflow-hidden border border-orbit-purple-400/20">
            <div className="h-8 bg-orbit-purple-500/70 flex items-center px-3">
              <div className="w-3 h-3 bg-orbit-yellow-300 rounded-full"></div>
              <div className="ml-auto text-orbit-yellow-200 text-xs">Profile Optimizer</div>
            </div>
            <div className="p-3">
              <div className="flex space-x-3 mb-3">
                <div className="w-10 h-10 bg-orbit-purple-400/30 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-3 bg-orbit-cosmos-200/50 rounded-full w-3/4 mb-2"></div>
                  <div className="h-3 bg-orbit-cosmos-200/50 rounded-full w-1/2"></div>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="h-2 bg-orbit-cosmos-200/50 rounded-full">
                  <div className="h-2 bg-orbit-purple-500 rounded-full w-[65%]"></div>
                </div>
                <div className="h-2 bg-orbit-cosmos-200/50 rounded-full">
                  <div className="h-2 bg-orbit-purple-500 rounded-full w-[82%]"></div>
                </div>
                <div className="h-2 bg-orbit-cosmos-200/50 rounded-full">
                  <div className="h-2 bg-orbit-purple-500 rounded-full w-[45%]"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-xs text-orbit-yellow-100/60">Engagement Score</div>
                <div className="text-sm font-medium text-orbit-purple-300">+64%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "operational-streamlining",
    icon: Clock,
    title: "Operational Streamlining",
    tagline: "Reclaim Hours, Boost Revenue",
    description: "Say goodbye to manual follow-ups and repetitive admin. Our system automates the details—appointment reminders, client updates, and more—so you can focus on high-impact moves like portfolio rebalancing or landing that next big account.",
    delay: "200",
    color: "teal",
    visual: (
      <div className="relative h-64 bg-orbit-cosmos-300/50 rounded-lg overflow-hidden border border-orbit-purple-400/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_50%_10%,rgba(139,112,255,0.2)_0%,rgba(255,255,255,0)_100%)]"></div>
        <div className="absolute inset-x-0 top-4 flex justify-center">
          <div className="w-64 bg-orbit-cosmos-400/70 rounded-lg shadow-sm p-4 border border-orbit-purple-400/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-sm text-orbit-yellow-200">Time Saved This Week</h4>
              <div className="text-orbit-orange-400 text-lg font-bold">12h</div>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-4">
              {[65, 45, 80, 60, 90, 40, 70].map((value, i) => (
                <div key={i} className="h-16 bg-orbit-cosmos-200/50 rounded-md relative">
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-orbit-orange-500 rounded-md"
                    style={{ height: `${value}%` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-orbit-yellow-100/60">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-orbit-cosmos-300/80 backdrop-blur-sm">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-orange-500/20 text-orbit-orange-300 text-sm font-medium mb-6 animate-fade-in">
            Our Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in text-orbit-yellow-200">
            Automation That Speaks Your Language
          </h2>
          <p className="text-orbit-yellow-100/80 animate-fade-in">
            From lead qualification to amplifying your online influence, Orbit AI delivers measurable outcomes for your financial practice.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
              )}
            >
              <div 
                className={cn(
                  "animate-fade-in-up",
                )}
                style={{ animationDelay: `${solution.delay}ms` }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-cosmos-100/10 text-orbit-yellow-200 text-sm font-medium mb-4">
                  <solution.icon size={16} className="mr-2 text-orbit-orange-400" />
                  {solution.title}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-orbit-yellow-200">{solution.tagline}</h3>
                <p className="text-orbit-yellow-100/80 mb-6">
                  {solution.description}
                </p>
                <a href="https://calendly.com/orbitautogen/45min?month=2025-03" target="_blank" rel="noopener noreferrer">
                  <CustomButton variant="outline">
                    Learn More
                  </CustomButton>
                </a>
              </div>
              
              <div 
                className={cn(
                  "animate-fade-in",
                )}
                style={{ animationDelay: `${parseInt(solution.delay) + 100}ms` }}
              >
                {solution.visual}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://calendly.com/orbitautogen/45min?month=2025-03" target="_blank" rel="noopener noreferrer">
            <CustomButton size="lg">
              See Your Custom Growth Plan
            </CustomButton>
          </a>
        </div>
      </Container>
    </section>
  );
};
