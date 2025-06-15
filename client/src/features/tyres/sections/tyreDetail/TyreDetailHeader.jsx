"use client";

import { useState } from 'react';
import Link from 'next/link';
import { AppIcon } from '@/shared/utils/icon';
import { COMPANY_INFO, CONTACT_INFO } from '@/shared/utils/constants';

const TyreDetailHeader = ({ tyre, onAddToCompare, onShareTyre }) => {
    const [mainImage, setMainImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        `/images/tyres/${tyre?.category}/${tyre?.image}`,
        `/images/tyres/${tyre?.category}/${tyre?.image}`,
        `/images/tyres/${tyre?.category}/${tyre?.image}`,
    ];

    return (
        <div className="bg-white">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center space-x-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-blue-600">
                        <AppIcon.Home className="w-4 h-4" />
                    </Link>
                    <AppIcon.ChevronRight className="w-4 h-4" />
                    <Link href="/tyres" className="hover:text-blue-600">Tyres</Link>
                    <AppIcon.ChevronRight className="w-4 h-4" />
                    <Link href="/tyres" className="hover:text-blue-600">
                        {tyre?.category || 'All Tyres'}
                    </Link>
                    <AppIcon.ChevronRight className="w-4 h-4" />
                    <span className="text-gray-900">{tyre?.name}</span>
                </nav>
            </div>

            {/* Main Product Section */}
            <div className="container mx-auto px-4 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center aspect-square">
                            <img
                                src={images[mainImage]}
                                alt={tyre?.name}
                                className="max-w-full max-h-full object-contain"
                                onError={(e) => {
                                    e.target.src = '/images/tyres/placeholder.jpg';
                                }}
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex space-x-2">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImage(index)}
                                    className={`w-16 h-16 bg-gray-50 rounded border-2 p-1 ${mainImage === index ? 'border-blue-500' : 'border-gray-200'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${tyre?.name} ${index + 1}`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.src = '/images/tyres/placeholder.jpg';
                                        }}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{tyre?.name}</h1>
                            <p className="text-lg text-gray-600">{tyre?.brand}</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {tyre?.category}
                                </span>
                                <span className="text-gray-500">Size: {tyre?.size}</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Starting from</p>
                                    <p className="text-3xl font-bold text-blue-600">₹{tyre?.price?.toLocaleString()}</p>
                                    <p className="text-sm text-gray-500">Per tyre (inclusive of all taxes)</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-green-600 font-medium">✓ In Stock</p>
                                    <p className="text-xs text-gray-500">Free Installation</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                <AppIcon.Gauge className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Speed Rating</p>
                                <p className="font-semibold">{tyre?.speedRating || 'N/A'}</p>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                                <AppIcon.Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                <p className="text-sm text-gray-600">Load Index</p>
                                <p className="font-semibold">{tyre?.loadIndex || 'N/A'}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-1 hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-1 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href={`tel:${CONTACT_INFO.primaryContact.phoneRaw}`}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <AppIcon.Phone className="w-4 h-4" />
                                    <span>Call to Order</span>
                                </a>

                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsapp.numberRaw}?text=Hi, I'm interested in ${tyre?.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <AppIcon.MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={() => onAddToCompare(tyre)}
                                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <AppIcon.RotateCw className="w-4 h-4" />
                                    <span>Compare</span>
                                </button>

                                <button
                                    onClick={() => onShareTyre(tyre)}
                                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    <AppIcon.Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TyreDetailHeader;
