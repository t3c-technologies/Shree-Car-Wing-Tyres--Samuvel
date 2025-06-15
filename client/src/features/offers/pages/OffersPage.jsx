"use client";

import { useEffect, useState } from "react";
import { AppIcon } from "@/shared/utils/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
    COMPANY_INFO,
    CONTACT_INFO
} from '@/shared/utils/constants';

const OffersPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const offers = [
        {
            title: "Buy 4 Tyres and Enjoy ₹1000 Instant Discount + Free Alignment!",
            description: "On all tyres",
            validTill: "23rd Feb 2025",
            image: "/images/offers/offer1.jpg",
            tag: "POPULAR",
            valid: true
        },
        {
            title: "50% Off Wheel Alignment",
            description: "On all vehicles",
            validTill: "23rd Feb 2025",
            image: "/images/offers/offer2.jpg",
            tag: "POPULAR",
            valid: true
        }
    ];

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center animate-slowZoom"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="text-center text-primary-foreground space-y-4 max-w-3xl mx-auto">
                        <Badge variant="secondary" className="bg-primary/80 text-primary-foreground animate-fadeIn">
                            Limited Time Deals
                        </Badge>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeIn delay-100">
                            Exclusive Offers & Promotions
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 animate-fadeIn delay-200">
                            Take advantage of our special deals on premium Apollo tyres and professional services
                        </p>
                    </div>
                </div>
            </section>

            {/* Offers Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {loading
                            ? Array(4).fill(null).map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-muted/50 rounded-2xl overflow-hidden h-[400px] animate-pulse"
                                />
                            ))
                            : offers.map((offer, index) => (
                                <Card
                                    key={index}
                                    className={`group relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-slideUp ${!offer.valid ? "opacity-50 grayscale pointer-events-none" : ""
                                        }`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {offer.tag && (
                                            <Badge className="absolute top-4 right-4">
                                                {offer.tag}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardContent className="p-6">
                                        <CardTitle className="text-xl font-bold mb-2">{offer.title}</CardTitle>
                                        <p className="text-muted-foreground mb-4">{offer.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">
                                                Valid till: {offer.validTill}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>

                    {/* WhatsApp Contact Section */}
                    <div className="mt-16 max-w-2xl mx-auto text-center space-y-8">
                        <Card className="bg-green-500/10 border-green-200">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    Get Instant Updates on Offers!
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Message us on WhatsApp for the latest deals and exclusive offers
                                </p>
                                <Button
                                    onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
                                    className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105 group"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Message on WhatsApp
                                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">→</span>
                                </Button>
                            </CardContent>
                        </Card>

                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>* Terms and conditions apply. All offers are subject to availability.</p>
                            <p>Our team is available on WhatsApp for instant assistance.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        @keyframes slowZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        
        .animate-slowZoom {
          animation: slowZoom 20s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
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
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default OffersPage;
