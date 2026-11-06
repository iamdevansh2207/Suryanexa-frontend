import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuryaNexa — The B2B Solar Operating System | From Warehouse to Wattage",
  description:
    "SuryaNexa connects bulk solar equipment traders, verified distributors, and local rooftop installers with Blind-Vault CRM, instant kit matching, and dispute-proof delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&family=Onest:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white text-zinc-900 font-['Onest',sans-serif]">
        {children}
      </body>
    </html>
  );
}
