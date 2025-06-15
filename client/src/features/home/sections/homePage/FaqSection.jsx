"use client";

import { AppIcon } from '@/shared/utils/icon';
import { Badge } from '@/shared/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion';

const FaqSection = () => {
    const faqs = [
        {
            question: "How do I choose the right tyre size for my vehicle?",
            answer: "The tyre size is printed on the sidewall of your current tyres (e.g., 195/65 R15). You can also find this information in your vehicle's manual or on the placard inside the driver's door. Our experts can help you choose the perfect size and type for your driving needs."
        },
        {
            question: "What's the difference between different tyre types?",
            answer: "Passenger tyres are for regular cars and offer comfort and fuel efficiency. Performance tyres provide better handling and grip. All-terrain tyres work well on various surfaces. Commercial tyres are designed for heavy-duty use. We'll recommend the best type based on your vehicle and usage."
        },
        {
            question: "How often should I replace my tyres?",
            answer: "Typically, tyres should be replaced every 40,000-60,000 km or 3-5 years, depending on usage and conditions. Check for tread depth (should be above 1.6mm), visible wear indicators, cracks, or bulges. Our free tyre inspection can help determine if replacement is needed."
        },
        {
            question: "Do you provide installation services?",
            answer: "Yes! We offer professional installation at our service center with wheel alignment and balancing. We also provide free home delivery and installation service within Chennai for your convenience. All installations include proper mounting, balancing, and safety checks."
        },
        {
            question: "What warranty do you offer on tyres?",
            answer: "All our tyres come with manufacturer warranty that covers manufacturing defects. The warranty period varies by brand and model (typically 2-5 years). We also provide our own service guarantee for installation and balancing work."
        },
        {
            question: "Can you help with tyre maintenance and repair?",
            answer: "Absolutely! We offer comprehensive tyre services including puncture repair, wheel alignment, wheel balancing, rotation, and pressure checks. Regular maintenance extends tyre life and improves vehicle safety and fuel efficiency."
        },
        {
            question: "Do you offer financing or EMI options?",
            answer: "Yes, we provide flexible payment options including EMI plans for purchases above ₹10,000. We accept cash, card payments, UPI, and have partnerships with leading banks for easy financing. Ask our team about current offers and schemes."
        },
        {
            question: "What brands do you carry?",
            answer: "We are authorized dealers for premium brands including Apollo, Bridgestone, MRF, CEAT, JK Tyre, and more. We stock tyres for all vehicle types - 2-wheelers, cars, SUVs, commercial vehicles, and trucks. All products are genuine with proper warranty."
        }
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-sm font-medium">
                        Frequently Asked Questions
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Got Questions? We Have Answers
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about tyres, services, and our offerings
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-border rounded-lg px-6 data-[state=open]:border-primary/30 transition-colors duration-200"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <AppIcon icon="mdi:help-circle" className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>{faq.question}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed pl-11">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <AppIcon icon="mdi:headset" className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Still Have Questions?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Our expert team is here to help you with any tyre-related queries
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                            >
                                <AppIcon icon="mdi:phone" className="w-5 h-5 mr-2" />
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                            >
                                <AppIcon icon="mdi:whatsapp" className="w-5 h-5 mr-2" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
