"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirect: true,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-80 border border-white/10"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded bg-black border border-white/10"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded bg-black border border-white/10"
        />

        <button className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-purple-600">
          Sign In
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
  No account?{" "}
  <a href="/signup" className="text-purple-400">
    Sign up
  </a>
</p>

      </form>
    </div>
  );
}
