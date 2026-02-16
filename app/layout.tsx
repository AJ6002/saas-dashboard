// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "SaaS Dashboard",
//   description: "Frontend assignment",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-black text-white overflow-x-hidden">
//   <div className="grid-bg"></div>
//   <div className="glow-1"></div>
//   <div className="glow-2"></div>
//   <div className="glow-3"></div>
//   {children}
// </body>

      
//     </html>
//   );
// }
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "SaaS Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
