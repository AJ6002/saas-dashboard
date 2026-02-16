// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const router = useRouter();

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     const form = new FormData(e.currentTarget);

//     const res = await fetch("/api/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: form.get("email"),
//         password: form.get("password"),
//       }),
//     });

//     const data = await res.json();

//     setLoading(false);

//     if (!res.ok) {
//       setError(data.error || "Signup failed");
//       return;
//     }

//     // redirect to login after success
//     router.push("/login");
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-zinc-900 p-8 rounded-xl w-80 border border-white/10"
//       >
//         <h2 className="text-2xl font-semibold mb-6 text-center">
//           Create Account
//         </h2>

//         <input
//           name="email"
//           placeholder="Email"
//           required
//           className="w-full mb-4 px-4 py-2 rounded bg-black border border-white/10"
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//           className="w-full mb-2 px-4 py-2 rounded bg-black border border-white/10"
//         />

//         <p className="text-xs text-gray-400 mb-4">
//           Must be at least 6 characters
//         </p>

//         {error && (
//           <p className="text-red-400 text-sm mb-3">{error}</p>
//         )}

//         <button
//           disabled={loading}
//           className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-purple-600 disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Sign Up"}
//         </button>

//         <p className="text-sm text-center mt-4 text-gray-400">
//           Already have an account?{" "}
//           <a href="/login" className="text-purple-400">
//             Login
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      window.location.href = "/login";
    } else {
      alert("Signup failed");
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black text-white">

      {/* LEFT — FORM */}
      <div className="flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">

          <h1 className="text-4xl font-semibold mb-3">Register</h1>
          <p className="text-gray-400 mb-8">
            Create your account to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded bg-zinc-900 border border-white/10 focus:outline-none focus:border-purple-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded bg-zinc-900 border border-white/10 focus:outline-none focus:border-purple-500"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded bg-zinc-900 border border-white/10 focus:outline-none focus:border-purple-500"
            />

            <button
              disabled={loading}
              className="w-full py-3 rounded bg-gradient-to-r from-pink-500 to-purple-600 font-medium hover:opacity-90 transition"
            >
              {loading ? "Creating account..." : "Signup Now"}
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              Login here
            </Link>
          </p>

        </div>
      </div>

      {/* RIGHT — VISUAL GRID */}
      <div className="hidden lg:grid grid-cols-3 gap-4 p-10 bg-black">
        {[
          "/images/i1.png",
          "/images/i2.png",
          "/images/i3.jpg"
        ].map((src, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden bg-zinc-900 aspect-[3/4]"
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>

    </div>
  );
}
