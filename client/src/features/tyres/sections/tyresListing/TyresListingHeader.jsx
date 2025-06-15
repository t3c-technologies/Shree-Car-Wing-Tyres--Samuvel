"use client";

import { AppIcon } from '@/shared/utils/icon';

const TyresListingHeader = ({
    filteredTyres,
    filterOptions,
}) => {
    return (
        <>
            {/* Hero Header */}
            <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
                <div className="w-full px-4 md:px-6">
                    <div className="text-center text-primary-foreground space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">Premium Tyres Collection</h1>
                        <p className="text-lg text-primary-foreground/80">
                            Discover our complete range of high-quality tyres for every vehicle
                        </p>
                        <div className="flex items-center justify-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <AppIcon icon="mdi:tire" className="w-4 h-4" />
                                <span>{filteredTyres.length} tyres found</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <AppIcon icon="mdi:domain" className="w-4 h-4" />
                                <span>{filterOptions.brands.length - 1} brands</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <AppIcon icon="mdi:format-list-group" className="w-4 h-4" />
                                <span>{filterOptions.categories.length - 1} categories</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TyresListingHeader;
