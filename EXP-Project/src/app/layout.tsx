import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";
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

export const metadata: Metadata = {
  title: "Cosmic Kids — Universe Encyclopedia",
  description:
    "A visual encyclopedia of the universe for kids ages 8 to 14. Read about planets, stars, galaxies, black holes, and space exploration.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
