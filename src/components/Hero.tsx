export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-primary-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
          Premium Video Editing for <span className="gradient-text">Coaches & Creators</span>
        </h1>

        <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We specialize in editing high-converting video content that helps you grow your brand on social media. From YouTube to Instagram Reels, TikTok to LinkedIn—we've got you covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition text-lg font-semibold">
            Start My Edit
          </button>
          <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition text-lg font-semibold">
            Book a Call
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 inline-block">
          <p className="text-secondary-600 text-sm">Trusted by coaches and creators worldwide</p>
          <div className="flex gap-4 justify-center mt-4">
            <div className="text-yellow-400">★★★★★</div>
            <p className="text-secondary-700 font-semibold">4.9/5 from 200+ projects</p>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
          <p className="text-secondary-600">Videos Edited</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
          <p className="text-secondary-600">Happy Clients</p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">50M+</div>
          <p className="text-secondary-600">Views Generated</p>
        </div>
      </div>
    </section>
  );
}
