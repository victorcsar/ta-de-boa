import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

export const interLocal = localFont({ 
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: '--font-inter-local'
})


export const metadata: Metadata = {
  title: "Tá de boa?",
  description: "Hackathon project by team 94",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interLocal.variable} font-sans  lg:bg-custom-primary lg:flex lg:flex-col lg:items-center`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
