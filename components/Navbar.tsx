import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <h1 className="text-xl font-semibold">Squid</h1>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#">Home</a>
        <a href="#">Sections</a>
        <a href="#">About</a>
      </div>

      <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-md text-sm">
        Download Template
      </button>
    </nav>
  );
}
