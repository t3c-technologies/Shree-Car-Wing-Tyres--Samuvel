"use client"

import React from 'react';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp, MessageCircle, Compass, ShieldCheck, Ruler, Cloud, Gauge, Scale, Mountain, Target } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';

const SUVTyreGuideBlog = () => {
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
      <Header />
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

              {/* Key Considerations Grid */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Essential Factors to Consider</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {tyreConsiderations.map((consideration, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/80 p-4 rounded-lg">
                      <consideration.icon className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{consideration.title}</h4>
                        <p className="text-sm text-gray-600">{consideration.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Understanding Tyre Specifications */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Decoding Tyre Specifications</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Reading Tyre Sizes</h4>
                    <p className="text-gray-600 mb-4">
                      Let's understand what each number in a tyre specification means. For example, in 265/60R18:
                    </p>
                    <div className="space-y-2 text-gray-600">
                      <p>• 265: Tyre width in millimeters</p>
                      <p>• 60: Aspect ratio (height as percentage of width)</p>
                      <p>• R: Radial construction</p>
                      <p>• 18: Wheel diameter in inches</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terrain-Based Selection */}
              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Urban Driving</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Target className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <span>Focus on comfort and low noise levels</span>
                      </li>
                      <li className="flex items-start">
                        <Gauge className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <span>Prioritize fuel efficiency and longevity</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Off-Road Adventure</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Mountain className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <span>Enhanced grip and durability</span>
                      </li>
                      <li className="flex items-start">
                        <Scale className="w-5 h-5 text-green-600 mr-3 mt-1" />
                        <span>Better load handling capacity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Seasonal Considerations */}
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Weather-Specific Selection Guide</h3>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Seasonal Performance</h4>
                  <div className="space-y-4">
                    <p className="text-gray-600">Impact on tyre selection:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">Summer</div>
                        <div className="text-sm text-gray-600">Enhanced dry grip and handling</div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-700">All-Season</div>
                        <div className="text-sm text-gray-600">Versatile year-round performance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maintenance Tips */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Maximizing Your Investment</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Long-term Care Tips</h3>
                    <div className="text-gray-600 space-y-2">
                      <p>Regular pressure checks are crucial for SUV tyres due to their higher load-bearing requirements. Maintain manufacturer-recommended pressures and adjust based on load conditions. Schedule rotation every 8,000-10,000 kilometers to ensure even wear patterns.</p>
                      <p>Consider alignment checks every 20,000 kilometers or when you notice uneven wear patterns. This is particularly important for SUVs that frequently encounter varied terrain.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Section */}
              <div className="border-t border-gray-100 pt-8 mt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-600">Tags:</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      SUV Tyres
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Tyre Guide
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Vehicle Care
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Maintenance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

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

export default SUVTyreGuideBlog;