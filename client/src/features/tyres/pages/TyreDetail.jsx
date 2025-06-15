"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import tyresCatalog from '../data/tyresCatalog.json';
import TyreDetailHeader from '../sections/tyreDetail/TyreDetailHeader';
import TyreDetailSpecs from '../sections/tyreDetail/TyreDetailSpecs';
import TyreDetailFooter from '../sections/tyreDetail/TyreDetailFooter';

const TyreDetail = () => {
    const params = useParams();
    const router = useRouter();
    const [tyre, setTyre] = useState(null);
    const [relatedTyres, setRelatedTyres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            // Find the tyre by ID
            const foundTyre = tyresCatalog.find(t => t.id === parseInt(params.id));

            if (foundTyre) {
                setTyre(foundTyre);

                // Find related tyres (same category, different models)
                const related = tyresCatalog
                    .filter(t => t.id !== foundTyre.id && t.category === foundTyre.category)
                    .slice(0, 6);
                setRelatedTyres(related);
            } else {
                // Tyre not found, redirect to 404 or tyres page
                router.push('/tyres');
            }

            setLoading(false);
        }
    }, [params.id, router]);

    const handleAddToCompare = (tyreToCompare) => {
        // Get existing comparison list from localStorage
        const existingCompare = JSON.parse(localStorage.getItem('compareList') || '[]');

        // Check if tyre is already in comparison
        if (!existingCompare.find(t => t.id === tyreToCompare.id)) {
            // Limit to 3 tyres for comparison
            if (existingCompare.length >= 3) {
                alert('You can compare maximum 3 tyres at a time. Please remove one to add this.');
                return;
            }

            existingCompare.push(tyreToCompare);
            localStorage.setItem('compareList', JSON.stringify(existingCompare));
            alert('Tyre added to comparison list!');
        } else {
            alert('This tyre is already in your comparison list.');
        }
    };

    const handleShareTyre = (tyreToShare) => {
        if (navigator.share) {
            navigator.share({
                title: tyreToShare.name,
                text: `Check out this ${tyreToShare.name} tyre`,
                url: window.location.href,
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!tyre) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Tyre Not Found</h1>
                    <p className="text-gray-600 mb-8">The tyre you're looking for doesn't exist.</p>
                    <button
                        onClick={() => router.push('/tyres')}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Browse All Tyres
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <TyreDetailHeader
                tyre={tyre}
                onAddToCompare={handleAddToCompare}
                onShareTyre={handleShareTyre}
            />

            <TyreDetailSpecs tyre={tyre} />

            <TyreDetailFooter
                tyre={tyre}
                relatedTyres={relatedTyres}
            />
        </div>
    );
};

export default TyreDetail;
