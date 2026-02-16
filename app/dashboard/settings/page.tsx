"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    localStorage.setItem("displayName", name);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-lg text-black dark:text-white">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
        Display Name
      </label>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full px-4 py-2 mb-4 rounded
          bg-white dark:bg-zinc-900
          border border-gray-300 dark:border-white/10
          text-black dark:text-white"
      />

      <button
        onClick={handleSave}
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition"
      >
        Save Changes
      </button>

      {saved && (
        <p className="text-green-500 text-sm mt-3">
          Saved successfully ✔
        </p>
      )}
    </div>
  );
}
