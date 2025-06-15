"use client";

import { Suspense } from 'react';
import TyreComparison from '@/features/tyres/pages/TyreComparison';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TyreComparison />
        </Suspense>
    );
}
