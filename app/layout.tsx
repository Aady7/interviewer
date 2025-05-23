import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";


const monaSans= Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Interview Prepration App",
  description: "An Interview Preparation App with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={monaSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
