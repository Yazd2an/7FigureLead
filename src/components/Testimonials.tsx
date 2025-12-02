const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Life Coach',
    content: '7figurelead transformed how I present myself on social media. My views increased by 300% in just two months!',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'James Rodriguez',
    role: 'Business Mentor',
    content: 'The quality of edits is exceptional. They understand pacing, storytelling, and what makes people stop scrolling.',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Emma Thompson',
    role: 'Digital Entrepreneur',
    content: 'I was spending 10 hours per week on editing. Now I focus on content creation while 7figurelead handles the rest. Game changer.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    name: 'Michael Chen',
    role: 'Podcast Host',
    content: 'Their turnaround time is lightning fast and revisions are hassle-free. Best investment I\'ve made for my brand.',
    avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Real results from creators and coaches we've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary-50 rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-secondary-700 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-secondary-900">{testimonial.name}</p>
                  <p className="text-sm text-secondary-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
