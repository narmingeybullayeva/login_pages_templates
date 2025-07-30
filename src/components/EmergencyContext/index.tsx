import React from 'react';
import { MapPin, Clock, Users, Activity, Navigation, Heart } from 'lucide-react';

export const EmergencyContext: React.FC = () => {
    const features = [
        {
            icon: MapPin,
            title: "Real-time Location",
            description: "Track your emergency vehicles in real-time"
        },
        {
            icon: Clock,
            title: "Response Times",
            description: "Monitor and optimize emergency response"
        },
        {
            icon: Users,
            title: "Fleet Management",
            description: "Coordinate your entire emergency fleet"
        },
        {
            icon: Activity,
            title: "Live Status",
            description: "View vehicle status and availability"
        }
    ];

    return (
        <div className="space-y-8 h-full flex flex-col justify-center">
            {/* Healthcare GPS Illustration */}
            <div className="flex justify-center mb-8">
                <div className="relative">
                    {/* Map Background */}
                    <div className="w-48 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl relative overflow-hidden">
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="grid grid-cols-8 grid-rows-5 h-full w-full">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <div key={i} className="border border-blue-300"></div>
                                ))}
                            </div>
                        </div>

                        {/* GPS Points */}
                        <div className="absolute top-4 left-8">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                        </div>
                        <div className="absolute top-8 right-12">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <div className="absolute bottom-6 left-16">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
                        </div>

                        {/* Central Ambulance */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-white rounded-lg p-2 shadow-lg border-2 border-red-500">
                                <div className="flex items-center space-x-1">
                                    <div className="w-6 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                                        <Heart className="w-3 h-3 text-white" fill="currentColor" />
                                    </div>
                                    <Navigation className="w-3 h-3 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        {/* Route Lines */}
                        <svg className="absolute inset-0 w-full h-full">
                            <path
                                d="M 32 16 Q 96 40 96 64 Q 96 88 64 96"
                                stroke="#3B82F6"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4,4"
                                className="opacity-60"
                            />
                        </svg>
                    </div>

                    {/* Doctor Icon */}
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg border-2 border-blue-500">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Emergency Fleet Tracking
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Gain full visibility over your emergency fleet, reduce response delays, and provide quick, effective support in urgent situations.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all duration-200 border border-gray-100"
                    >
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <feature.icon className="h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 text-base mb-1">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};