import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What video formats do you accept?',
    answer: 'We accept all standard video formats including MP4, MOV, AVI, and more. Simply upload through our secure portal or use WeTransfer if your files are large.'
  },
  {
    question: 'How long does editing typically take?',
    answer: 'Turnaround times depend on your plan. Starter: 48 hours, Professional: 24 hours, Premium: 12 hours. Rush orders available for additional fee.'
  },
  {
    question: 'Do you offer unlimited revisions?',
    answer: 'Starter includes 1 revision, Professional includes 2 revisions, and Premium includes unlimited revisions. Additional revisions can be purchased as add-ons.'
  },
  {
    question: 'Can you edit for multiple platforms?',
    answer: 'Absolutely! We optimize for YouTube, TikTok, Instagram Reels, LinkedIn, Facebook, and more. Different aspect ratios and cuts available with Professional and Premium plans.'
  },
  {
    question: 'Do you provide original music and sound effects?',
    answer: 'Yes! All our packages include royalty-free background music and sound effects. We can also integrate your own music or sync licensed tracks.'
  },
  {
    question: 'What if I need consistent monthly editing?',
    answer: 'We offer monthly retainer packages starting at $2,000/month. This includes a set number of videos per month with consistent editing style. Contact us for details!'
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-secondary-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-secondary-50 transition"
      >
        <span className="text-lg font-semibold text-secondary-900">{question}</span>
        <ChevronDown
          size={24}
          className={`text-primary-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-secondary-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-secondary-600">
            Have other questions? Reach out to us directly—we're always happy to help
          </p>
        </div>

        <div className="bg-secondary-50 rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
