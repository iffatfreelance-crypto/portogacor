import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Iffat Fakhir — Portfolio & Software Engineer",
  description: "Portofolio profesional Iffat Fakhir — Mahasiswa TRPL & Fullstack Developer. Membangun aplikasi web modern, performa tinggi, dan skalabel.",
  keywords: ["Iffat Fakhir", "Portfolio", "Web Developer", "Software Engineer", "TRPL", "Next.js", "TypeScript", "React", "Fullstack Developer"],
  authors: [{ name: "Iffat Fakhir" }],
  creator: "Iffat Fakhir",
  openGraph: {
    title: "Iffat Fakhir — Portfolio & Software Engineer",
    description: "Portofolio profesional Iffat Fakhir — Mahasiswa TRPL & Fullstack Developer.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
