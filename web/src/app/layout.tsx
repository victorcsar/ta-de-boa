import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingMenu from "@/components/floating-menu";
import { Providers } from "./providers";

const interLocal = localFont({ 
  src: "../assets/fonts/Inter-Regular.ttf",
  variable: '--font-inter-local'
})


export const metadata: Metadata = {
  title: "Tá de boa?",
  description: "Hackathon project by team 96",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interLocal.variable} font-sans`}
      >
        <Providers>
          {children}
        </Providers>
        <FloatingMenu />
      </body>
    </html>
  );
}
