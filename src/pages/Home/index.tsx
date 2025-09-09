
import { ArrowRight, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import apiClient from '../../utils/axios';
import iconMap from '../../icons'
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import Hero from '../../components/Hero';
import Header from '../../components/Header';


function HomePage() {
    const [templates, setTemplates] = useState<loginTemplate[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        apiClient.get<loginTemplate[]>("/templates")
            .then((res) => {
                setTemplates(res.data);
            })
            .catch((err) => {
                console.error("Error fetching templates:", err);
            });
    }, [])



    return (
        <div className="min-h-screen bg-gray-900 text-white">

            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
            <Header />
            <Hero />

            {/* Templates Grid */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {templates.map((template) => (
                        <div
                            onClick={() => navigate(template.path)}
                            key={template.id}
                            className="cursor-pointer group relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 hover:border-gray-300/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-900/10 overflow-hidden"
                        >
                            {/* Subtle gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 group-hover:from-green-400 group-hover:via-emerald-500 group-hover:to-teal-600 transition-all duration-500"></div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${template.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {iconMap[template.iconName] ?? <AlertCircle />}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                                    {template.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {template.description}
                                </p>

                                {/* Preview text */}
                                <div className="mb-8">
                                    <p className="text-sm text-gray-500 italic leading-relaxed">
                                        {template.preview}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="flex items-center justify-between">
                                    <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group/btn">
                                        <span>View Template</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-green-400 transition-colors duration-300"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-emerald-500 transition-colors duration-300 delay-75"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-teal-600 transition-colors duration-300 delay-150"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle hover glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-50/50 via-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>

    );
}

export default HomePage;