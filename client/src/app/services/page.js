import ServicesPage from "@/uiPages/servicesPage/ServicesPage";

export const metadata = {
  title: "Vidhya Tyres | Services",
  description: "Authorized Apollo Tyres dealer in Coimbatore offering professional tyre services",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vidhya Tyres | Services",
    description: "Authorized Apollo Tyres dealer in Coimbatore offering professional tyre services",
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
  keywords: "Tyre Services Coimbatore, 3D Wheel Alignment, Wheel Balancer Services, Tyre Changer Services, Apollo Tyre Dealer Coimbatore, Reliable Tyre Services, Professional Tyre Maintenance, Best Tyre Services Coimbatore, Affordable Tyre Solutions, Apollo Tyre Repair Coimbatore",
  canonical: "https://vidhyatyres.in/services",
};

export default function Home() {
  return <ServicesPage />;
}
