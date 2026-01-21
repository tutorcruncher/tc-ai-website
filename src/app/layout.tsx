import { Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/components/SettingsProvider";

const inter = Inter({ subsets: ["latin"] });

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/mnd5til.css" />
        <link href="https://api.fontshare.com/v2/css?f[]=sentient@300,301,400&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <SettingsProvider>
          <main>{children}</main>
        </SettingsProvider>
      </body>
    </html>
  );
}
