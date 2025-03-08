
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";
import { CaseStudyCard } from "./case-studies/CaseStudyCard";

// Extracting the case studies data to make the component more manageable
const caseStudies = [
  {
    role: "Wealth Advisor",
    location: "US-Based",
    title: "300% Client Base Growth with Facebook Ads",
    target: "Retirees with $500K+ in assets",
    approach: "Facebook ad campaign offering a free \"Retirement Income Blueprint\"",
    targeting: "Ages 55-70 with interests in golf, travel, and luxury brands",
    metrics: [
      { label: "Leads Generated", value: "150", percentage: 100 },
      { label: "Appointment Rate", value: "30%", percentage: 30 },
      { label: "Close Rate", value: "33%", percentage: 33 }
    ],
    results: "$7.5M in new managed assets and $75K in annual fees, tripling client base from 5 to 20",
    source: "DigitalMarketer"
  },
  {
    role: "Financial Planner",
    location: "UK-Based",
    title: "5x Appointment Boost with FB Ads & Chatbot",
    target: "Pre-retirees in affluent postal codes",
    approach: "\"Pension Health Check\" Facebook campaign with Messenger chatbot",
    targeting: "AI-like chatbot for qualification and scheduling",
    metrics: [
      { label: "Leads Generated", value: "200", percentage: 100 },
      { label: "Lead Cost", value: "£10 each", percentage: 60 },
      { label: "Appointment Increase", value: "5x", percentage: 80 }
    ],
    results: "60 qualified leads, 25 appointments, 8 new clients, adding £40K in annual revenue",
    source: "AdEspresso"
  },
  {
    role: "Financial Advisor",
    location: "Australian",
    title: "$100K in Commissions with FB Ads",
    target: "60+ individuals with $300K+ in savings",
    approach: "\"Secure Your Retirement\" webinar promoted via Facebook ads",
    targeting: "Lookalike audiences based on existing clients",
    metrics: [
      { label: "Ad Spend", value: "$5,000", percentage: 30 },
      { label: "Webinar Sign-ups", value: "300", percentage: 100 },
      { label: "Consultation Rate", value: "30%", percentage: 30 }
    ],
    results: "90 consultations, 20 new clients, $10M in annuities sold, $100K in commissions",
    source: "Social Media Examiner"
  }
];

export const TrustSignals = () => {
  return (
    <section className="py-20 bg-orbit-cosmos-400/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(139,112,255,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-orbit-yellow-200 animate-fade-in-down">
            Real Results from Real Advisors
          </h2>
          <p className="text-orbit-yellow-100/80 max-w-3xl mx-auto animate-fade-in-up delay-100">
            See how financial advisors like you are transforming their practices with targeted lead generation and AI-powered qualification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index} 
              study={study} 
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="https://calendly.com/orbitautogen/45min?month=2025-03" target="_blank" rel="noopener noreferrer">
            <CustomButton size="lg" className="animate-pulse-light hover:animate-none hover:scale-105 transition-transform duration-300">
              See How Orbit AI Can Deliver These Results
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </a>
        </div>
      </Container>
    </section>
  );
};
