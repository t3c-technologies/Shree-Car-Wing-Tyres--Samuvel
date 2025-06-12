import Link from 'next/link';
import { ChevronLeft, BookOpen, Home } from 'lucide-react';

export default function GuideNotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <BookOpen className="w-12 h-12 text-red-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Guide Not Found</h2>
                    <p className="text-gray-600 mb-8">
                        The guide you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/guide"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to All Guides
                    </Link>

                    <Link
                        href="/"
                        className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                    >
                        <Home className="w-4 h-4" />
                        Go to Homepage
                    </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Need help? Contact us at{' '}
                        <a href="tel:+917373737373" className="text-blue-600 hover:underline">
                            +91 7373 737 373
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
