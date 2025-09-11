import { ArrowRight, Chrome, Github, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import HomeButton from "../../../components/HomeButton";

const LoginPage = () => {
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
        <div className="min-h-screen bg-gray-50 flex">
            <HomeButton className="bg-gray-800 hover:bg-gray-900/70" />
            {/* Left side - Login Form */}
            <div className="flex-1 flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-sm">
                    {/* Logo */}
                    <div className="mb-12">
                        <div className="flex items-center space-x-3 mb-2">


                        </div>
                        <p className="text-gray-500 text-sm">Welcome back</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="usernmae" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    id="username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black focus:ring-2"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-sm text-black hover:text-gray-700 transition-colors duration-200"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 group"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Sign in</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                </>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-gray-50 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-900  transition-colors duration-200 group"
                            >
                                <Github className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-200" />
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-900 transition-colors duration-200 group"
                            >
                                <Chrome className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-200" />
                            </button>
                        </div>
                    </form>

                    {/* Sign up link */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button className="text-black font-medium hover:text-gray-700 transition-colors duration-200">
                                Sign up
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side - Feature showcase */}
            <div className="hidden lg:flex flex-1 bg-black items-center justify-center p-12">
                <div className="max-w-md text-center">
                    <div className="mb-8">

                        <h2 className="text-3xl font-bold text-white mb-4">
                            Perfect for tracking
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Collaborate easily with our intuitive platform. Streamlined, secure, and made for productivity.
                        </p>
                    </div>

                    {/* Feature list */}
                    <div className="space-y-4 text-left">
                        {[
                            'Real-time collaboration',
                            'Advanced security features',
                            'Data stored safely in database',
                            'Detailed analytics'
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">99%</div>
                            <div className="text-sm text-gray-400">Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">1s</div>
                            <div className="text-sm text-gray-400">Sync Speed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">24/7</div>
                            <div className="text-sm text-gray-400">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage