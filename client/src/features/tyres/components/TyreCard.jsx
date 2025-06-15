import React from 'react';
import { AppIcon } from '@/shared/utils/icon';

const TyreCard = React.memo(({
    tyre,
    viewMode = 'grid',
    isFavorite = false,
    isInComparison = false,
    canAddToComparison = true,
    onToggleFavorite,
    onToggleCompare,
    onQuickView,
    getCategoryIcon,
    getRatingStars
}) => {
    const getAvailabilityClass = () => {
        const status = tyre.availability?.status;
        if (status === 'Out of Stock') return 'out-of-stock';
        if (status === 'Low Stock') return 'low-stock';
        if (status === 'Seasonal') return 'seasonal';
        return '';
    };

    return (
        <div
            className={`bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 tyre-card-hover ${viewMode === 'list' ? 'flex' : ''
                } tyre-card ${getAvailabilityClass()}`}
        >
            {/* Image Section */}
            <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'
                }`}>
                <img
                    src={tyre.image_urls?.[0] || '/placeholder-tyre.jpg'}
                    alt={tyre.name}
                    className="w-full h-full object-cover tyre-image"
                    loading="lazy"
                    onError={(e) => {
                        e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400"><rect width="400" height="400" fill="%23f3f4f6"/><g transform="translate(200,200)"><circle r="60" fill="%236b7280" opacity="0.3"/><path d="M-30,-30 L30,30 M30,-30 L-30,30" stroke="%236b7280" stroke-width="4" opacity="0.5"/></g></svg>`;
                    }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                        {tyre.category}
                    </span>
                    {tyre.availability?.status === 'Low Stock' && (
                        <span className="px-2 py-1 bg-destructive text-destructive-foreground rounded text-xs font-medium">
                            Low Stock
                        </span>
                    )}
                    {tyre.availability?.status === 'Out of Stock' && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                            Out of Stock
                        </span>
                    )}
                    {tyre.availability?.status === 'Seasonal' && (
                        <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium">
                            Seasonal
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                    <button
                        onClick={() => onToggleFavorite(tyre.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isFavorite
                            ? 'bg-destructive text-destructive-foreground'
                            : 'bg-card/80 text-card-foreground hover:bg-destructive hover:text-destructive-foreground'
                            }`}
                    >
                        <AppIcon icon="mdi:heart" className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onToggleCompare(tyre.id)}
                        disabled={!canAddToComparison && !isInComparison}
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isInComparison
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-card/80 text-card-foreground hover:bg-accent hover:text-accent-foreground'
                            } ${!canAddToComparison && !isInComparison
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                            }`}
                    >
                        <AppIcon icon="mdi:compare" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-1 line-clamp-2">
                            {tyre.name}
                        </h3>
                        <p className="text-primary font-medium">{tyre.brand}</p>
                    </div>
                    <AppIcon
                        icon={getCategoryIcon(tyre.category)}
                        className="w-6 h-6 text-muted-foreground flex-shrink-0 ml-2"
                    />
                </div>

                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {tyre.description}
                </p>

                {/* Features */}
                {tyre.features && tyre.features.length > 0 && (
                    <div className="mb-3">
                        <div className="flex flex-wrap gap-1">
                            {tyre.features.slice(0, 3).map((feature, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                                >
                                    {typeof feature === 'string' ? feature : feature.name}
                                </span>
                            ))}
                            {tyre.features.length > 3 && (
                                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                                    +{tyre.features.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Rating and Reviews */}
                {tyre.reviews && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                            {getRatingStars(tyre.reviews.average_rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                            {tyre.reviews.average_rating} ({tyre.reviews.total_reviews} reviews)
                        </span>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-xl font-bold text-primary price-highlight">{tyre.price_range}</span>
                        {tyre.original_price && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                                {tyre.original_price}
                            </span>
                        )}
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                            {tyre.availability?.status || 'In Stock'}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <a
                        href={`/tyres/${tyre.id}`}
                        className="flex-1 bg-primary text-primary-foreground text-center px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                        View Details
                    </a>
                    <button
                        onClick={() => onQuickView(tyre)}
                        className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                        <AppIcon icon="mdi:eye" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
});

TyreCard.displayName = 'TyreCard';

export default TyreCard;
