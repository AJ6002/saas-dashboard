"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Signup failed");
      return;
    }

    // redirect to login after success
    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-80 border border-white/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        <input
          name="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-4 py-2 rounded bg-black border border-white/10"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full mb-2 px-4 py-2 rounded bg-black border border-white/10"
        />

        <p className="text-xs text-gray-400 mb-4">
          Must be at least 6 characters
        </p>

        {error && (
          <p className="text-red-400 text-sm mb-3">{error}</p>
        )}

        <button
          disabled={loading}
          className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-purple-600 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
