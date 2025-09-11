import React from 'react';
import { Shield, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center space-y-4">
                {/* Support Information */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>support@caspiannavtel.com</span>
                    </div>
                </div>

                {/* Security & Compliance */}
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                        <Shield className="h-3 w-3" />
                        <span>Data Protection Compliant</span>
                    </div>
                    <span>•</span>
                    <span>SSL Secured</span>
                    <span>•</span>
                    <span>End-to-End Encrypted</span>
                </div>

                {/* Copyright */}
                <div className="text-xs text-gray-400">
                    © 2025 Tabib Emergency Services. All rights reserved.
                    <br />
                    Powered by CaspianNavtel
                </div>
            </div>
        </footer>
    );
};