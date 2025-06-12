export const metadata = {
    title: "Vidhya Tyres | Heavy Vehicles | Amar Gold",
    description: "Overtake every obstacle, overcome every challenge, go the distance with Apollo AMAR GOLD bias tyres for regional haulage and mixed operations.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Heavy Vehicles | Amar Gold",
        description: "Overtake every obstacle, overcome every challenge, go the distance with Apollo AMAR GOLD bias tyres for regional haulage and mixed operations.",
        url: "https://vidhyatyres.in/tyres/trucks/amar_gold",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo Amar Gold - Heavy Duty Truck Tyre",
            },
        ],
        type: "website",
    },
    keywords: "Apollo Amar Gold, Truck Tyres, Heavy Duty Tyres, Regional Haulage Tyres, Apollo Bias Tyres, Durable Truck Tyres Coimbatore, Best Apollo Tyres, Affordable Truck Tyres, Authorized Apollo Tyre Dealer Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/trucks/amar_gold",
};

export default function AmarGoldPageLayout({ children }) {
    return <>{children}</>;
}
