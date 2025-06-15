"use client";

import { AppIcon } from '@/shared/utils/icon';

const TyreDetailSpecs = ({ tyre }) => {
    const performanceData = [
        { name: 'Wet Grip', value: tyre?.performance?.wetGrip || 85, color: 'blue' },
        { name: 'Dry Grip', value: tyre?.performance?.dryGrip || 90, color: 'green' },
        { name: 'Fuel Efficiency', value: tyre?.performance?.fuelEfficiency || 80, color: 'yellow' },
        { name: 'Noise Level', value: tyre?.performance?.noiseLevel || 75, color: 'purple' },
    ];

    const specifications = [
        { label: 'Tyre Size', value: tyre?.size || 'N/A' },
        { label: 'Aspect Ratio', value: tyre?.aspectRatio || 'N/A' },
        { label: 'Rim Diameter', value: tyre?.rimDiameter || 'N/A' },
        { label: 'Load Index', value: tyre?.loadIndex || 'N/A' },
        { label: 'Speed Rating', value: tyre?.speedRating || 'N/A' },
        { label: 'Sidewall', value: tyre?.sidewall || 'N/A' },
        { label: 'Tread Pattern', value: tyre?.treadPattern || 'N/A' },
        { label: 'Warranty', value: tyre?.warranty || 'N/A' },
    ];

    const features = tyre?.features || [
        'Enhanced wet grip performance',
        'Optimized tread design for better fuel efficiency',
        'Reduced road noise for comfortable driving',
        'Durable construction for longer tyre life',
        'All-season performance',
    ];

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-8">
                {/* Description Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            {tyre?.description || `The ${tyre?.name} is engineered for superior performance and reliability. 
                            This premium tyre combines advanced technology with innovative design to deliver exceptional 
                            driving experience across various road conditions.`}
                        </p>
                        <p className="text-gray-600">
                            Designed specifically for {tyre?.category?.toLowerCase()} vehicles, this tyre offers
                            the perfect balance of performance, comfort, and durability that modern drivers demand.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                <div className="flex-shrink-0">
                                    <AppIcon.CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                                </div>
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Performance Ratings */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance Ratings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {performanceData.map((item, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                    <span className="text-2xl font-bold text-gray-900">{item.value}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full bg-${item.color}-500`}
                                        style={{ width: `${item.value}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    {item.value >= 90 ? 'Excellent' :
                                        item.value >= 80 ? 'Very Good' :
                                            item.value >= 70 ? 'Good' : 'Average'}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                            {specifications.map((spec, index) => (
                                <div key={index} className="px-6 py-4 flex justify-between items-center">
                                    <span className="font-medium text-gray-900">{spec.label}</span>
                                    <span className="text-gray-700">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compatible Vehicles */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Compatible Vehicles</h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-start space-x-3">
                            <AppIcon.Car className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-blue-900 mb-2">Recommended For:</h3>
                                <p className="text-blue-800">
                                    {tyre?.compatibleVehicles ||
                                        `This tyre is suitable for ${tyre?.category?.toLowerCase()} vehicles including sedans, 
                                    hatchbacks, SUVs, and crossovers. Compatible with various makes and models that 
                                    require ${tyre?.size} size tyres.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TyreDetailSpecs;
