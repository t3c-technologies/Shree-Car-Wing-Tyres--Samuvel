import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing favorites functionality
 */
export const useFavorites = () => {
    const [favoriteItems, setFavoriteItems] = useState(new Set());

    useEffect(() => {
        // Load favorites from localStorage on mount
        const savedFavorites = localStorage.getItem('tyreFavorites');
        if (savedFavorites) {
            setFavoriteItems(new Set(JSON.parse(savedFavorites)));
        }
    }, []);

    const toggleFavorite = useCallback((tyreId) => {
        setFavoriteItems(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(tyreId)) {
                newFavorites.delete(tyreId);
            } else {
                newFavorites.add(tyreId);
            }
            localStorage.setItem('tyreFavorites', JSON.stringify([...newFavorites]));
            return newFavorites;
        });
    }, []);

    const isFavorite = useCallback((tyreId) => {
        return favoriteItems.has(tyreId);
    }, [favoriteItems]);

    const getFavoritesCount = useCallback(() => {
        return favoriteItems.size;
    }, [favoriteItems]);

    const clearFavorites = useCallback(() => {
        setFavoriteItems(new Set());
        localStorage.removeItem('tyreFavorites');
    }, []);

    return {
        favoriteItems,
        toggleFavorite,
        isFavorite,
        getFavoritesCount,
        clearFavorites
    };
};
