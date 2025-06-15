import React from 'react';
import { AppIcon } from '@/shared/utils/icon';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Separator } from '@/shared/components/ui/separator';
import { Progress } from '@/shared/components/ui/progress';

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
        <Card className={`group overflow-hidden border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''
            } ${getAvailabilityClass()}`}
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
                    <Badge variant="default" className="text-xs font-medium">
                        {tyre.category}
                    </Badge>
                    {tyre.availability?.status === 'Low Stock' && (
                        <Badge variant="destructive" className="text-xs font-medium">
                            Low Stock
                        </Badge>
                    )}
                    {tyre.availability?.status === 'Out of Stock' && (
                        <Badge variant="secondary" className="text-xs font-medium">
                            Out of Stock
                        </Badge>
                    )}
                    {tyre.availability?.status === 'Seasonal' && (
                        <Badge variant="outline" className="text-xs font-medium bg-blue-500 text-white border-blue-500">
                            Seasonal
                        </Badge>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                    <Button
                        size="icon"
                        variant={isFavorite ? "destructive" : "secondary"}
                        onClick={() => onToggleFavorite(tyre.id)}
                        className="w-8 h-8 rounded-full bg-card/80 hover:bg-destructive hover:text-destructive-foreground"
                    >
                        <AppIcon icon="mdi:heart" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant={isInComparison ? "default" : "secondary"}
                        onClick={() => onToggleCompare(tyre.id)}
                        disabled={!canAddToComparison && !isInComparison}
                        className="w-8 h-8 rounded-full bg-card/80 hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
                    >
                        <AppIcon icon="mdi:compare" className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Content Section */}
            <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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
                                <Badge
                                    key={idx}
                                    variant="secondary"
                                    className="text-xs"
                                >
                                    {typeof feature === 'string' ? feature : feature.name}
                                </Badge>
                            ))}
                            {tyre.features.length > 3 && (
                                <Badge variant="secondary" className="text-xs">
                                    +{tyre.features.length - 3} more
                                </Badge>
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
                    <Button asChild className="flex-1">
                        <a href={`/tyres/${tyre.id}`}>
                            View Details
                        </a>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onQuickView(tyre)}
                    >
                        <AppIcon icon="mdi:eye" className="w-4 h-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
});

TyreCard.displayName = 'TyreCard';

export default TyreCard;
