"use client"

import React from 'react';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp, MessageCircle, AlertTriangle, CheckCircle, XCircle, Ruler, Gauge, Wrench } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/Floater';

const TyreProblemsBlog = () => {
  const problemStats = [
    { label: 'Premature Wear', value: '35%', context: 'Of Issues' },
    { label: 'Punctures', value: '28%', context: 'Common Problems' },
    { label: 'Alignment Issues', value: '22%', context: 'Of Cases' },
    { label: 'Balancing Problems', value: '15%', context: 'Of Complaints' }
  ];

  const commonIssues = [
    {
      icon: AlertTriangle,
      title: 'Uneven Wear',
      description: 'Irregular tread wear patterns indicating alignment issues'
    },
    {
      icon: AlertTriangle,
      title: 'Vibration',
      description: 'Wheel balancing and alignment related problems'
    },
    {
      icon: Gauge,
      title: 'Pressure Loss',
      description: 'Gradual or sudden loss of tyre pressure'
    },
    {
      icon: Ruler,
      title: 'Tread Depth',
      description: 'Insufficient tread depth affecting performance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FloatingContact />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/guide" 
              className="inline-flex items-center text-red-100 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
              Common Tyre Problems and Solutions: A Troubleshooting Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-red-100">
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
            {/* Problem Overview */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="font-semibold text-red-900 mb-2">Problem Recognition</h3>
              <p className="text-red-800">
                Early detection of tyre problems can prevent costly repairs and ensure safety. Learn to identify common issues, understand their causes, and implement effective solutions to extend tyre life and maintain optimal performance.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {problemStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl md:text-3xl font-bold text-red-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.context}</div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="prose prose-red max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Problems & Solutions</h2>

              {/* Problems Grid */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Major Issues</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {commonIssues.map((issue, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-white/80 p-4 rounded-lg">
                      <issue.icon className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{issue.title}</h4>
                        <p className="text-sm text-gray-600">{issue.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Problems and Solutions */}
              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Uneven Wear Patterns</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Symptoms:</p>
                        <ul className="list-disc pl-4 text-gray-600">
                          <li>Center wear: Over-inflation</li>
                          <li>Edge wear: Under-inflation</li>
                          <li>One-sided wear: Misalignment</li>
                          <li>Cupping: Suspension issues</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Solutions:</p>
                        <ul className="list-disc pl-4 text-gray-600">
                          <li>Regular pressure checks</li>
                          <li>Professional alignment service</li>
                          <li>Rotation every 8,000-10,000 km</li>
                          <li>Suspension inspection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Vibration Issues</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Symptoms:</p>
                        <ul className="list-disc pl-4 text-gray-600">
                          <li>Steering wheel vibration</li>
                          <li>Vehicle shaking at speed</li>
                          <li>Uneven ride quality</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-800">Solutions:</p>
                        <ul className="list-disc pl-4 text-gray-600">
                          <li>Wheel balancing</li>
                          <li>Tyre inspection for damage</li>
                          <li>Check for bent wheels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Solutions */}
              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Situations</h3>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Immediate Actions</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-lg font-bold text-red-700">Sudden Puncture</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Slowly reduce speed</li>
                          <li>• Maintain steering control</li>
                          <li>• Find safe stopping place</li>
                        </ul>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <div className="text-lg font-bold text-red-700">Pressure Loss</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Check all tyres</li>
                          <li>• Use pressure gauge</li>
                          <li>• Locate leaks safely</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preventive Maintenance */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Preventive Measures</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Wrench className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Regular Maintenance</h3>
                    <div className="text-gray-600 space-y-4">
                      <p>
                        Implement a regular maintenance schedule to prevent common problems:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Monthly pressure checks</li>
                        <li>Regular visual inspections</li>
                        <li>Professional alignment checks</li>
                        <li>Timely rotation service</li>
                        <li>Balance check every 20,000 km</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Section */}
              <div className="border-t border-gray-100 pt-8 mt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-600">Tags:</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      Tyre Problems
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      Troubleshooting
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      Maintenance
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      Safety
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

export default TyreProblemsBlog;