// export default function DashboardPage() {
//   return (
//     <div className="text-white">
//       <h1 className="text-3xl font-semibold mb-4">
//         Dashboard Overview
//       </h1>

//       <p className="text-gray-400">
//         Welcome to your SaaS dashboard.
//       </p>
//     </div>
//   );
// }
import "../landing.css";

export default function DashboardPage() {
  const metrics = [
    { label: "Active Users", value: "1,248" },
    { label: "Revenue", value: "$12,430" },
    { label: "New Signups", value: "86" },
    { label: "Churn Rate", value: "2.1%" },
  ];

  return (
    <div className="text-white">
      <h1 className="text-3xl font-semibold mb-8">
        Dashboard Overview
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 p-6 rounded-xl"
          >
            <p className="text-gray-400 text-sm">{m.label}</p>
            <p className="text-2xl font-semibold mt-2">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
