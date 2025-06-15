"use client";

import { AppIcon } from "@/shared/utils/icon";
import { TYRE_CATEGORIES, COMPANY_INFO } from "@/shared/utils/constants";

const PremiumCategoriesSection = () => {
    const categories = TYRE_CATEGORIES.map(category => ({
        ...category,
        gradient: category.id === '2w' ? 'from-blue-500 to-purple-600' :
            category.id === '4w' ? 'from-green-500 to-blue-600' :
                category.id === 'trucks' ? 'from-red-500 to-orange-600' :
                    'from-yellow-500 to-green-600'
    }));

    const topBrands = COMPANY_INFO.brands.fourWheeler.slice(0, 6);

    return (
        <section className="section-layout bg-muted/20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Categories Header */}
                <div className="text-center mb-12">
                    <div className="animate-fadeInUp">
                        <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                            Shop by Vehicle Type
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Find the perfect tyres for your vehicle from our comprehensive collection
                        </p>
                    </div>
                </div>

                {/* Premium Categories Grid */}
                <div className="bg-card rounded-3xl shadow-xl p-8 mb-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className="group cursor-pointer p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <a href={category.href} className="block">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
                                            <AppIcon icon={category.icon} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                                                {category.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {category.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        <div className="text-sm text-muted-foreground">Vehicle types:</div>
                                        <div className="space-y-1">
                                            {category.vehicles.map((vehicle) => (
                                                <div key={vehicle} className="flex items-center text-sm text-muted-foreground">
                                                    <AppIcon icon="mdi:chevron-right" className="w-4 h-4 text-primary mr-2" />
                                                    <span>{vehicle}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="text-sm text-muted-foreground">Top brands:</div>
                                        <div className="flex flex-wrap gap-1">
                                            {COMPANY_INFO.brands.fourWheeler.slice(0, 3).map((brand) => (
                                                <span key={brand} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                                    {brand}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full text-sm border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all rounded-lg py-2 px-4 font-medium">
                                        Browse Collection
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Premium Brands Showcase */}
                <div className="bg-card rounded-3xl shadow-xl p-8 overflow-hidden">
                    <div className="animate-fadeInUp animation-delay-600">
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-card-foreground mb-8">
                            Authorized Dealer for Premium Brands
                        </h3>
                        <div className="relative">
                            <div className="flex animate-marquee space-x-16">
                                {[...topBrands, ...topBrands].map((brand, index) => (
                                    <div
                                        key={`${brand}-${index}`}
                                        className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                                    >
                                        <div className="w-32 h-12 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground font-semibold text-sm">
                                            {brand}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumCategoriesSection;
