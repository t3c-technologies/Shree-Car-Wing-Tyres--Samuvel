import Guide3Page from '@/uiPages/guidePage/Guide3Page';

export const metadata = {
    title: "Vidhya Tyres | Guide | Understanding Tyre Pressure and Its Importance",
    description: "Discover the importance of maintaining correct tyre pressure for safety, performance, and longevity. Learn expert tips with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Guide | Understanding Tyre Pressure and Its Importance",
        description: "Discover the importance of maintaining correct tyre pressure for safety, performance, and longevity. Learn expert tips with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        url: "https://vidhyatyres.in",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Vidhya Tyres Guide to Tyre Pressure",
            },
        ],
        type: "website",
    },
    keywords: "Understanding Tyre Pressure, Importance of Tyre Pressure, Tyre Safety Tips, Apollo Tyres Dealer Coimbatore, Tyre Longevity Tips, Proper Tyre Inflation, Tyre Pressure Maintenance, Reliable Tyre Dealer, Vidhya Tyres Guide, Tyre Performance Optimization",
    canonical: "https://vidhyatyres.in/guide/3",
};

export default function Guide3PageRoute() {
    return <Guide3Page />;
}
