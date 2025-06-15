"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppIcon } from "@/shared/utils/icon";
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
                            <div className="inline-block bg-accent/90 text-accent-foreground rounded-full px-4 py-2 text-sm mb-4 animate-pulse">
                                ✨ {COMPANY_INFO.tagline}
                            </div>
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

                        {/* Premium Search Bar */}
                        <div className="animate-fadeInUp animation-delay-400 max-w-xl">
                            <form onSubmit={handleSearch} className="flex bg-primary-foreground/95 backdrop-blur-sm rounded-full shadow-2xl border border-primary-foreground/20 p-2">
                                <AppIcon icon="mdi:magnify" className="h-6 w-6 text-muted-foreground ml-4 my-auto" />
                                <input
                                    type="text"
                                    placeholder="Search by tyre size or vehicle model..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 border-0 bg-transparent text-lg focus:outline-none focus:ring-0 px-4 py-3 text-card-foreground placeholder:text-muted-foreground/70"
                                />
                                <button
                                    type="submit"
                                    className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold transition-all duration-200 hover:scale-105"
                                >
                                    Search
                                </button>
                            </form>
                        </div>

                        {/* Action Buttons */}
                        <div className="animate-fadeInUp animation-delay-600 flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#tyres" className="group">
                                <button className="bg-primary-foreground text-primary px-8 py-4 rounded-full hover:bg-primary-foreground/90 transition-all duration-200 hover:scale-105 w-full sm:w-auto font-semibold shadow-lg">
                                    <span className="flex items-center justify-center gap-2">
                                        Explore Range
                                        <AppIcon icon="mdi:arrow-right" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                            </a>
                            <a href={`tel:${CONTACT_INFO.primaryContact.phone}`} className="group">
                                <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105 w-full sm:w-auto font-semibold">
                                    <span className="flex items-center justify-center gap-2">
                                        <AppIcon icon="mdi:phone" className="w-5 h-5" />
                                        Book Service
                                    </span>
                                </button>
                            </a>
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
