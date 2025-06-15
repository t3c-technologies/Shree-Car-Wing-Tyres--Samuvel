// Guide configuration - centralized management for all guides
// This file makes it easy to add, modify, or remove guides

export const GUIDE_CONFIG = {
    '1': {
        title: "Complete Guide to Tyre Maintenance",
        description: "Discover essential tyre maintenance tips and tricks in our complete guide. Learn how to choose the best tyres and extend their lifespan with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        excerpt: "Learn essential tips and best practices for maintaining your vehicle's tyres to ensure optimal performance and longevity. Discover how proper maintenance can improve safety and fuel efficiency.",
        category: "Maintenance",
        readTime: "8 min read",
        image: "/images/guide/1.webp",
        date: "January 15, 2025",
        keywords: "Complete Tyre Maintenance Guide, Tyre Care Tips, Best Tyre Maintenance Practices, Apollo Tyres Dealer Coimbatore, How to Extend Tyre Lifespan, Tyre Selection Tips, Reliable Tyre Services, Vidhya Tyres Maintenance Guide, Best Tyres for Cars, Tyre Maintenance Guide",
        ogAlt: "Vidhya Tyres Complete Tyre Maintenance Guide",
    },
    '2': {
        title: "How to Choose the Right Tyres for Your SUV",
        description: "Learn how to choose the best tyres for your SUV with our expert guide. Discover essential tips for selecting the right tyres and ensuring optimal performance with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        excerpt: "Selecting the perfect tyres for your SUV involves considering multiple factors. This comprehensive guide helps you make an informed decision based on your specific needs.",
        category: "Buying Guide",
        readTime: "10 min read",
        image: "/images/guide/2.webp",
        date: "January 12, 2025",
        keywords: "How to Choose SUV Tyres, Best Tyres for SUVs, SUV Tyre Selection Guide, Apollo Tyres Dealer Coimbatore, Tips for Choosing SUV Tyres, Reliable Tyre Dealer, Vidhya Tyres SUV Tyre Guide, Premium Tyre Selection, SUV Tyre Maintenance Tips, Best Apollo SUV Tyres",
        ogAlt: "Vidhya Tyres Guide to Choosing SUV Tyres",
    },
    '3': {
        title: "Understanding Tyre Pressure and Its Importance",
        description: "Discover the importance of maintaining correct tyre pressure for safety, performance, and longevity. Learn expert tips with Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        excerpt: "Proper tyre pressure is crucial for vehicle safety and performance. Learn how to maintain optimal pressure and understand its impact on your driving experience.",
        category: "Safety",
        readTime: "6 min read",
        image: "/images/guide/3.webp",
        date: "January 10, 2025",
        keywords: "Understanding Tyre Pressure, Importance of Tyre Pressure, Tyre Safety Tips, Apollo Tyres Dealer Coimbatore, Tyre Longevity Tips, Proper Tyre Inflation, Tyre Pressure Maintenance, Reliable Tyre Dealer, Vidhya Tyres Guide, Tyre Performance Optimization",
        ogAlt: "Vidhya Tyres Guide to Tyre Pressure",
    },
    '4': {
        title: "Seasonal Tyre Guide: When to Switch",
        description: "Learn when to switch your tyres for different seasons with our comprehensive guide. Ensure safety, performance, and longevity with expert advice from Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        excerpt: "Different seasons demand different tyre types. Discover when and why you should consider switching your tyres to maintain optimal performance throughout the year.",
        category: "Seasonal",
        readTime: "7 min read",
        image: "/images/guide/4.webp",
        date: "January 8, 2025",
        keywords: "Seasonal Tyre Guide, When to Switch Tyres, Winter Tyres, Summer Tyres, Tyre Safety Tips, Apollo Tyres Dealer Coimbatore, Reliable Tyre Dealer, Vidhya Tyres Guide, Tyre Performance for Seasons, Best Seasonal Tyres",
        ogAlt: "Vidhya Tyres Seasonal Tyre Guide",
    },
    '5': {
        title: "Common Tyre Problems and Solutions",
        description: "Discover common tyre problems and their solutions with our expert guide. Ensure optimal tyre performance, safety, and longevity with tips from Vidhya Tyres, your trusted Apollo Tyres dealer in Coimbatore.",
        excerpt: "Identify and resolve common tyre issues before they become major problems. This guide helps you understand warning signs and take preventive measures.",
        category: "Troubleshooting",
        readTime: "9 min read",
        image: "/images/guide/5.webp",
        date: "January 5, 2025",
        keywords: "Common Tyre Problems, Tyre Solutions, Tyre Performance Issues, Tyre Maintenance Tips, Apollo Tyres Dealer Coimbatore, Reliable Tyre Dealer, Tyre Troubleshooting Guide, Vidhya Tyres Guide, Tyre Repair Tips, Tyre Safety Solutions",
        ogAlt: "Vidhya Tyres Tyre Problems and Solutions Guide",
    },
};

// Helper function to get all guide slugs
export const getAllGuideSlugs = () => Object.keys(GUIDE_CONFIG);

// Helper function to get guide by slug
export const getGuideBySlug = (slug) => GUIDE_CONFIG[slug];

// Helper function to get all guides as array (for listings)
export const getAllGuides = () =>
    Object.entries(GUIDE_CONFIG).map(([slug, guide]) => ({
        id: slug,
        slug,
        ...guide
    }));

// Helper function to validate if slug exists
export const isValidGuideSlug = (slug) => Boolean(GUIDE_CONFIG[slug]);
