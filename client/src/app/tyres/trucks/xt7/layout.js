export const metadata = {
    title: "Vidhya Tyres | Heavy Vehicles | XT7",
    description: "For the ones who prefer performance over everything else. Go the distance without breaking a sweat with Apollo XT-7 tyres for medium and heavy commercial vehicles.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Trucks | XT7",
        description: "Go the distance without giving it a second thought. Apollo XT-9 Gold offers long lasting performance that goes on and on with higher mileage and retread potential.",
        url: "https://vidhyatyres.in/tyres/trucks/xt7",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo XT7",
            },
        ],
        type: "website",
    },
    keywords: "Apollo XT7, XT7, Apollo Tyres, Truck Tyres, Heavy Vehicle Tyres, Commercial Vehicle Tyres",
    canonical: "https://vidhyatyres.in/tyres/trucks/xt7",
};

export default function XT9GoldPageLayout({ children }) {
    return <>{children}</>;
}