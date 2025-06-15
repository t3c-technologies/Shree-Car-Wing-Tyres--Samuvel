"use client";

import Link from 'next/link';
import { AppIcon } from '@/shared/utils/icon';
import { BRAND_INFO } from '@/shared/utils/constants';

const PremiumBrandsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <AppIcon icon="mdi:star" className="w-4 h-4" />
                        Premium Brands
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Trusted by <span className="text-primary">Millions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We partner with the world's leading tire manufacturers to bring you
                        the highest quality products with unmatched performance and reliability.
                    </p>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BRAND_INFO.map((brand, index) => (
                        <Link
                            key={brand.id}
                            href={brand.href}
                            className="group relative"
                        >
                            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-primary/20">
                                {/* Brand Icon/Logo */}
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <AppIcon
                                        icon={brand.icon || "mdi:car-tire"}
                                        className="w-8 h-8 text-primary"
                                    />
                                </div>

                                {/* Brand Content */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                        {brand.name}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {brand.description}
                                    </p>

                                    {/* Stats or Features */}
                                    <div className="flex items-center gap-4 pt-2">
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <AppIcon icon="mdi:check-circle" className="w-4 h-4 text-green-500" />
                                            Premium Quality
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <AppIcon icon="mdi:shield-check" className="w-4 h-4 text-blue-500" />
                                            Warranty
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <span className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                                            View Collection
                                        </span>
                                        <AppIcon
                                            icon="mdi:arrow-right"
                                            className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform"
                                        />
                                    </div>
                                </div>

                                {/* Decorative element */}
                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <AppIcon icon="mdi:star-outline" className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 inline-block">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Can't find your preferred brand?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            We work with many more brands. Contact us for specific requirements.
                        </p>
                        <Link href="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                            <AppIcon icon="mdi:phone" className="w-4 h-4" />
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumBrandsSection;
