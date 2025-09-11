import React, { useState } from 'react';
import { Eye, EyeOff, Diamond, Lock } from 'lucide-react';
import HomeButton from '../../../components/HomeButton';

const LoginPage = () => {
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

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-100 flex items-center justify-center p-6">
            <HomeButton className="bg-gray-800 hover:bg-gray-900/70" />
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, #000 2px, transparent 0), radial-gradient(circle at 75px 75px, #000 2px, transparent 0)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            <div className="w-full max-w-sm relative z-10">


                {/* Login Card */}
                <div className="bg-white/80 backdrop-blur-sm border border-stone-200/50 rounded-none shadow-2xl shadow-stone-900/10">
                    <div className="p-10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Email Field */}
                            <div className="space-y-3">
                                <label htmlFor="username" className="block text-xs font-medium text-slate-600 tracking-widest uppercase">
                                    Username
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-stone-200 text-slate-800 placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-all duration-500 text-lg font-light"
                                        placeholder="Username"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-3">
                                <label htmlFor="password" className="block text-xs font-medium text-slate-600 tracking-widest uppercase">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-0 py-4 pr-10 bg-transparent border-0 border-b-2 border-stone-200 text-slate-800 placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-all duration-500 text-lg font-light"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-amber-600 transition-colors duration-300"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" strokeWidth={1.5} /> : <Eye className="w-5 h-5" strokeWidth={1.5} />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right pt-2">
                                <button
                                    type="button"
                                    className="text-sm text-slate-500 hover:text-amber-600 transition-colors duration-300 font-light relative group"
                                >
                                    Forgot your password?
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </div>

                            {/* Login Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-slate-900 text-white py-5 font-light tracking-widest uppercase text-sm transition-all duration-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center justify-center space-x-3">
                                        {isLoading ? (
                                            <>
                                                <div className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Authenticating</span>
                                            </>
                                        ) : (
                                            <>
                                                <Lock className="w-4 h-4" strokeWidth={1.5} />
                                                <span>Enter</span>
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/0 via-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:via-amber-600/5 group-hover:to-amber-600/10 transition-all duration-500"></div>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Divider */}
                    <div className="px-10 pb-10">
                        <div className="flex items-center mb-8">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
                            <span className="px-6 text-stone-400 text-xs tracking-widest uppercase font-light">Or</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
                        </div>

                        {/* Register Link */}
                        <div className="text-center">
                            <p className="text-slate-500 text-sm font-light">
                                New here?{' '}
                                <button className="text-slate-800 hover:text-amber-600 transition-colors duration-300 font-medium relative group">
                                    Sign up
                                    <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-12">
                    <p className="text-slate-400 text-xs tracking-widest font-light">
                        <p>Powered by CaspianNavtel &copy; 2025</p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage