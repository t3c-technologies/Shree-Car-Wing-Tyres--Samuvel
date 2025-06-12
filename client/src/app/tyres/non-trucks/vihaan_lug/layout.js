export const metadata = {
    title: "Vidhya Tyres | Non-Trucks | Vihaan LUG",
    description: "A game-changer for LCVs, designed for high mileage without compromising on performance. Offering superior durability and fuel efficiency. An ideal partner for long journeys.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Non-Trucks | Vihaan LUG",
        description: "A game-changer for LCVs, designed for high mileage without compromising on performance. Offering superior durability and fuel efficiency. An ideal partner for long journeys.",
        canonical: "https://vidhyatyres.in/tyres/non-trucks/vihaan_lug",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo Vihaan LUG - High Mileage Tyre",
            },
        ],
        type: "website",
    },
    keywords: "Apollo Vihaan LUG, High Mileage Tyres, Durable LCV Tyres, Long Journey Tyres, Superior Durability Tyres, Fuel Efficient Tyres, Best Apollo Tyres Coimbatore, Affordable LCV Tyres, Authorized Apollo Tyre Dealer Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/non-trucks/vihaan_lug",
};

export default function VihaanLUGPageLayout({ children }) {
    return <>{children}</>;
}
