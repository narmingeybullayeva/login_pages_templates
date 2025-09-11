import { Star } from 'lucide-react'
import { useState } from 'react'


const StarButton = () => {

    const [featured, setFeatured] = useState(false);


    const toggleFeatured = () => {
        setFeatured((prev) => {
            const newValue = !prev;

            // burda localStorage və ya API ilə saxlayırsan
            localStorage.setItem("featuredLogin2", JSON.stringify(newValue));

            return newValue;
        });
    };

    return (
        <button
            onClick={toggleFeatured}
            className="absolute top-4 right-4"
        >
            <Star
                className={`w-6 h-6 transition-colors ${featured ? "text-yellow-400 " : "text-gray-400"
                    }`}
            />
        </button>
    )
}

export default StarButton