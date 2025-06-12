export const metadata = {
    title: "Vidhya Tyres | Tyres | 4W",
    description: "Authorized Apollo Tyres dealer in Coimbatore offering 4W tyres",
    icons: {
      icon: "/favicon-32x32.png",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Tyres | 4W",
        description: "Authorized Apollo Tyres dealer in Coimbatore offering 4W tyres",
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
    keywords: "Apollo 4W Tyres, Four-Wheeler Tyres Coimbatore, Car Tyres in Coimbatore, Premium Four-Wheeler Tyres, Apollo SUV Tyres, Reliable Car Tyre Dealer, 4W Tyre Offers Coimbatore, Best Apollo Car Tyres, Affordable Four-Wheeler Tyres, Authorized Apollo Tyre Dealer Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/4w",
};

export default function ContractLogisticsPageLayout({ children }) {
    return <>{children}</>;
}
