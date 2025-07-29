const LoginIllustration = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative">
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-700"></div>

            {/* Main Content */}
            <div className="text-center z-10">
                <div className="mb-6">
                </div>
                <h3 className="text-white text-4xl font-bold mb-3 drop-shadow-lg">Hello, Welcome!</h3>
                <p className="text-white/90 text-xl drop-shadow-md mb-2">Navigate your journey securely — guided by <span className="font-bold">CaspianNavtel</span></p>
                <p className="text-white/70 text-lg ">Secure tracking, smart navigation</p>
            </div>

            {/* Decorative Gradient Circles */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tr from-white/15 to-transparent rounded-full blur-lg"></div>
        </div>
    );
};

export default LoginIllustration;