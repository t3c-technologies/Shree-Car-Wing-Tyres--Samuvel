"use client";

import { AppIcon } from '@/shared/utils/icon';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';

const StatsSection = () => {
    const stats = [
        {
            icon: "mdi:account-group",
            number: "50,000+",
            label: "Happy Customers",
            description: "Satisfied customers across Chennai",
            color: "text-blue-600"
        },
        {
            icon: "mdi:car",
            number: "1,00,000+",
            label: "Tyres Sold",
            description: "Premium tyres delivered",
            color: "text-green-600"
        },
        {
            icon: "mdi:clock-check",
            number: "15+",
            label: "Years Experience",
            description: "In the tyre industry",
            color: "text-purple-600"
        },
        {
            icon: "mdi:star",
            number: "4.9/5",
            label: "Customer Rating",
            description: "Based on customer reviews",
            color: "text-yellow-600"
        },
        {
            icon: "mdi:wrench",
            number: "24/7",
            label: "Service Support",
            description: "Round the clock assistance",
            color: "text-red-600"
        },
        {
            icon: "mdi:shield-check",
            number: "100%",
            label: "Quality Guarantee",
            description: "On all our products",
            color: "text-indigo-600"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-muted/30 to-muted/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 text-sm font-medium">
                        Our Achievements
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Numbers that speak for our commitment to excellence and customer satisfaction
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <AppIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                                            {stat.number}
                                        </div>
                                        <div className="text-lg font-semibold text-foreground mb-1">
                                            {stat.label}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {stat.description}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
