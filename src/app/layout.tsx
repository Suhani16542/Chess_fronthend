import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MessageCircle } from "lucide-react";
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
    default: "Sada's Chess Academy – Learn Chess with FIDE-Rated Coaches",
    template: "%s | Sada's Chess Academy",
  },
  description:
    "Sada's Chess Academy provides structured coaching from experienced FIDE-rated coaches, personalised training, and tournament-focused development.",
  keywords: [
    "chess academy",
    "learn chess",
    "FIDE rated coach",
    "chess classes online",
    "chess training India",
    "chess for beginners",
    "chess tournament prep",
  ],
  openGraph: {
    type: "website",
    siteName: "Sada's Chess Academy",
    title: "Sada's Chess Academy – Learn Chess with FIDE-Rated Coaches",
    description:
      "Sada's Chess Academy provides structured coaching from experienced FIDE-rated coaches and tournament-focused training.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sada's Chess Academy",
    description: "Structured coaching with experienced FIDE-rated coaches. Book your free demo today.",
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
      <body>
        {children}
        <a
          href="https://wa.me/7358328783?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Chess Class on WhatsApp"
          className="fixed bottom-4 right-4 z-[300] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_16px_45px_rgba(37,211,102,0.4)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
      </body>
    </html>
  );
}
