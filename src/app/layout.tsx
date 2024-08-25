import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notosans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarDEE",
  description: "Website that will make your learning more easier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./image/favicon.svg"></link>
      </head>
      <body className={notosans.className}>{children}</body>
    </html>
  );
}
