"use client";

import PremiumHeroSection from '../sections/homePage/PremiumHeroSection';
import PremiumCategoriesSection from '../sections/homePage/PremiumCategoriesSection';
import PremiumBrandsSection from '../sections/homePage/PremiumBrandsSection';
import PremiumServicesSection from '../sections/homePage/PremiumServicesSection';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <PremiumHeroSection />
            <PremiumCategoriesSection />
            <PremiumBrandsSection />
            <PremiumServicesSection />
        </div>
    );
};

export default HomePage;
