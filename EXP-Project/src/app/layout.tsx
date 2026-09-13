import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const display = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const title = "Cosmic Kids — Universe Encyclopedia";
const description =
  "A visual encyclopedia of the universe for kids ages 8 to 14. Read about planets, stars, galaxies, black holes, and space exploration.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Cosmic Kids Encyclopedia",
  },
  description,
  applicationName: "Cosmic Kids",
  keywords: ["space", "encyclopedia", "planets", "stars", "galaxies", "kids", "astronomy"],
  authors: [{ name: "Cosmic Kids" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cosmic Kids",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#05040d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        <MotionProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <StarField />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
