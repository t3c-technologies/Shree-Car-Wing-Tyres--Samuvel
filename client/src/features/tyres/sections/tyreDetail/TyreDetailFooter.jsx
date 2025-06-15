"use client";

import Link from 'next/link';
import { AppIcon } from '@/shared/utils/icon';
import { COMPANY_INFO, CONTACT_INFO } from '@/shared/utils/constants';

const TyreDetailFooter = ({ tyre, relatedTyres = [] }) => {
    const reviews = [
        {
            id: 1,
            name: "Rajesh Kumar",
            rating: 5,
            comment: "Excellent tyre quality and performance. Very satisfied with the purchase.",
            date: "2024-01-15"
        },
        {
            id: 2,
            name: "Priya Sharma",
            rating: 4,
            comment: "Good value for money. Installation was quick and professional.",
            date: "2024-01-10"
        },
        {
            id: 3,
            name: "Arun Patel",
            rating: 5,
            comment: "Outstanding grip and comfort. Highly recommended!",
            date: "2024-01-05"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <AppIcon.Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                {/* Customer Reviews */}
                <section className="mb-12">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

                        {/* Review Summary */}
                        <div className="flex items-center space-x-6 mb-8 pb-6 border-b border-gray-200">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900">4.7</div>
                                <div className="flex items-center justify-center space-x-1 mt-1">
                                    {renderStars(5)}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">Based on 127 reviews</div>
                            </div>
                            <div className="flex-1">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <div key={rating} className="flex items-center space-x-3 mb-2">
                                        <span className="text-sm text-gray-600 w-8">{rating} ⭐</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-yellow-400 h-2 rounded-full"
                                                style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : 10}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-600 w-12">
                                            {rating === 5 ? '89' : rating === 4 ? '25' : '13'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Individual Reviews */}
                        <div className="space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                            <div className="flex items-center space-x-1 mt-1">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                        <span className="text-sm text-gray-500">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700">{review.comment}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                                View All Reviews
                            </button>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                {relatedTyres.length > 0 && (
                    <section className="mb-12">
                        <div className="bg-white rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedTyres.slice(0, 3).map((relatedTyre) => (
                                    <Link key={relatedTyre.id} href={`/tyres/${relatedTyre.id}`}>
                                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                            <div className="aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                                                <img
                                                    src={`/images/tyres/${relatedTyre.category}/${relatedTyre.image}`}
                                                    alt={relatedTyre.name}
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => {
                                                        e.target.src = '/images/tyres/placeholder.jpg';
                                                    }}
                                                />
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">{relatedTyre.name}</h3>
                                            <p className="text-gray-600 text-sm mb-2">{relatedTyre.brand}</p>
                                            <p className="text-blue-600 font-bold">₹{relatedTyre.price?.toLocaleString()}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact Information */}
                <section>
                    <div className="bg-blue-600 rounded-lg p-8 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
                                <p className="text-blue-100 mb-6">
                                    Our tyre experts are here to help you find the perfect tyres for your vehicle.
                                    Get personalized recommendations and professional installation services.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <AppIcon.Phone className="w-5 h-5 text-blue-200" />
                                        <span>{CONTACT_INFO.primaryContact.phone}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <AppIcon.MessageCircle className="w-5 h-5 text-blue-200" />
                                        <span>WhatsApp: {CONTACT_INFO.whatsapp.number}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <AppIcon.MapPin className="w-5 h-5 text-blue-200" />
                                        <span>{CONTACT_INFO.address.full}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <a
                                    href={`tel:${CONTACT_INFO.primaryContact.phoneRaw}`}
                                    className="block w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                                >
                                    Call Now for Expert Advice
                                </a>
                                <a
                                    href={`https://wa.me/${CONTACT_INFO.whatsapp.numberRaw}?text=Hi, I need help choosing tyres for my vehicle`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                                >
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TyreDetailFooter;
