"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-red-400 hover:text-red-300"
    >
      Logout
    </button>
  );
}
