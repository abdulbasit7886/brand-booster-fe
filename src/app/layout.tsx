import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Booster",
  description: "Grow your brand visibility with press and distribution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden font-Inter">{children}</body>
    </html>
  );
}
