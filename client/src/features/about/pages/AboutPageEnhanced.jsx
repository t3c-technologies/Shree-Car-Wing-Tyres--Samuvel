"use client";

import { useState } from 'react';
import { AppIcon } from '@/shared/utils/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { Separator } from '@/shared/components/ui/separator';
import {
    COMPANY_INFO,
    CONTACT_INFO,
    CUSTOMER_REVIEWS,
    BRAND_INFO
} from '@/shared/utils/constants';

const AboutPage = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const reviews = CUSTOMER_REVIEWS;

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const milestones = [
        {
            year: '2009',
            title: 'Foundation',
            description: 'Started our journey as a premium tyre shop in Chennai',
            icon: 'mdi:flag'
        },
        {
            year: '2012',
            title: 'Multi-Brand Partnership',
            description: 'Became authorized dealer for multiple premium brands',
            icon: 'mdi:handshake'
        },
        {
            year: '2015',
            title: 'Service Expansion',
            description: 'Expanded to full-service modern facility',
            icon: 'mdi:tools'
        },
        {
            year: '2018',
            title: 'Technology Upgrade',
            description: 'Introduced state-of-the-art alignment technology',
            icon: 'mdi:gear'
        },
        {
            year: '2020',
            title: 'Digital Innovation',
            description: 'Launched online booking and home delivery services',
            icon: 'mdi:laptop'
        },
        {
            year: '2024',
            title: 'Excellence Award',
            description: 'Recognized as Chennai\'s Best Tyre Service Provider',
            icon: 'mdi:trophy'
        }
    ];

    const teamMembers = [
        {
            name: "Samuvel Kumar",
            role: "Founder & CEO",
            image: "/images/team/samuvel.webp",
            experience: "15+ years",
            expertise: "Tyre Technology & Business Strategy",
            description: "Passionate about revolutionizing the tyre industry with quality products and exceptional service."
        },
        {
            name: "Rajesh Patel",
            role: "Technical Director",
            image: "/images/team/rajesh.webp",
            experience: "12+ years",
            expertise: "Wheel Alignment & Balancing",
            description: "Expert in advanced tyre fitting and vehicle alignment technologies."
        },
        {
            name: "Priya Sharma",
            role: "Customer Relations Manager",
            image: "/images/team/priya.webp",
            experience: "8+ years",
            expertise: "Customer Service & Sales",
            description: "Dedicated to ensuring every customer receives personalized service and support."
        },
        {
            name: "Mohammed Ali",
            role: "Service Technician",
            image: "/images/team/mohammed.webp",
            experience: "10+ years",
            expertise: "Tyre Installation & Repair",
            description: "Skilled technician specializing in all types of tyre services and repairs."
        }
    ];

    const certifications = [
        {
            title: "Apollo Authorized Dealer",
            issuer: "Apollo Tyres Ltd",
            year: "2019",
            icon: "mdi:certificate"
        },
        {
            title: "MRF Premium Partner",
            issuer: "MRF Limited",
            year: "2020",
            icon: "mdi:award-star"
        },
        {
            title: "ISO 9001:2015 Certified",
            issuer: "Quality Management",
            year: "2021",
            icon: "mdi:quality-high"
        },
        {
            title: "CEAT Elite Dealer",
            issuer: "CEAT Limited",
            year: "2022",
            icon: "mdi:medal"
        }
    ];

    const companyStats = [
        {
            number: "50,000+",
            label: "Happy Customers",
            icon: "mdi:account-heart",
            color: "text-blue-600"
        },
        {
            number: "1,00,000+",
            label: "Tyres Sold",
            icon: "mdi:tire",
            color: "text-green-600"
        },
        {
            number: "15+",
            label: "Years Experience",
            icon: "mdi:calendar-clock",
            color: "text-purple-600"
        },
        {
            number: "24/7",
            label: "Service Support",
            icon: "mdi:headset",
            color: "text-orange-600"
        }
    ];

    const values = [
        {
            title: 'Quality First',
            description: 'We never compromise on the quality of our products and services',
            icon: 'mdi:shield-check',
            color: 'text-blue-600'
        },
        {
            title: 'Customer Satisfaction',
            description: 'Your satisfaction is our top priority in everything we do',
            icon: 'mdi:account-heart',
            color: 'text-green-600'
        },
        {
            title: 'Expert Service',
            description: 'Our team of certified professionals ensures expert care for your vehicle',
            icon: 'mdi:award',
            color: 'text-purple-600'
        },
        {
            title: 'Innovation',
            description: 'We continuously invest in the latest technology and training',
            icon: 'mdi:lightbulb',
            color: 'text-orange-600'
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Enhanced Hero Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center"></div>
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="max-w-4xl mx-auto text-center text-primary-foreground">
                        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                            Established 2009 • 15+ Years of Excellence
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Your Trusted Tyre Partner in Chennai
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                            From humble beginnings to becoming Chennai's premier tyre destination,
                            we've built our reputation on quality, trust, and exceptional service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                                <AppIcon icon="mdi:history" className="w-5 h-5 mr-2" />
                                Our Journey
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white/30 text-white hover:bg-white/10">
                                <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Stats Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {companyStats.map((stat, index) => (
                            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className={`w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mx-auto mb-4`}>
                                        <AppIcon icon={stat.icon} className={`w-8 h-8 ${stat.color}`} />
                                    </div>
                                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge variant="outline" className="mb-4">
                                Our Story
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Welcome to {COMPANY_INFO.name}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Since {COMPANY_INFO.yearEstablished}, {COMPANY_INFO.name} has been Chennai's trusted destination for premium multi-brand tyres
                                and exceptional automotive services. As a leading multi-brand dealer, we offer an extensive range of tyres from world-renowned brands.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                We combine decades of expertise with cutting-edge technology to provide our customers with the
                                best tyre solutions and professional services for all vehicle types.
                            </p>
                            <Button size="lg" className="px-8">
                                <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                                Get In Touch
                            </Button>
                        </div>
                        <div className="relative">
                            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-2">15+</div>
                                            <div className="text-sm text-muted-foreground">Years Experience</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                                            <div className="text-sm text-muted-foreground">Happy Customers</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                                            <div className="text-sm text-muted-foreground">Tyres Sold</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                                            <div className="text-sm text-muted-foreground">Support</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4">
                            Our Journey
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Milestones & Achievements
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A timeline of our growth, achievements, and commitment to excellence
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2 px-6">
                                        <Card className="hover:shadow-lg transition-shadow duration-300">
                                            <CardContent className="p-6">
                                                <div className="flex items-center mb-4">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                                        <AppIcon icon={milestone.icon} className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <Badge variant="secondary" className="mb-2">{milestone.year}</Badge>
                                                        <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                                                    </div>
                                                </div>
                                                <p className="text-muted-foreground">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="relative">
                                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4">
                            Our Values
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What Drives Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The core principles that guide our business and relationships with customers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary/30">
                                <CardContent className="p-6">
                                    <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4`}>
                                        <AppIcon icon={value.icon} className={`w-8 h-8 ${value.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4">
                            Meet Our Team
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            The People Behind Our Success
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our experienced team of professionals is dedicated to providing you with the best tyre solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                                <CardContent className="p-6">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                    <p className="text-primary font-semibold mb-2">{member.role}</p>
                                    <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                                    <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
                                    <p className="text-xs text-muted-foreground">{member.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4">
                            Certifications & Awards
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Recognition & Trust
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our certifications and partnerships that validate our commitment to quality
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <AppIcon icon={cert.icon} className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                                    <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4">
                            Customer Reviews
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Real experiences from our valued customers
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                            <CardContent className="p-0">
                                <div className="text-center">
                                    <AppIcon icon="mdi:format-quote-open" className="w-12 h-12 text-primary/60 mx-auto mb-6" />
                                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                        "{reviews[currentReview]?.text}"
                                    </p>
                                    <div className="flex items-center justify-center mb-4">
                                        {[...Array(reviews[currentReview]?.rating || 5)].map((_, i) => (
                                            <AppIcon key={i} icon="mdi:star" className="w-5 h-5 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center space-x-4">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src={reviews[currentReview]?.image} alt={reviews[currentReview]?.name} />
                                            <AvatarFallback className="bg-primary/10 text-primary">
                                                {reviews[currentReview]?.name?.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="text-left">
                                            <div className="font-semibold text-foreground">{reviews[currentReview]?.name}</div>
                                            <div className="text-sm text-muted-foreground">{reviews[currentReview]?.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-center space-x-4 mt-8">
                            <Button variant="outline" size="icon" onClick={prevReview}>
                                <AppIcon icon="mdi:chevron-left" className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={nextReview}>
                                <AppIcon icon="mdi:chevron-right" className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-primary-foreground">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Experience the Difference?
                        </h2>
                        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who trust us with their tyre needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                                <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                                Call Now
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white/30 text-white hover:bg-white/10">
                                <AppIcon icon="mdi:map-marker" className="w-5 h-5 mr-2" />
                                Visit Our Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
