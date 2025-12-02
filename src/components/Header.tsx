import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary-600">7figurelead</h1>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 md:flex-row flex-col`}>
          <a href="#services" className="text-secondary-700 hover:text-primary-600 transition">Services</a>
          <a href="#portfolio" className="text-secondary-700 hover:text-primary-600 transition">Portfolio</a>
          <a href="#how-it-works" className="text-secondary-700 hover:text-primary-600 transition">How It Works</a>
          <a href="#pricing" className="text-secondary-700 hover:text-primary-600 transition">Pricing</a>
          <a href="#testimonials" className="text-secondary-700 hover:text-primary-600 transition">Testimonials</a>
          <a href="#faq" className="text-secondary-700 hover:text-primary-600 transition">FAQ</a>
        </div>

        <button className="hidden md:block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}
