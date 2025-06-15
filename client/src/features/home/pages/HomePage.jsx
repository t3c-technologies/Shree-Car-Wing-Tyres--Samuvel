"use client";

import PremiumHeroSection from '../sections/homePage/PremiumHeroSection';
import PremiumCategoriesSection from '../sections/homePage/PremiumCategoriesSection';
import PremiumBrandsSection from '../sections/homePage/PremiumBrandsSection';
import PremiumServicesSection from '../sections/homePage/PremiumServicesSection';
import FeaturesSection from '../sections/homePage/FeaturesSection';
import WhyChooseUsSection from '../sections/homePage/WhyChooseUsSection';
import TestimonialsSection from '../sections/homePage/TestimonialsSection';
import StatsSection from '../sections/homePage/StatsSection';
import FaqSection from '../sections/homePage/FaqSection';
import CtaSection from '../sections/homePage/CtaSection';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <PremiumHeroSection />
            <PremiumCategoriesSection />
            <PremiumBrandsSection />
            <StatsSection />
            <FeaturesSection />
            <WhyChooseUsSection />
            <PremiumServicesSection />
            <TestimonialsSection />
            <FaqSection />
            <CtaSection />
        </div>
    );
};

export default HomePage;
