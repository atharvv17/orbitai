
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { Check } from "lucide-react";

interface ValueItem {
  service: string;
  alternative: string;
  alternativeCost: string;
  included: boolean;
  unique?: boolean;
}

const valueItems: ValueItem[] = [
  {
    service: "Lead Generation (via Ads)",
    alternative: "High-end lead gen services, paid ads",
    alternativeCost: "$4,000/month (services), $262.50/month (lists)",
    included: true
  },
  {
    service: "High-Intent Lead Filtering",
    alternative: "Lead filtering tools",
    alternativeCost: "$262.50/month (e.g., Leadfeeder)",
    included: true
  },
  {
    service: "Proprietary Lead Scoring",
    alternative: "Advanced lead scoring platforms",
    alternativeCost: "$350/month (e.g., ZoomInfo)",
    included: true,
    unique: true
  },
  {
    service: "Industry-Specific Landing Page",
    alternative: "Landing page builders, A/B testing",
    alternativeCost: "$350/month (e.g., Unbounce)",
    included: true
  },
  {
    service: "Specialized Sales Funnels (Multi-Step)",
    alternative: "Funnel builders, multi-step workflows",
    alternativeCost: "$437.50/month (e.g., ClickFunnels)",
    included: true
  },
  {
    service: "Free Lead Magnet (e.g., Tips Guide)",
    alternative: "Lead magnet creation services",
    alternativeCost: "$175/month (freelancer cost)",
    included: true
  },
  {
    service: "Sales Scripts for AI Callers",
    alternative: "Custom sales script services",
    alternativeCost: "$300/month (freelancer cost)",
    included: true
  },
  {
    service: "CRM & Dashboard Creation",
    alternative: "Premium CRM platforms",
    alternativeCost: "$350/month (e.g., Salesforce)",
    included: true
  },
  {
    service: "Email Automation",
    alternative: "Premium email marketing tools",
    alternativeCost: "$262.50/month (e.g., ActiveCampaign)",
    included: true
  },
  {
    service: "AI Call Automation",
    alternative: "AI call platforms, outbound tools",
    alternativeCost: "$525/month (e.g., RingCentral AI)",
    included: true
  },
  {
    service: "Appointment Scheduling Automation",
    alternative: "Scheduling tools",
    alternativeCost: "$87.50/month (e.g., Calendly)",
    included: true
  },
  {
    service: "Calendar Integration",
    alternative: "Calendar sync tools",
    alternativeCost: "$87.50/month (e.g., Zapier)",
    included: true
  },
  {
    service: "Automated Follow-Ups",
    alternative: "SMS/email follow-up tools",
    alternativeCost: "$262.50/month (e.g., Marketo)",
    included: true
  },
  {
    service: "Client Nurturing Sequence",
    alternative: "Advanced nurturing workflows",
    alternativeCost: "$350/month (e.g., HubSpot)",
    included: true
  },
  {
    service: "Client Segmentation",
    alternative: "Audience segmentation tools",
    alternativeCost: "$175/month (e.g., Segment)",
    included: true
  },
  {
    service: "Advanced Analytics (Pipeline, Deals)",
    alternative: "Premium analytics platforms",
    alternativeCost: "$262.50/month (e.g., Pipedrive)",
    included: true
  },
  {
    service: "Custom Reports (incl. FB Insights)",
    alternative: "Social media/custom analytics",
    alternativeCost: "$437.50/month (freelancer cost)",
    included: true,
    unique: true
  },
  {
    service: "Ongoing Funnel Optimization",
    alternative: "Performance optimization services",
    alternativeCost: "$525/month (freelancer/agency)",
    included: true
  },
  {
    service: "Competitive Analysis",
    alternative: "Competitive research services",
    alternativeCost: "$350/month (freelancer cost)",
    included: true
  },
  {
    service: "TCPA/GDPR Consent Compliance",
    alternative: "Compliance management tools",
    alternativeCost: "$175/month (e.g., OneTrust)",
    included: true
  },
  {
    service: "Dedicated Support & Training",
    alternative: "Onboarding, support services",
    alternativeCost: "$350/month (agency fees)",
    included: true
  },
  {
    service: "Sales Resources (Closing Skills)",
    alternative: "Sales training programs",
    alternativeCost: "$262.50/month (e.g., online course)",
    included: true
  },
  {
    service: "Time Saved (Manual Work)",
    alternative: "Hours on lead chase, follow-ups",
    alternativeCost: "$3,200/month (80 hours at $40/hour)",
    included: true
  },
  {
    service: "Effort & Risk of Failure (Lost Revenue)",
    alternative: "Uncertainty of results, wasted effort",
    alternativeCost: "$5,000/month (lost opportunity cost)",
    included: true,
    unique: true
  },
  {
    service: "Money-Back Guarantee",
    alternative: "Risk of wasted spend",
    alternativeCost: "Priceless",
    included: true
  }
];

export const ValueStacking = () => {
  return (
    <section id="value" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(37,112,255,0.05)_0%,rgba(255,255,255,0)_100%)]"></div>
      
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-blue-100 text-orbit-blue-700 text-sm font-medium mb-6 animate-fade-in">
            Value Comparison
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight animate-fade-in">
            The Orbit AI Value Advantage
          </h2>
          <p className="text-orbit-gray-600 animate-fade-in">
            Get premium tools and services in one integrated package at a fraction of the cost.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-orbit-gray-200 shadow-sm animate-fade-in-up">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-orbit-blue-600 text-white">
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Premium Tools Cost</th>
                  <th className="px-6 py-4 text-center">Your Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orbit-gray-200">
                {valueItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-orbit-gray-50'}>
                    <td className="px-6 py-4">
                      <div className="font-medium">{item.service}</div>
                      <div className="text-sm text-orbit-gray-500">{item.alternative}</div>
                    </td>
                    <td className="px-6 py-4 text-orbit-gray-700">{item.alternativeCost}</td>
                    <td className="px-6 py-4 text-center">
                      {item.included ? (
                        <div className="flex justify-center">
                          {item.unique ? (
                            <span className="inline-flex px-2 py-1 rounded-full bg-orbit-blue-100 text-orbit-blue-700 text-xs font-medium">
                              UNIQUE TO US
                            </span>
                          ) : item.service === "Effort & Risk of Failure (Lost Revenue)" ? (
                            <span className="inline-flex px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                              GUARANTEED TO WORK
                            </span>
                          ) : (
                            <Check className="text-green-500" size={20} />
                          )}
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-orbit-blue-50 font-bold">
                  <td className="px-6 py-4">OVERALL PRICE</td>
                  <td className="px-6 py-4 text-orbit-gray-900">$14,762/month</td>
                  <td className="px-6 py-4 text-center text-orbit-blue-700">$2,100/month (SAVE $12,662!)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <CustomButton size="lg" className="animate-fade-in-up">
            Schedule Your Consultation
          </CustomButton>
          <p className="mt-4 text-orbit-gray-500 animate-fade-in">
            All-inclusive pricing with no hidden fees. Money-back guarantee if we don't deliver results.
          </p>
        </div>
      </Container>
    </section>
  );
};
