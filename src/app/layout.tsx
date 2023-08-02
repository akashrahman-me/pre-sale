import "swiper/css";
import "swiper/css/navigation";
import { Inter } from "next/font/google";

import "./globals.css";
import { CookiesConsent } from "@/components/cookies-consent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "SmartWhales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} lang="en">
      <body className="bg-black text-white">
        {children}
        <CookiesConsent />
      </body>
    </html>
  );
}
