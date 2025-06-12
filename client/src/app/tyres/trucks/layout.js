export const metadata = {
    title: "Vidhya Tyres | Tyres | Heavy Vehicles",
    description: "Authorized Apollo Tyres dealer in Coimbatore offering heavy vehicle tyres",
    icons: {
      icon: "/favicon-32x32.png",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Tyres | Heavy Vehicles",
        description: "Authorized Apollo Tyres dealer in Coimbatore offering heavy vehicle tyres",
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
    keywords: "Apollo Heavy Vehicle Tyres, Truck Tyres Coimbatore, Heavy-Duty Tyres, Commercial Vehicle Tyres, Premium Truck Tyres, Reliable Heavy Vehicle Tyre Dealer, Affordable Truck Tyres, Authorized Apollo Heavy Vehicle Tyre Dealer Coimbatore, Best Apollo Truck Tyres, Heavy Truck Tyre Offers Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/trucks",
};

export default function ContractLogisticsPageLayout({ children }) {
    return <>{children}</>;
}
