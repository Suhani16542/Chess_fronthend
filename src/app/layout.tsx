import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "ChessMaster Academy – Learn Chess from Grandmasters",
    template: "%s | ChessMaster Academy",
  },
  description:
    "India's premier chess academy. Learn chess from FIDE-rated Grandmasters and International Masters with personalised, structured programs for all skill levels.",
  keywords: [
    "chess academy",
    "learn chess",
    "grandmaster coaching",
    "chess classes online",
    "chess training India",
    "FIDE rated coach",
    "chess for beginners",
    "chess tournament prep",
  ],
  openGraph: {
    type: "website",
    siteName: "ChessMaster Academy",
    title: "ChessMaster Academy – Learn Chess from Grandmasters",
    description:
      "India's premier chess academy. Personalised programs taught by FIDE-rated Grandmasters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessMaster Academy",
    description: "Learn chess from Grandmasters. Book your free demo today.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#20233B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
