const plans = [
  { name: "Silver Package", price: "$40" },
  { name: "Golden Package", price: "$70", highlight: true },
  { name: "Premium Package", price: "$120" },
];

export default function Pricing() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold mb-16">Pricing</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`rounded-2xl p-10 border ${
              p.highlight
                ? "bg-gradient-to-b from-purple-600/20 to-transparent border-purple-500"
                : "bg-[#0b0b0b] border-white/10"
            }`}
          >
            <h3 className="font-semibold mb-4">{p.name}</h3>
            <p className="text-4xl font-bold mb-6">{p.price}</p>

            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
              Sign up Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
