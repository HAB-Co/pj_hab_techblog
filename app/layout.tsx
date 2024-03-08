import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

import "./globals.css";
import Analytics from "./components/Analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  // weight: 'variable', // default なので不要。バリアブルフォントでなければ必要
  // display: 'swap', // default なので不要
  // preload: true, // default なので不要
  // adjustFontFallback: true, // next/font/google で default なので不要
  // fallback: ['system-ui', 'arial'], // local font fallback なので不要
})

export const metadata: Metadata = {
  title: "HAB&Co. Engineer Blog",
  description: "株式会社HAB&Co.エンジニアグループのブログサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}><Suspense><Analytics /></Suspense>{children}</body>
    </html>
  );
}
