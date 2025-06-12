"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Shield, Star, Truck, Clock, Award, Info, Volume2, Fuel, Droplets } from 'lucide-react';
import Head from 'next/head';

import { Bike, Car, Tractor } from 'lucide-react';

const AplhaH1 = () => {
    
  // ... [Previous state and hooks remain the same] ...
  const [tyreData, setTyreData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [showSpecGuide, setShowSpecGuide] = useState(false);

  const [relatedProducts, setRelatedProducts] = useState([]);

  // Specification explanations
  const specificationGuide = {
      "size": {
        "description": "The tyre size code (e.g., 195/65R15) where the first number is the width in mm, the second is the aspect ratio, and the last is the rim diameter in inches.",
        "example": "Example: 205/55R16 - The tyre has a width of 205mm, an aspect ratio of 55%, and fits a rim with a 16-inch diameter."
      },
      "width_mm": {
        "description": "The width of the tyre in millimeters, measured from sidewall to sidewall. It directly impacts grip and stability.",
        "example": "Example: A tyre with a width of 225mm provides a wider contact patch for better grip and performance."
      },
      "aspect_ratio": {
        "description": "The ratio of the tyre's height (sidewall height) to its width, expressed as a percentage. A lower aspect ratio indicates a lower sidewall height for sportier performance.",
        "example": "Example: An aspect ratio of 50 means the height of the tyre's sidewall is 50% of its width. For a width of 200mm, the sidewall height would be 100mm."
      },
      "rim_diameter": {
        "description": "The diameter of the wheel rim in inches. The tyre's rim diameter must match the wheel size for proper fitting.",
        "example": "Example: A rim diameter of 17 inches means the tyre is designed to fit a 17-inch wheel. Common rim sizes include 15, 16, and 17 inches."
      },
      "load_index": {
        "description": "A numerical code indicating the maximum weight the tyre can support when properly inflated. Higher numbers mean higher load capacity.",
        "example": "Example: A load index of 95 indicates the tyre can carry up to 690 kg. Use a load index chart to match the number with the maximum load capacity."
      },
      "speed_rating": {
        "description": "A letter indicating the maximum speed capability of the tyre under optimal conditions. The speed rating is crucial for matching tyres to vehicle performance requirements.",
        "example": "Example: A speed rating of V means the tyre is rated for speeds up to 240 km/h. Common ratings include T (190 km/h), H (210 km/h), and W (270 km/h)."
      }
  }
  

  const tyreGuide = {
    fuel_efficiency: {
      icon: Fuel,
      title: "Fuel Efficiency/Rolling Resistance",
      description: "Fuel efficiency is important to reduce both CO2 emissions and the cost of driving. Each tyre can be categorised for its fuel efficiency. Tyres are rated between A – G; A being the most fuel efficient, G bring the least fuel efficient. The difference between each category means a reduction or increase in fuel consumption of 3-4%."
    },
    wet_grip: {
      icon: Droplets,
      title: "Wet Grip/Braking Performance",
      description: "Wet grip is a critical safety feature, relating to how quickly a tyre can stop on wet roads. Tyres are rated A – G; A being the shortest braking distances in the wet, G being the longest braking distance in the wet. The difference in each category can mean an extra one to two car lengths (3-6 metres) on the stopping distance."
    },
    noise_emission: {
      icon: Volume2,
      title: "Noise Emission/Exterior Noise",
      description: "This relates to the external noise made by the tyre and is measured in dB (decibels). There are three ratings for noise as indicated by sound waves on the diagram. The more black waves, the louder the tyre."
    }
  };

  useEffect(() => {
    const loadTyreData = async () => {
      try {
        const response = await fetch('/tyres.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const tData = data[0];
        setTyreData(tData);
        setSelectedSize(tData.specification_table[0]);

        // Get related products data
        const relatedData = tData.related_products.map(index => data[index - 1]).filter(Boolean);
        setRelatedProducts(relatedData);

      } catch (error) {
        console.error('Error loading tyre data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTyreData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-2xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (!tyreData) return null;

  const nextImage = () => {
    if (tyreData.image_urls.length > 1) {
      setImageLoaded(false);
      setCurrentImageIndex((prev) => 
        prev === tyreData.image_urls.length - 1 ? 0 : prev + 1
      );
    }
  };
  
  const prevImage = () => {
    if (tyreData.image_urls.length > 1) {
      setImageLoaded(false);
      setCurrentImageIndex((prev) => 
        prev === 0 ? tyreData.image_urls.length - 1 : prev - 1
      );
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{tyreData.name} | Vidhya Tyres - Apollo Tyres Dealer in Coimbatore</title>
        <meta name="description" content={tyreData.description} />
        <meta name="keywords" content="Apollo Tyres, Vidhya Tyres, Coimbatore, Amazer XP, Car Tyres" />
      </Head>


      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Small Ideal For Tag */}
              <div className="absolute top-4 left-4 z-10">
                {tyreData.ideal_for.map((vehicle) => (
                  <div 
                    key={vehicle}
                    className="inline-flex items-center bg-white/90 px-2.5 py-1 rounded-md shadow-sm mr-2"
                  >
                    {/* Using Bike icon for both Motorcycle and Scooter since Lucide has no Scooter icon */}
                    {(vehicle === 'MOTORCYCLE' || vehicle === 'SCOOTER') && 
                      <Bike className="w-3.5 h-3.5 text-blue-700 mr-1.5" />}
                    {vehicle === 'CAR' && <Car className="w-3.5 h-3.5 text-blue-700 mr-1.5" />}
                    {vehicle === 'TRUCK' && <Truck className="w-3.5 h-3.5 text-blue-700 mr-1.5" />}
                    
                    {/* Labels */}
                    <span className="text-xs font-medium text-gray-700">
                      {vehicle === 'MOTORCYCLE' ? 'Bike' :
                      vehicle === 'SCOOTER' ? 'Scooter' :
                      vehicle.charAt(0) + vehicle.slice(1).toLowerCase()}
                    </span>
                  </div>
                ))}
              </div>
              {/* Image Carousel */}
              <div className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                  <img
                    src={tyreData.image_urls[currentImageIndex]}
                    alt={tyreData.name}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {tyreData.image_urls.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-105 group"
                      >
                        <ChevronLeft className="w-6 h-6 text-blue-900 group-hover:text-blue-700" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-105 group"
                      >
                        <ChevronRight className="w-6 h-6 text-blue-900 group-hover:text-blue-700" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="text-white space-y-6">
                <div className="inline-block bg-amber-500 rounded-full px-4 py-1 text-sm mb-2 animate-fadeIn text-black">
                  {tyreData.tagline}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fadeIn">
                  {tyreData.name}
                </h1>
                <p className="text-blue-100 text-lg animate-fadeIn delay-200">
                  {tyreData.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn delay-300">
                  <a href="tel:+917339099098" >
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Get Quote
                    </button>
                  </a>
                  {/* Brochure Button */}
                    {tyreData.brochure && (
                    <a
                        href={tyreData.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        View Brochure
                    </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {tyreData.features.map((featureObj, index) => {
                const [featureTitle, featureDescription] = Object.entries(featureObj)[0]; // Extract the key-value pair
                return (
                    <div 
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                    >
                    <Award className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-gray-800">{featureTitle}</h4>
                        <p className="text-gray-600">{featureDescription}</p>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
        </section>


        {/* Size Selection and Details */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Size Selection */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-gray-800">Select Your Size</h2>
                  <button
                    onClick={() => setShowGuide(!showGuide)}
                    className="p-2 rounded-full hover:bg-blue-50 transition-colors group relative"
                    aria-label="Show tyre guide"
                  >
                    <Info className="w-6 h-6 text-blue-700" />
                    <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-sm rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      Tyre Guide
                    </span>
                  </button>
                </div>

                {/* Tyre Guide Modal */}
                {showGuide && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-xl font-semibold text-gray-800">Tyre Guide</h3>
                          <button
                            onClick={() => setShowGuide(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            ✕
                          </button>
                        </div>
                        
                        <div className="space-y-6">
                          {Object.entries(tyreGuide).map(([key, guide]) => {
                            const Icon = guide.icon;
                            return (
                              <div key={key} className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-2">
                                  <Icon className="w-6 h-6 text-blue-700" />
                                  <h4 className="font-semibold text-gray-800">{guide.title}</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {guide.description}
                                </p>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <button
                            onClick={() => setShowGuide(false)}
                            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
                          >
                            Close Guide
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {tyreData.specification_table.map((spec) => (
                    <button
                      key={spec.size}
                      onClick={() => setSelectedSize(spec)}
                      className={`p-4 text-sm border rounded-lg transition-all duration-300 hover:scale-105 ${
                        selectedSize?.size === spec.size
                          ? 'bg-blue-700 text-white border-blue-700'
                          : 'border-gray-300 hover:border-blue-700 hover:text-blue-700'
                      }`}
                    >
                      {spec.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Size Details */}
              {selectedSize && (
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Specifications</h2>
                <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(selectedSize).map(([key, value], index) => {
                    const specGuide = specificationGuide[key];
                    return (
                    <div 
                        key={key}
                        className="relative p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center justify-between">
                        <div className="text-gray-500 text-sm mb-1 flex-1">
                            {key.replace(/_/g, ' ').toUpperCase()}
                        </div>
                        {specGuide && (
                            <button
                            onClick={() => {
                                setShowSpecGuide(true);
                                document.getElementById(`spec-${key}`)?.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'center'
                                });
                            }}
                            className="p-1 rounded-full hover:bg-blue-100 transition-colors"
                            aria-label={`Show guide for ${key}`}
                            >
                            <Info className="w-4 h-4 text-blue-600" />
                            </button>
                        )}
                        </div>
                        <div className="text-gray-900 font-medium">{value}</div>
                    </div>
                    );
                })}
                </div>
            </div>
            )}

            {showSpecGuide && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Specification Guide</h3>
                    <button
                        onClick={() => setShowSpecGuide(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        X
                    </button>
                    </div>
                    
                    <div className="space-y-6">
                    {Object.entries(specificationGuide).map(([key, spec]) => (
                        <div 
                        id={`spec-${key}`}
                        key={key} 
                        className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                        <h4 className="font-semibold text-gray-800 mb-2">
                            {key.replace(/_/g, ' ').toUpperCase()}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">
                            {spec.description}
                        </p>
                        <p className="text-gray-500 text-sm italic">
                            {spec.example}
                        </p>
                        </div>
                    ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                        onClick={() => setShowSpecGuide(false)}
                        className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Close Guide
                    </button>
                    </div>
                </div>
                </div>
            </div>
            )}

            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Experience Superior Performance?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your tyre fitting appointment today and enjoy expert installation service
            </p>
            <a href="tel:+917339099098" >
<button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Book Now
            </button> </a>
          </div>
        </section>

        {/* Related Tyres */}
        <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Similar Products</h2>
            <Link 
                href="/tyres"
                className="text-blue-700 hover:text-blue-800 transition-all duration-300 inline-flex items-center gap-2 group"
            >
                View All 
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
                <Link 
                href={product.url}
                key={index}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-300 
                    hover:shadow-lg hover:-translate-y-1 border border-gray-100 hover:border-blue-100
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                {/* Product Image */}
                <div className="aspect-square rounded-xl bg-gray-50 mb-4 p-6 flex items-center justify-center 
                    overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                    {product.image_urls && product.image_urls[0] && (
                    <img
                        src={product.image_urls[0]}
                        alt={product.name}
                        className="w-full h-full object-contain transform transition-all duration-500 
                        group-hover:scale-110"
                    />
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                    <h3 className="text-gray-800 font-medium line-clamp-1 group-hover:text-blue-700 
                    transition-colors">
                    {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 h-10">
                    {product.description}
                    </p>
                </div>

                {/* Size Badge */}
                {product.specification_table && product.specification_table[0] && (
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 
                    px-3 py-1 rounded-full">
                    <span className="font-medium">{product.specification_table[0].size}</span>
                    <span className="text-gray-400">•</span>
                    <span>Available in {product.specification_table.length} sizes</span>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-700 group-hover:translate-x-1 
                    transition-transform inline-flex items-center gap-1">
                    View Details
                    <ChevronRight className="w-4 h-4" />
                    </span>
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center 
                    group-hover:bg-blue-100 transition-colors">
                    <ChevronRight className="w-4 h-4 text-blue-700" />
                    </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-700 transform scale-x-0 
                    group-hover:scale-x-100 transition-transform rounded-b-2xl"></div>
                </Link>
            ))}
            </div>
        </div>
        </section>
      </main>




    </div>
  );
};

export default AplhaH1;