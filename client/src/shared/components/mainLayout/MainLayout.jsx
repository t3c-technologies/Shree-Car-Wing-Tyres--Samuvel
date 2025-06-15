"use client";

import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import FloatingContact from "@/shared/components/Floater";

export default function MainLayout({ children }) {
    return (
        <>
            {/* Main navigation - NOT fixed */}
            <Header />

            {/* Main content area */}
            <main className="w-full">
                {children}
            </main>

            {/* Floating contact component */}
            <FloatingContact />

            {/* Footer */}
            <Footer />
        </>
    );
}
