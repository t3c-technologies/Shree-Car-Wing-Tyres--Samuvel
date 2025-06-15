"use client";

import { AppIcon } from '@/shared/utils/icon';
import { getFilterDisplayLabel, getFilterCategoryLabel } from '@/shared/utils/constants';

const TyresListingControls = ({
    sortBy,
    setSortBy,
    itemsPerPage,
    setItemsPerPage,
    viewMode,
    setViewMode,
    handleFilterToggle,
    hasActiveFilters,
    filters,
    handleFilterChange,
    handleFeatureToggle,
    clearFilters
}) => {
    return (
        <>
            {/* Controls Bar */}
            <div className="bg-card border border-border rounded-xl p-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleFilterToggle}
                            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            <AppIcon icon="mdi:filter-variant" className="w-4 h-4" />
                            Filters
                            {hasActiveFilters && (
                                <span className="w-5 h-5 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                                    !
                                </span>
                            )}
                        </button>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-sm"
                            >
                                <option value="name">Name</option>
                                <option value="brand">Brand</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                                <option value="rating">Rating</option>
                                <option value="newest">Newest</option>
                                <option value="popular">Most Popular</option>
                                {filters.search && <option value="relevance">Relevance</option>}
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Show:</span>
                            <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                                className="p-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-sm"
                            >
                                <option value="12">12</option>
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="48">48</option>
                            </select>
                        </div>

                        <div className="flex items-center bg-muted rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-colors ${viewMode === 'grid'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:text-card-foreground'
                                    }`}
                            >
                                <AppIcon icon="mdi:view-grid" className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded transition-colors ${viewMode === 'list'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:text-card-foreground'
                                    }`}
                            >
                                <AppIcon icon="mdi:view-list" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
                <div className="mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className="text-sm text-muted-foreground font-medium">Active filters:</span>
                        <button
                            onClick={clearFilters}
                            className="text-xs text-muted-foreground hover:text-destructive transition-colors px-2 py-1 rounded hover:bg-destructive/10"
                        >
                            Clear all
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {Object.entries(filters).map(([key, value]) => {
                            // Handle features array separately
                            if (key === 'features' && Array.isArray(value) && value.length > 0) {
                                return value.map(feature => (
                                    <span
                                        key={feature}
                                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm filter-chip"
                                    >
                                        <span className="text-xs text-primary/70">{getFilterCategoryLabel(key)}:</span>
                                        <span>{feature}</span>
                                        <button
                                            onClick={() => handleFeatureToggle(feature)}
                                            className="hover:text-primary/80"
                                        >
                                            <AppIcon icon="mdi:close" className="w-3 h-3" />
                                        </button>
                                    </span>
                                ));
                            }

                            // Handle other filters
                            if (key !== 'features' &&
                                value !== 'ALL' &&
                                value !== '' &&
                                value !== null &&
                                value !== undefined &&
                                !(Array.isArray(value) && value.length === 0)) {

                                const displayValue = getFilterDisplayLabel(key, value);

                                return (
                                    <span
                                        key={key}
                                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm filter-chip"
                                    >
                                        <span className="text-xs text-primary/70">{getFilterCategoryLabel(key)}:</span>
                                        <span>{displayValue}</span>
                                        <button
                                            onClick={() => handleFilterChange(key, Array.isArray(value) ? [] : 'ALL')}
                                            className="hover:text-primary/80"
                                        >
                                            <AppIcon icon="mdi:close" className="w-3 h-3" />
                                        </button>
                                    </span>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default TyresListingControls;
