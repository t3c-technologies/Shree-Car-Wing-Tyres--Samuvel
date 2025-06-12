export const metadata = {
  title: "Vidhya Tyres | Tyres | Non Trucks",
  description: "Authorized Apollo Tyres dealer in Coimbatore offering non-truck tyres",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
      title: "Vidhya Tyres | Tyres | Non Trucks",
      description: "Authorized Apollo Tyres dealer in Coimbatore offering non-truck tyres",
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
  keywords: "Apollo Non-Truck Tyres, Non-Commercial Vehicle Tyres, Two-Wheeler Tyres Coimbatore, Four-Wheeler Tyres Coimbatore, Passenger Car Tyres, Premium Non-Truck Tyres, Affordable Non-Truck Tyres, Apollo SUV Tyres, Reliable Tyre Dealer Coimbatore, Best Apollo Tyres for Non-Trucks",
  canonical: "https://vidhyatyres.in/tyres/non-trucks",
};

export default function ContractLogisticsPageLayout({ children }) {
  return <>{children}</>;
}
