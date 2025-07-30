import React from 'react';
import { Truck, Shield, Heart } from 'lucide-react';

interface CompanyBrandingProps {
    companyName?: string;
    logoUrl?: string;
    primaryColor?: string;
    accentColor?: string;
}

export const CompanyBranding: React.FC<CompanyBrandingProps> = ({
    companyName = "Tabib Emergency Services",
    logoUrl,
    primaryColor = "#0F62FE",
    // accentColor = "#DC2626"
}) => {
    return (
        <div className="text-center space-y-6">
            {/* Logo or Icon */}
            <div className="flex justify-center">
                {logoUrl ? (
                    <img
                        src={logoUrl}
                        alt={`${companyName} Logo`}
                        className="h-16 w-auto"
                    />
                ) : (
                    <div
                        className="h-16 w-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: primaryColor }}
                    >
                        <div className="relative">
                            <Truck className="h-8 w-8 text-white" />
                            <div className="absolute -top-1 -right-1">
                                <Heart className="h-4 w-4 text-red-200" fill="currentColor" />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Company Name */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {companyName}
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                    Emergency Vehicle Tracking System
                </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Secure Access</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Real-time Tracking</span>
                </div>
            </div>
        </div>
    );
};