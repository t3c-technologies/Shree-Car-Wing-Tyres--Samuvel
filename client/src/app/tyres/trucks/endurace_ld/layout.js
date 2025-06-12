export const metadata = {
    title: "Vidhya Tyres | Heavy Vehicles | Endurace LD",
    description: "An LCV tyre for those who need better mileage, better traction, and better load carrying capabilities. When nothing else endures, ENDURACE does.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Heavy Vehicles | Endurace LD",
        description: "An LCV tyre for those who need better mileage, better traction, and better load carrying capabilities. When nothing else endures, ENDURACE does.",
        url: "https://vidhyatyres.in/tyres/trucks/endurace_ld",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo Endurace LD - Regional Drive Tyre",
            },
        ],
        type: "website",
    },
    keywords: "Apollo Endurace LD, Regional Drive Tyres, LCV Tyres, Apollo Truck Tyres, Durable Tyres Coimbatore, Best Apollo Tyres, Affordable LCV Tyres, Authorized Apollo Tyre Dealer Coimbatore",
    canonical: "https://vidhyatyres.in/tyres/trucks/endurace_ld",
};

export default function EnduraceLDPageLayout({ children }) {
    return <>{children}</>;
}
