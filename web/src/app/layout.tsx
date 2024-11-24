import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const interLocal = localFont({ 
  src: "./fonts/Inter-Regular.ttf",
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
        {children}
      </body>
    </html>
  );
}
