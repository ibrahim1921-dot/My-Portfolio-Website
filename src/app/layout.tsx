import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Box from "@mui/material/Box";
import StructuredData from "@/components/structuredData";

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

// Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://abdul-sobur-portfolio.vercel.app'),
  title: {
    default: 'Abdul-Sobur Ibrahim | Full-Stack Developer & Tech Enthusiast',
    template: '%s | Abdul-Sobur Ibrahim'
  },
  description: 'Full-stack developer specializing in React, Next.js, TypeScript, and Python. Building modern web applications with clean code and exceptional user experiences. Based in Kumasi, Ghana.',
  keywords: [
    'Abdul-Sobur Ibrahim',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Python Developer',
    'Web Developer Ghana',
    'KNUST Computer Science',
    'Portfolio Website',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer'
  ],
  authors: [{ name: 'Abdul-Sobur Ibrahim', url: 'https://abdul-sobur-portfolio.vercel.app' }],
  creator: 'Abdul-Sobur Ibrahim',
  publisher: 'Abdul-Sobur Ibrahim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdul-sobur-portfolio.vercel.app',
    siteName: 'Abdul-Sobur Ibrahim Portfolio',
    title: 'Abdul-Sobur Ibrahim | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and Python. View my projects and blog posts.',
    images: [
      {
        url: '/og-image.png', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Abdul-Sobur Ibrahim - Full-Stack Developer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CodeWithIbra1',
    creator: '@CodeWithIbra1',
    title: 'Abdul-Sobur Ibrahim | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and Python.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://abdul-sobur-portfolio.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code', // Get from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <StructuredData />
      </head>
      <body className={roboto.variable} style={{ margin: 0, padding: 0 }} suppressHydrationWarning={true}>
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
