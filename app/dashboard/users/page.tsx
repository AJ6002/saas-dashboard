// // "use client";

// // import { useMemo, useState } from "react";

// // /* ---------- MOCK DATA (simulate SaaS DB) ---------- */
// // const USERS = [
// //   { id: 1, name: "Akshay", email: "akshay@mail.com", role: "Admin" },
// //   { id: 2, name: "Riya", email: "riya@mail.com", role: "User" },
// //   { id: 3, name: "Vish", email: "vish@mail.com", role: "User" },
// //   { id: 4, name: "Aman", email: "aman@mail.com", role: "User" },
// //   { id: 5, name: "Sara", email: "sara@mail.com", role: "Manager" },
// //   { id: 6, name: "Dev", email: "dev@mail.com", role: "User" },
// //   { id: 7, name: "Neha", email: "neha@mail.com", role: "Manager" },
// //   { id: 8, name: "Karan", email: "karan@mail.com", role: "User" },
// //   { id: 9, name: "Priya", email: "priya@mail.com", role: "User" },
// //   { id: 10, name: "Rohit", email: "rohit@mail.com", role: "User" },
// // ];
// // /* -------------------------------------------------- */

// // export default function UsersPage() {
// //   const [search, setSearch] = useState("");
// //   const [sortAsc, setSortAsc] = useState(true);
// //   const [page, setPage] = useState(1);

// //   const usersPerPage = 4;

// //   /* 🔎 SEARCH */
// //   const filtered = useMemo(() => {
// //     return USERS.filter((u) =>
// //       u.name.toLowerCase().includes(search.toLowerCase())
// //     );
// //   }, [search]);

// //   /* ↕ SORT */
// //   const sorted = useMemo(() => {
// //     return [...filtered].sort((a, b) =>
// //       sortAsc
// //         ? a.name.localeCompare(b.name)
// //         : b.name.localeCompare(a.name)
// //     );
// //   }, [filtered, sortAsc]);

// //   /* 📄 PAGINATION */
// //   const totalPages = Math.ceil(sorted.length / usersPerPage);

// //   const paginatedUsers = sorted.slice(
// //     (page - 1) * usersPerPage,
// //     page * usersPerPage
// //   );

// //   return (
// //     <div className="text-white">
// //       <h1 className="text-3xl font-semibold mb-6">Users</h1>

// //       {/* SEARCH + SORT */}
// //       <div className="flex gap-4 mb-6">
// //         <input
// //           placeholder="Search users..."
// //           className="px-4 py-2 bg-zinc-900 border border-white/10 rounded"
// //           value={search}
// //           onChange={(e) => {
// //             setSearch(e.target.value);
// //             setPage(1);
// //           }}
// //         />

// //         <button
// //           onClick={() => setSortAsc(!sortAsc)}
// //           className="px-4 py-2 bg-zinc-900 border border-white/10 rounded"
// //         >
// //           Sort {sortAsc ? "↓" : "↑"}
// //         </button>
// //       </div>

// //       {/* TABLE */}
// //       <div className="bg-zinc-900 rounded-xl overflow-hidden border border-white/10">
// //         <table className="w-full text-left">
// //           <thead className="bg-zinc-800 text-sm uppercase">
// //             <tr>
// //               <th className="p-4">Name</th>
// //               <th>Email</th>
// //               <th>Role</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {paginatedUsers.map((user) => (
// //               <tr
// //                 key={user.id}
// //                 className="border-t border-white/5 hover:bg-zinc-800"
// //               >
// //                 <td className="p-4">{user.name}</td>
// //                 <td>{user.email}</td>
// //                 <td>{user.role}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* PAGINATION */}
// //       <div className="flex gap-2 mt-6">
// //         {Array.from({ length: totalPages }, (_, i) => (
// //           <button
// //             key={i}
// //             onClick={() => setPage(i + 1)}
// //             className={`px-3 py-1 rounded ${
// //               page === i + 1
// //                 ? "bg-purple-600"
// //                 : "bg-zinc-800"
// //             }`}
// //           >
// //             {i + 1}
// //           </button>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import UserModal from "@/components/UserModal";

// const users = [
//   { id: 1, name: "Amit Sharma", email: "amit@mail.com", company: "TCS" },
//   { id: 2, name: "Priya Patel", email: "priya@mail.com", company: "Infosys" },
//   { id: 3, name: "Rahul Verma", email: "rahul@mail.com", company: "Wipro" },
// ];

// export default function UsersPage() {
//   const [selectedUser, setSelectedUser] = useState<any>(null);

//   return (
//     <div className="text-black dark:text-white">
//       <h1 className="text-3xl font-semibold mb-6">Users</h1>

//       <div className="space-y-3">
//         {users.map((u) => (
//           <div
//             key={u.id}
//             onClick={() => setSelectedUser(u)}
//             className="p-4 rounded cursor-pointer transition
//               bg-white dark:bg-zinc-900
//               border border-gray-200 dark:border-white/10
//               hover:bg-gray-100 dark:hover:bg-zinc-800"
//           >
//             <p className="font-medium">{u.name}</p>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               {u.email}
//             </p>
//           </div>
//         ))}
//       </div>

//       <UserModal
//         user={selectedUser}
//         onClose={() => setSelectedUser(null)}
//       />
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import UserModal from "@/components/UserModal";

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const USERS_PER_PAGE = 5;
  const [page, setPage] = useState(1);

  // ✅ FETCH API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await res.json();
        setUsers(data);
        setFiltered(data);
      } catch (err) {
        console.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // ✅ SEARCH
  useEffect(() => {
    let result = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    );

    // ✅ SORT
    result.sort((a, b) =>
      sortAsc
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFiltered(result);
    setPage(1);
  }, [search, sortAsc, users]);

  // ✅ PAGINATION
  const start = (page - 1) * USERS_PER_PAGE;
  const paginatedUsers = filtered.slice(start, start + USERS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / USERS_PER_PAGE);

  if (loading) return <p className="text-white">Loading users...</p>;

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold mb-6">Users</h1>

      {/* SEARCH */}
      <div className="flex gap-4 mb-4">
        <input
          placeholder="Search name or email..."
          className="px-4 py-2 rounded bg-zinc-900 border border-white/10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 bg-zinc-800 rounded"
        >
          Sort {sortAsc ? "Z–A" : "A–Z"}
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {paginatedUsers.map((u) => (
          <div
            key={u.id}
            onClick={() => setSelectedUser(u)}
            className="p-4 bg-zinc-900 rounded cursor-pointer hover:bg-zinc-800"
          >
            <div className="font-semibold">{u.name}</div>
            <div className="text-sm text-gray-400">{u.email}</div>
            <div className="text-xs text-gray-500">
              {u.company.name}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-purple-600"
                : "bg-zinc-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <UserModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}
