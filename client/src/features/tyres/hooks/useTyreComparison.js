import { useState, useCallback } from 'react';

/**
 * Custom hook for managing tyre comparison functionality
 */
export const useTyreComparison = (maxItems = 3) => {
    const [compareItems, setCompareItems] = useState(new Set());

    const toggleCompare = useCallback((tyreId) => {
        setCompareItems(prev => {
            const newCompare = new Set(prev);
            if (newCompare.has(tyreId)) {
                newCompare.delete(tyreId);
            } else if (newCompare.size < maxItems) {
                newCompare.add(tyreId);
            }
            return newCompare;
        });
    }, [maxItems]);

    const isInComparison = useCallback((tyreId) => {
        return compareItems.has(tyreId);
    }, [compareItems]);

    const getComparisonCount = useCallback(() => {
        return compareItems.size;
    }, [compareItems]);

    const clearComparison = useCallback(() => {
        setCompareItems(new Set());
    }, []);

    const canAddToComparison = useCallback((tyreId) => {
        return !compareItems.has(tyreId) && compareItems.size < maxItems;
    }, [compareItems, maxItems]);

    const getComparisonIds = useCallback(() => {
        return Array.from(compareItems);
    }, [compareItems]);

    return {
        compareItems,
        toggleCompare,
        isInComparison,
        getComparisonCount,
        clearComparison,
        canAddToComparison,
        getComparisonIds
    };
};
