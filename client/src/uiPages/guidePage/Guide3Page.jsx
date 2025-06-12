"use client"

import React from 'react';
import { Calendar, Clock, ChevronLeft, Zap, Shield, Droplets, Gauge } from 'lucide-react';
import Link from 'next/link';
import FloatingContact from '@/components/Floater';

const Guide3Page = () => {
    const performanceFactors = [
        {
            icon: Zap,
            title: 'Acceleration',
            description: 'How quickly your vehicle responds from standstill'
        },
        {
            icon: Shield,
            title: 'Durability',
            description: 'Long-lasting performance under various conditions'
        },
        {
            icon: Droplets,
            title: 'Wet Performance',
            description: 'Superior grip and control on wet roads'
        },
        {
            icon: Gauge,
            title: 'Fuel Efficiency',
            description: 'Optimized rolling resistance for better mileage'
        }
    ];

    const performanceMetrics = [
        { label: 'Grip Improvement', value: '+25%', context: 'vs Standard Tyres' },
        { label: 'Braking Distance', value: '-15%', context: 'Reduction' },
        { label: 'Fuel Savings', value: '8%', context: 'Average Improvement' },
        { label: 'Tyre Life', value: '70K', context: 'Km Average' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <FloatingContact />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/guide"
                            className="inline-flex items-center text-purple-100 hover:text-white transition-colors mb-6 group"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
                            Understanding Tyre Performance: What Makes a Difference on the Road
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-purple-100">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>January 23, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>10 min read</span>
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
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                            <h3 className="font-semibold text-purple-900 mb-2">Performance Matters</h3>
                            <p className="text-purple-800">
                                Tyre performance directly impacts your driving experience, safety, and vehicle efficiency. Understanding what factors contribute to superior performance helps you make informed decisions that enhance your journey on every road.
                            </p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {performanceMetrics.map((metric, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-purple-700 mb-1">{metric.value}</div>
                                    <div className="text-sm text-gray-600">{metric.label}</div>
                                    <div className="text-xs text-gray-500">{metric.context}</div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-purple max-w-none">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Performance Factors</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Tyre performance encompasses multiple aspects that work together to deliver the driving experience you expect. From grip and handling to fuel efficiency and longevity, every element plays a crucial role.
                            </p>

                            {/* Performance Factors Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                {performanceFactors.map((factor, index) => {
                                    const IconComponent = factor.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2">{factor.title}</h3>
                                                <p className="text-gray-600 text-sm">{factor.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Apollo Performance Tyres</h3>
                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-orange-900 mb-2">High-Performance Options</h4>
                                <ul className="list-disc pl-6 space-y-2 text-orange-800">
                                    <li><strong>Alnac 4G</strong> - Advanced compound for superior grip</li>
                                    <li><strong>Alnac 4GS</strong> - Sporty performance with comfort balance</li>
                                    <li><strong>Amazer 4G Life</strong> - Long-lasting performance tyre</li>
                                    <li><strong>Amazer XP</strong> - Extra performance for demanding drives</li>
                                </ul>
                            </div>

                            {/* Engagement Section */}
                            <div className="border-t border-gray-100 pt-8 mt-8">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-gray-600">Tags:</span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                        Tyre Performance
                                    </span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                        Apollo Performance
                                    </span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                        Vehicle Efficiency
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

export default Guide3Page;
