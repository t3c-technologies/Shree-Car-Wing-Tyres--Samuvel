"use client"

import React from 'react';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp, MessageCircle, Sun, Cloud, Snowflake, ThermometerSun, Timer, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';

const SeasonalTyreGuideBlog = () => {
  const seasonalStats = [
    { label: 'Stopping Distance', value: '+35%', context: 'Wrong Season Tyres' },
    { label: 'Grip Difference', value: '45%', context: 'Summer vs Winter' },
    { label: 'Temperature Range', value: '7°C', context: 'Critical Point' },
    { label: 'Safety Impact', value: '85%', context: 'Accident Prevention' }
  ];

  const tyreFactors = [
    {
      icon: ThermometerSun,
      title: 'Temperature Range',
      description: 'Each tyre type is optimized for specific temperature ranges'
    },
    {
      icon: Cloud,
      title: 'Weather Conditions',
      description: 'Different compounds for varying weather scenarios'
    },
    {
      icon: Timer,
      title: 'Transition Timing',
      description: 'Optimal periods for seasonal switches'
    },
    {
      icon: Snowflake,
      title: 'Winter Performance',
      description: 'Special compounds for cold weather grip'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/guide" 
              className="inline-flex items-center text-amber-100 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Seasonal Tyre Guide: Understanding When and Why to Switch
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-amber-100">
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
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Understanding Seasonal Tyres</h3>
              <p className="text-amber-800">
                As temperatures change throughout the year, your tyres' performance can vary significantly. This comprehensive guide explains why different seasons demand different tyre types, when to make the switch, and how to ensure optimal safety and performance year-round.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {seasonalStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-amber-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.context}</div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="prose prose-amber max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Science of Seasonal Tyres</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Different seasons present unique challenges for your vehicle's tyres. Understanding the science behind tyre compounds and their behavior at various temperatures is crucial for making informed decisions about when to switch. The key temperature threshold of 7°C (45°F) marks the point where tyre performance characteristics significantly change.
              </p>

              {/* Season-Specific Information */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Seasonal Considerations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {tyreFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/80 p-4 rounded-lg">
                      <factor.icon className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{factor.title}</h4>
                        <p className="text-sm text-gray-600">{factor.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summer vs Winter Tyres */}
              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <Sun className="w-5 h-5 text-amber-600 mr-2" />
                      Summer Tyres
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>Summer tyres excel in warm conditions through:</p>
                      <div className="pl-4 space-y-2">
                        <p>• Harder compounds for enhanced durability</p>
                        <p>• Optimized for temperatures above 7°C</p>
                        <p>• Better handling in dry conditions</p>
                        <p>• Reduced rolling resistance</p>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <Snowflake className="w-5 h-5 text-amber-600 mr-2" />
                      Winter Tyres
                    </h3>
                    <div className="space-y-3 text-gray-600">
                      <p>Winter tyres provide advantages through:</p>
                      <div className="pl-4 space-y-2">
                        <p>• Softer compounds for cold flexibility</p>
                        <p>• Deep tread patterns for snow grip</p>
                        <p>• Specialized siping for ice traction</p>
                        <p>• Enhanced water displacement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Switching Guide */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">When to Make the Switch</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Spring Transition</h4>
                    <p className="text-gray-600">
                      Switch to summer tyres when daily temperatures consistently stay above 7°C and the risk of frost has passed. This typically occurs in March or April, depending on your location. Monitor long-term weather forecasts to make an informed decision.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Autumn Transition</h4>
                    <p className="text-gray-600">
                      Install winter tyres before daily temperatures regularly drop below 7°C, usually in October or November. Remember that it's better to switch slightly early than risk being caught in sudden winter weather with summer tyres.
                    </p>
                  </div>
                </div>
              </div>

              {/* All-Season Option */}
              <div className="bg-amber-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Understanding All-Season Tyres</h3>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Compromise Solution</h4>
                  <div className="space-y-4">
                    <p className="text-gray-600">Performance comparison:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <div className="text-lg font-bold text-amber-700">Advantages</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Year-round convenience</li>
                          <li>• Cost-effective</li>
                          <li>• Adequate for mild climates</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <div className="text-lg font-bold text-amber-700">Limitations</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Reduced winter performance</li>
                          <li>• Less summer grip</li>
                          <li>• Shorter lifespan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storage Tips */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Proper Tyre Storage</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Best Practices</h3>
                    <div className="text-gray-600 space-y-4">
                      <p>
                        Store your off-season tyres in a cool, dry place away from direct sunlight. Clean them thoroughly before storage and keep them either stacked horizontally or mounted vertically on rims. Consider using tyre bags to protect against environmental factors. Proper storage can significantly extend the life of your seasonal tyres.
                      </p>
                      <p>
                        Remember to check tyre condition before storage and again before remounting. Look for signs of unusual wear, damage, or aging. This is also an excellent opportunity to measure tread depth and assess whether replacement will be needed for the next season.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Section */}
              <div className="border-t border-gray-100 pt-8 mt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-600">Tags:</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      Seasonal Tyres
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      Winter Driving
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      Vehicle Safety
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
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

export default SeasonalTyreGuideBlog;