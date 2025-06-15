"use client";

import { useState } from 'react';
import { AppIcon } from '@/shared/utils/icon';
import {
    COMPANY_INFO,
    CONTACT_INFO,
    SERVICES
} from '@/shared/utils/constants';

const ServicesPage = () => {
    const mainServices = SERVICES.main;
    const additionalServices = SERVICES.additional;

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center text-primary-foreground space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeIn">
                            Professional Tyre Services
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fadeIn delay-100">
                            State-of-the-art equipment and expert technicians for all your tyre needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Our Premium Services
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-slideUp"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center mb-4">
                                    <AppIcon icon={service.icon} className="w-8 h-8 text-primary" />
                                    <h3 className="text-xl font-semibold text-card-foreground ml-3">{service.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-6">{service.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                            <AppIcon icon="mdi:check-circle" className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                            <span className="text-card-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary">{service.price}<sup>*</sup></span>
                                    <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                                            Book Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Footnote for the asterisk */}
                    <div className="text-center text-sm text-muted-foreground mt-8">
                        <sup>*</sup> = Depends on vehicle type
                    </div>
                </div>
            </section>

            {/* Additional Services Section */}
            <section className="py-16 bg-muted/10">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Additional Services
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <AppIcon icon={service.icon} className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
                        Why Choose Our Services?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                <AppIcon icon="mdi:award" className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Certified Technicians</h3>
                            <p className="text-muted-foreground">Expert staff trained in the latest automotive technologies</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                <AppIcon icon="mdi:settings" className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Modern Equipment</h3>
                            <p className="text-muted-foreground">State-of-the-art machinery for precise service delivery</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                                <AppIcon icon="mdi:check-circle" className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Quality Guarantee</h3>
                            <p className="text-muted-foreground">100% satisfaction guaranteed on all our services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                        Ready to Experience Our Service?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                        Book your service appointment today and enjoy professional care for your vehicle
                    </p>
                    <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                        <button className="bg-background text-foreground px-8 py-3 rounded-lg hover:bg-background/90 transition-colors duration-300">
                            Schedule Service
                        </button>
                    </a>
                </div>
            </section>

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

export default ServicesPage;
