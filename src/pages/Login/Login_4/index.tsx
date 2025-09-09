import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Heart, Shield, Users } from 'lucide-react';
import HomeButton from '../../../components/HomeButton';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const HealthcareIllustration = () => (
        <svg
            viewBox="0 0 500 400"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background elements */}
            <circle cx="80" cy="80" r="30" fill="url(#healthBg1)" opacity="0.1" />
            <circle cx="420" cy="100" r="40" fill="url(#healthBg2)" opacity="0.08" />
            <rect x="350" y="280" width="60" height="60" rx="30" fill="url(#healthBg3)" opacity="0.12" />

            {/* Main medical dashboard */}
            <rect
                x="100"
                y="100"
                width="300"
                height="200"
                rx="20"
                fill="url(#dashboardBg)"
                stroke="url(#dashboardBorder)"
                strokeWidth="2"
                opacity="0.95"
            />

            {/* Dashboard header with medical cross */}
            <rect x="110" y="110" width="280" height="40" rx="10" fill="url(#headerGradient)" />
            <g transform="translate(130, 130)">
                <rect x="-8" y="-2" width="16" height="4" rx="2" fill="white" />
                <rect x="-2" y="-8" width="4" height="16" rx="2" fill="white" />
            </g>
            <rect x="160" y="120" width="100" height="5" rx="2.5" fill="white" opacity="0.9" />
            <rect x="160" y="130" width="80" height="4" rx="2" fill="white" opacity="0.7" />

            {/* Navigation icons */}
            <circle cx="350" cy="125" r="4" fill="white" opacity="0.8" />
            <circle cx="365" cy="125" r="4" fill="white" opacity="0.8" />
            <circle cx="380" cy="125" r="4" fill="white" opacity="0.8" />

            {/* Medical data cards */}
            <rect x="115" y="165" width="80" height="60" rx="10" fill="url(#card1)" opacity="0.9" />
            <rect x="210" y="165" width="80" height="60" rx="10" fill="url(#card2)" opacity="0.9" />
            <rect x="305" y="165" width="80" height="60" rx="10" fill="url(#card3)" opacity="0.9" />

            {/* Card 1 - Heart Rate */}
            <g transform="translate(155, 185)">
                <path d="M-8 0 C-8 -4, -4 -8, 0 -8 C4 -8, 8 -4, 8 0 C8 4, 0 12, 0 12 C0 12, -8 4, -8 0 Z" fill="white" opacity="0.9" />
                <rect x="-15" y="8" width="30" height="3" rx="1.5" fill="white" opacity="0.8" />
                <rect x="-10" y="15" width="20" height="2" rx="1" fill="white" opacity="0.6" />
            </g>

            {/* Card 2 - Patient Stats */}
            <g transform="translate(250, 185)">
                <circle r="8" fill="white" opacity="0.3" />
                <circle r="4" fill="white" opacity="0.9" />
                <path d="M-6 6 Q0 2 6 6" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />
                <rect x="-12" y="12" width="24" height="2" rx="1" fill="white" opacity="0.7" />
            </g>

            {/* Card 3 - Medical Records */}
            <g transform="translate(345, 185)">
                <rect x="-10" y="-8" width="20" height="16" rx="2" fill="white" opacity="0.9" />
                <rect x="-7" y="-5" width="14" height="2" rx="1" fill="url(#card3)" />
                <rect x="-7" y="-1" width="10" height="1.5" rx="0.75" fill="url(#card3)" />
                <rect x="-7" y="3" width="12" height="1.5" rx="0.75" fill="url(#card3)" />
            </g>

            {/* Bottom patient info section */}
            <rect x="115" y="240" width="270" height="45" rx="10" fill="url(#bottomSection)" opacity="0.8" />
            <rect x="125" y="250" width="80" height="5" rx="2.5" fill="url(#textGradient)" opacity="0.8" />
            <rect x="125" y="260" width="60" height="4" rx="2" fill="url(#textGradient)" opacity="0.6" />
            <rect x="125" y="270" width="70" height="4" rx="2" fill="url(#textGradient)" opacity="0.6" />

            {/* Doctor avatar */}
            <circle cx="340" cy="262" r="15" fill="url(#avatarBg)" />
            <circle cx="340" cy="257" r="5" fill="white" opacity="0.9" />
            <path d="M330 270 Q340 265 350 270" stroke="white" strokeWidth="2" fill="none" opacity="0.8" />

            {/* Floating medical icons */}
            <g transform="translate(60, 150)">
                <circle r="18" fill="url(#float1)" opacity="0.8">
                    <animate attributeName="r" values="18;22;18" dur="4s" repeatCount="indefinite" />
                </circle>
                <g transform="translate(0, 0)">
                    <rect x="-6" y="-1.5" width="12" height="3" rx="1.5" fill="white" />
                    <rect x="-1.5" y="-6" width="3" height="12" rx="1.5" fill="white" />
                </g>
                <animate attributeName="transform" values="translate(60, 150); translate(55, 145); translate(60, 150)" dur="5s" repeatCount="indefinite" />
            </g>

            <g transform="translate(440, 180)">
                <circle r="16" fill="url(#float2)" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <path d="M-6 -2 C-6 -6, -2 -10, 2 -10 C6 -10, 10 -6, 10 -2 C10 2, 2 10, 2 10 C2 10, -6 2, -6 -2 Z" fill="white" opacity="0.9" />
                <animate attributeName="transform" values="translate(440, 180); translate(445, 175); translate(440, 180)" dur="6s" repeatCount="indefinite" />
            </g>

            <g transform="translate(50, 280)">
                <circle r="14" fill="url(#float3)" opacity="0.6">
                    <animate attributeName="r" values="14;18;14" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <rect x="-5" y="-5" width="10" height="10" rx="2" fill="white" opacity="0.9" />
                <circle cx="0" cy="0" r="2" fill="url(#float3)" />
                <animate attributeName="transform" values="translate(50, 280); translate(45, 275); translate(50, 280)" dur="7s" repeatCount="indefinite" />
            </g>

            {/* Medical data flow lines */}
            <path
                d="M60 150 Q120 130 180 150 Q240 170 300 150"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4,4"
                opacity="0.5"
            >
                <animate attributeName="stroke-dashoffset" values="0;-16" dur="4s" repeatCount="indefinite" />
            </path>

            <path
                d="M440 180 Q400 200 360 220 Q320 240 280 220"
                stroke="url(#connectionGradient2)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
                opacity="0.4"
            >
                <animate attributeName="stroke-dashoffset" values="0;-12" dur="5s" repeatCount="indefinite" />
            </path>

            {/* Animated health particles */}
            <circle cx="150" cy="60" r="2.5" fill="#3B82F6" opacity="0.8">
                <animate attributeName="cy" values="60;55;60" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="350" cy="70" r="3" fill="#EF4444" opacity="0.6">
                <animate attributeName="cy" values="70;65;70" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="450" cy="250" r="2.5" fill="#10B981" opacity="0.7">
                <animate attributeName="cy" values="250;245;250" dur="3.5s" repeatCount="indefinite" />
            </circle>

            {/* Pulse line animation */}
            <g transform="translate(250, 350)">
                <path
                    d="M-50 0 L-30 0 L-25 -10 L-20 10 L-15 -15 L-10 20 L-5 -8 L0 0 L50 0"
                    stroke="url(#pulseGradient)"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.8"
                >
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Gradients and definitions */}
            <defs>
                <linearGradient id="healthBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="healthBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="healthBg3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="dashboardBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="dashboardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2E8F0" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
                <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="card2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="card3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="bottomSection" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1F2937" />
                    <stop offset="100%" stopColor="#6B7280" />
                </linearGradient>
                <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="float1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="float2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="float3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#EF4444" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
            <HomeButton className=" bg-red-500 hover:bg-red-200 " />
            {/* Healthcare-themed background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-1/3 right-20 w-48 h-48 bg-red-100/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-50/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-red-50/30 rounded-full blur-xl animate-pulse delay-3000"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Healthcare Illustration Side */}
                        <div className="hidden lg:block">
                            <div className="relative">
                                <div className="w-full h-96 mb-8">
                                    <HealthcareIllustration />
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                                            <Heart className="w-6 h-6 text-white" />
                                        </div>
                                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                                            HealthCare Pro
                                        </h1>
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                                        Secure access to your healthcare management platform.
                                        Connecting patients, providers, and care teams seamlessly.
                                    </p>
                                    <div className="flex items-center justify-center space-x-6 mt-6">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Shield className="w-4 h-4 mr-2 text-blue-500" />
                                            Data Protection Compliant
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Users className="w-4 h-4 mr-2 text-red-500" />
                                            24/7 Support
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Login Form Side */}
                        <div className="w-full max-w-md mx-auto lg:mx-0">
                            {/* Mobile header */}
                            <div className="text-center mb-8 lg:hidden">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                                        <Heart className="w-5 h-5 text-white" />
                                    </div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                                        HealthCare Pro
                                    </h1>
                                </div>
                                <p className="text-gray-600">Secure Healthcare Portal</p>
                            </div>

                            {/* Login Card */}
                            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Lock className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                                    <p className="text-gray-600">Sign in to access your healthcare dashboard</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-gray-700 text-sm font-medium block">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 bg-white/70 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 "
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-gray-700 text-sm font-medium block">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full pl-12 pr-12 py-4 bg-white/70 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                                placeholder="Enter your secure password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember & Forgot */}
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center text-gray-600 text-sm">
                                            <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-500 focus:ring-blue-400" />
                                            Remember me
                                        </label>
                                        <button type="button" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                                            Forgot password?
                                        </button>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>Sign In Securely</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Security Notice */}
                                <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                                    <div className="flex items-center text-sm text-blue-700">
                                        <Shield className="w-4 h-4 mr-2" />
                                        <span>Your data is protected with enterprise-grade security</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;