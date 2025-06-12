"use client"

import React from 'react';
import { Calendar, Clock, ChevronLeft, Compass, ShieldCheck, Cloud, Target } from 'lucide-react';
import Link from 'next/link';
import FloatingContact from '@/components/Floater';

const Guide2Page = () => {
    const tyreConsiderations = [
        {
            icon: Compass,
            title: 'Driving Environment',
            description: 'Your typical terrain determines the ideal tyre pattern and compound'
        },
        {
            icon: ShieldCheck,
            title: 'Load Rating',
            description: 'Critical for SUVs carrying family and cargo regularly'
        },
        {
            icon: Cloud,
            title: 'Weather Conditions',
            description: 'Local climate influences the optimal tyre composition'
        },
        {
            icon: Target,
            title: 'Performance Goals',
            description: 'Balance between comfort, durability, and handling'
        }
    ];

    const performanceMetrics = [
        { label: 'Highway Performance', value: '40%', context: 'Of SUV Usage' },
        { label: 'Off-Road Capability', value: '35%', context: 'Terrain Handling' },
        { label: 'Wet Grip', value: '90%', context: 'Safety Rating' },
        { label: 'Longevity', value: '60K', context: 'Km Average' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <FloatingContact />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/guide"
                            className="inline-flex items-center text-green-100 hover:text-white transition-colors mb-6 group"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
                            How to Choose the Right Tyres for Your SUV: A Comprehensive Guide
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-green-100">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>January 23, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>15 min read</span>
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
                        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                            <h3 className="font-semibold text-green-900 mb-2">Understanding SUV Tyre Selection</h3>
                            <p className="text-green-800">
                                Selecting the right tyres for your SUV involves more than just matching sizes. This guide explores how your driving habits, local environment, and vehicle specifications all play crucial roles in finding the perfect tyres that ensure safety, performance, and value for money.
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {performanceMetrics.map((metric, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-green-700 mb-1">{metric.value}</div>
                                    <div className="text-sm text-gray-600">{metric.label}</div>
                                    <div className="text-xs text-gray-500">{metric.context}</div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-green max-w-none">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding SUV Tyre Basics</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sport Utility Vehicles (SUVs) present unique challenges when it comes to tyre selection. Their higher center of gravity, substantial weight, and versatile usage patterns require carefully considered tyre choices that can maintain safety and performance across various conditions.
                            </p>

                            {/* Considerations Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                {tyreConsiderations.map((consideration, index) => {
                                    const IconComponent = consideration.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2">{consideration.title}</h3>
                                                <p className="text-gray-600 text-sm">{consideration.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tyre Size Specifications</h3>
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-blue-900 mb-2">Reading Tyre Specifications</h4>
                                <p className="text-blue-800 mb-4">
                                    Let us understand what each number in a tyre specification means. For example, in 265/60R18:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-blue-800">
                                    <li><strong>265</strong> - Tyre width in millimeters</li>
                                    <li><strong>60</strong> - Aspect ratio (sidewall height as % of width)</li>
                                    <li><strong>R</strong> - Radial construction</li>
                                    <li><strong>18</strong> - Wheel diameter in inches</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Apollo Tyres for SUVs</h3>
                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-orange-900 mb-2">Recommended Apollo SUV Tyres</h4>
                                <ul className="list-disc pl-6 space-y-2 text-orange-800">
                                    <li><strong>Apterra HT2</strong> - Highway terrain for comfortable city driving</li>
                                    <li><strong>Apterra AT2</strong> - All-terrain for mixed on/off-road usage</li>
                                    <li><strong>Apterra HP</strong> - High performance for sporty SUVs</li>
                                    <li><strong>Apterra Cross</strong> - Crossover specialist for urban SUVs</li>
                                </ul>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Making the Right Choice</h3>
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-green-900 mb-2">Decision Framework</h4>
                                <ul className="list-disc pl-6 space-y-2 text-green-800">
                                    <li>Assess your primary driving conditions (city, highway, off-road)</li>
                                    <li>Consider your load requirements (family, luggage, towing)</li>
                                    <li>Evaluate local weather patterns and seasonal needs</li>
                                    <li>Balance performance priorities with budget constraints</li>
                                    <li>Consult with certified tyre professionals for personalized advice</li>
                                </ul>
                            </div>

                            {/* Engagement Section */}
                            <div className="border-t border-gray-100 pt-8 mt-8">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-gray-600">Tags:</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        SUV Tyres
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Apollo Tyres
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Tyre Selection
                                    </span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                        Vehicle Safety
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

export default Guide2Page;
