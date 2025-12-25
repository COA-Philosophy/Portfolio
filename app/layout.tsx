import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import JetBrains Mono
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TATSUYA MINEGISHI | Frontend Engineer & Structure Designer",
    template: "%s | TATSUYA MINEGISHI",
  },
  description: "Portfolio of Tatsuya Minegishi, a Frontend Engineer & Structure Designer weaving logic into art.",
  keywords: ["Frontend Engineer", "Web Design", "Next.js", "React", "Code Art", "Structure Designer", "Minimalist"],
  authors: [{ name: "Tatsuya Minegishi" }],
  creator: "Tatsuya Minegishi",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://tatsuya-minegishi.com",
    title: "TATSUYA MINEGISHI | Portfolio",
    description: "Weaving logic into art. Designing structures that breathe with Zen simplicity.",
    siteName: "TATSUYA MINEGISHI Portfolio",
    images: [
      {
        url: "/og-image.png", // Needs to be added to public
        width: 1200,
        height: 630,
        alt: "TATSUYA MINEGISHI Portfolio Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TATSUYA MINEGISHI | Portfolio",
    description: "Frontend Engineer & Structure Designer. Weaving logic into art.",
    creator: "@user_twitter_handle", // Placeholder
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ... (other imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
