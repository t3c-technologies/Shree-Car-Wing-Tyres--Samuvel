import GuidePage from "@/features/guides/pages/GuidePage";

export const metadata = {
  title: "Vidhya Tyres | Guide",
  description: "Explore our comprehensive guide to choosing the best tyres and services from Vidhya Tyres, an authorized Apollo Tyres dealer in Coimbatore",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vidhya Tyres | Guide",
    description: "Explore our comprehensive guide to choosing the best tyres and services from Vidhya Tyres, an authorized Apollo Tyres dealer in Coimbatore",
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
  keywords: "Tyre Guide, How to Choose Tyres, Apollo Tyre Guide Coimbatore, Best Tyres for Cars, Tyre Maintenance Tips, Reliable Tyre Dealer, Professional Tyre Services, Vidhya Tyres Guide, Choosing the Right Tyres, Apollo Tyres Tips",
  canonical: "https://vidhyatyres.in/guide",
};

export default function GuidePageRoute() {
  return (
    <GuidePage />
  );
}
