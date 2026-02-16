// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { signOut } from "next-auth/react";

// export default function Sidebar() {
//   const pathname = usePathname();

//   const linkStyle = (path: string) =>
//     `block px-4 py-2 rounded-lg transition ${
//       pathname === path
//         ? "bg-purple-600 text-white"
//         : "text-gray-400 hover:bg-zinc-800 hover:text-white"
//     }`;

//   return (
//     <aside className="w-64 min-h-screen bg-zinc-950 border-r border-white/10 p-6">
//       <h2 className="text-xl font-semibold text-white mb-10">SaaS</h2>

//       <nav className="space-y-2">
//         <Link href="/dashboard" className={linkStyle("/dashboard")}>
//           Dashboard
//         </Link>

//         <Link href="/dashboard/users" className={linkStyle("/dashboard/users")}>
//           Users
//         </Link>

//         <Link
//           href="/dashboard/settings"
//           className={linkStyle("/dashboard/settings")}
//         >
//           Settings
//         </Link>
//       </nav>

//       <div className="mt-10">
//         <button
//           onClick={() => signOut({ callbackUrl: "/login" })}
//           className="w-full px-4 py-2 bg-red-500 rounded-lg text-white"
//         >
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const linkStyle = (path: string) =>
    `block px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-purple-600 text-white"
        : "text-gray-400 hover:bg-zinc-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-zinc-950 border-r border-gray-200 dark:border-white/10 p-6 flex flex-col text-black dark:text-white">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">SaaS</h2>
        <p className="text-xs text-gray-500 mb-8">
          {session?.user?.email}
        </p>

        <nav className="space-y-2">
          <Link href="/dashboard" className={linkStyle("/dashboard")}>
            Dashboard
          </Link>

          <Link href="/dashboard/users" className={linkStyle("/dashboard/users")}>
            Users
          </Link>

          <Link href="/dashboard/settings" className={linkStyle("/dashboard/settings")}>
            Settings
          </Link>
        </nav>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-auto px-4 py-2 bg-red-500 rounded-lg text-white"
      >
        Logout
      </button>
    </aside>
  );
}
