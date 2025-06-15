"use client";

import { AppIcon } from '@/shared/utils/icon';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Business Owner",
            image: "/images/people/rajesh_kumar.webp",
            rating: 5,
            text: "Exceptional service and quality tyres! The team helped me choose the perfect tyres for my sedan. The installation was quick and professional. Highly recommended!",
            vehicle: "Honda City",
            tyreType: "4W Passenger"
        },
        {
            name: "Priya Sharma",
            role: "Software Engineer",
            image: "/images/people/priya_sharma.webp",
            rating: 5,
            text: "Amazing customer service! They delivered and installed tyres at my home. The prices were competitive and the quality is excellent. Will definitely return for future needs.",
            vehicle: "Maruti Suzuki Swift",
            tyreType: "4W Passenger"
        },
        {
            name: "Aravind JC",
            role: "Delivery Professional",
            image: "/images/people/aravind_jc.webp",
            rating: 5,
            text: "Perfect tyres for my bike! Great grip and durability. The team is knowledgeable and helped me understand the different options. Fair pricing and quick service.",
            vehicle: "Honda Activa",
            tyreType: "2W Scooter"
        },
        {
            name: "Gowtham Bala",
            role: "Cab Driver",
            image: "/images/people/gowtham_bala.webp",
            rating: 5,
            text: "As a professional driver, tyre quality is crucial for me. These tyres have excellent performance and longevity. The after-sales support is also fantastic.",
            vehicle: "Toyota Innova",
            tyreType: "Commercial"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-sm font-medium">
                        Customer Reviews
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real experiences from our valued customers across Chennai
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/30 hover:border-l-primary">
                            <CardContent className="p-6">
                                {/* Quote Icon */}
                                <div className="mb-4">
                                    <AppIcon icon="mdi:format-quote-open" className="w-8 h-8 text-primary/60" />
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                                    "{testimonial.text}"
                                </p>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <AppIcon key={i} icon="mdi:star" className="w-5 h-5 text-yellow-500 fill-current" />
                                    ))}
                                    <span className="ml-2 text-sm font-medium text-foreground">
                                        {testimonial.rating}.0
                                    </span>
                                </div>

                                {/* Customer Info */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-foreground">{testimonial.vehicle}</div>
                                        <Badge variant="secondary" className="text-xs">
                                            {testimonial.tyreType}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 text-center">
                    <div className="flex items-center justify-center space-x-8 mb-6">
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:google" className="w-6 h-6 text-blue-600" />
                            <div>
                                <div className="text-2xl font-bold text-foreground">4.9</div>
                                <div className="text-sm text-muted-foreground">Google Rating</div>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-border"></div>
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:star-circle" className="w-6 h-6 text-yellow-600" />
                            <div>
                                <div className="text-2xl font-bold text-foreground">1000+</div>
                                <div className="text-sm text-muted-foreground">Reviews</div>
                            </div>
                        </div>
                        <div className="w-px h-12 bg-border"></div>
                        <div className="flex items-center space-x-2">
                            <AppIcon icon="mdi:account-heart" className="w-6 h-6 text-green-600" />
                            <div>
                                <div className="text-2xl font-bold text-foreground">98%</div>
                                <div className="text-sm text-muted-foreground">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
