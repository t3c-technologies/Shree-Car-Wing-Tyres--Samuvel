import { notFound } from 'next/navigation';
import Guide1Page from '@/uiPages/guidePage/Guide1Page';
import Guide2Page from '@/uiPages/guidePage/Guide2Page';
import Guide3Page from '@/uiPages/guidePage/Guide3Page';
import Guide4Page from '@/uiPages/guidePage/Guide4Page';
import Guide5Page from '@/uiPages/guidePage/Guide5Page';
import { GUIDE_CONFIG, getAllGuideSlugs, getGuideBySlug } from '@/utils/guideConfig';

// Component mapping for dynamic imports
const GUIDE_COMPONENTS = {
    '1': Guide1Page,
    '2': Guide2Page,
    '3': Guide3Page,
    '4': Guide4Page,
    '5': Guide5Page,
};

export async function generateMetadata({ params }) {
    const guide = getGuideBySlug(params.slug);

    if (!guide) {
        return {
            title: 'Guide Not Found | Vidhya Tyres',
            description: 'The guide you are looking for could not be found.',
        };
    }

    return {
        title: `Vidhya Tyres | Guide | ${guide.title}`,
        description: guide.description,
        icons: {
            icon: "/favicon-32x32.png",
            shortcut: "/favicon-16x16.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
        openGraph: {
            title: `Vidhya Tyres | Guide | ${guide.title}`,
            description: guide.description,
            url: "https://vidhyatyres.in",
            images: [
                {
                    url: "https://vidhyatyres.in/images/og.png",
                    width: 1200,
                    height: 630,
                    alt: guide.ogAlt,
                },
            ],
            type: "website",
        },
        keywords: guide.keywords,
        canonical: `https://vidhyatyres.in/guide/${params.slug}`,
    };
}

export default function GuideSlugPageRoute({ params }) {
    const guide = getGuideBySlug(params.slug);
    const GuideComponent = GUIDE_COMPONENTS[params.slug];

    if (!guide || !GuideComponent) {
        notFound();
    }

    return <GuideComponent />;
}

// Generate static paths for better performance (ISG)
export async function generateStaticParams() {
    return getAllGuideSlugs().map((slug) => ({
        slug,
    }));
}
