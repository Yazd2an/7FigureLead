import { Video, Zap, Palette, Music } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Long-Form Content Editing',
    description: 'Professional YouTube videos, podcasts, and webinars edited to perfection with perfect pacing and storytelling.'
  },
  {
    icon: Zap,
    title: 'Short-Form Content',
    description: 'High-energy TikTok, Instagram Reels, and YouTube Shorts that stop the scroll and drive engagement.'
  },
  {
    icon: Palette,
    title: 'Color Grading & Motion',
    description: 'Cinematic color grading and smooth motion graphics that elevate your content to a professional level.'
  },
  {
    icon: Music,
    title: 'Audio Mastering',
    description: 'Crystal-clear audio with professional sound design, background music, and voice-over optimization.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Our Services</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            We offer comprehensive video editing solutions tailored to help your brand stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
                <Icon className="text-primary-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
