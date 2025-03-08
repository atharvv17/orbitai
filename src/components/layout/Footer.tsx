
import { Container } from "@/components/ui/Container";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-orbit-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold mb-4">
              Orbit<span className="text-orbit-blue-300">AI</span>
            </h2>
            <p className="text-orbit-gray-300 mb-6 max-w-md">
              Elevate efficiency. Amplify returns. Empower growth. The intelligent automation platform built for finance professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-orbit-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-orbit-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:growth@orbitai.com" className="text-orbit-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 ml-0 md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-orbit-gray-300">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-orbit-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-orbit-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-orbit-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-orbit-gray-300">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-orbit-gray-300 hover:text-white transition-colors">
                  AI Caller
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-orbit-gray-300 hover:text-white transition-colors">
                  Digital Influence
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-orbit-gray-300 hover:text-white transition-colors">
                  Operational Streamlining
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-orbit-gray-300">
              Contact Us
            </h3>
            <div className="space-y-3">
              <p className="flex items-center text-orbit-gray-300">
                <Phone size={16} className="mr-2" />
                1-800-ORBITAI
              </p>
              <p className="flex items-center text-orbit-gray-300">
                <Mail size={16} className="mr-2" />
                growth@orbitai.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-orbit-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orbit-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Orbit AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-orbit-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-orbit-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
