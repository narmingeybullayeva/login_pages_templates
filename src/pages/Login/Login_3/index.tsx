import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

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
            console.log('Login attempted with:', { email, password });
        }, 2000);
    };

    const LoginIllustration = () => (
        <svg
            viewBox="0 0 400 300"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background elements */}
            <circle cx="60" cy="60" r="25" fill="url(#bg1)" opacity="0.1" />
            <circle cx="340" cy="80" r="35" fill="url(#bg2)" opacity="0.08" />
            <rect x="300" y="200" width="50" height="50" rx="25" fill="url(#bg3)" opacity="0.12" />
            <polygon points="80,220 120,200 120,240" fill="url(#bg4)" opacity="0.1" />

            {/* Main dashboard container */}
            <rect
                x="80"
                y="80"
                width="240"
                height="160"
                rx="16"
                fill="url(#dashboardBg)"
                stroke="url(#dashboardBorder)"
                strokeWidth="2"
                opacity="0.95"
            />

            {/* Dashboard header */}
            <rect x="90" y="90" width="220" height="30" rx="8" fill="url(#headerGradient)" />
            <circle cx="105" cy="105" r="6" fill="white" opacity="0.9" />
            <rect x="120" y="100" width="80" height="4" rx="2" fill="white" opacity="0.8" />
            <rect x="120" y="108" width="60" height="3" rx="1.5" fill="white" opacity="0.6" />

            {/* Navigation dots */}
            <circle cx="280" cy="100" r="3" fill="white" opacity="0.7" />
            <circle cx="290" cy="100" r="3" fill="white" opacity="0.7" />
            <circle cx="300" cy="100" r="3" fill="white" opacity="0.7" />

            {/* Dashboard content - cards */}
            <rect x="95" y="135" width="65" height="45" rx="8" fill="url(#card1)" opacity="0.9" />
            <rect x="170" y="135" width="65" height="45" rx="8" fill="url(#card2)" opacity="0.9" />
            <rect x="245" y="135" width="65" height="45" rx="8" fill="url(#card3)" opacity="0.9" />

            {/* Card content */}
            <rect x="100" y="145" width="25" height="3" rx="1.5" fill="white" opacity="0.8" />
            <rect x="100" y="152" width="35" height="2" rx="1" fill="white" opacity="0.6" />
            <circle cx="145" cy="155" r="8" fill="white" opacity="0.3" />

            <rect x="175" y="145" width="30" height="3" rx="1.5" fill="white" opacity="0.8" />
            <rect x="175" y="152" width="20" height="2" rx="1" fill="white" opacity="0.6" />
            <rect x="210" y="150" width="20" height="8" rx="4" fill="white" opacity="0.4" />

            <rect x="250" y="145" width="28" height="3" rx="1.5" fill="white" opacity="0.8" />
            <circle cx="275" cy="155" r="6" fill="white" opacity="0.5" />
            <path d="M270 155 L273 158 L280 151" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />

            {/* Bottom section */}
            <rect x="95" y="190" width="210" height="35" rx="8" fill="url(#bottomSection)" opacity="0.8" />
            <rect x="105" y="200" width="60" height="4" rx="2" fill="white" opacity="0.7" />
            <rect x="105" y="208" width="40" height="3" rx="1.5" fill="white" opacity="0.5" />
            <rect x="105" y="215" width="50" height="3" rx="1.5" fill="white" opacity="0.5" />

            {/* User avatar and info */}
            <circle cx="270" cy="207" r="12" fill="url(#avatarBg)" />
            <circle cx="270" cy="204" r="4" fill="white" opacity="0.9" />
            <path d="M262 215 Q270 210 278 215" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8" />

            {/* Floating elements */}
            <g transform="translate(50, 120)">
                <circle r="16" fill="url(#float1)" opacity="0.8">
                    <animate attributeName="r" values="16;20;16" dur="4s" repeatCount="indefinite" />
                </circle>
                <path d="M-6 -2 L-2 2 L6 -6" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                <animate attributeName="transform" values="translate(50, 120); translate(45, 115); translate(50, 120)" dur="5s" repeatCount="indefinite" />
            </g>

            <g transform="translate(350, 140)">
                <circle r="14" fill="url(#float2)" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <rect x="-4" y="-4" width="8" height="8" rx="2" fill="white" opacity="0.9" />
                <animate attributeName="transform" values="translate(350, 140); translate(355, 135); translate(350, 140)" dur="6s" repeatCount="indefinite" />
            </g>

            <g transform="translate(40, 200)">
                <circle r="12" fill="url(#float3)" opacity="0.6">
                    <animate attributeName="r" values="12;16;12" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="3" fill="white" opacity="0.9" />
                <animate attributeName="transform" values="translate(40, 200); translate(35, 195); translate(40, 200)" dur="7s" repeatCount="indefinite" />
            </g>

            {/* Connection lines */}
            <path
                d="M50 120 Q100 100 150 120 Q200 140 250 120"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="4,4"
                opacity="0.5"
            >
                <animate attributeName="stroke-dashoffset" values="0;-16" dur="4s" repeatCount="indefinite" />
            </path>

            <path
                d="M350 140 Q320 160 280 180 Q240 200 200 180"
                stroke="url(#connectionGradient2)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="3,3"
                opacity="0.4"
            >
                <animate attributeName="stroke-dashoffset" values="0;-12" dur="5s" repeatCount="indefinite" />
            </path>

            {/* Animated particles */}
            <circle cx="120" cy="50" r="2" fill="#A855F7" opacity="0.8">
                <animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="60" r="3" fill="#EC4899" opacity="0.6">
                <animate attributeName="cy" values="60;55;60" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="360" cy="180" r="2.5" fill="#06B6D4" opacity="0.7">
                <animate attributeName="cy" values="180;175;180" dur="3.5s" repeatCount="indefinite" />
            </circle>

            {/* Gradients */}
            <defs>
                <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
                <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
                <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="dashboardBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#F1F5F9" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="dashboardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E2E8F0" />
                    <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
                <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
                <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="card2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="card3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="100%" stopColor="#EC4899" />
                    <stop offset="0%" stopColor="#F97316" />
                </linearGradient>
                <linearGradient id="bottomSection" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient id="float1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                <linearGradient id="float2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" />
                    <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
                <linearGradient id="float3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EF4444" />
                    <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#EC4899" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
                </linearGradient>
            </defs>
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-1/4 -right-20 w-60 h-60 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">

                        {/* Illustration Side */}
                        <div className="hidden lg:block">
                            <div className="relative">
                                <div className="w-full h-96">
                                    <LoginIllustration />
                                </div>
                                <div className="text-center mt-8">
                                    <h1 className="text-4xl font-bold text-white mb-4">
                                        Welcome Back
                                    </h1>
                                    <p className="text-white/80 text-lg leading-relaxed">
                                        Sign in to your account and start managing your projects with ease.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Login Form Side */}
                        <div className="w-full max-w-md mx-auto lg:mx-0">
                            {/* Mobile header */}
                            <div className="text-center mb-8 lg:hidden">
                                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                                <p className="text-white/80">Sign in to continue</p>
                            </div>

                            {/* Login Card */}
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Lock className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Sign In</h2>
                                    <p className="text-white/70">Enter your credentials to access your account</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Email Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-white/90 text-sm font-medium block">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-white/90 text-sm font-medium block">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full pl-12 pr-12 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                                placeholder="Enter your password"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Remember & Forgot */}
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center text-white/80 text-sm">
                                            <input type="checkbox" className="mr-2 rounded border-white/20 bg-white/10 text-purple-500 focus:ring-purple-400" />
                                            Remember me
                                        </label>
                                        <button type="button" className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-200">
                                            Forgot password?
                                        </button>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-2xl hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <span>Sign In</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;