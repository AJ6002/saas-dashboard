export default function Contact() {
  return (
    <section className="py-28 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
      <div className="h-80 rounded-full border border-white/10 hidden md:block" />

      <div>
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>

        <input
          placeholder="Your Email"
          className="w-full mb-4 p-4 rounded-lg bg-[#0b0b0b] border border-white/10"
        />
        <input
          placeholder="Name"
          className="w-full mb-4 p-4 rounded-lg bg-[#0b0b0b] border border-white/10"
        />
        <textarea
          placeholder="Message"
          className="w-full mb-4 p-4 rounded-lg bg-[#0b0b0b] border border-white/10 h-32"
        />

        <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
