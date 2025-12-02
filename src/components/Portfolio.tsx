const portfolioItems = [
  {
    title: 'Coaching Growth Series',
    category: 'YouTube',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Social Media Strategy Tips',
    category: 'Instagram Reels',
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Personal Brand Documentary',
    category: 'YouTube',
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Daily Business Insights',
    category: 'TikTok',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Podcast Highlight Reels',
    category: 'LinkedIn',
    image: 'https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Testimonial Compilation',
    category: 'All Platforms',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">Our Work</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            See how we've transformed content for creators just like you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="relative overflow-hidden bg-secondary-100 aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-end">
                  <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="text-sm font-semibold">{item.category}</p>
                    <p className="text-lg font-bold">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
