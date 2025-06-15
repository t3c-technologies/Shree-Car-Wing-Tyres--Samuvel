"use client";

import { Suspense, use } from 'react';
import TyreDetail from '@/features/tyres/pages/TyreDetail';
import TyresListing from '@/features/tyres/pages/TyresListing';

export default function Page({ params }) {
    const { id } = use(params);

    // Check if this is a category slug (2w, 4w, trucks, non-trucks)
    const categorySlugs = ['2w', '4w', 'trucks', 'non-trucks'];
    const isCategory = categorySlugs.includes(id);

    // Check if this is a brand slug (lowercase brand names)
    const brandSlugs = ['goodyear', 'michelin', 'bridgestone', 'jk-tyre', 'yokohama', 'kelly'];
    const isBrand = brandSlugs.includes(id);

    if (isCategory) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <TyresListing category={id} />
            </Suspense>
        );
    }

    if (isBrand) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <TyresListing brand={id} />
            </Suspense>
        );
    }

    // Otherwise, it's a tyre detail page
    return <TyreDetail />;
}
