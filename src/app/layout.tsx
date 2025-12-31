import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// MUI wrappers
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import EmotionRegistry from "@/components/layout/EmotionRegistry";
// Import Navigation component
import Navigation from "@/components/layout/Navigation";

// Import Footer component
import Footer from "@/components/layout/Footer";


// Configure Roboto using Next.js font optimization
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Abdul-Sobur Ibrahim | Portfolio",
  description:
    "My personal portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <EmotionRegistry>
          <ThemeRegistry>
            <Navigation />
            {children}
            <Footer />
            </ThemeRegistry>
        </EmotionRegistry>
      </body>
    </html>
  );
}
