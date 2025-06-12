import OffersPage from "@/uiPages/offersPage/OffersPage";

export const metadata = {
    title: "Vidhya Tyres | Offers",
    description: "Check out the latest offers and discounts on premium Apollo Tyres and services at Vidhya Tyres, your trusted dealer in Coimbatore",
    icons: {
      icon: "/favicon-32x32.png",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Offers",
        description: "Check out the latest offers and discounts on premium Apollo Tyres and services at Vidhya Tyres, your trusted dealer in Coimbatore",
        url: "https://vidhyatyres.in",
        images: [
          {
            url: "https://vidhyatyres.in/images/og.png",
            width: 1200,
            height: 630,
            alt: "Vidhya Tyres OG Image",
          },
        ],
        type: "website",
    },
    keywords: "Apollo Tyre Offers, Tyre Discounts Coimbatore, Best Deals on Tyres, Apollo Tyres Promotions, Vidhya Tyres Discounts, Affordable Tyre Offers, Premium Tyre Discounts Coimbatore, Apollo Tyre Sale, Latest Tyre Deals, Coimbatore Tyre Offers",
    canonical: "https://vidhyatyres.in/offers",
};

export default function Home() {
    return <OffersPage />;
}
