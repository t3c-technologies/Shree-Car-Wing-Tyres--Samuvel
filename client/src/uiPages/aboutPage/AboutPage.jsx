"use client";

import { useState } from 'react';
import { AppIcon } from '@/lib/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';
import {
    COMPANY_INFO,
    CONTACT_INFO,
    CUSTOMER_REVIEWS,
    BRAND_INFO
} from '@/utils/constants';

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
            year: '2019',
            title: 'Foundation',
            description: 'Started our journey as a small tyre shop in Coimbatore'
        },
        {
            year: '2021',
            title: 'Multi-Brand Partnership',
            description: 'Became an authorized dealer for multiple premium brands'
        },
        {
            year: '2022',
            title: 'Expansion',
            description: 'Upgraded to a full-service modern facility'
        },
        {
            year: '2023',
            title: 'Recognition',
            description: 'Awarded Best Multi-Brand Dealer in Coimbatore'
        },
        {
            year: '2024',
            title: 'Innovation',
            description: 'Introduced state-of-the-art 3D alignment technology'
        }
    ];

    const stats = [
        {
            value: '5+',
            label: 'Years Experience',
            icon: 'lucide:clock'
        },
        {
            value: '3k+',
            label: 'Happy Customers',
            icon: 'lucide:users'
        },
        {
            value: '6+',
            label: 'Premium Brands',
            icon: 'lucide:award'
        },
        {
            value: '6k+',
            label: 'Tyres Sold',
            icon: 'lucide:truck'
        },
        {
            value: '4.8',
            label: 'Customer Rating',
            icon: 'lucide:star'
        }
    ];

    const values = [
        {
            title: 'Quality First',
            description: 'We never compromise on the quality of our products and services',
            icon: 'lucide:shield'
        },
        {
            title: 'Customer Satisfaction',
            description: 'Your satisfaction is our top priority in everything we do',
            icon: 'lucide:thumbs-up'
        },
        {
            title: 'Expert Service',
            description: 'Our team of certified professionals ensures expert care for your vehicle',
            icon: 'lucide:award'
        },
        {
            title: 'Local Trust',
            description: 'A trusted name in the Coimbatore automotive community',
            icon: 'lucide:map-pin'
        }
    ];

    return (
        <div className="min-h-screen bg-muted/20">
            <Header />
            <FloatingContact />

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-primary-foreground space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeIn">
                            Our Story
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fadeIn delay-100">
                            Two decades of excellence in tyre services and customer satisfaction
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Welcome to {COMPANY_INFO.name}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Since {COMPANY_INFO.yearEstablished}, {COMPANY_INFO.name} has been {COMPANY_INFO.location.city}'s trusted destination for premium multi-brand tyres
                            and exceptional automotive services. As a {COMPANY_INFO.businessType}, we offer an extensive range of tyres from world-renowned brands including
                            Goodyear, Michelin, Bridgestone, JK Tyre, Yokohama, and Kelly. We combine decades of expertise with cutting-edge technology to provide our customers with the
                            best tyre solutions and professional services for all vehicle types.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center space-y-2 animate-slideUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                    <AppIcon icon={stat.icon} className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Our Journey
                    </h2>
                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border"></div>

                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } items-start gap-4 mb-12 animate-slideUp`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-primary border-4 border-primary/20"></div>

                                {/* Content */}
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                    }`}>
                                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300 ml-8 md:ml-0">
                                        <div className="flex items-center mb-3">
                                            <div className="text-2xl font-bold text-primary mr-4">{milestone.year}</div>
                                            <div className="h-0.5 flex-grow bg-border"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-card-foreground mb-2">{milestone.title}</h3>
                                        <p className="text-muted-foreground">{milestone.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Don't just take our word for it - hear from our valued customers
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Desktop View - Grid */}
                        <div className="hidden lg:grid grid-cols-2 gap-6">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <div className="text-3xl text-primary/20 mb-4 font-serif">"</div>
                                    <p className="text-muted-foreground mb-4 italic">{review.text}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <div className="font-semibold text-card-foreground">{review.name}</div>
                                                <div className="text-sm text-muted-foreground">{review.role}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <AppIcon key={i} icon="lucide:star" className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile/Tablet View - Carousel */}
                        <div className="lg:hidden relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex transition-transform duration-300 ease-in-out"
                                    style={{ transform: `translateX(-${currentReview * 100}%)` }}
                                >
                                    {reviews.map((review, index) => (
                                        <div
                                            key={index}
                                            className="w-full flex-shrink-0 px-4"
                                        >
                                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                                <div className="text-3xl text-primary/20 mb-4 font-serif">"</div>
                                                <p className="text-muted-foreground mb-6 italic">{review.text}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <img
                                                            src={review.image}
                                                            alt={review.name}
                                                            className="w-12 h-12 rounded-full"
                                                        />
                                                        <div>
                                                            <div className="font-semibold text-card-foreground">{review.name}</div>
                                                            <div className="text-sm text-muted-foreground">{review.role}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <AppIcon key={i} icon="lucide:star" className="w-4 h-4 text-yellow-400 fill-current" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevReview}
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-md hover:bg-background transition-all duration-300"
                                aria-label="Previous review"
                            >
                                <AppIcon icon="lucide:chevron-left" className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextReview}
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm text-primary p-2 rounded-full shadow-md hover:bg-background transition-all duration-300"
                                aria-label="Next review"
                            >
                                <AppIcon icon="lucide:chevron-right" className="w-6 h-6" />
                            </button>

                            {/* Dots Navigation */}
                            <div className="flex justify-center space-x-2 mt-6">
                                {reviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentReview(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentReview === index ? 'bg-primary w-4' : 'bg-primary/20'
                                            }`}
                                        aria-label={`Go to review ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-muted/10">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <AppIcon icon={value.icon} className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                        Experience Our Service Today
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers who trust {COMPANY_INFO.name} for their vehicle needs
                    </p>
                    <a href={`tel:${CONTACT_INFO.primaryContact.phone}`} >
                        <button className="bg-background text-foreground px-8 py-3 rounded-lg hover:bg-background/90 transition-colors duration-300">
                            Contact Us
                        </button>
                    </a>
                </div>
            </section>

            <Footer />

            {/* Animations */}
            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
        </div>
    );
};

export default AboutPage;
