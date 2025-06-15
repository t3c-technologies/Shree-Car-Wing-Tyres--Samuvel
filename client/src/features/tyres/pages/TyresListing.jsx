"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AppIcon } from '@/shared/utils/icon';
import { COMPANY_INFO } from '@/shared/utils/constants';

// Import organized components and hooks
import { useTyreFilters } from '../hooks/useTyreFilters';
import { useFavorites } from '../hooks/useFavorites';
import { useTyreComparison } from '../hooks/useTyreComparison';

// Import utility functions
import {
    getCategoryIcon,
    matchesSearch,
    matchesPriceRange,
    matchesRating,
    matchesFeatures,
    matchesSize,
    matchesAvailability,
    sortTyres,
    getFilterOptions
} from '../utils/tyreUtils';

import { getRatingStars, scrollToTop } from '../utils/uiUtils';

// Import components
import FilterSidebar from '../components/FilterSidebar';

// Import sections
import TyresListingHeader from '../sections/tyresListing/TyresListingHeader';
import TyresListingControls from '../sections/tyresListing/TyresListingControls';
import TyresListingContent from '../sections/tyresListing/TyresListingContent';

// Import data and styles
import tyresCatalog from '../data/tyresCatalog.json';
import '../styles/tyres.css';

const TyresListing = ({ category = null, brand = null }) => {
    const router = useRouter();
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showQuickView, setShowQuickView] = useState(null);

    // Custom hooks
    const {
        filters,
        sortBy,
        viewMode,
        currentPage,
        itemsPerPage,
        mounted,
        hasActiveFilters,
        setSortBy,
        setViewMode,
        setCurrentPage,
        setItemsPerPage,
        handleFilterChange,
        handleFeatureToggle,
        clearFilters
    } = useTyreFilters(category, brand);

    const {
        favoriteItems,
        toggleFavorite,
        isFavorite
    } = useFavorites();

    const {
        compareItems,
        toggleCompare,
        isInComparison,
        canAddToComparison,
        getComparisonCount,
        clearComparison,
        getComparisonIds
    } = useTyreComparison();

    // Get filter options
    const filterOptions = useMemo(() => getFilterOptions(tyresCatalog), []);

    // Enhanced filter and sort logic
    const filteredTyres = useMemo(() => {
        let filtered = tyresCatalog.filter(tyre => {
            const matchesCategory = filters.category === 'ALL' || tyre.category === filters.category;
            const matchesBrand = filters.brand === 'ALL' || tyre.brand === filters.brand;
            const matchesSearchTerm = matchesSearch(tyre, filters.search);
            const matchesPrice = matchesPriceRange(tyre, filters.priceRange);
            const matchesRatingFilter = matchesRating(tyre, filters.rating);
            const matchesFeaturesFilter = matchesFeatures(tyre, filters.features);
            const matchesSizeFilter = matchesSize(tyre, filters.size);
            const matchesAvailabilityFilter = matchesAvailability(tyre, filters.availability);

            return matchesCategory && matchesBrand && matchesSearchTerm && matchesPrice &&
                matchesRatingFilter && matchesFeaturesFilter && matchesSizeFilter &&
                matchesAvailabilityFilter;
        });

        // Sort tyres
        filtered = sortTyres(filtered, sortBy);

        return filtered;
    }, [filters, sortBy]);

    // Handle loading state separately
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, [filters, sortBy]);

    // Pagination logic
    const totalPages = Math.ceil(filteredTyres.length / itemsPerPage);
    const paginatedTyres = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredTyres.slice(start, end);
    }, [filteredTyres, currentPage, itemsPerPage]);

    // Reset pagination when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [filters, sortBy, setCurrentPage]);

    // Memoized callback functions for better performance
    const handleQuickView = useCallback((tyre) => {
        setShowQuickView(tyre);
    }, []);

    const handleToggleFavorite = useCallback((tyre) => {
        toggleFavorite(tyre);
    }, [toggleFavorite]);

    const handleToggleCompare = useCallback((tyre) => {
        toggleCompare(tyre);
    }, [toggleCompare]);

    const handleClearComparison = useCallback(() => {
        clearComparison();
    }, [clearComparison]);

    const handleFilterToggle = useCallback(() => {
        setShowFilters(!showFilters);
    }, [showFilters]);

    // Handle comparison navigation
    const handleCompareNow = useCallback(() => {
        const compareIds = getComparisonIds();
        router.push(`/tyres/compare?ids=${compareIds.join(',')}`);
    }, [getComparisonIds, router]);

    // Handle brand navigation via router
    const handleBrandNavigate = useCallback((brandName) => {
        const brandSlug = brandName.toLowerCase().replace(' ', '-');
        router.push(`/tyres/${brandSlug}`);
    }, [router]);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-muted/20 flex items-center justify-center">
                <div className="text-center">
                    <AppIcon icon="mdi:loading" className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading tyres...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Header */}
            <TyresListingHeader
                filteredTyres={filteredTyres}
                filterOptions={filterOptions}
            />

            <div className="w-full px-4 md:px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8 max-w-none">
                    {/* Filters Sidebar */}
                    <FilterSidebar
                        filters={filters}
                        filterOptions={filterOptions}
                        hasActiveFilters={hasActiveFilters}
                        onFilterChange={handleFilterChange}
                        onFeatureToggle={handleFeatureToggle}
                        onClearFilters={clearFilters}
                        onBrandNavigate={handleBrandNavigate}
                        showFilters={showFilters}
                    />

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        {/* Controls and Active Filters */}
                        <TyresListingControls
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            itemsPerPage={itemsPerPage}
                            setItemsPerPage={setItemsPerPage}
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            handleFilterToggle={handleFilterToggle}
                            hasActiveFilters={hasActiveFilters}
                            filters={filters}
                            handleFilterChange={handleFilterChange}
                            handleFeatureToggle={handleFeatureToggle}
                            clearFilters={clearFilters}
                        />

                        {/* Main Content Area */}
                        <TyresListingContent
                            paginatedTyres={paginatedTyres}
                            isLoading={isLoading}
                            viewMode={viewMode}
                            totalPages={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            clearFilters={clearFilters}
                            getComparisonCount={getComparisonCount}
                            handleCompareNow={handleCompareNow}
                            handleClearComparison={handleClearComparison}
                            handleToggleFavorite={handleToggleFavorite}
                            handleToggleCompare={handleToggleCompare}
                            handleQuickView={handleQuickView}
                            showQuickView={showQuickView}
                            setShowQuickView={setShowQuickView}
                            isFavorite={isFavorite}
                            isInComparison={isInComparison}
                            canAddToComparison={canAddToComparison}
                            getCategoryIcon={getCategoryIcon}
                            getRatingStars={getRatingStars}
                            scrollToTop={scrollToTop}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default TyresListing;
