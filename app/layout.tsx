import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const achivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-achivo",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Alex Alison",
  description: "Minimalistic Portfolio for a professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${achivo.className} antialiased bg-stone-00`}>
        {children}
      </body>
    </html>
  );
}
