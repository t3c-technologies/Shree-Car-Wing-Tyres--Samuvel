import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

/**
 * Custom hook for managing tyre listing filters and URL state
 */
export const useTyreFilters = (initialCategory = null, initialBrand = null) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Helper function to get category from route or search params
    const getCategoryFilter = () => {
        if (initialCategory) {
            // Map specific category route slugs to filter values
            const categoryRouteMap = {
                '2w': 'TWO WHEELER',
                '4w': 'FOUR WHEELER',
                'trucks': 'TRUCKS',
                'non-trucks': 'LIGHT COMMERCIAL'
            };
            return categoryRouteMap[initialCategory] || initialCategory.toUpperCase().replace('-', ' ');
        }
        // Handle URL parameters - convert back from slugs to category names
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            const categoryFromUrlMap = {
                '2w': 'TWO WHEELER',
                '4w': 'FOUR WHEELER',
                'trucks': 'TRUCKS',
                'non-trucks': 'LIGHT COMMERCIAL',
                'two-wheeler': 'TWO WHEELER',
                'four-wheeler': 'FOUR WHEELER'
            };
            return categoryFromUrlMap[categoryParam] || categoryParam.toUpperCase().replace('-', ' ');
        }
        return 'ALL';
    };

    // Helper function to get brand from route or search params
    const getBrandFilter = () => {
        if (initialBrand) {
            // Map specific brand slugs to proper brand names
            const brandSlugMap = {
                'goodyear': 'Goodyear',
                'michelin': 'Michelin',
                'bridgestone': 'Bridgestone',
                'jk-tyre': 'JK Tyre',
                'yokohama': 'Yokohama',
                'kelly': 'Kelly'
            };
            return brandSlugMap[initialBrand] || initialBrand.charAt(0).toUpperCase() + initialBrand.slice(1).replace('-', ' ');
        }
        // Handle URL parameters - convert back from slugs to brand names
        const brandParam = searchParams.get('brand');
        if (brandParam) {
            const brandFromUrlMap = {
                'goodyear': 'Goodyear',
                'michelin': 'Michelin',
                'bridgestone': 'Bridgestone',
                'jk-tyre': 'JK Tyre',
                'yokohama': 'Yokohama',
                'kelly': 'Kelly'
            };
            return brandFromUrlMap[brandParam] || brandParam.charAt(0).toUpperCase() + brandParam.slice(1).replace('-', ' ');
        }
        return 'ALL';
    };

    const [filters, setFilters] = useState({
        category: getCategoryFilter(),
        brand: getBrandFilter(),
        priceRange: searchParams.get('priceRange') || 'ALL',
        search: searchParams.get('search') || '',
        rating: searchParams.get('rating') || 'ALL',
        features: searchParams.get('features')?.split(',').filter(Boolean) || [],
        size: searchParams.get('size') || 'ALL',
        loadIndex: searchParams.get('loadIndex') || 'ALL',
        speedRating: searchParams.get('speedRating') || 'ALL',
        availability: searchParams.get('availability') || 'ALL'
    });

    const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'name');
    const [viewMode, setViewMode] = useState(searchParams.get('viewMode') || 'grid');
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [itemsPerPage, setItemsPerPage] = useState(parseInt(searchParams.get('itemsPerPage')) || 12);
    const [mounted, setMounted] = useState(false); useEffect(() => {
        setMounted(true);
    }, []);

    // Update category filter when initialCategory changes (for route-based filtering)
    useEffect(() => {
        if (initialCategory) {
            const categoryRouteMap = {
                '2w': 'TWO WHEELER',
                '4w': 'FOUR WHEELER',
                'trucks': 'TRUCKS',
                'non-trucks': 'LIGHT COMMERCIAL'
            };
            const mappedCategory = categoryRouteMap[initialCategory] || initialCategory.toUpperCase().replace('-', ' ');

            setFilters(prev => ({
                ...prev,
                category: mappedCategory
            }));
        }
    }, [initialCategory]);

    // Update brand filter when initialBrand changes (for route-based filtering)
    useEffect(() => {
        if (initialBrand) {
            const brandRouteMap = {
                'goodyear': 'Goodyear',
                'michelin': 'Michelin',
                'bridgestone': 'Bridgestone',
                'jk-tyre': 'JK Tyre',
                'yokohama': 'Yokohama',
                'kelly': 'Kelly'
            };
            const mappedBrand = brandRouteMap[initialBrand] || initialBrand.charAt(0).toUpperCase() + initialBrand.slice(1).replace('-', ' ');

            setFilters(prev => ({
                ...prev,
                brand: mappedBrand
            }));
        }
    }, [initialBrand]);

    // Update URL when filters change
    useEffect(() => {
        if (!mounted) return;

        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== 'ALL' && value !== '' && (Array.isArray(value) ? value.length > 0 : true)) {
                if (key === 'category') {
                    // Convert category names back to proper slugs for URL
                    const categoryToSlugMap = {
                        'TWO WHEELER': '2w',
                        'FOUR WHEELER': '4w',
                        'TRUCKS': 'trucks',
                        'LIGHT COMMERCIAL': 'non-trucks'
                    };
                    const categorySlug = categoryToSlugMap[value] || value.toLowerCase().replace(' ', '-');
                    if (categorySlug !== 'all') {
                        params.set(key, categorySlug);
                    }
                } else if (key === 'brand') {
                    // Convert brand names to lowercase slugs for URL
                    const lowercaseValue = value.toLowerCase().replace(' ', '-');
                    if (lowercaseValue !== 'all') {
                        params.set(key, lowercaseValue);
                    }
                } else {
                    params.set(key, Array.isArray(value) ? value.join(',') : value);
                }
            }
        });

        if (sortBy !== 'name') params.set('sortBy', sortBy);
        if (viewMode !== 'grid') params.set('viewMode', viewMode);
        if (currentPage !== 1) params.set('page', currentPage.toString());
        if (itemsPerPage !== 12) params.set('itemsPerPage', itemsPerPage.toString());

        const newUrl = `/tyres${params.toString() ? `?${params.toString()}` : ''}`;
        router.replace(newUrl, { shallow: true });
    }, [filters, sortBy, viewMode, currentPage, itemsPerPage, mounted, router]);

    const handleFilterChange = useCallback((filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    }, []);

    const handleFeatureToggle = useCallback((feature) => {
        setFilters(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }));
    }, []);

    const clearFilters = useCallback(() => {
        setFilters({
            category: 'ALL',
            brand: 'ALL',
            priceRange: 'ALL',
            search: '',
            rating: 'ALL',
            features: [],
            size: 'ALL',
            loadIndex: 'ALL',
            speedRating: 'ALL',
            availability: 'ALL'
        });
        setCurrentPage(1);
    }, []);

    const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
        if (key === 'features') return value.length > 0;
        return value !== 'ALL' && value !== '';
    });

    return {
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
    };
};
