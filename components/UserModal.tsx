"use client";

export default function UserModal({ user, onClose }: any) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 p-6 rounded-xl w-96 text-white">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>

        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Company:</b> {user.company}</p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-purple-600 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
