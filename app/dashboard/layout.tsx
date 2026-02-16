// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import Sidebar from "@/components/Sidebar";
// import ThemeToggle from "@/components/ThemeToggle";

// export default async function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const session = await getServerSession();

//   if (!session) {
//     redirect("/login");
//   }

//   return (
//   <div className="flex bg-black min-h-screen text-white">
//     <Sidebar />

//     <main className="flex-1 p-10">
//       <div className="flex justify-end mb-6">
//         <ThemeToggle />
//       </div>

//       {children}
//     </main>
//   </div>
// );

// }
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) redirect("/login");

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        {children}
      </main>
    </div>
  );
}
