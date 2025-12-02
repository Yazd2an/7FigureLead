import { Upload, Zap, Eye, Send } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Submit Your Raw Footage',
    description: 'Upload your unedited video files through our secure portal with any notes or preferences.'
  },
  {
    icon: Zap,
    title: 'We Work Our Magic',
    description: 'Our expert editors craft your content with attention to detail, perfect pacing, and engagement tactics.'
  },
  {
    icon: Eye,
    title: 'Review & Revise',
    description: 'You get 2 rounds of unlimited revisions to make sure it\'s exactly how you want it.'
  },
  {
    icon: Send,
    title: 'Download & Share',
    description: 'Get your final edited video optimized for every platform. Start posting and watch the views grow.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">How It Works</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Simple, streamlined process from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-4 rounded-lg">
                      <Icon className="text-primary-600" size={28} />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-primary-600 mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">{step.title}</h3>
                  <p className="text-secondary-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 text-primary-300">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
