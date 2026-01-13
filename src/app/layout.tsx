import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Box from "@mui/material/Box";

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={roboto.variable} suppressHydrationWarning={true}>
        <EmotionRegistry>
          <ThemeRegistry>
            <Navigation />
            <Box component="main" sx={{ pt: { xs: "64px", sm: "80px" } }}>
              {children}
            </Box>
            <Footer />
          </ThemeRegistry>
        </EmotionRegistry>
      </body>
    </html>
  );
}
