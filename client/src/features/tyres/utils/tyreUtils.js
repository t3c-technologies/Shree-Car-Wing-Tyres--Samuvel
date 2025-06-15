/**
 * Utility functions for tyre data processing and filtering
 */

// Cache for expensive computations
const filterOptionsCache = new Map();

/**
 * Get category icon based on tyre category
 */
export const getCategoryIcon = (category) => {
    switch (category) {
        case 'TWO WHEELER':
            return 'mdi:motorbike';
        case 'FOUR WHEELER':
            return 'mdi:car';
        case 'LIGHT COMMERCIAL':
            return 'mdi:truck';
        case 'TRUCKS':
            return 'mdi:truck-delivery';
        default:
            return 'mdi:tire';
    }
};

/**
 * Extract average price from price range string with caching
 */
const priceCache = new Map();
export const extractPrice = (priceRange) => {
    if (priceCache.has(priceRange)) {
        return priceCache.get(priceRange);
    }

    const priceStr = priceRange.replace(/[₹,\s]/g, '');
    const prices = priceStr.split('-').map(p => parseInt(p));
    const avgPrice = (prices[0] + prices[1]) / 2;

    priceCache.set(priceRange, avgPrice);
    return avgPrice;
};

/**
 * Check if tyre matches search criteria with optimization
 */
export const matchesSearch = (tyre, searchTerm) => {
    if (!searchTerm) return true;

    const term = searchTerm.toLowerCase();

    // Early return for common cases
    if (tyre.name.toLowerCase().includes(term)) return true;
    if (tyre.brand.toLowerCase().includes(term)) return true;

    // Only check description if name and brand don't match
    return tyre.description.toLowerCase().includes(term);
};

/**
 * Check if tyre matches price range filter
 */
export const matchesPriceRange = (tyre, priceRangeFilter) => {
    if (priceRangeFilter === 'ALL') return true;

    const avgPrice = extractPrice(tyre.price_range);

    switch (priceRangeFilter) {
        case 'BUDGET':
            return avgPrice < 3000;
        case 'MID':
            return avgPrice >= 3000 && avgPrice < 8000;
        case 'PREMIUM':
            return avgPrice >= 8000 && avgPrice < 15000;
        case 'LUXURY':
            return avgPrice >= 15000;
        default:
            return true;
    }
};

/**
 * Check if tyre matches rating filter
 */
export const matchesRating = (tyre, ratingFilter) => {
    if (ratingFilter === 'ALL' || !tyre.reviews) return true;
    const rating = parseFloat(ratingFilter);
    return tyre.reviews.average_rating >= rating;
};

/**
 * Check if tyre matches features filter
 */
export const matchesFeatures = (tyre, featuresFilter) => {
    if (featuresFilter.length === 0) return true;

    const tyreFeatures = tyre.features ? tyre.features.map(f =>
        typeof f === 'string' ? f : f.name
    ) : [];

    return featuresFilter.some(feature =>
        tyreFeatures.includes(feature)
    );
};

/**
 * Check if tyre matches size filter
 */
export const matchesSize = (tyre, sizeFilter) => {
    if (sizeFilter === 'ALL') return true;
    return tyre.available_sizes?.some(size => size.size === sizeFilter) || false;
};

/**
 * Check if tyre matches availability filter
 */
export const matchesAvailability = (tyre, availabilityFilter) => {
    if (availabilityFilter === 'ALL') return true;

    const status = tyre.availability?.status;

    if (availabilityFilter === 'IN_STOCK') {
        return status === 'In Stock';
    } else if (availabilityFilter === 'LOW_STOCK') {
        return status === 'Low Stock';
    } else if (availabilityFilter === 'OUT_OF_STOCK') {
        return status === 'Out of Stock';
    } else if (availabilityFilter === 'SEASONAL') {
        return status === 'Seasonal';
    } else if (availabilityFilter === 'PRE_ORDER') {
        return status === 'Pre-Order';
    }

    return true;
};

/**
 * Sort tyres based on sort criteria
 */
export const sortTyres = (tyres, sortBy) => {
    return [...tyres].sort((a, b) => {
        switch (sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'brand':
                return a.brand.localeCompare(b.brand);
            case 'price_asc':
                return extractPrice(a.price_range) - extractPrice(b.price_range);
            case 'price_desc':
                return extractPrice(b.price_range) - extractPrice(a.price_range);
            case 'rating':
                return (b.reviews?.average_rating || 0) - (a.reviews?.average_rating || 0);
            case 'newest':
                return new Date(b.launch_date || '2020-01-01') - new Date(a.launch_date || '2020-01-01');
            case 'popular':
                return (b.reviews?.total_reviews || 0) - (a.reviews?.total_reviews || 0);
            case 'relevance':
                // Simple relevance scoring - can be enhanced
                return 0;
            default:
                return 0;
        }
    });
};

/**
 * Get unique filter options from tyres data
 */
export const getFilterOptions = (tyres) => {
    const categories = [...new Set(tyres.map(tyre => tyre.category))];
    const brands = [...new Set(tyres.map(tyre => tyre.brand))].sort();
    const sizes = [...new Set(tyres.flatMap(tyre =>
        tyre.available_sizes?.map(size => size.size) || []
    ))].sort();
    const loadIndices = [...new Set(tyres.flatMap(tyre =>
        tyre.available_sizes?.map(size => size.load_index) || []
    ))].sort();
    const speedRatings = [...new Set(tyres.flatMap(tyre =>
        tyre.available_sizes?.map(size => size.speed_rating) || []
    ))].sort();
    const allFeatures = [...new Set(tyres.flatMap(tyre =>
        tyre.features?.map(f => typeof f === 'string' ? f : f.name) || []
    ))];
    const availabilityStatuses = [...new Set(tyres.map(tyre =>
        tyre.availability?.status
    ).filter(Boolean))].sort();

    return {
        categories: ['ALL', ...categories],
        brands: ['ALL', ...brands],
        sizes: ['ALL', ...sizes],
        loadIndices: ['ALL', ...loadIndices],
        speedRatings: ['ALL', ...speedRatings],
        features: allFeatures,
        availability: ['ALL', ...availabilityStatuses]
    };
};
