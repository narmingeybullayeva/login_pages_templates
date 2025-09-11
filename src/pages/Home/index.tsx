import { ArrowRight, AlertCircle, Search, Filter, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import iconMap from '../../icons';
import { loginTemplate as LoginTemplate } from '../../utils/types';
import { mockTemplates } from '../../data/mockTemplates';
import { Link, useNavigate } from 'react-router-dom';

// Mock navigate function since we don't have full routing setup


function HomePage() {
    const [templates, setTemplates] = useState<LoginTemplate[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        setTemplates(mockTemplates);
    }, []);


    const categories = ['All', 'Modern', 'Business', 'Creative', 'Tech', 'Luxury', 'Healthcare'];

    const filteredTemplates = templates.filter(template => {
        const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            template.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredTemplates = templates.filter(template => template.featured);

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const category = categories.find(
                (c) => c.toLowerCase() === searchTerm.toLowerCase()
            );
            if (category) {
                setSelectedCategory(category);

                setSearchTerm('');


                const section = document.getElementById("templates");
                section?.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">

            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <header className="relative z-10 border-b border-gray-800/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">

                            <div>
                                <h1 className="text-xl font-bold">CaspianNavTel</h1>

                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-6">
                            <nav className="flex items-center gap-6">
                                <a href="#templates" className="text-gray-300 hover:text-white transition-colors">Templates</a>
                                <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
                            </nav>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">


                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Beautiful Login
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Templates
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Transform your authentication experience with our collection of stunning,
                        production-ready login page templates. Built with modern design principles
                        and optimized for conversion.
                    </p>


                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search templates..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyDown={handleSearchKeyDown}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                />
                            </div>
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value);


                                        const section = document.getElementById("templates");
                                        section?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="pl-12 pr-8 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
                                >
                                    {categories.map(category => (
                                        <option key={category} value={category} className="bg-gray-800">
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {featuredTemplates.length > 0 && (
                <section className="relative z-10 py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-3 mb-12">
                            <Star className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-3xl font-bold">Featured Templates</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                            {featuredTemplates.slice(0, 2).map((template) => (
                                <div
                                    key={template.id}
                                    onClick={() => navigate(template.path)}
                                    className="group cursor-pointer relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${template.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="text-white">
                                                {iconMap[template.iconName] ?? <AlertCircle />}
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                                                    {template.title}
                                                </h3>
                                                <Star className="w-5 h-5 text-yellow-400" />
                                            </div>

                                            <p className="text-gray-400 mb-4 leading-relaxed">
                                                {template.description}
                                            </p>

                                            <p className="text-sm text-gray-500 mb-6 italic">
                                                {template.preview}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="inline-flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300">
                                                    {template.category}
                                                </span>

                                                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group/btn">
                                                    <span>View Template</span>
                                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            <section id='templates' className="relative z-10 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">All Templates</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredTemplates.map((template) => (
                            <div
                                key={template.id}
                                onClick={() => navigate(template.path)}
                                className="group cursor-pointer relative bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden hover:bg-gray-800/40 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/20"
                            >
                                {/* Gradient top border */}
                                <div className={`h-1 bg-gradient-to-r ${template.color} group-hover:h-2 transition-all duration-300`}></div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${template.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="text-white">
                                                {iconMap[template.iconName] ?? <AlertCircle />}
                                            </div>
                                        </div>

                                        {template.featured && (
                                            <Star className="w-5 h-5 text-yellow-400" />
                                        )}
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors">
                                        {template.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {template.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                                            {template.category}
                                        </span>

                                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredTemplates.length === 0 && (
                        <div className="text-center py-16">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No templates found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </section>


            <footer className="relative z-10 border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">

                                <span className="text-xl font-bold">CaspianNavTel</span>
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
                        <p>&copy; 2025 <a href="https://caspiannavtel.az/en/" className='hover:text-white transition-colors'>CaspianNavTel</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;