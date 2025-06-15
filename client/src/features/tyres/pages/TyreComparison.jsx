"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppIcon } from '@/shared/utils/icon';
import { COMPANY_INFO } from '@/shared/utils/constants';
import tyresCatalog from '../data/tyresCatalog.json';
import '../styles/tyres.css';

const TyreComparisonPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [tyres, setTyres] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const ids = searchParams.get('ids')?.split(',').map(id => parseInt(id)) || [];
        const foundTyres = tyresCatalog.filter(tyre => ids.includes(tyre.id));
        setTyres(foundTyres);
    }, [searchParams]);

    const getCategoryIcon = (category) => {
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

    const getRatingStars = (rating) => {
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

    const extractPrice = (priceRange) => {
        const priceStr = priceRange.replace(/[₹,\s]/g, '');
        const prices = priceStr.split('-').map(p => parseInt(p));
        return (prices[0] + prices[1]) / 2;
    };

    const findBestValue = (tyres, key) => {
        if (!tyres.length) return null;

        switch (key) {
            case 'price':
                return Math.min(...tyres.map(t => extractPrice(t.price_range)));
            case 'rating':
                return Math.max(...tyres.map(t => t.reviews?.average_rating || 0));
            case 'reviews':
                return Math.max(...tyres.map(t => t.reviews?.total_reviews || 0));
            default:
                return null;
        }
    };

    const isBestValue = (tyre, key) => {
        const bestValue = findBestValue(tyres, key);
        if (!bestValue) return false;

        switch (key) {
            case 'price':
                return extractPrice(tyre.price_range) === bestValue;
            case 'rating':
                return (tyre.reviews?.average_rating || 0) === bestValue;
            case 'reviews':
                return (tyre.reviews?.total_reviews || 0) === bestValue;
            default:
                return false;
        }
    };

    if (!mounted) {
        return (
            <div className="min-h-screen bg-muted/20 flex items-center justify-center">
                <div className="text-center">
                    <AppIcon icon="mdi:loading" className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading comparison...</p>
                </div>
            </div>
        );
    }

    if (tyres.length === 0) {
        return (
            <div className="min-h-screen bg-muted/20">
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="text-center">
                        <AppIcon icon="mdi:compare" className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-card-foreground mb-2">No Tyres to Compare</h1>
                        <p className="text-muted-foreground mb-6">
                            Please select tyres from the catalog to compare them here.
                        </p>
                        <Link
                            href="/tyres"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            <AppIcon icon="mdi:tire" className="w-5 h-5" />
                            Browse Tyres
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Header */}
            <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-primary-foreground space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold">Tyre Comparison</h1>
                        <p className="text-lg text-primary-foreground/80">
                            Compare {tyres.length} selected tyres side by side
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <Link
                                href="/tyres"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors"
                            >
                                <AppIcon icon="mdi:arrow-left" className="w-4 h-4" />
                                Back to Catalog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-8">
                {/* Comparison Table */}
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="p-4 text-left text-card-foreground w-48">Specification</th>
                                    {tyres.map((tyre) => (
                                        <th key={tyre.id} className="p-4 text-center min-w-64">
                                            <div className="space-y-4">
                                                <div className="w-24 h-24 mx-auto bg-muted rounded-lg overflow-hidden">
                                                    <img
                                                        src={tyre.image_urls?.[0] || '/placeholder-tyre.jpg'}
                                                        alt={tyre.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-card-foreground">{tyre.name}</h3>
                                                    <p className="text-sm text-primary">{tyre.brand}</p>
                                                </div>
                                                <Link
                                                    href={`/tyres/${tyre.id}`}
                                                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                                                >
                                                    View Details
                                                    <AppIcon icon="mdi:arrow-right" className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Category */}
                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Category</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <AppIcon icon={getCategoryIcon(tyre.category)} className="w-5 h-5 text-primary" />
                                                <span className="text-sm">{tyre.category}</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                {/* Price */}
                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Price Range</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <div className={`font-semibold ${isBestValue(tyre, 'price') ? 'text-green-600' : 'text-card-foreground'}`}>
                                                {tyre.price_range}
                                                {isBestValue(tyre, 'price') && (
                                                    <div className="text-xs text-green-600 mt-1">Best Value</div>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                {/* Rating */}
                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Rating</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            {tyre.reviews ? (
                                                <div className={isBestValue(tyre, 'rating') ? 'text-green-600' : ''}>
                                                    <div className="flex items-center justify-center mb-1">
                                                        {getRatingStars(tyre.reviews.average_rating)}
                                                    </div>
                                                    <div className="text-sm">
                                                        {tyre.reviews.average_rating} ({tyre.reviews.total_reviews} reviews)
                                                    </div>
                                                    {isBestValue(tyre, 'rating') && (
                                                        <div className="text-xs text-green-600 mt-1">Highest Rated</div>
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-muted-foreground text-sm">No reviews</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>

                                {/* Features */}
                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Key Features</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4">
                                            <div className="space-y-2">
                                                {tyre.features?.slice(0, 4).map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                                        <AppIcon icon="mdi:check-circle" className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        <span>{typeof feature === 'string' ? feature : feature.name}</span>
                                                    </div>
                                                ))}
                                                {tyre.features?.length > 4 && (
                                                    <div className="text-xs text-muted-foreground">
                                                        +{tyre.features.length - 4} more features
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>

                                {/* Technical Specifications */}
                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Construction</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <span className="text-sm">
                                                {tyre.technical_specs?.construction || 'N/A'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Sidewall</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <span className="text-sm">
                                                {tyre.technical_specs?.sidewall || 'N/A'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Load Rating</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <span className="text-sm">
                                                {tyre.technical_specs?.load_rating || 'N/A'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Speed Rating</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <span className="text-sm">
                                                {tyre.technical_specs?.speed_rating || 'N/A'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                {/* Availability */}
                                <tr className="border-b border-border">
                                    <td className="p-4 font-medium text-card-foreground">Availability</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${tyre.availability?.stock_status === 'In Stock'
                                                ? 'bg-green-100 text-green-800'
                                                : tyre.availability?.stock_status === 'Low Stock'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                                }`}>
                                                {tyre.availability?.stock_status || 'In Stock'}
                                            </span>
                                        </td>
                                    ))}
                                </tr>

                                {/* Warranty */}
                                <tr>
                                    <td className="p-4 font-medium text-card-foreground">Warranty</td>
                                    {tyres.map((tyre) => (
                                        <td key={tyre.id} className="p-4 text-center">
                                            <span className="text-sm">
                                                {tyre.warranty?.duration && tyre.warranty?.coverage
                                                    ? `${tyre.warranty.duration} - ${tyre.warranty.coverage}`
                                                    : 'Standard Warranty'
                                                }
                                            </span>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/tyres"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <AppIcon icon="mdi:tire" className="w-5 h-5" />
                        Browse More Tyres
                    </Link>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: 'Tyre Comparison',
                                    text: `Compare ${tyres.map(t => t.name).join(', ')}`,
                                    url: window.location.href
                                });
                            } else {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Comparison link copied to clipboard!');
                            }
                        }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                        <AppIcon icon="mdi:share" className="w-5 h-5" />
                        Share Comparison
                    </button>
                </div>

                {/* Summary */}
                <div className="mt-8 bg-card border border-border rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-card-foreground mb-4">Comparison Summary</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <AppIcon icon="mdi:currency-rupee" className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-green-800">Best Value</h3>
                            <p className="text-sm text-green-600">
                                {tyres.find(t => isBestValue(t, 'price'))?.name || 'N/A'}
                            </p>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 rounded-lg">
                            <AppIcon icon="mdi:star" className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-yellow-800">Highest Rated</h3>
                            <p className="text-sm text-yellow-600">
                                {tyres.find(t => isBestValue(t, 'rating'))?.name || 'N/A'}
                            </p>
                        </div>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <AppIcon icon="mdi:account-group" className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <h3 className="font-semibold text-blue-800">Most Reviewed</h3>
                            <p className="text-sm text-blue-600">
                                {tyres.find(t => isBestValue(t, 'reviews'))?.name || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TyreComparisonPage;
