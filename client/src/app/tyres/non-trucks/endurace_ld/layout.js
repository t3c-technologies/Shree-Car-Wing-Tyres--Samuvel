export const metadata = {
    title: "Vidhya Tyres | Non-Trucks | Endurace LD",
    description: "An LCV tyre for those who need better mileage, better traction, and better load carrying capabilities. When nothing else endures, ENDURACE does.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Non-Trucks | Endurace LD",
        description: "An LCV tyre for those who need better mileage, better traction, and better load carrying capabilities. When nothing else endures, ENDURACE does.",
        canonical: "https://vidhyatyres.in/tyres/non-trucks/endurace_ld",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo Endurace LD - Heavy Load Tyre",
            },
        ],
        type: "website",
    },
    keywords: "Apollo Endurace LD, Heavy Load Tyres, LCV Tyres, Non-Truck Tyres, Durable Tyres Coimbatore, Best Apollo Tyres, Affordable Tyres, Authorized Apollo Tyre Dealer Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/non-trucks/endurace_ld",
};

export default function EnduraceLDPageLayout({ children }) {
    return <>{children}</>;
}
