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
  // maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <StyledComponentsRegistry>
        <body className="w-[90%] mx-auto text-z-content">
          <Header />
          {children}
          <Footer></Footer>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
