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
  title: "Portfolio — Web Developer & Designer",
  description: "Personal portfolio showcasing projects, skills, and experience. Full-stack developer with a passion for clean UI and modern web technologies.",
  keywords: ["portfolio", "web developer", "frontend", "nextjs", "typescript", "react"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio — Web Developer & Designer",
    description: "Personal portfolio showcasing projects, skills, and experience.",
    type: "website",
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
