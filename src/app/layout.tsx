import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function LandingLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mnd5til.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
