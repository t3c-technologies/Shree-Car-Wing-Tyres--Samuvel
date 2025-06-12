import Guide2Page from '@/uiPages/guidePage/Guide2Page';

export const metadata = {
    title: "Vidhya Tyres | Guide | How to Choose the Right Tyres for Your SUV",
    description: "Learn how to choose the best tyres for your SUV with our expert guide. Discover essential tips for selecting the right tyres and ensuring optimal performance with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Guide | How to Choose the Right Tyres for Your SUV",
        description: "Learn how to choose the best tyres for your SUV with our expert guide. Discover essential tips for selecting the right tyres and ensuring optimal performance with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        url: "https://vidhyatyres.in",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Vidhya Tyres Guide to Choosing SUV Tyres",
            },
        ],
        type: "website",
    },
    keywords: "How to Choose SUV Tyres, Best Tyres for SUVs, SUV Tyre Selection Guide, Apollo Tyres Dealer Coimbatore, Tips for Choosing SUV Tyres, Reliable Tyre Dealer, Vidhya Tyres SUV Tyre Guide, Premium Tyre Selection, SUV Tyre Maintenance Tips, Best Apollo SUV Tyres",
    canonical: "https://vidhyatyres.in/guide/2",
};

export default function Guide2PageRoute() {
    return <Guide2Page />;
}
