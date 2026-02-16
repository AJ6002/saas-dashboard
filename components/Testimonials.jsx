const testimonials = [
  { name: "Jane Doe", role: "CEO", text: "Designers need to have a strong understanding of principles of design." },
  { name: "John Smith", role: "Founder", text: "Great design improves usability and creates a strong product." },
  { name: "Alex Ray", role: "CTO", text: "Modern interfaces must be functional and visually pleasing." },
];

export default function Testimonials() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-semibold mb-14">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 text-left"
          >
            <p className="text-white/70 mb-6">{t.text}</p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-white/50">{t.role}</p>
              </div>
              <div className="text-yellow-400">★★★★★</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
