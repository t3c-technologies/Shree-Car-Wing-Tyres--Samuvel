"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppIcon } from '@/lib/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';
import {
  COMPANY_INFO,
  CONTACT_INFO,
  TYRE_CATEGORIES,
  BRAND_INFO
} from '@/utils/constants';

const TyresPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tyreCategories = TYRE_CATEGORIES.map(category => ({
    id: category.id,
    title: category.title,
    icon: category.icon,
    description: category.description,
    features: [
      'Superior grip for enhanced safety',
      'All-weather performance',
      'Longer tread life',
      'Fuel-efficient design'
    ],
    vehicles: category.vehicles,
  }));
  const whyChooseItems = [
    {
      title: 'Premium Quality',
      description: 'Manufactured with cutting-edge technology and premium materials for superior performance',
      icon: 'mdi:award'
    },
    {
      title: 'Expert Guidance',
      description: 'Our experienced team helps you choose the perfect tyres for your specific needs',
      icon: 'mdi:account-supervisor'
    },
    {
      title: 'Warranty Assured',
      description: 'All our tyres come with manufacturer warranty and after-sales support',
      icon: 'mdi:shield-check'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/tyres/4W/alnac_4g_1.png')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center text-primary-foreground space-y-4 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 bg-accent rounded-full text-sm font-medium animate-fadeIn text-accent-foreground">
              Authorized Multi-Brand Dealer
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeIn delay-100">
              Premium Tyres Collection
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 animate-fadeIn delay-200">
              Discover our comprehensive range of tyres for every vehicle type
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {tyreCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/tyres/${category.id}`}
                className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] animate-slideUp cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <AppIcon icon={category.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">{category.title}</h2>
                </div>

                <p className="text-muted-foreground mb-6">{category.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <AppIcon
                            icon="mdi:check-circle"
                            className="w-4 h-4 text-green-500 mr-2 transition-transform duration-300 group-hover:scale-110"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-card-foreground mb-3">Suitable For</h3>
                    <ul className="space-y-2">
                      {category.vehicles.map((vehicle, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <AppIcon
                            icon="mdi:chevron-right"
                            className="w-4 h-4 text-primary mr-2 transition-transform duration-300 group-hover:translate-x-1"
                          />
                          {vehicle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-primary font-semibold inline-flex items-center group-hover:gap-2 transition-all">
                    View Range
                    <AppIcon icon="mdi:chevron-right" className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Why Choose {COMPANY_INFO.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AppIcon icon={item.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            Need Help Choosing the Right Tyres?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect tyres for your vehicle
          </p>
          <a href={`tel:${CONTACT_INFO.phone}`}>
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors duration-300 inline-flex items-center">
              <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
              Contact Expert
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

export default TyresPage;
