import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">7figurelead</h3>
            <p className="text-secondary-400">
              Premium video editing for coaches and creators who want to dominate social media.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-400">
              <li><a href="#services" className="hover:text-white transition">Long-Form Editing</a></li>
              <li><a href="#services" className="hover:text-white transition">Short-Form Content</a></li>
              <li><a href="#services" className="hover:text-white transition">Color Grading</a></li>
              <li><a href="#services" className="hover:text-white transition">Audio Mastering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-secondary-400">
              <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@7figurelead.com" className="flex items-center gap-2 text-secondary-400 hover:text-white transition">
                <Mail size={18} />
                <span>hello@7figurelead.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-secondary-400 hover:text-white transition">
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary-400">© 2024 7figurelead. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
