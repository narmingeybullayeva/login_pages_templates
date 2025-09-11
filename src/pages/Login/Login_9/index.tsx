import { Building2, CheckCircle, Shield, Lock, User, EyeOff, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import HomeButton from "../../../components/HomeButton";


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            alert('Login successful! (Demo)');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <HomeButton className="bg-indigo-800 hover:bg-indigo-900/70" />

            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-slate-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Branding & Info */}
                <div className="hidden lg:block space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                                <Building2 className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800">Fleet Portal
                                </h1>
                                <p className="text-slate-600">Smart GPS Solutions</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                                Welcome to Your
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                                    Tracking Dashboard
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Monitor your vehicles in real time, optimize routes, and manage your fleet with ease.
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-slate-700 font-medium">Real-time GPS tracking</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="text-slate-700 font-medium">Route optimization tools</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Lock className="w-5 h-5 text-purple-600" />
                            </div>
                            <span className="text-slate-700 font-medium">Secure data storage</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-800">99%</div>
                            <div className="text-sm text-slate-600">Uptime</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-800">348+</div>
                            <div className="text-sm text-slate-600">Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-slate-800">24/7</div>
                            <div className="text-sm text-slate-600">Support</div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
                        {/* Mobile Header */}
                        <div className="lg:hidden mb-8 text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-slate-800">Enterprise Portal</h1>
                            <p className="text-slate-600">Sign in to your account</p>
                        </div>

                        <div className="hidden lg:block mb-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Sign In</h2>
                            <p className="text-slate-600">Access your corporate dashboard</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="username" className="block text-sm font-medium text-slate-700">
                                    Username
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/10 backdrop-blur-sm"
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/10 backdrop-blur-sm"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" className="text-sm text-blue-600 hover:text-blue-500 font-medium transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Signing in...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <div className="text-center">
                                <p className="text-sm text-slate-600">
                                    Need help? Contact{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                                        IT Support
                                    </a>
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* Footer Links */}
                    <div className="mt-6 text-center space-y-2">
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-slate-800 transition-colors">Support</a>
                        </div>
                        <p className="text-xs text-slate-500">
                            <p>Powered by CaspianNavtel &copy; 2025</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage