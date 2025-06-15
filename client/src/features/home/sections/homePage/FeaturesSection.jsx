"use client";

import { AppIcon } from "@/shared/utils/icon";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Progress } from "@/shared/components/ui/progress";
import { Separator } from "@/shared/components/ui/separator";

const FeaturesSection = () => {
    const features = [
        {
            icon: "mdi:shield-check",
            title: "Premium Quality Assurance",
            description: "Every tyre undergoes rigorous quality checks before reaching our customers",
            benefits: ["Factory-fresh tyres", "Authentic products only", "Manufacturer warranty", "Quality certification"],
            color: "text-blue-600"
        },
        {
            icon: "mdi:tools",
            title: "Professional Installation",
            description: "Expert technicians with years of experience in tyre fitting and alignment",
            benefits: ["Certified technicians", "Advanced equipment", "Proper balancing", "Alignment check"],
            color: "text-green-600"
        },
        {
            icon: "mdi:clock-fast",
            title: "Quick Service",
            description: "Fast and efficient service without compromising on quality standards",
            benefits: ["Same-day service", "30-min installation", "No waiting time", "Express booking"],
            color: "text-orange-600"
        },
        {
            icon: "mdi:phone-in-talk",
            title: "24/7 Support",
            description: "Round-the-clock customer support for all your tyre-related needs",
            benefits: ["Emergency roadside", "Expert consultation", "Online booking", "Technical support"],
            color: "text-purple-600"
        }
    ];

    const services = [
        {
            name: "Tyre Installation",
            description: "Professional fitting with proper balancing",
            icon: "mdi:tire",
            price: "Starting ₹200"
        },
        {
            name: "Wheel Alignment",
            description: "3D computerized alignment for optimal performance",
            icon: "mdi:target",
            price: "Starting ₹800"
        },
        {
            name: "Balancing",
            description: "Precision wheel balancing for smooth rides",
            icon: "mdi:scale-balance",
            price: "Starting ₹150"
        },
        {
            name: "Nitrogen Filling",
            description: "Pure nitrogen for longer tyre life",
            icon: "mdi:molecule",
            price: "Starting ₹50"
        }
    ];

    const statistics = [
        { label: "Years of Experience", value: "15+", icon: "mdi:calendar-check" },
        { label: "Happy Customers", value: "50,000+", icon: "mdi:account-heart" },
        { label: "Tyres Sold", value: "1,00,000+", icon: "mdi:tire" },
        { label: "Service Centers", value: "3", icon: "mdi:map-marker-multiple" }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                {/* Features Section */}
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4">
                        Why Choose Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Premium Tyre Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experience the difference with our comprehensive tyre services and expert care
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary/30">
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-4">
                                    <AppIcon icon={feature.icon} className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{feature.description}</p>
                                <ul className="space-y-2 text-sm">
                                    {feature.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <AppIcon icon="mdi:check-circle" className="w-4 h-4 text-green-600" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4">
                            Our Services
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Complete Tyre Care Solutions
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            From installation to maintenance, we provide all tyre-related services under one roof
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow group">
                                <CardContent className="p-6 text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <AppIcon icon={service.icon} className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">{service.name}</h4>
                                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                                    <Badge variant="secondary" className="text-xs font-medium">
                                        {service.price}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Statistics */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-8">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                Numbers That Speak
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our track record of excellence in serving customers across Chennai
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {statistics.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <AppIcon icon={stat.icon} className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                        <CardContent className="p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Experience Premium Service?
                            </h3>
                            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                                Book your appointment today and let our experts take care of your tyre needs
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="px-8">
                                    <AppIcon icon="mdi:calendar" className="w-5 h-5 mr-2" />
                                    Book Appointment
                                </Button>
                                <Button size="lg" variant="outline" className="px-8 border-white/30 text-white hover:bg-white/10">
                                    <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                                    Call Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
