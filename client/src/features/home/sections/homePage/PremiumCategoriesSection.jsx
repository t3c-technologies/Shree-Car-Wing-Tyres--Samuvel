"use client";

import { AppIcon } from "@/shared/utils/icon";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
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
                        <Badge variant="outline" className="mb-4">
                            Vehicle Categories
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Shop by Vehicle Type
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Find the perfect tyres for your vehicle from our comprehensive collection
                        </p>
                    </div>
                </div>

                {/* Enhanced Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {categories.map((category, index) => (
                        <Card
                            key={category.id}
                            className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30 animate-fadeInUp"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardHeader className="text-center">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg mx-auto mb-4`}>
                                    <AppIcon icon={category.icon} className="w-8 h-8" />
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors">
                                    {category.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-muted-foreground mb-4">
                                    {category.description}
                                </p>
                                <Button
                                    variant="outline"
                                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                    asChild
                                >
                                    <a href={category.href}>
                                        Explore {category.name}
                                        <AppIcon icon="mdi:arrow-right" className="w-4 h-4 ml-2" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Premium Brands Showcase */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden">
                    <CardContent className="p-8">
                        <div className="text-center mb-8">
                            <Badge variant="secondary" className="mb-4">
                                Premium Partners
                            </Badge>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Trusted by Leading Brands
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                We are authorized dealers for the world's most trusted tyre manufacturers
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                            {topBrands.map((brand, index) => (
                                <div
                                    key={brand}
                                    className="flex items-center justify-center p-4 bg-background rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp"
                                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                                >
                                    <span className="text-lg font-semibold text-foreground text-center">
                                        {brand}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Button variant="outline" size="lg" className="px-8">
                                <AppIcon icon="mdi:crown" className="w-5 h-5 mr-2" />
                                View All Brands
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default PremiumCategoriesSection;
