"use client"

import React from 'react';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp, MessageCircle, Gauge, Thermometer, Fuel, BatteryCharging, Scale, ArrowDownRight, ArrowUpRight, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';

const TyrePressureGuideBlog = () => {
  const pressureImpacts = [
    { label: 'Fuel Efficiency Loss', value: '20%', context: 'Under-inflated' },
    { label: 'Tyre Life Reduction', value: '30%', context: 'Incorrect Pressure' },
    { label: 'Braking Distance', value: '+8m', context: 'At 100km/h' },
    { label: 'Monthly Air Loss', value: '2-3%', context: 'Natural Rate' }
  ];

  const pressureFactors = [
    {
      icon: Scale,
      title: 'Vehicle Load',
      description: 'Weight distribution affects required pressure levels'
    },
    {
      icon: Thermometer,
      title: 'Temperature',
      description: 'Ambient temperature influences pressure readings'
    },
    {
      icon: Gauge,
      title: 'Usage Pattern',
      description: 'Driving conditions determine optimal pressure'
    },
    {
      icon: Fuel,
      title: 'Efficiency',
      description: 'Proper pressure maximizes fuel economy'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-900 via-orange-800 to-orange-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/guide" 
              className="inline-flex items-center text-orange-100 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Understanding Tyre Pressure and Its Importance: A Deep Dive
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-orange-100">
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
            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Key Takeaways</h3>
              <p className="text-orange-800">
                Tyre pressure is more than just a maintenance task – it's a crucial factor in your vehicle's safety, performance, and efficiency. Throughout this guide, we'll explore how proper tyre pressure affects everything from fuel consumption to handling, and why regular monitoring should be part of every driver's routine.
              </p>
            </div>

            {/* Impact Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {pressureImpacts.map((impact, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-orange-700 mb-1">{impact.value}</div>
                  <div className="text-sm text-gray-600">{impact.label}</div>
                  <div className="text-xs text-gray-500">{impact.context}</div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="prose prose-orange max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Science Behind Tyre Pressure</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                When we talk about tyre pressure, we're actually discussing the amount of compressed air that supports your vehicle's weight and influences its handling characteristics. This compressed air plays a vital role in determining how your tyres interact with the road surface, affecting everything from comfort to safety.
              </p>

              {/* Pressure Factors Grid */}
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Key Influencing Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {pressureFactors.map((factor, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/80 p-4 rounded-lg">
                      <factor.icon className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{factor.title}</h4>
                        <p className="text-sm text-gray-600">{factor.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Effects of Pressure */}
              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Under-Inflation Effects</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <ArrowDownRight className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                        <span>Increased rolling resistance and fuel consumption</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                        <span>Excessive heat buildup and potential blowouts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Over-Inflation Effects</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <ArrowUpRight className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                        <span>Reduced traction and handling capability</span>
                      </li>
                      <li className="flex items-start">
                        <BatteryCharging className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                        <span>Increased susceptibility to impact damage</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pressure Monitoring Guide */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Proper Pressure Monitoring</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">When to Check</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Check pressure when tyres are cold (vehicle hasn't been driven)</li>
                      <li>• Monitor at least once every two weeks</li>
                      <li>• Always check before long journeys</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">How to Check</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Use a reliable pressure gauge</li>
                      <li>• Remove valve caps carefully</li>
                      <li>• Record readings for all tyres, including spare</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Temperature Effects */}
              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Temperature's Impact on Pressure</h3>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Seasonal Variations</h4>
                  <div className="space-y-4">
                    <p className="text-gray-600">Understanding pressure fluctuations:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-700">1 PSI</div>
                        <div className="text-sm text-gray-600">Change per 5.6°C</div>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-700">10%</div>
                        <div className="text-sm text-gray-600">Seasonal variation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Tips */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Maintaining Optimal Pressure</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Gauge className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Best Practices</h3>
                    <div className="text-gray-600 space-y-4">
                      <p>
                        Your vehicle's recommended tyre pressures can be found in the driver's door frame, fuel door, or owner's manual. These pressures are carefully calculated to provide the optimal balance between handling, comfort, and efficiency. Remember that front and rear tyres often require different pressures due to weight distribution.
                      </p>
                      <p>
                        Modern vehicles are equipped with Tyre Pressure Monitoring Systems (TPMS), but these shouldn't replace regular manual checks. TPMS typically only warns you when pressure is significantly low, while maintaining optimal pressure requires more frequent attention to smaller variations.
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
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      Tyre Pressure
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      Vehicle Safety
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      Maintenance
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      Fuel Efficiency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      </div>
  );
};

export default TyrePressureGuideBlog;