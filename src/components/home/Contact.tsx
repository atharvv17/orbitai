
import { Container } from "@/components/ui/Container";
import { CustomButton } from "@/components/ui/CustomButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll be in touch with you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        goals: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-orbit-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(37,112,255,0)_100%)]"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-orbit-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orbit-blue-800 rounded-full opacity-20 blur-3xl"></div>
      
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-blue-100 mb-8 max-w-md">
              Let's talk about how Orbit AI can unlock your next level of growth. Schedule a no-pressure consultation today.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Call us at</div>
                  <div className="font-medium">1-800-ORBITAI</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-sm text-blue-100">Email us at</div>
                  <div className="font-medium">growth@orbitai.com</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ol className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</div>
                  <p>We'll schedule a call to understand your practice needs</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</div>
                  <p>Our team will prepare a custom demo tailored to your goals</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</div>
                  <p>You'll receive a detailed proposal with implementation timeline</p>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="glass-card bg-white/10 rounded-xl p-8 border border-white/20 backdrop-blur-md animate-fade-in-up delay-100">
            <h3 className="text-xl font-semibold mb-6">Get a Personalized Quote</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="goals" className="block mb-2 text-sm">
                    Tell us about your goals (optional)
                  </label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="What are you hoping to achieve with Orbit AI?"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-24"
                  />
                </div>
                
                <CustomButton
                  type="submit"
                  className="w-full bg-white text-orbit-blue-600 hover:bg-white/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </CustomButton>
                
                <p className="text-xs text-blue-100 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
