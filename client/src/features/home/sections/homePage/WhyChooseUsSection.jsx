"use client";

import { AppIcon } from '@/shared/utils/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';

const WhyChooseUsSection = () => {
    const features = [
        {
            icon: "mdi:shield-star",
            title: "Premium Quality Guarantee",
            description: "All our tyres come with manufacturer warranty and our quality guarantee. We only stock genuine products from authorized dealers.",
            highlights: ["Manufacturer Warranty", "Genuine Products", "Quality Tested"]
        },
        {
            icon: "mdi:account-tie",
            title: "Expert Consultation",
            description: "Our experienced team helps you choose the perfect tyres for your vehicle and driving needs. Get personalized recommendations.",
            highlights: ["15+ Years Experience", "Personalized Service", "Expert Advice"]
        },
        {
            icon: "mdi:truck-fast",
            title: "Fast Installation & Delivery",
            description: "Quick professional installation at our service center or free home delivery. We value your time and convenience.",
            highlights: ["Same Day Service", "Home Delivery", "Professional Installation"]
        },
        {
            icon: "mdi:currency-inr",
            title: "Competitive Pricing",
            description: "Best prices in Chennai with transparent pricing. No hidden charges, flexible payment options, and seasonal discounts.",
            highlights: ["Best Prices", "No Hidden Charges", "Flexible Payment"]
        },
        {
            icon: "mdi:tools",
            title: "Complete Tyre Services",
            description: "From alignment and balancing to repair and maintenance. One-stop solution for all your tyre-related needs.",
            highlights: ["Wheel Alignment", "Balancing", "Repair & Maintenance"]
        },
        {
            icon: "mdi:headset",
            title: "24/7 Customer Support",
            description: "Round-the-clock assistance for emergencies and queries. Our support team is always ready to help you.",
            highlights: ["24/7 Support", "Emergency Help", "Quick Response"]
        }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-sm font-medium">
                        Why Choose Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Your Trusted Tyre Partner
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Experience the difference with our premium services, expert guidance, and unwavering commitment to customer satisfaction
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="group h-full hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
                            <CardHeader className="pb-4">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                    <AppIcon icon={feature.icon} className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold text-foreground">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="space-y-2">
                                    {feature.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center text-sm">
                                            <AppIcon icon="mdi:check-circle" className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                            <span className="text-foreground font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="px-8 py-3 text-lg">
                        <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                        Get Expert Consultation
                    </Button>
                    <p className="text-sm text-muted-foreground mt-3">
                        Call us now for personalized tyre recommendations
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
