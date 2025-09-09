import { Zap } from 'lucide-react'


const Header = () => {
    return (
        <>
            {/* Header */}
            <header className="relative z-10 border-b border-gray-800/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">TemplateHub</h1>
                                <p className="text-sm text-gray-400">Premium Login Templates</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-6">
                            <nav className="flex items-center gap-6">
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
                            </nav>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header