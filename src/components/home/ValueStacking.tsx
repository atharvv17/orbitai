
import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";

export const ValueStacking = () => {
  const features = [
    {
      name: "Lead Generation (via Ads)",
      replaces: "High-end lead gen services, paid ads",
      cost: "$4,000/month (services), $262.50/month (lists)",
      included: true,
      unique: false,
    },
    {
      name: "High-Intent Lead Filtering",
      replaces: "Lead filtering tools",
      cost: "$262.50/month (e.g., Leadfeeder)",
      included: true,
      unique: false,
    },
    {
      name: "Proprietary Lead Scoring",
      replaces: "Advanced lead scoring platforms",
      cost: "$350/month (e.g., ZoomInfo)",
      included: false,
      unique: true,
    },
    {
      name: "Industry-Specific Landing Page",
      replaces: "Landing page builders, A/B testing",
      cost: "$350/month (e.g., Unbounce)",
      included: true,
      unique: false,
    },
    {
      name: "Specialized Sales Funnels (Multi-Step)",
      replaces: "Funnel builders, multi-step workflows",
      cost: "$437.50/month (e.g., ClickFunnels)",
      included: true,
      unique: false,
    },
    {
      name: "Free Lead Magnet (e.g., Tips Guide)",
      replaces: "Lead magnet creation services",
      cost: "$175/month (freelancer cost)",
      included: true,
      unique: false,
    },
    {
      name: "Sales Scripts for AI Callers",
      replaces: "Custom sales script services",
      cost: "$300/month (freelancer cost)",
      included: true,
      unique: false,
    },
    {
      name: "CRM & Dashboard Creation",
      replaces: "Premium CRM platforms",
      cost: "$350/month (e.g., Salesforce)",
      included: true,
      unique: false,
    },
    {
      name: "Email Automation",
      replaces: "Premium email marketing tools",
      cost: "$262.50/month (e.g., ActiveCampaign)",
      included: true,
      unique: false,
    },
    {
      name: "AI Call Automation",
      replaces: "AI call platforms, outbound tools",
      cost: "$525/month (e.g., RingCentral AI)",
      included: true,
      unique: false,
    },
    {
      name: "Appointment Scheduling Automation",
      replaces: "Scheduling tools",
      cost: "$87.50/month (e.g., Calendly)",
      included: true,
      unique: false,
    },
    {
      name: "Calendar Integration",
      replaces: "Calendar sync tools",
      cost: "$87.50/month (e.g., Zapier)",
      included: true,
      unique: false,
    },
    {
      name: "Automated Follow-Ups",
      replaces: "SMS/email follow-up tools",
      cost: "$262.50/month (e.g., Marketo)",
      included: true,
      unique: false,
    },
    {
      name: "Client Nurturing Sequence",
      replaces: "Advanced nurturing workflows",
      cost: "$350/month (e.g., HubSpot)",
      included: true,
      unique: false,
    },
    {
      name: "Client Segmentation",
      replaces: "Audience segmentation tools",
      cost: "$175/month (e.g., Segment)",
      included: true,
      unique: false,
    },
    {
      name: "Advanced Analytics (Pipeline, Deals)",
      replaces: "Premium analytics platforms",
      cost: "$262.50/month (e.g., Pipedrive)",
      included: true,
      unique: false,
    },
    {
      name: "Custom Reports (incl. FB Insights)",
      replaces: "Social media/custom analytics",
      cost: "$437.50/month (freelancer cost)",
      included: false,
      unique: true,
    },
    {
      name: "Ongoing Funnel Optimization",
      replaces: "Performance optimization services",
      cost: "$525/month (freelancer/agency)",
      included: true,
      unique: false,
    },
    {
      name: "Competitive Analysis",
      replaces: "Competitive research services",
      cost: "$350/month (freelancer cost)",
      included: true,
      unique: false,
    },
    {
      name: "TCPA/GDPR Consent Compliance",
      replaces: "Compliance management tools",
      cost: "$175/month (e.g., OneTrust)",
      included: true,
      unique: false,
    },
    {
      name: "Dedicated Support & Training",
      replaces: "Onboarding, support services",
      cost: "$350/month (agency fees)",
      included: true,
      unique: false,
    },
    {
      name: "Sales Resources (Closing Skills)",
      replaces: "Sales training programs",
      cost: "$262.50/month (e.g., online course)",
      included: true,
      unique: false,
    },
    {
      name: "Time Saved (Manual Work)",
      replaces: "Hours on lead chase, follow-ups",
      cost: "$3,200/month (80 hours at $40/hour)",
      included: true,
      unique: false,
    },
    {
      name: "Effort & Risk of Failure (Lost Revenue)",
      replaces: "Uncertainty of results, wasted effort",
      cost: "$5,000/month (lost opportunity cost)",
      included: false,
      unique: true,
      guaranteedToWork: true,
    },
    {
      name: "Money-Back Guarantee",
      replaces: "Risk of wasted spend",
      cost: "Priceless",
      included: true,
      unique: false,
    },
  ];

  // Calculate total cost of premium tools
  const totalPremiumCost = "$14,762/month";
  const orbitAICost = "$2,100/month";
  const savings = "$12,662!";

  return (
    <section id="value-stacking" className="py-20 bg-orbit-cosmos-400/80 backdrop-blur-sm relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(139,112,255,0.1)_0%,rgba(255,255,255,0)_100%)]"></div>
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-purple-500/10 text-orbit-yellow-300 text-sm font-medium mb-6">
            Value Comparison
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orbit-yellow-200">
            Save Thousands Every Month
          </h2>
          <p className="text-orbit-yellow-100/80 max-w-3xl mx-auto">
            Compare the cost of individual premium tools versus our all-in-one solution. 
            Orbit AI combines everything you need in one affordable package.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg border border-orbit-purple-400/20">
          <table className="w-full glass-card">
            <thead>
              <tr className="bg-orbit-purple-600/60 backdrop-blur-sm">
                <th className="px-4 py-5 text-left text-orbit-yellow-200">FEATURE</th>
                <th className="px-4 py-5 text-left text-orbit-yellow-200">REPLACES</th>
                <th className="px-4 py-5 text-left text-orbit-yellow-200">PREMIUM TOOLS COST</th>
                <th className="px-4 py-5 text-left text-orbit-yellow-200">OUR SERVICE</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? "bg-orbit-cosmos-400/50" : "bg-orbit-purple-500/10"}
                >
                  <td className="px-4 py-4 font-medium border-t border-orbit-purple-400/20 text-orbit-yellow-200">
                    {feature.name}
                  </td>
                  <td className="px-4 py-4 text-orbit-yellow-100/70 border-t border-orbit-purple-400/20">
                    {feature.replaces}
                  </td>
                  <td className="px-4 py-4 text-orbit-yellow-200 border-t border-orbit-purple-400/20">
                    {feature.cost}
                  </td>
                  <td className="px-4 py-4 border-t border-orbit-purple-400/20">
                    {feature.included ? (
                      <div className="flex items-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-orbit-orange-500/20 text-orbit-orange-300 rounded-full mr-2">
                          <Check size={14} />
                        </span>
                        <span className="text-orbit-yellow-200">Included</span>
                      </div>
                    ) : feature.unique ? (
                      <span className="text-orbit-purple-300 font-medium">
                        {feature.guaranteedToWork ? "GUARANTEED TO WORK" : "UNIQUE TO US"}
                      </span>
                    ) : (
                      <span className="text-orbit-yellow-100/50">-</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr className="bg-orbit-purple-600/70 backdrop-blur-sm font-bold">
                <td className="px-4 py-5 text-orbit-yellow-200">OVERALL PRICE</td>
                <td className="px-4 py-5"></td>
                <td className="px-4 py-5 text-orbit-yellow-200">{totalPremiumCost}</td>
                <td className="px-4 py-5 text-orbit-yellow-200">
                  {orbitAICost} <span className="font-normal text-orbit-yellow-300">(SAVE {savings})</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-orbit-yellow-100/80 max-w-3xl mx-auto mb-6">
            Stop wasting money on multiple tools and services. Get everything you need with Orbit AI's comprehensive solution.
          </p>
        </div>
      </Container>
    </section>
  );
};
