import { Key } from "lucide-react";

export const metadata = {
    title: "Vidhya Tyres | Non-Trucks | Endurace MA",
    description: "A tyre to handle your goods and your haulage costs with care. The robust design and superior handling of ENDURACE MA keeps you on budget and on track on every road you travel.",
    icons: {
        icon: "/favicon-32x32.png",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Vidhya Tyres | Non-Trucks | Endurace MA",
    description: "A tyre to handle your goods and your haulage costs with care. The robust design and superior handling of ENDURACE MA keeps you on budget and on track on every road you travel.",
        url: "https://vidhyatyres.in/tyres/trucks/endrurace_ma",
        images: [
            {
                url: "https://vidhyatyres.in/images/og.png",
                width: 1200,
                height: 630,
                alt: "Apollo Endurace RD Tyre",
            },
        ],
        type: "website",
    },
    keywords: "Apollo, Endurace, RD, Tyre, Vidhya, Tyres, Non-Trucks, Endurace MA",
    canonical: "https://vidhyatyres.in/tyres/trucks/endrurace_ma",
};

export default function XT9GoldPageLayout({ children }) {
    return <>{children}</>;
}