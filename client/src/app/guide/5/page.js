import Guide5Page from '@/uiPages/guidePage/Guide5Page';

export const metadata = {
    title: "Vidhya Tyres | Guide | Common Tyre Problems and Solutions",
    description: "Discover common tyre problems and their solutions with our expert guide. Ensure optimal tyre performance, safety, and longevity with tips from Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Guide | Common Tyre Problems and Solutions",
        description: "Discover common tyre problems and their solutions with our expert guide. Ensure optimal tyre performance, safety, and longevity with tips from Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        url: "https://vidhyatyres.in",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Vidhya Tyres Tyre Problems and Solutions Guide",
            },
        ],
        type: "website",
    },
    keywords: "Common Tyre Problems, Tyre Solutions, Tyre Performance Issues, Tyre Maintenance Tips, Apollo Tyres Dealer Coimbatore, Reliable Tyre Dealer, Tyre Troubleshooting Guide, Vidhya Tyres Guide, Tyre Repair Tips, Tyre Safety Solutions",
    canonical: "https://vidhyatyres.in/guide/5",
};

export default function Guide5PageRoute() {
    return <Guide5Page />;
}
