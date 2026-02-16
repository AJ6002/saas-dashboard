export default function Guide() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="w-72 h-72 rounded-full border border-white/10 mx-auto" />

      <div>
        <h2 className="text-3xl font-semibold mb-4">
          We're here to guide and help you at all times
        </h2>
        <p className="text-white/60 mb-6">
          A good design is not only aesthetically pleasing.
        </p>
        <button className="px-6 py-3 rounded-lg
        bg-gradient-to-r from-pink-500 to-purple-600">
          Download
        </button>
      </div>
    </section>
  );
}
