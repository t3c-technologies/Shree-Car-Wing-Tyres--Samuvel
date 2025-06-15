import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/providers/ThemeProvider';
import MainLayout from "@/shared/components/mainLayout/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shree Caar Wind - Tyres - Premium Multi-Brand Tyre Dealer in Coimbatore",
  description:
    "Premium multi-brand tyre dealer in Coimbatore offering Goodyear, Michelin, Bridgestone, JK Tyre & more with professional services.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Shree Caar Wind - Tyres - Premium Multi-Brand Tyre Dealer in Coimbatore",
    description:
      "Premium multi-brand tyre dealer in Coimbatore offering Goodyear, Michelin, Bridgestone, JK Tyre & more with professional services.",
    url: "shreecaarwindtyres.in",
    images: [
      {
        url: "https://shreecaarwindtyres.in/images/og.png",
        width: 1200,
        height: 630,
        alt: "Shree Caar Wind - Tyres OG Image",
      },
    ],
    type: "website",
  },
  keywords: "Multi-Brand Tyres Coimbatore, Goodyear Tyres, Michelin Tyres, Bridgestone Tyres, JK Tyre, Kelly Tyres, Yokohama Tyres, Premium Tyre Dealer Coimbatore, Best Tyre Shop Coimbatore, 3D Wheel Alignment Coimbatore, Tyre Balancing Services, Two-Wheeler Tyres Coimbatore, Four-Wheeler Tyres Coimbatore, Commercial Tyres, Truck Tyres, Professional Tyre Services, Tyre Offers in Coimbatore, Buy Premium Tyres Coimbatore, Reliable Tyre Dealer, Shree Caar Wind - Tyres Services, Coimbatore Tyre Shop",
  canonical: 'https://shreecaarwindtyres.in/',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
