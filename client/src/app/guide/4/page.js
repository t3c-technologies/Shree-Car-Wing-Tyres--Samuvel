import Guide4Page from '@/uiPages/guidePage/Guide4Page';

export const metadata = {
    title: "Vidhya Tyres | Guide | Seasonal Tyre Guide: When to Switch",
    description: "Learn when to switch your tyres for different seasons with our comprehensive guide. Ensure safety, performance, and longevity with expert advice from Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Guide | Seasonal Tyre Guide: When to Switch",
        description: "Learn when to switch your tyres for different seasons with our comprehensive guide. Ensure safety, performance, and longevity with expert advice from Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        url: "https://vidhyatyres.in",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Vidhya Tyres Seasonal Tyre Guide",
            },
        ],
        type: "website",
    },
    keywords: "Seasonal Tyre Guide, When to Switch Tyres, Winter Tyres, Summer Tyres, Tyre Safety Tips, Apollo Tyres Dealer Coimbatore, Reliable Tyre Dealer, Vidhya Tyres Guide, Tyre Performance for Seasons, Best Seasonal Tyres",
    canonical: "https://vidhyatyres.in/guide/4",
};

export default function Guide4PageRoute() {
    return <Guide4Page />;
}
