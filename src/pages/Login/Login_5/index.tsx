import { useState } from 'react';
import { CompanyBranding } from '../../../components/CompanyBranding';
import { LoginForm } from '../../../components/LoginForm';
import { EmergencyContext } from '../../../components/EmergencyContext';
import { Footer } from '../../../components/Footer';
import HomeButton from '../../../components/HomeButton';

function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState<string>('');

    const handleLogin = async (credentials: { username: string; password: string }) => {
        setIsLoading(true);
        setLoginError('');

        try {
            // Replace this with actual Wialon authentication
            // This is a placeholder for the actual login logic
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

            // For demo purposes, simulate different outcomes
            if (credentials.username === 'demo' && credentials.password === 'demo') {
                // Successful login - redirect to Wialon dashboard
                window.location.href = 'https://hst-api.wialon.com/';
            } else {
                throw new Error('Invalid credentials. Please check your username and password.');
            }
        } catch (error) {
            setLoginError(error instanceof Error ? error.message : 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
            <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <HomeButton className="bg-blue-900/90 hover:bg-blue-900/70" />
                <div className="max-w-6xl w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Emergency Context & Illustration */}
                        <div className="order-2 lg:order-1">
                            <div className="max-w-lg mx-auto lg:mx-0">
                                <EmergencyContext />
                            </div>
                        </div>

                        {/* Right Side - Login Form */}
                        <div className="order-1 lg:order-2 pt-10">
                            <div className="max-w-md mx-auto">
                                {/* Main Login Card */}
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                    <div className="px-8 py-10">
                                        {/* Company Branding */}
                                        <CompanyBranding />

                                        {/* Login Form */}
                                        <div className="mt-10">
                                            <LoginForm
                                                onSubmit={handleLogin}
                                                isLoading={isLoading}
                                                error={loginError}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Footer */}
                                <Footer />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-8 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </div>
    );
}

export default LoginPage;