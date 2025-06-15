"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppIcon } from "@/shared/utils/icon";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Separator } from "@/shared/components/ui/separator";
import { COMPANY_INFO, CONTACT_INFO, BUSINESS_STATS, TYRE_CATEGORIES } from "@/shared/utils/constants";

const PremiumHeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to tyres page with search query
            window.location.href = `/tyres?search=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-primary/95 via-primary to-primary/80 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Tyre Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/images/tyres/4W/alnac_4g_1.png"
                    alt="Tyre Pattern Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={75}
                    priority={false}
                    className="transition-opacity duration-300"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between py-6">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                            <AppIcon icon="mdi:tire" className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                            <span className="text-xl font-bold text-primary-foreground">{COMPANY_INFO.name}</span>
                            <div className="text-xs text-primary-foreground/80">{COMPANY_INFO.tagline}</div>
                        </div>
                    </div>
                </div>

                {/* Main Hero Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
                    {/* Left Content */}
                    <div className="text-primary-foreground space-y-6">
                        <div className="animate-fadeInUp">
                            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                                <AppIcon icon="mdi:star" className="w-4 h-4 mr-2" />
                                {COMPANY_INFO.tagline}
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Premium Tyres for
                                <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                                    Every Journey
                                </span>
                            </h1>
                        </div>

                        <p className="animate-fadeInUp animation-delay-200 text-xl md:text-2xl text-primary-foreground/90 max-w-xl leading-relaxed">
                            Experience superior performance and safety with our complete range of premium tyres from world-renowned brands.
                        </p>

                        {/* Enhanced Search Bar */}
                        <Card className="animate-fadeInUp animation-delay-400 max-w-xl bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                            <CardContent className="p-2">
                                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                                    <div className="flex-1 flex items-center space-x-2">
                                        <AppIcon icon="mdi:magnify" className="h-5 w-5 text-muted-foreground ml-2" />
                                        <Input
                                            type="text"
                                            placeholder="Search by tyre size or vehicle model..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="px-6 py-2 font-semibold hover:scale-105 transition-transform"
                                    >
                                        Search
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Enhanced Action Buttons */}
                        <div className="animate-fadeInUp animation-delay-600 flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 font-semibold hover:scale-105 transition-all group" asChild>
                                <a href="#tyres">
                                    <span className="flex items-center gap-2">
                                        Explore Range
                                        <AppIcon icon="mdi:arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 font-semibold hover:scale-105 transition-all" asChild>
                                <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                    <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                                    Book Service
                                </a>
                            </Button>
                        </div>

                        {/* Business Stats */}
                        <div className="animate-fadeInUp animation-delay-800 grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-accent">{BUSINESS_STATS.experience}</div>
                                <div className="text-sm md:text-base text-primary-foreground/80">
                                    {BUSINESS_STATS.experienceLabel}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-accent">{BUSINESS_STATS.customers}</div>
                                <div className="text-sm md:text-base text-primary-foreground/80">
                                    {BUSINESS_STATS.customersLabel}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-accent">{BUSINESS_STATS.brands}</div>
                                <div className="text-sm md:text-base text-primary-foreground/80">
                                    {BUSINESS_STATS.brandsLabel}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Featured Tyre */}
                    <div className="hidden lg:block animate-scaleIn animation-delay-400">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute -inset-8 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute -inset-4 bg-primary-foreground/10 rounded-full blur-xl"></div>

                            {/* Main Tyre Image */}
                            <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                                <img
                                    src="/images/tyres/4W/apterra_cross_2.png"
                                    alt="Featured Premium Tyre"
                                    className="w-full h-auto animate-float"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
                                    Premium Quality
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHeroSection;
