import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </head>
    <body className={`${inter.className} bg-zinc-900 text-zinc-50 p-8`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
