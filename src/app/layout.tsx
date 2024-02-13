import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav1 from "./components/Nav2";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News || portal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav1/>
        {children}
        <Footer/>
        </body>

    </html>
  );
}
