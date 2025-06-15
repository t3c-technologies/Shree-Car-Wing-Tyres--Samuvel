"use client"

import React from 'react';
import { Calendar, Clock, ChevronLeft, DollarSign, TrendingUp, PiggyBank, Calculator } from 'lucide-react';
import Link from 'next/link';
import FloatingContact from '@/shared/components/Floater';

const Guide4Page = () => {
    const costFactors = [
        {
            icon: DollarSign,
            title: 'Initial Investment',
            description: 'Quality tyres as a smart long-term investment'
        },
        {
            icon: TrendingUp,
            title: 'Performance Value',
            description: 'Enhanced safety and driving experience'
        },
        {
            icon: PiggyBank,
            title: 'Fuel Savings',
            description: 'Reduced rolling resistance saves fuel costs'
        },
        {
            icon: Calculator,
            title: 'Total Cost of Ownership',
            description: 'Including maintenance and replacement intervals'
        }
    ];

    const savingsMetrics = [
        { label: 'Annual Fuel Savings', value: '₹8K', context: 'With Efficient Tyres' },
        { label: 'Extended Life', value: '+50%', context: 'vs Budget Tyres' },
        { label: 'Maintenance Reduction', value: '30%', context: 'Fewer Issues' },
        { label: 'Resale Value', value: '+12%', context: 'Better Condition' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <FloatingContact />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/guide"
                            className="inline-flex items-center text-indigo-100 hover:text-white transition-colors mb-6 group"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
                            The Economics of Quality Tyres: Cost vs Value Analysis
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-indigo-100">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>January 23, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>8 min read</span>
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
                        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                            <h3 className="font-semibold text-indigo-900 mb-2">Smart Investment Thinking</h3>
                            <p className="text-indigo-800">
                                Understanding the true cost of tyres goes beyond the initial purchase price. Quality tyres offer superior value through enhanced safety, improved fuel efficiency, and longer service life that justifies the investment.
                            </p>
                        </div>

                        {/* Savings Metrics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {savingsMetrics.map((metric, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-indigo-700 mb-1">{metric.value}</div>
                                    <div className="text-sm text-gray-600">{metric.label}</div>
                                    <div className="text-xs text-gray-500">{metric.context}</div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-indigo max-w-none">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cost Consideration Factors</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                When evaluating tyre costs, it is essential to consider the complete picture. Quality tyres provide better value through improved performance, safety, and longevity that often outweighs the higher initial investment.
                            </p>

                            {/* Cost Factors Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                {costFactors.map((factor, index) => {
                                    const IconComponent = factor.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2">{factor.title}</h3>
                                                <p className="text-gray-600 text-sm">{factor.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Value-Oriented Apollo Options</h3>
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                                <h4 className="font-semibold text-green-900 mb-2">Best Value Choices</h4>
                                <ul className="list-disc pl-6 space-y-2 text-green-800">
                                    <li><strong>Amazer 4G Life</strong> - Exceptional durability with performance</li>
                                    <li><strong>Alnac 4G</strong> - Balanced performance at competitive pricing</li>
                                    <li><strong>Actigrip Series</strong> - Budget-friendly with reliable quality</li>
                                    <li><strong>Endurace Series</strong> - Commercial-grade durability</li>
                                </ul>
                            </div>

                            {/* Engagement Section */}
                            <div className="border-t border-gray-100 pt-8 mt-8">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-gray-600">Tags:</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                                        Tyre Economics
                                    </span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                                        Value Analysis
                                    </span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                                        Cost Savings
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

export default Guide4Page;
