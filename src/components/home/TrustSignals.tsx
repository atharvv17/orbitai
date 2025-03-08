
import { Container } from "@/components/ui/Container";
import { Star, ArrowRight } from "lucide-react";
import { CustomButton } from "@/components/ui/CustomButton";

export const TrustSignals = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Real Results from Real Advisors
          </h2>
          <p className="text-orbit-gray-600 max-w-3xl mx-auto">
            See how financial advisors like you are transforming their practices with targeted lead generation and AI-powered qualification.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orbit-gray-100 overflow-hidden animate-fade-in-up">
            <div className="bg-orbit-blue-50 p-4 flex items-center justify-between border-b border-orbit-blue-100">
              <div className="flex items-center">
                <div className="bg-orbit-blue-100 rounded-full p-2 mr-3">
                  <Star className="text-orbit-blue-600" size={18} />
                </div>
                <h3 className="font-semibold text-orbit-gray-900">Wealth Advisor</h3>
              </div>
              <span className="text-orbit-blue-600 text-sm font-medium px-2 py-1 bg-orbit-blue-50 rounded-full">
                US-Based
              </span>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-xl mb-4 text-orbit-gray-900">
                300% Client Base Growth with Facebook Ads
              </h4>
              
              <div className="space-y-4 mb-6 text-orbit-gray-700">
                <p>
                  <span className="font-medium text-orbit-gray-900">Target:</span> Retirees with $500K+ in assets
                </p>
                <p>
                  <span className="font-medium text-orbit-gray-900">Approach:</span> Facebook ad campaign offering a free "Retirement Income Blueprint"
                </p>
                <p>
                  <span className="font-medium text-orbit-gray-900">Targeting:</span> Ages 55-70 with interests in golf, travel, and luxury brands
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Leads Generated</span>
                  <span className="font-semibold">150</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "100%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Appointment Rate</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "30%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Close Rate</span>
                  <span className="font-semibold">33%</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "33%" }}></div>
                </div>
              </div>
              
              <div className="bg-orbit-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orbit-gray-900">Results:</p>
                <p className="text-orbit-gray-700">$7.5M in new managed assets and $75K in annual fees, tripling client base from 5 to 20</p>
              </div>
              
              <p className="text-sm text-orbit-gray-500 italic">Source: DigitalMarketer</p>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orbit-gray-100 overflow-hidden animate-fade-in-up delay-100">
            <div className="bg-orbit-blue-50 p-4 flex items-center justify-between border-b border-orbit-blue-100">
              <div className="flex items-center">
                <div className="bg-orbit-blue-100 rounded-full p-2 mr-3">
                  <Star className="text-orbit-blue-600" size={18} />
                </div>
                <h3 className="font-semibold text-orbit-gray-900">Financial Planner</h3>
              </div>
              <span className="text-orbit-blue-600 text-sm font-medium px-2 py-1 bg-orbit-blue-50 rounded-full">
                UK-Based
              </span>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-xl mb-4 text-orbit-gray-900">
                5x Appointment Boost with FB Ads & Chatbot
              </h4>
              
              <div className="space-y-4 mb-6 text-orbit-gray-700">
                <p>
                  <span className="font-medium text-orbit-gray-900">Target:</span> Pre-retirees in affluent postal codes
                </p>
                <p>
                  <span className="font-medium text-orbit-gray-900">Approach:</span> "Pension Health Check" Facebook campaign with Messenger chatbot
                </p>
                <p>
                  <span className="font-medium text-orbit-gray-900">Innovation:</span> AI-like chatbot for qualification and scheduling
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Leads Generated</span>
                  <span className="font-semibold">200</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "100%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Lead Cost</span>
                  <span className="font-semibold">£10 each</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "60%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Appointment Increase</span>
                  <span className="font-semibold">5x</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              
              <div className="bg-orbit-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orbit-gray-900">Results:</p>
                <p className="text-orbit-gray-700">60 qualified leads, 25 appointments, 8 new clients, adding £40K in annual revenue</p>
              </div>
              
              <p className="text-sm text-orbit-gray-500 italic">Source: AdEspresso</p>
            </div>
          </div>
          
          {/* Case Study 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orbit-gray-100 overflow-hidden animate-fade-in-up delay-200">
            <div className="bg-orbit-blue-50 p-4 flex items-center justify-between border-b border-orbit-blue-100">
              <div className="flex items-center">
                <div className="bg-orbit-blue-100 rounded-full p-2 mr-3">
                  <Star className="text-orbit-blue-600" size={18} />
                </div>
                <h3 className="font-semibold text-orbit-gray-900">Financial Advisor</h3>
              </div>
              <span className="text-orbit-blue-600 text-sm font-medium px-2 py-1 bg-orbit-blue-50 rounded-full">
                Australian
              </span>
            </div>
            
            <div className="p-6">
              <h4 className="font-bold text-xl mb-4 text-orbit-gray-900">
                $100K in Commissions with FB Ads
              </h4>
              
              <div className="space-y-4 mb-6 text-orbit-gray-700">
                <p>
                  <span className="font-medium text-orbit-gray-900">Target:</span> 60+ individuals with $300K+ in savings
                </p>
                <p>
                  <span className="font-medium text-orbit-gray-900">Approach:</span> "Secure Your Retirement" webinar promoted via Facebook ads
                </p>
                <p>
                  <span className="font-medium text-orbit-gray-900">Targeting:</span> Lookalike audiences based on existing clients
                </p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Ad Spend</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "30%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Webinar Sign-ups</span>
                  <span className="font-semibold">300</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "100%" }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orbit-gray-600">Consultation Rate</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="h-2 bg-orbit-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orbit-blue-500 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
              
              <div className="bg-orbit-gray-50 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orbit-gray-900">Results:</p>
                <p className="text-orbit-gray-700">90 consultations, 20 new clients, $10M in annuities sold, $100K in commissions</p>
              </div>
              
              <p className="text-sm text-orbit-gray-500 italic">Source: Social Media Examiner</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <CustomButton size="lg">
            See How Orbit AI Can Deliver These Results
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </CustomButton>
        </div>
      </Container>
    </section>
  );
};
