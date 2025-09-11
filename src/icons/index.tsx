import {
    Sparkles,
    Building,
    Palette,
    Cpu,
    Crown,
    Heart,
    AlertCircle
} from 'lucide-react';

const iconMap: Record<string, React.ReactElement> = {
    Sparkles: <Sparkles className="w-6 h-6" />,
    Building: <Building className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Cpu: <Cpu className="w-6 h-6" />,
    Crown: <Crown className="w-6 h-6" />,
    Heart: <Heart className="w-6 h-6" />,
    AlertCircle: <AlertCircle className="w-6 h-6" />
};

export default iconMap