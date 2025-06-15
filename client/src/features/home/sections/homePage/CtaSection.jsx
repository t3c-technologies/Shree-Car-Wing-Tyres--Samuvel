"use client";

import { AppIcon } from '@/shared/utils/icon';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';

const CtaSection = () => {
    const contactMethods = [
        {
            icon: "mdi:phone",
            title: "Call Now",
            description: "Speak with our experts",
            action: "tel:+919876543210",
            label: "+91 98765 43210",
            color: "bg-blue-600 hover:bg-blue-700"
        },
        {
            icon: "mdi:whatsapp",
            title: "WhatsApp",
            description: "Quick chat support",
            action: "https://wa.me/919876543210",
            label: "Message Us",
            color: "bg-green-600 hover:bg-green-700"
        },
        {
            icon: "mdi:map-marker",
            title: "Visit Store",
            description: "See tyres in person",
            action: "https://maps.google.com/?q=Chennai+Tyre+Shop",
            label: "Get Directions",
            color: "bg-red-600 hover:bg-red-700"
        }
    ];

    const offers = [
        "Free wheel alignment with 4 tyres",
        "Home delivery & installation",
        "0% EMI options available",
        "Manufacturer warranty included"
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <Badge variant="secondary" className="mb-4 text-sm font-medium bg-white/20 text-white border-white/30">
                        Ready to Upgrade?
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                        Get Premium Tyres Today
                    </h2>
                    <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                        Experience the difference with quality tyres and professional service. Contact us now for the best deals in Chennai.
                    </p>
                </div>

                {/* Special Offers */}
                <div className="mb-12">
                    <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                        <CardContent className="p-6">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                                    🎉 Limited Time Offers
                                </h3>
                                <p className="text-primary-foreground/80">
                                    Take advantage of these exclusive deals
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {offers.map((offer, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <AppIcon icon="mdi:check-circle" className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        <span className="text-primary-foreground font-medium">{offer}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                                    <AppIcon icon={method.icon} className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-primary-foreground/80 mb-4">
                                    {method.description}
                                </p>
                                <Button
                                    asChild
                                    className={`w-full ${method.color} text-white border-none hover:scale-105 transition-transform duration-200`}
                                >
                                    <a
                                        href={method.action}
                                        target={method.action.startsWith('http') ? '_blank' : undefined}
                                        rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {method.label}
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Emergency Service */}
                <div className="text-center">
                    <Card className="bg-red-600/90 border-red-500/30 backdrop-blur-sm max-w-md mx-auto">
                        <CardContent className="p-6">
                            <AppIcon icon="mdi:car-emergency" className="w-12 h-12 text-white mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">
                                Emergency Tyre Service
                            </h3>
                            <p className="text-white/90 mb-4 text-sm">
                                Flat tyre? Need immediate help? We're here 24/7
                            </p>
                            <Button
                                asChild
                                variant="secondary"
                                className="w-full bg-white text-red-600 hover:bg-white/90 font-semibold"
                            >
                                <a href="tel:+919876543210">
                                    <AppIcon icon="mdi:phone-alert" className="w-4 h-4 mr-2" />
                                    Emergency Hotline
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-primary-foreground/80">
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:shield-check" className="w-5 h-5" />
                            <span className="text-sm font-medium">Authorized Dealer</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:truck-fast" className="w-5 h-5" />
                            <span className="text-sm font-medium">Same Day Service</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:star" className="w-5 h-5" />
                            <span className="text-sm font-medium">5-Star Rated</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:account-group" className="w-5 h-5" />
                            <span className="text-sm font-medium">50,000+ Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
