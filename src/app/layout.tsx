import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Adnan-Khan || Portfolio",
  description: "This Portfolio Website Generted by Usin Next-js & Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        {children}
        </body>
    </html>
  );
}
