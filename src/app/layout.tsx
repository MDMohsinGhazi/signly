import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signly",
  description: "Draw your online signature",
};
const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
};

export default RootLayout;
