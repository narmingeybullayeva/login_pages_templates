import { useState } from 'react';
import { Shield, Eye, EyeOff, Mail, Lock, AlertCircle, Dot, Users, User } from 'lucide-react';
import ambulanceBg from '../../../assets/images/bg.png';
import HomeButton from '../../../components/HomeButton';


function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Home Button - Positioned absolutely */}
            <HomeButton className='absolute top-4 left-4 z-10 bg-white/20 hover:bg-white/10' />

            {/* Left Side - Full Height Background */}
            <div
                className="bg-cover bg-center min-h-screen relative"
                style={{ backgroundImage: `url(${ambulanceBg})` }}
            >
                {/* Optional overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
                <div className="w-full max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-[#254d87] mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600">
                            Sign in to monitor your emergency vehicles
                        </p>
                    </div>

                    <form className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#254d87] focus:border-[#254d87] transition-colors bg-white"
                                    placeholder="Enter your username"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <AlertCircle className="h-5 w-5 text-red-500 opacity-0" />
                                </div>
                            </div>
                            <p className="mt-1 text-sm text-red-600"></p>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#254d87] focus:border-[#254d87] transition-colors bg-white"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                            <p className="mt-1 text-sm text-red-600"></p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#2658a2] hover:bg-[#254d87] text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="flex items-center justify-center">
                                Sign In
                            </div>
                        </button>

                        {/* Additional Links */}
                        <div className="text-center space-y-2">
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </form>
                </div>

                {/* Security Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center space-x-4">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                        <Shield className="h-4 w-4 mr-2 text-green-600" />
                        SSL Secured Connection
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                        <Dot className="h-4 w-4 mr-2 text-green-600" />
                        End-to-End Encrypted
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-sm text-gray-500">
                    <p>Powered by CaspianNavtel &copy; 2025</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;