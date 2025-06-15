"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Alert, AlertDescription } from "@/shared/components/ui/alert";
import { AppIcon } from "@/shared/utils/icon";

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    tyreCategory: z.string().optional(),
});

const ContactForm = ({ onSubmit, className }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            tyreCategory: "",
        },
    });

    const handleFormSubmit = async (data) => {
        try {
            if (onSubmit) {
                await onSubmit(data);
            }
            reset();
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <AppIcon icon="mdi:message-text" className="w-5 h-5" />
                    Contact Us
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                                id="name"
                                placeholder="Enter your full name"
                                {...register("name")}
                                className={errors.name ? "border-destructive" : ""}
                            />
                            {errors.name && (
                                <Alert variant="destructive">
                                    <AlertDescription>{errors.name.message}</AlertDescription>
                                </Alert>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className={errors.email ? "border-destructive" : ""}
                            />
                            {errors.email && (
                                <Alert variant="destructive">
                                    <AlertDescription>{errors.email.message}</AlertDescription>
                                </Alert>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            {...register("phone")}
                            className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                            <Alert variant="destructive">
                                <AlertDescription>{errors.phone.message}</AlertDescription>
                            </Alert>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="tyreCategory">Tyre Category (Optional)</Label>
                        <select
                            id="tyreCategory"
                            {...register("tyreCategory")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Select category</option>
                            <option value="2W">2-Wheeler Tyres</option>
                            <option value="4W">4-Wheeler Tyres</option>
                            <option value="Commercial">Commercial Vehicle Tyres</option>
                            <option value="Trucks">Truck Tyres</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            {...register("message")}
                            className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${errors.message ? "border-destructive" : ""
                                }`}
                        />
                        {errors.message && (
                            <Alert variant="destructive">
                                <AlertDescription>{errors.message.message}</AlertDescription>
                            </Alert>
                        )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <AppIcon icon="mdi:loading" className="w-4 h-4 mr-2 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <AppIcon icon="mdi:send" className="w-4 h-4 mr-2" />
                                Send Message
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
