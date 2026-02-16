export default function Hero() {
  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

  {/* grid background */}
  <div className="absolute inset-0 bg-[linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

  {/* glow effects */}
  <div className="absolute top-24 right-32 w-72 h-72 bg-purple-600 blur-[140px] opacity-30" />
  <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 blur-[150px] opacity-20" />

  {/* hero content */}
  <div className="relative text-center max-w-3xl px-6">
    <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
      Beautiful Landing Page <br /> Design for You
    </h1>

    <p className="text-gray-400 mt-6">
      A good design is not only aesthetically pleasing, but also functional.
    </p>

    <button className="mt-8 px-8 py-3 rounded bg-gradient-to-r from-pink-400 to-purple-600 text-white font-medium">
      Download Template
    </button>
  </div>
</section>

  );
}
