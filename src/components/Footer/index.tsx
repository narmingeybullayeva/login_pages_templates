import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">TemplateHub</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Premium login page templates designed for modern applications.
                            Built with the latest technologies and design trends.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-500">
                    <p>&copy; 2025 TemplateHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};