import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Viewport } from "next";
import StyledComponentsRegistry from "./lib/registery";
export const metadata: Metadata = {
  title: "zeroteam",
  description: "تیم برنامه نویسی",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <StyledComponentsRegistry>
        <body className="text-z-content overflow-x-hidden flex flex-col justify-between h-screen">
          <Header />
          <main className="basis-full">{children}</main>
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
