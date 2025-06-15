"use client";

import { Suspense } from 'react';
import TyresListing from '@/features/tyres/pages/TyresListing';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TyresListing />
    </Suspense>
  );
}