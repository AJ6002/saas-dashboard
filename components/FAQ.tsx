"use client";
import { useState } from "react";

const faqs = [
  "How to use this template?",
  "What is your refund policy?",
  "How can I track my order?",
  "What are benefits of this template?",
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-12 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((q, i) => (
          <div
            key={i}
            className="bg-[#0b0b0b] border border-white/10 rounded-xl"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 flex justify-between items-center"
            >
              {q}
              <span>{open === i ? "-" : "+"}</span>
            </button>

            {open === i && (
              <p className="px-5 pb-5 text-white/60">
                A good design is not only aesthetically pleasing but functional.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
