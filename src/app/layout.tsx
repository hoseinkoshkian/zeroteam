import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "zeroteam",
  description: "تیم برنامه نویسی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="w-[90%] mx-auto text-z-content">
        <Header />
        {children}
      </body>
    </html>
  );
}
