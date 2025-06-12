"use client"

import React from 'react';
import { Calendar, Clock, ChevronLeft, Wrench, Users, Award, Phone } from 'lucide-react';
import Link from 'next/link';
import FloatingContact from '@/components/Floater';

const Guide5Page = () => {
    const serviceFeatures = [
        {
            icon: Wrench,
            title: 'Professional Installation',
            description: 'Expert fitting with proper torque specifications'
        },
        {
            icon: Users,
            title: 'Experienced Team',
            description: 'Certified technicians with years of experience'
        },
        {
            icon: Award,
            title: 'Quality Assurance',
            description: 'Genuine Apollo products with warranty coverage'
        },
        {
            icon: Phone,
            title: 'Ongoing Support',
            description: 'Post-installation care and maintenance advice'
        }
    ];

    const serviceMetrics = [
        { label: 'Installation Time', value: '45min', context: 'Average per Set' },
        { label: 'Warranty Period', value: '5 Years', context: 'Manufacturing Defects' },
        { label: 'Customer Satisfaction', value: '98%', context: 'Positive Reviews' },
        { label: 'Follow-up Service', value: '30 Days', context: 'Free Check-up' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <FloatingContact />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/guide"
                            className="inline-flex items-center text-teal-100 hover:text-white transition-colors mb-6 group"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
                            Why Choose Professional Tyre Services: The Vidhya Tyres Advantage
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-teal-100">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>January 23, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 space-y-8 animate-slideUp">
                        {/* Executive Summary */}
                        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
                            <h3 className="font-semibold text-teal-900 mb-2">Professional Service Excellence</h3>
                            <p className="text-teal-800">
                                Professional tyre services ensure optimal performance, safety, and longevity of your investment. At Vidhya Tyres, we combine expertise, quality products, and customer care to deliver exceptional service experiences.
                            </p>
                        </div>

                        {/* Service Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {serviceMetrics.map((metric, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-teal-700 mb-1">{metric.value}</div>
                                    <div className="text-sm text-gray-600">{metric.label}</div>
                                    <div className="text-xs text-gray-500">{metric.context}</div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-teal max-w-none">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Service Advantages</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Choosing professional tyre services means investing in expertise, quality, and peace of mind. Our comprehensive approach ensures that your tyres perform optimally from day one and throughout their service life.
                            </p>

                            {/* Service Features Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                {serviceFeatures.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Complete Service Package</h3>
                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-orange-900 mb-2">What We Provide</h4>
                                <ul className="list-disc pl-6 space-y-2 text-orange-800">
                                    <li>Professional consultation and tyre selection assistance</li>
                                    <li>Expert installation with proper equipment and techniques</li>
                                    <li>Wheel alignment and balancing services</li>
                                    <li>Comprehensive vehicle safety inspection</li>
                                    <li>Ongoing maintenance support and advice</li>
                                    <li>Genuine Apollo products with full warranty coverage</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-teal-900 mb-2">Visit Vidhya Tyres</h4>
                                <p className="text-teal-800 mb-2">
                                    Experience the difference of professional service at our authorized Apollo dealer location in Coimbatore.
                                </p>
                                <p className="text-teal-800">
                                    <strong>Address:</strong> [Your Address Here]<br />
                                    <strong>Phone:</strong> [Your Phone Number]<br />
                                    <strong>Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM
                                </p>
                            </div>

                            {/* Engagement Section */}
                            <div className="border-t border-gray-100 pt-8 mt-8">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-gray-600">Tags:</span>
                                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                        Professional Service
                                    </span>
                                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                        Apollo Dealer
                                    </span>
                                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                        Vidhya Tyres
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
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
          animation-delay: 200ms;
        }
      `}</style>
        </div>
    );
};

export default Guide5Page;
