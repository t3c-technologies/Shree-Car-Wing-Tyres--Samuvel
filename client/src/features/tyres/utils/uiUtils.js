import { AppIcon } from '@/shared/utils/icon';

/**
 * UI utility functions for tyre components
 */

/**
 * Generate rating stars JSX
 */
export const getRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<AppIcon key={i} icon="mdi:star" className="w-4 h-4 text-yellow-400" />);
    }

    if (hasHalfStar) {
        stars.push(<AppIcon key="half" icon="mdi:star-half-full" className="w-4 h-4 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<AppIcon key={`empty-${i}`} icon="mdi:star-outline" className="w-4 h-4 text-gray-300" />);
    }

    return stars;
};

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Format price display
 */
export const formatPrice = (priceRange) => {
    return priceRange; // Could add formatting logic here
};

/**
 * Get stock status badge class
 */
export const getStockStatusClass = (stockStatus) => {
    switch (stockStatus) {
        case 'In Stock':
            return 'bg-green-100 text-green-800';
        case 'Low Stock':
            return 'bg-yellow-100 text-yellow-800';
        case 'Out of Stock':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-green-100 text-green-800';
    }
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};
