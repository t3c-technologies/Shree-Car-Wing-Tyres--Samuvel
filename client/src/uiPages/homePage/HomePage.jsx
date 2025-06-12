"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AppIcon } from "@/lib/icon";

import {
    COMPANY_INFO,
    CONTACT_INFO,
    TYRE_CATEGORIES,
    SERVICES,
    BUSINESS_STATS,
    BRAND_INFO
} from "@/utils/constants";

// Import custom styles
import "@/uiPages/homePage/homePage.css";

export default function HomePage() {
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   // Simulate loading time
    //   const timer = setTimeout(() => {
    //     setIsLoading(false);
    //   }, 2000); // Adjust timing as needed

    //   return () => clearTimeout(timer);
    // }, []);

    // if (isLoading) {
    //   return <Preloader />;
    // }

    const tyres = TYRE_CATEGORIES.map(category => ({
        title: category.title,
        url: category.href,
        description: category.description,
        icon: () => <AppIcon icon={category.icon} className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
        vehicles: category.vehicles,
    }));

    const services = SERVICES.main;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative section-layout-full bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/tyres/4W/alnac_4g_1.png"
                        alt="Tyre Pattern Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={75}
                        priority={false}
                        className="transition-opacity duration-300 opacity-0"
                        onLoad={(e) => {
                            e.target.classList.remove("opacity-0");
                        }}
                    />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="text-primary-foreground space-y-4 md:space-y-6">
                            <div className="inline-block bg-accent rounded-full px-4 py-1 text-sm mb-2 animate-fadeIn text-accent-foreground">
                                {COMPANY_INFO.tagline}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeIn delay-100">
                                Drive Safe with Premium Multi-Brand Tyres
                            </h1>
                            <p className="text-lg md:text-xl text-primary-foreground/80 animate-fadeIn delay-200">
                                Experience superior performance and safety with our complete range of premium tyres from
                                world-renowned brands like Goodyear, Michelin, Bridgestone, JK Tyre & more.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeIn delay-300">
                                <a href="#tyres">
                                    <button className="bg-primary-foreground text-primary px-6 md:px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors w-full sm:w-auto">
                                        Explore Range
                                    </button>
                                </a>
                                <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                    <button className="border-2 border-primary-foreground text-primary-foreground px-6 md:px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto">
                                        Book Service
                                    </button>
                                </a>
                            </div>
                            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 animate-fadeIn delay-400">
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold">{BUSINESS_STATS.experience}</div>
                                    <div className="text-sm md:text-base text-primary-foreground/80">
                                        {BUSINESS_STATS.experienceLabel}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold">{BUSINESS_STATS.customers}</div>
                                    <div className="text-sm md:text-base text-primary-foreground/80">
                                        {BUSINESS_STATS.customersLabel}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl md:text-3xl font-bold">{BUSINESS_STATS.brands}</div>
                                    <div className="text-sm md:text-base text-primary-foreground/80">
                                        {BUSINESS_STATS.brandsLabel}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block animate-slideDown">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl"></div>
                                <img
                                    src="/images/tyres/4W/apterra_cross_2.png"
                                    alt="Featured Tyre - Apterra Cross"
                                    className="relative rounded-2xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tyres Section */}
            <section className="section-layout bg-card">
                <div id="tyres" className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-card-foreground text-center mb-8 md:mb-12">
                        Our Tyres
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {tyres.map((tyre, index) => (
                            <div
                                key={index}
                                className="bg-muted rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-105 animate-slideUp"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center mb-4">
                                    <tyre.icon />
                                    <h3 className="text-lg md:text-xl font-semibold text-muted-foreground ml-3">
                                        {tyre.title}
                                    </h3>
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground/80 mb-4">
                                    {tyre.description}
                                </p>
                                <div className="space-y-2">
                                    {tyre.vehicles.map((vehicle, vIndex) => (
                                        <div
                                            key={vIndex}
                                            className="flex items-center text-sm md:text-base text-muted-foreground/80"
                                        >
                                            <AppIcon icon="mdi:chevron-right" className="w-4 h-4 text-primary mr-2" />
                                            <span>{vehicle}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href={tyre.url} target="_blank">
                                    <button className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                                        View Range
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section-layout bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground text-center mb-8 md:mb-12">
                        Our Services
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-lg shadow-sm p-6 transition-transform duration-300 hover:transform hover:scale-105 animate-slideUp"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center mb-4">
                                    <AppIcon icon={service.icon} className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                                    <h3 className="text-lg md:text-xl font-semibold text-card-foreground ml-3">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-sm md:text-base text-card-foreground/80 mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-semibold">
                                        {service.price}
                                        <sup>*</sup>
                                    </span>
                                    <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                        <button className="text-primary hover:text-primary/80 transition-colors inline-flex items-center text-sm md:text-base">
                                            Book Now
                                            <AppIcon icon="mdi:chevron-right" className="w-4 h-4 ml-1" />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Footnote for the asterisk */}
                    <div className="text-center text-sm text-muted-foreground/80 mt-8">
                        <sup>*</sup> = Depends on vehicle type
                    </div>
                </div>
            </section>

            {/* Premium Brands Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-card to-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}


                    <h2 className=" mb-6 animate-fadeIn delay-100 text-2xl md:text-3xl font-bold text-muted-foreground text-center mb-8 md:mb-12">
                        Premium Brands We Carry
                    </h2>



                    {/* Brands Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {BRAND_INFO.map((brand, index) => (
                            <div
                                key={brand.id}
                                className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/20 animate-slideUp relative overflow-hidden"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Brand Logo Container */}
                                <div className="mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/5 to-primary/15 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110 relative">
                                        <span className="text-lg font-bold text-primary">
                                            {brand.name.charAt(0)}
                                        </span>
                                        {/* Subtle glow effect */}
                                        <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </div>

                                {/* Brand Info */}
                                <div className="text-center space-y-3">
                                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                        {brand.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {brand.description}
                                    </p>

                                    {/* Establishment Year */}
                                    <div className="inline-flex items-center text-muted-foreground/70 text-xs bg-muted px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                                        <AppIcon icon="lucide:calendar" className="w-3 h-3 mr-1" />
                                        Est. {brand.established}
                                    </div>

                                    {/* Specialty */}
                                    <div className="mb-4">
                                        <p className="text-primary font-semibold text-sm group-hover:text-primary/90 transition-colors">
                                            {brand.specialty}
                                        </p>
                                    </div>

                                    {/* Categories */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {brand.categories.map((category, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Indicator */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/40 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                            </div>
                        ))}
                    </div>

                    {/* Statistics */}
                    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-12 animate-fadeIn delay-300">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="group">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <AppIcon icon="lucide:award" className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-2xl font-bold text-card-foreground">{BUSINESS_STATS.brands}</div>
                                <div className="text-muted-foreground text-sm">{BUSINESS_STATS.brandsLabel}</div>
                            </div>
                            <div className="group">
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <AppIcon icon="lucide:truck" className="w-6 h-6 text-accent" />
                                </div>
                                <div className="text-2xl font-bold text-card-foreground">3</div>
                                <div className="text-muted-foreground text-sm">Vehicle Categories</div>
                            </div>
                            <div className="group">
                                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <AppIcon icon="lucide:calendar-check" className="w-6 h-6 text-secondary" />
                                </div>
                                <div className="text-2xl font-bold text-card-foreground">100+</div>
                                <div className="text-muted-foreground text-sm">Years Combined Experience</div>
                            </div>
                            <div className="group">
                                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <AppIcon icon="lucide:shield-check" className="w-6 h-6 text-destructive" />
                                </div>
                                <div className="text-2xl font-bold text-card-foreground">{BUSINESS_STATS.quality}</div>
                                <div className="text-muted-foreground text-sm">{BUSINESS_STATS.qualityLabel}</div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center animate-fadeIn delay-400">
                        <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground">
                            <h3 className="text-2xl font-bold mb-4">
                                Find Your Perfect Tyre Match
                            </h3>
                            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                                With 6 premium brands and expert guidance, we'll help you choose the ideal tyre
                                for your vehicle type, driving style, and budget.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/tyres">
                                    <button className="bg-primary-foreground text-primary px-8 py-3 rounded-xl hover:bg-primary-foreground/90 transition-all duration-300 font-semibold inline-flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        Browse All Tyres
                                        <AppIcon icon="mdi:chevron-right" className="w-5 h-5 ml-2" />
                                    </button>
                                </a>
                                <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                    <button className="bg-transparent border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-semibold inline-flex items-center">
                                        <AppIcon icon="lucide:phone" className="w-5 h-5 mr-2" />
                                        Get Expert Advice
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Multi-Brand Section */}
            <section className="section-layout bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">
                            Why Choose a Multi-Brand Dealer?
                        </h2>
                        <p className="text-muted-foreground/80 max-w-2xl mx-auto">
                            Unlike single-brand dealers, we offer you the freedom to choose from the best tyres across multiple premium brands.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-card rounded-lg p-6 text-center transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AppIcon icon="lucide:check-circle" className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-3">
                                More Options
                            </h3>
                            <p className="text-card-foreground/80">
                                Compare and choose from 6+ premium brands under one roof. Find the perfect tyre for your specific needs and budget.
                            </p>
                        </div>

                        <div className="bg-card rounded-lg p-6 text-center transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AppIcon icon="lucide:award" className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-3">
                                Expert Guidance
                            </h3>
                            <p className="text-card-foreground/80">
                                Our team knows the strengths of each brand. Get unbiased advice to match the right tyre to your driving style.
                            </p>
                        </div>

                        <div className="bg-card rounded-lg p-6 text-center transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AppIcon icon="lucide:dollar-sign" className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-3">
                                Competitive Pricing
                            </h3>
                            <p className="text-card-foreground/80">
                                With multiple brands, we can offer competitive pricing and special deals across different categories and price ranges.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-layout bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 md:mb-6">
                        Need Expert Advice?
                    </h2>
                    <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                        Our team is here to help you choose the perfect tyres for your
                        vehicle
                    </p>
                    <a
                        href={`tel:${CONTACT_INFO.primaryContact.phone}`}
                        className="inline-flex items-center bg-primary-foreground text-primary px-6 md:px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors"
                    >
                        <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                        Call Us Now
                    </a>
                </div>
            </section>

            {/* Animations */}
            <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          30% {
            opacity: 1;
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0);
          }
          65% {
            transform: translateY(-7px);
          }
          80% {
            transform: translateY(0);
          }
          90% {
            transform: translateY(-3px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
        </div>
    );
}
