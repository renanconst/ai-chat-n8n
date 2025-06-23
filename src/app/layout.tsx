import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Mounted from "@/components/mounted";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ai Chat N8N",
  description: "Chat com IA integrado ao N8N",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
          <Mounted>
            {children}
          </Mounted>
        </ThemeProvider>
      </body>
    </html>
  );
}
