import { Home } from "lucide-react"

type ButtonProps = {
    className?: string;
};

const HomeButton = ({ className }: ButtonProps) => {

    const handleHomeRedirect = () => {
        window.location.href = "/"; // Redirect to home page
    };
    return (
        <>
            {/* Home Button - Top Left Corner */}
            <button
                onClick={handleHomeRedirect}
                className={`absolute top-6 left-6 z-20  backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group ${className}`}
                aria-label="Go to Home"
            >
                <Home size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
        </>
    )
}

export default HomeButton