export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Brand?</h2>
        <p className="text-xl text-primary-100 mb-8">
          Join 200+ coaches and creators who are using 7figurelead to scale their content
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition text-lg font-semibold">
            Start My First Edit
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition text-lg font-semibold">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
