"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/Floater";

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
