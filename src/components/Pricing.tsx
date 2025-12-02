import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: 'per video',
    description: 'Perfect for creators just starting out',
    features: [
      'Up to 10 minutes video',
      '1 round of revisions',
      '48-hour turnaround',
      'Basic color grading',
      'Standard transitions & effects',
      'Background music included'
    ]
  },
  {
    name: 'Professional',
    price: '$599',
    period: 'per video',
    description: 'Most popular for growing creators',
    features: [
      'Up to 30 minutes video',
      '2 rounds of revisions',
      '24-hour turnaround',
      'Professional color grading',
      'Custom motion graphics',
      'Voice-over optimization',
      'Multi-platform optimization',
      'Priority support'
    ],
    highlighted: true
  },
  {
    name: 'Premium',
    price: '$999',
    period: 'per video',
    description: 'For established creators & agencies',
    features: [
      'Unlimited video length',
      'Unlimited revisions',
      '12-hour turnaround',
      'Cinematic color grading',
      'Custom animations & graphics',
      'Professional audio mixing',
      'Multi-platform optimization',
      'Dedicated editor',
      'Monthly strategy call'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Scale up anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-xl scale-105'
                  : 'bg-white shadow-sm hover:shadow-md'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-primary-100' : 'text-secondary-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? 'text-primary-100' : 'text-secondary-600'}> {plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={20} className={plan.highlighted ? 'text-white' : 'text-primary-600'} />
                    <span className={plan.highlighted ? 'text-primary-50' : 'text-secondary-700'}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-secondary-900 mb-2">Looking for something custom?</h3>
          <p className="text-secondary-600 mb-6">We also offer package deals and monthly retainers for agencies and high-volume creators.</p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
