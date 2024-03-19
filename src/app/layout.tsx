import "../styles/main.css";
import type {Metadata} from "next";

import {Inter} from "next/font/google";

const inter = Inter({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-inter",
});

export const metadata: Metadata = {
   title: "Smart Whales",
   description:
      "Copy-trade most successful crypto whales. Invest together with Binance Labs, Pantera Capital, and a16z.",
   icons: "/images/favicon01.svg",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={`${inter.variable}`}>{children}</body>
      </html>
   );
}
