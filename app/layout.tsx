import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import localFont from "next/font/local"
import { ThemeProvider } from "next-themes";


const inter = localFont({
  src: "/fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "/fonts/SpaceGrotesk-Regular.ttf",
  variable: "--font-space-grotesk",
  weight: "400",
});


export const metadata: Metadata = {
  title: "Dev-overflow",
  description: "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >{children}
      </ThemeProvider>
        
      </body>
    </html>
  );
}
