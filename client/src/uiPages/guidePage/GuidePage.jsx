"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/Floater";
import { AppIcon } from "@/lib/icon";
import {
    COMPANY_INFO,
    CONTACT_INFO
} from '@/utils/constants';

const GuidePage = () => {
    const blogs = [
        {
            id: 1,
            title: "Complete Guide to Tyre Maintenance",
            excerpt: "Learn essential tips and best practices for maintaining your vehicle's tyres to ensure optimal performance and longevity. Discover how proper maintenance can improve safety and fuel efficiency.",
            category: "Maintenance",
            readTime: "8 min read",
            image: "/images/guide/1.webp",
            date: "January 15, 2025"
        },
        {
            id: 2,
            title: "How to Choose the Right Tyres for Your SUV",
            excerpt: "Selecting the perfect tyres for your SUV involves considering multiple factors. This comprehensive guide helps you make an informed decision based on your specific needs.",
            category: "Buying Guide",
            readTime: "10 min read",
            image: "/images/guide/2.webp",
            date: "January 12, 2025"
        },
        {
            id: 3,
            title: "Understanding Tyre Pressure and Its Importance",
            excerpt: "Proper tyre pressure is crucial for vehicle safety and performance. Learn how to maintain optimal pressure and understand its impact on your driving experience.",
            category: "Safety",
            readTime: "6 min read",
            image: "/images/guide/3.webp",
            date: "January 10, 2025"
        },
        {
            id: 4,
            title: "Seasonal Tyre Guide: When to Switch",
            excerpt: "Different seasons demand different tyre types. Discover when and why you should consider switching your tyres to maintain optimal performance throughout the year.",
            category: "Seasonal",
            readTime: "7 min read",
            image: "/images/guide/4.webp",
            date: "January 8, 2025"
        },
        {
            id: 5,
            title: "Common Tyre Problems and Solutions",
            excerpt: "Identify and resolve common tyre issues before they become major problems. This guide helps you understand warning signs and take preventive measures.",
            category: "Troubleshooting",
            readTime: "9 min read",
            image: "/images/guide/5.webp",
            date: "January 5, 2025"
        }
    ];

    return (
        <div className="min-h-screen bg-muted/20">
            <Header />
            <FloatingContact />

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-primary">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/tyres/4w/apterra_ht_1.png')] opacity-10 bg-cover bg-center"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="text-center text-primary-foreground space-y-4 max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1 bg-primary/80 rounded-full text-sm font-medium animate-fadeIn">
                            Expert Resources
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight animate-fadeIn delay-100">
                            Tyre Guide & Resources
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 animate-fadeIn delay-200">
                            Expert advice and insights to help you make informed decisions about your tyres
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Listing */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Featured Article */}
                    <div className="mb-12 animate-slideUp">
                        <a
                            href={`/guide/${blogs[0].id}`}
                            target="_blank"
                            className="group block bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="relative aspect-[3/2] md:aspect-auto overflow-hidden">
                                    <img
                                        src={blogs[0].image}
                                        alt={blogs[0].title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                    <div className="space-y-4">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                            {blogs[0].category}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                            {blogs[0].title}
                                        </h2>
                                        <p className="text-muted-foreground line-clamp-3">
                                            {blogs[0].excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <AppIcon icon="lucide:clock" className="w-4 h-4" />
                                                {blogs[0].readTime}
                                            </span>
                                            <span>{blogs[0].date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Other Articles */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogs.slice(1).map((blog, index) => (
                            <a
                                key={blog.id}
                                href={`/guide/${blog.id}`}
                                target="_blank"
                                className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-slideUp"
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                            >
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="space-y-3">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                            {blog.category}
                                        </span>
                                        <h2 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                            {blog.title}
                                        </h2>
                                        <p className="text-muted-foreground line-clamp-2">
                                            {blog.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-2">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <AppIcon icon="lucide:clock" className="w-4 h-4" />
                                                    {blog.readTime}
                                                </span>
                                            </div>
                                            <span className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read More
                                                <AppIcon icon="lucide:chevron-right" className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <AppIcon icon="lucide:book-open" className="w-12 h-12 mx-auto text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            Need Expert Advice?
                        </h2>
                        <p className="text-muted-foreground">
                            Our team is ready to help you with any questions about tyres and maintenance
                        </p>
                        <button
                            onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
                            className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                        >
                            Get Expert Help
                            <AppIcon icon="lucide:chevron-right" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            <style jsx global>{`
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

            <Footer />
        </div>
    );
};

export default GuidePage;