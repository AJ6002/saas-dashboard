const companies = ["Smile", "Urban", "Natural", "Wave", "Happy", "Alisa"];

export default function Companies() {
  return (
    <section className="py-20 text-center">
      <p className="text-white/60 mb-8">
        Companies we worked with since 2015
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {companies.map((c) => (
          <div
            key={c}
            className="px-6 py-2 bg-[#0b0b0b] border border-white/10 rounded-md text-white/60"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
