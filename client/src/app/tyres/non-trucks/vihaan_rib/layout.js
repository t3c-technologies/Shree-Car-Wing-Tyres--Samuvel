export const metadata = {
    title: "Vidhya Tyres | Non-Trucks | Vihaan Rib",
    description: "Designed for LCVs, the Vihaan Rib ensures smooth rides with improved stability and exceptional mileage. Engineered for durability and efficiency, it's the perfect choice for urban and long-haul routes.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Non-Trucks | Vihaan Rib",
        description: "Designed for LCVs, the Vihaan Rib ensures smooth rides with improved stability and exceptional mileage. Engineered for durability and efficiency, it's the perfect choice for urban and long-haul routes.",
        canonical: "https://vidhyatyres.in/tyres/non-trucks/vihaan_rib",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo Vihaan Rib - High Stability Tyre",
            },
        ],
        type: "website",
    },
    keywords: "Apollo Vihaan Rib, High Stability Tyres, Durable LCV Tyres, Urban and Long-Haul Tyres, Superior Durability Tyres, Efficient Tyres, Best Apollo Tyres Coimbatore, Affordable LCV Tyres, Authorized Apollo Tyre Dealer Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/non-trucks/vihaan_rib",
};

export default function VihaanRibPageLayout({ children }) {
    return <>{children}</>;
}
