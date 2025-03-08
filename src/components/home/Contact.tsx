
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-orbit-cosmos-400 text-orbit-yellow-200 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(255,255,255,0.05)_0%,rgba(37,112,255,0)_100%)]"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orbit-purple-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orbit-orange-500 rounded-full opacity-10 blur-3xl"></div>
      
      <Container>
        <div className="max-w-xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orbit-yellow-500/10 text-orbit-yellow-300 text-sm font-medium mb-6">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-orbit-yellow-200">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-orbit-yellow-100/80 mb-8">
            Let's talk about how Orbit AI can unlock your next level of growth. Schedule a no-pressure consultation today.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orbit-yellow-500/10 flex items-center justify-center mr-4">
                <Mail className="text-orbit-yellow-300" size={20} />
              </div>
              <div>
                <div className="text-sm text-orbit-yellow-100/70">Email us at</div>
                <div className="font-medium text-orbit-yellow-200">orbitautogen@gmail.com</div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-orbit-yellow-500/5 rounded-xl backdrop-blur-sm border border-orbit-yellow-500/10 mb-8">
            <h3 className="font-semibold mb-4 text-orbit-yellow-200">What happens next?</h3>
            <ol className="space-y-3 text-orbit-yellow-100/80">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orbit-yellow-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-orbit-yellow-300">1</div>
                <p>We'll schedule a call to understand your practice needs</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orbit-yellow-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-orbit-yellow-300">2</div>
                <p>Our team will prepare a custom demo tailored to your goals</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-orbit-yellow-500/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-orbit-yellow-300">3</div>
                <p>You'll receive a detailed proposal with implementation timeline</p>
              </li>
            </ol>
          </div>
          
          <a href="https://calendly.com/orbitautogen/45min?month=2025-03" target="_blank" rel="noopener noreferrer" className="block">
            <CustomButton size="lg" className="w-full sm:w-auto">
              Book a Demo
            </CustomButton>
          </a>
        </div>
      </Container>
    </section>
  );
};
