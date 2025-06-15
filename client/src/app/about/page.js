import AboutPage from "@/features/about/pages/AboutPage";

export const metadata = {
  title: "Vidhya Tyres | About Us",
  description: "Learn more about Vidhya Tyres, an authorized Apollo Tyres dealer in Coimbatore offering premium tyres and services",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vidhya Tyres | About Us",
    description: "Learn more about Vidhya Tyres, an authorized Apollo Tyres dealer in Coimbatore offering premium tyres and services",
    url: "https://vidhyatyres.in",
    images: [
      {
        url: "https://vidhyatyres.in/images/og.png",
        width: 1200,
        height: 630,
        alt: "Vidhya Tyres OG Image",
      },
    ],
    type: "website",
  },
  keywords: "About Vidhya Tyres, Apollo Tyre Dealer Coimbatore, Tyre Services Coimbatore, Premium Tyres Coimbatore, Reliable Tyre Dealer, Trusted Apollo Dealer, Professional Tyre Solutions, Authorized Tyre Dealer Coimbatore, Vidhya Tyres Story, Apollo Tyre Shop Coimbatore",
  canonical: "https://vidhyatyres.in/about",
};

export default function Home() {
  return (

    <AboutPage />

  );
}
