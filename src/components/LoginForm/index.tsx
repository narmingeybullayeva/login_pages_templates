import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react';

interface LoginFormProps {
    onSubmit: (credentials: { username: string; password: string }) => void;
    isLoading: boolean;
    error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading, error }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState<{
        username?: string;
        password?: string;
    }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        const errors: { username?: string; password?: string } = {};

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setValidationErrors({});
        onSubmit(formData);
    };

    const handleInputChange = (field: 'username' | 'password', value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear validation error when user starts typing
        if (validationErrors[field]) {
            setValidationErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-red-700">{error}</div>
                </div>
            )}

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
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${validationErrors.username
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                            }`}
                        placeholder="Enter your username"
                        disabled={isLoading}
                    />
                </div>
                {validationErrors.username && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.username}</p>
                )}
            </div>

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
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className={`block w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${validationErrors.password
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 bg-white hover:border-gray-400'
                            }`}
                        placeholder="Enter your password"
                        disabled={isLoading}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                        disabled={isLoading}
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
                {validationErrors.password && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.password}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing In...</span>
                    </div>
                ) : (
                    'Sign In'
                )}
            </button>
        </form>
    );
};