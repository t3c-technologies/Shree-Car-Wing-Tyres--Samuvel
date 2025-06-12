"use client"

import React from 'react';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp, MessageCircle, PenToolIcon, Gauge, RotateCw, Ruler, AlertTriangle, CheckCircle, Settings, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';

const TyreMaintenanceBlog = () => {
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
      <Header />
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
                Regular tyre maintenance isn't just about preventing flats – it's about ensuring safety, maximizing performance, and protecting your investment. Let's explore the key aspects of tyre care that every vehicle owner should know.
              </p>

              {/* Maintenance Tips Grid */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Maintenance Areas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {maintenanceTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/80 p-4 rounded-lg">
                      <tip.icon className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{tip.title}</h4>
                        <p className="text-sm text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Maintenance */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Tyre Care</h2>
              <div className="space-y-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Visual Inspection</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span>Check for visible damage or foreign objects</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span>Look for unusual wear patterns</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Pressure Monitoring</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Gauge className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span>Check pressure when tyres are cold</span>
                      </li>
                      <li className="flex items-start">
                        <Settings className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                        <span>Adjust to manufacturer specifications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Maintenance */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Services</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Regular Services</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Wheel balancing every 10,000 km</li>
                      <li>• Alignment check every 20,000 km</li>
                      <li>• Rotation every 8,000-10,000 km</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Specialized Care</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 3D wheel alignment</li>
                      <li>• Nitrogen inflation</li>
                      <li>• Puncture repairs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Success Story: Proper Maintenance Impact</h3>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Fleet Management Company</h4>
                  <div className="space-y-4">
                    <p className="text-gray-600">Results after implementing regular maintenance:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">45%</div>
                        <div className="text-sm text-gray-600">Fewer replacements</div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-700">30%</div>
                        <div className="text-sm text-gray-600">Cost reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Essential Tips</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Preventive Measures</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
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

export default TyreMaintenanceBlog;