import { ArrowLeft, Book, Code, Download, HelpCircle, FileText, Settings, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function DocsPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Header */}
            <header className="relative z-10 border-b border-gray-800/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>Back to Templates</span>
                            </button>
                            <div className="h-6 w-px bg-gray-700"></div>
                            <div className="flex items-center gap-3">
                                <Book className="w-6 h-6 text-purple-400" />
                                <h1 className="text-xl font-bold">Documentation</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Documentation
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about using and customizing our login templates.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-12">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-400" />
                        Table of Contents
                    </h2>
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                            { id: 'introduction', title: 'Introduction', icon: Book },
                            { id: 'getting-started', title: 'Getting Started', icon: Zap },
                            { id: 'template-usage', title: 'Template Usage', icon: Code },
                            { id: 'customization', title: 'Customization', icon: Settings },
                            { id: 'examples', title: 'Examples', icon: FileText },
                            { id: 'faq', title: 'FAQ', icon: HelpCircle },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors py-1"
                            >
                                <item.icon className="w-4 h-4" />
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Documentation Sections */}
                <div className="space-y-16">
                    {/* Introduction */}
                    <section id="introduction">
                        <div className="flex items-center gap-3 mb-6">
                            <Book className="w-6 h-6 text-purple-400" />
                            <h2 className="text-3xl font-bold">Introduction</h2>
                        </div>
                        <div className="prose prose-invert prose-purple max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Welcome to CaspianNavTel's login template collection! Our templates are designed to provide
                                beautiful, modern, and conversion-optimized authentication experiences for your applications.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Each template is crafted with attention to detail, following modern design principles and
                                best practices for user experience. All templates are production-ready and fully responsive,
                                ensuring they work perfectly across all devices and screen sizes.
                            </p>
                        </div>
                    </section>

                    {/* Getting Started */}
                    <section id="getting-started">
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-6 h-6 text-purple-400" />
                            <h2 className="text-3xl font-bold">Getting Started</h2>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 mb-6">
                            <h3 className="text-xl font-semibold mb-4 text-white">Quick Start</h3>
                            <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                <li>Browse our template gallery and select your preferred design</li>
                                <li>Click on any template to view the live preview</li>
                                <li>Copy the template code to your project</li>
                                <li>Customize colors, text, and branding to match your application</li>
                                <li>Deploy and enjoy your beautiful new login experience!</li>
                            </ol>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            All templates are built with React, TypeScript, and Tailwind CSS. No additional dependencies
                            are required beyond what's already included in a standard React project setup.
                        </p>
                    </section>

                    {/* Template Usage */}
                    <section id="template-usage">
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="w-6 h-6 text-purple-400" />
                            <h2 className="text-3xl font-bold">Template Usage</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-white">Basic Implementation</h3>
                                <p className="text-gray-300 mb-4">
                                    Each template is a self-contained React component that you can easily integrate into your existing application:
                                </p>
                                <div className="bg-gray-900/50 border border-gray-700/30 rounded-lg p-4">
                                    <code className="text-purple-300 text-sm">
                                        import LoginTemplate from './components/LoginTemplate';<br />
                                        <br />
                                        function App() {`{`}<br />
                                        &nbsp;&nbsp;return &lt;LoginTemplate /&gt;;<br />
                                        {`}`}
                                    </code>
                                </div>
                            </div>

                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-white">Props and Configuration</h3>
                                <p className="text-gray-300">
                                    Most templates accept common props for customization such as brand colors, logos,
                                    callback functions for authentication, and custom styling options. Check the individual
                                    template documentation for specific prop requirements.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Customization */}
                    <section id="customization">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="w-6 h-6 text-purple-400" />
                            <h2 className="text-3xl font-bold">Customization</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-3 text-white">Colors & Theming</h3>
                                <p className="text-gray-300 text-sm">
                                    Easily customize colors using Tailwind CSS classes. Most templates use CSS custom properties
                                    for primary and secondary colors, making theme changes simple and consistent.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-3 text-white">Branding</h3>
                                <p className="text-gray-300 text-sm">
                                    Replace placeholder logos and text with your brand assets. All templates are designed
                                    to accommodate various logo sizes and brand color schemes.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-3 text-white">Layout Modifications</h3>
                                <p className="text-gray-300 text-sm">
                                    Templates use flexible layouts that can be easily modified. Add or remove form fields,
                                    change button layouts, or adjust spacing using Tailwind utility classes.
                                </p>
                            </div>

                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold mb-3 text-white">Animations</h3>
                                <p className="text-gray-300 text-sm">
                                    Built-in animations and micro-interactions can be customized or disabled. Most animations
                                    use CSS transitions and can be modified through Tailwind classes.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Examples */}
                    <section id="examples">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-purple-400" />
                            <h2 className="text-3xl font-bold">Examples</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 text-white">Popular Use Cases</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-center p-4 bg-gray-900/30 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3"></div>
                                        <h4 className="font-medium text-white mb-2">SaaS Applications</h4>
                                        <p className="text-gray-400 text-sm">Professional templates perfect for B2B software platforms</p>
                                    </div>
                                    <div className="text-center p-4 bg-gray-900/30 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mx-auto mb-3"></div>
                                        <h4 className="font-medium text-white mb-2">E-commerce</h4>
                                        <p className="text-gray-400 text-sm">Conversion-optimized designs for online stores</p>
                                    </div>
                                    <div className="text-center p-4 bg-gray-900/30 rounded-lg">
                                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg mx-auto mb-3"></div>
                                        <h4 className="font-medium text-white mb-2">Creative Platforms</h4>
                                        <p className="text-gray-400 text-sm">Artistic and engaging designs for creative communities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq">
                        <div className="flex items-center gap-3 mb-6">
                            <HelpCircle className="w-6 h-6 text-purple-400" />
                            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "Are the templates mobile-responsive?",
                                    a: "Yes! All templates are fully responsive and optimized for mobile, tablet, and desktop devices."
                                },
                                {
                                    q: "Can I use these templates in commercial projects?",
                                    a: "Absolutely. Our templates come with a commercial-friendly license that allows use in both personal and commercial projects."
                                },
                                {
                                    q: "Do I need to install additional dependencies?",
                                    a: "No additional dependencies are required. Templates work with standard React, TypeScript, and Tailwind CSS setups."
                                },
                                {
                                    q: "How do I integrate authentication logic?",
                                    a: "Templates provide UI components only. You'll need to integrate your preferred authentication service (Firebase, Supabase, Auth0, etc.)."
                                },
                                {
                                    q: "Can I modify the templates?",
                                    a: "Yes! Templates are designed to be easily customizable. Modify colors, layouts, text, and functionality as needed."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold mb-2 text-white">{faq.q}</h3>
                                    <p className="text-gray-300">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>


                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Browse our collection of beautiful login templates and transform your authentication experience today.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                    >
                        View All Templates
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DocsPage;