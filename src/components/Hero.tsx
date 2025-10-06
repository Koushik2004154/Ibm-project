export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
          Showcase Your Products Beautifully
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover handcrafted items from local artisans. Quality products, exceptional service.
        </p>
        <a
          href="#products"
          className="inline-block bg-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
        >
          Browse Products
        </a>
      </div>
    </section>
  );
}
