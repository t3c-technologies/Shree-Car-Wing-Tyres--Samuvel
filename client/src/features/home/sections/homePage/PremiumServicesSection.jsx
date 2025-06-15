"use client";

import { AppIcon } from "@/shared/utils/icon";
import { SERVICES, CONTACT_INFO } from "@/shared/utils/constants";

const PremiumServicesSection = () => {
    const mainServices = SERVICES.main;
    const additionalServices = SERVICES.additional;

    return (
        <section className="section-layout bg-background">
            <div className="container mx-auto px-4 md:px-6">
                {/* Services Header */}
                <div className="text-center mb-12">
                    <div className="animate-fadeInUp">
                        <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
                            Professional Services
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            State-of-the-art equipment and expert technicians for all your tyre needs
                        </p>
                    </div>
                </div>

                {/* Main Services */}
                <div className="bg-card rounded-3xl shadow-xl p-8 mb-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => (
                            <div
                                key={service.id}
                                className="group p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg animate-fadeInUp"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <AppIcon icon={service.icon} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Professional service
                                        </p>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6">
                                    {service.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    <div className="text-sm text-muted-foreground">Includes:</div>
                                    <div className="space-y-1">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                                <AppIcon icon="mdi:chevron-right" className="w-4 h-4 text-primary mr-2" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-primary">
                                        {service.price}
                                        <sup className="text-xs">*</sup>
                                    </span>
                                    <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg">
                                            Book Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Services */}
                <div className="bg-card rounded-3xl shadow-xl p-8 mb-12">
                    <div className="animate-fadeInUp animation-delay-600">
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-card-foreground mb-8">
                            Additional Services
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {additionalServices.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="group p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg text-center animate-fadeInUp"
                                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <AppIcon icon={service.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <h4 className="font-bold text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {service.description}
                                    </p>
                                    <div className="text-lg font-bold text-primary">
                                        {service.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 text-primary-foreground">
                    <div className="animate-fadeInUp animation-delay-800">
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            Why Choose Our Services?
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AppIcon icon="mdi:award" className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Certified Technicians</h4>
                                <p className="text-primary-foreground/90">
                                    Expert staff trained in the latest automotive technologies
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AppIcon icon="mdi:settings" className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Modern Equipment</h4>
                                <p className="text-primary-foreground/90">
                                    State-of-the-art machinery for precise service delivery
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AppIcon icon="mdi:check-circle" className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Quality Guarantee</h4>
                                <p className="text-primary-foreground/90">
                                    100% satisfaction guaranteed on all our services
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-sm text-primary-foreground/80 mb-4">
                                <sup>*</sup> = Pricing depends on vehicle type and service requirements
                            </p>
                            <a href={`tel:${CONTACT_INFO.primaryContact.phone}`}>
                                <button className="bg-primary-foreground text-primary px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-all duration-200 hover:scale-105 font-semibold shadow-lg">
                                    <span className="flex items-center justify-center gap-2">
                                        <AppIcon icon="mdi:phone" className="w-5 h-5" />
                                        Schedule Service
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumServicesSection;
