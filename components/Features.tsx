const features = new Array(6).fill("Fully Customizable");

export default function Features() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-14">Feature Boxes</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#111] to-[#0a0a0a]
            border border-white/10 rounded-2xl p-10 text-center
            hover:border-purple-500 transition"
          >
            <div className="w-12 h-12 mx-auto mb-6 rounded-lg
            bg-gradient-to-r from-pink-500 to-purple-600"/>

            <h3 className="font-semibold mb-3">{f}</h3>
            <p className="text-white/60 text-sm">
              A good design is not only aesthetically pleasing but functional.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
