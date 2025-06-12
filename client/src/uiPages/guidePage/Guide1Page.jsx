"use client"

import React from 'react';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp, MessageCircle, PenToolIcon, Gauge, RotateCw, Ruler, AlertTriangle, CheckCircle, Settings, Shield } from 'lucide-react';
import Link from 'next/link';
import FloatingContact from '@/components/Floater';

const Guide1Page = () => {
    const maintenanceStats = [
        { label: 'Extended Tyre Life', value: '+40%', period: 'With Regular Care' },
        { label: 'Fuel Efficiency', value: '+10%', period: 'Proper Pressure' },
        { label: 'Road Safety', value: '90%', period: 'Risk Reduction' },
        { label: 'Cost Savings', value: '₹12K', period: 'Annual Average' }
    ];

    const maintenanceTips = [
        {
            icon: Gauge,
            title: 'Pressure Check',
            description: 'Regular pressure monitoring for optimal performance'
        },
        {
            icon: RotateCw,
            title: 'Rotation Schedule',
            description: 'Periodic tyre rotation for even wear'
        },
        {
            icon: Ruler,
            title: 'Tread Depth',
            description: 'Regular depth measurements for safety'
        },
        {
            icon: PenToolIcon,
            title: 'Alignment',
            description: 'Professional alignment services'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <FloatingContact />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/guide"
                            className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-6 group"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
                            The Complete Guide to Tyre Maintenance: Everything You Need to Know
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-blue-100">
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>January 23, 2025</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>12 min read</span>
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
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">Quick Overview</h3>
                            <p className="text-blue-800">
                                Your tyres are the only point of contact between your vehicle and the road. Learn how proper maintenance can enhance safety, improve performance, and save money in the long run. This comprehensive guide covers everything from daily checks to professional maintenance schedules.
                            </p>
                        </div>

                        {/* Maintenance Impact Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {maintenanceStats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                    <div className="text-xs text-gray-500">{stat.period}</div>
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="prose prose-blue max-w-none">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Essential Tyre Maintenance</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Regular tyre maintenance is not just about preventing flats – it is about ensuring safety, maximizing performance, and protecting your investment. Let us explore the key aspects of tyre care that every vehicle owner should know.
                            </p>

                            {/* Maintenance Tips Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                {maintenanceTips.map((tip, index) => {
                                    const IconComponent = tip.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2">{tip.title}</h3>
                                                <p className="text-gray-600 text-sm">{tip.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Maintenance Checklist</h3>
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-green-900 mb-2">Quick Daily Checks</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-green-800">
                                            <li>Visual inspection for cuts, bulges, or foreign objects</li>
                                            <li>Check for unusual wear patterns</li>
                                            <li>Verify proper inflation using a reliable gauge</li>
                                            <li>Listen for unusual sounds while driving</li>
                                            <li>Feel for vibrations through the steering wheel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Maintenance</h3>
                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-6">
                                <div className="flex items-start space-x-4">
                                    <Settings className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-yellow-900 mb-2">Weekly Routine</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-yellow-800">
                                            <li>Thorough pressure check when tyres are cold</li>
                                            <li>Inspect tread depth using the coin test</li>
                                            <li>Check for signs of uneven wear</li>
                                            <li>Clean tyres and remove debris from treads</li>
                                            <li>Inspect valve caps and stems</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Monthly Professional Care</h3>
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                                <div className="flex items-start space-x-4">
                                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-red-900 mb-2">Professional Services</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-red-800">
                                            <li>Wheel alignment and balancing check</li>
                                            <li>Rotation according to manufacturer specifications</li>
                                            <li>Professional pressure and condition assessment</li>
                                            <li>Suspension system inspection</li>
                                            <li>Complete safety evaluation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Preventive Measures</h3>
                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-6">
                                <div className="flex items-start space-x-4">
                                    <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-purple-900 mb-2">Long-term Care</h3>
                                        <ul className="list-disc pl-6 space-y-2 text-purple-800">
                                            <li>Monitor tread wear indicators regularly</li>
                                            <li>Keep a log of all maintenance activities</li>
                                            <li>Address unusual sounds or vibrations promptly</li>
                                            <li>Use season-appropriate tyres</li>
                                            <li>Store spare tyres properly</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Engagement Section */}
                            <div className="border-t border-gray-100 pt-8 mt-8">
                                <div className="flex flex-wrap items-center justify-between gap-4">

                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-gray-600">Tags:</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            Tyre Maintenance
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            Vehicle Care
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            Road Safety
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            Car Tips
                                        </span>
                                    </div>
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

export default Guide1Page;
