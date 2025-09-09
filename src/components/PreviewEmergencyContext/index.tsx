
import { EmergencyContext } from '../EmergencyContext';

function PreviewEmergencyContextPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        EmergencyContext Component Preview
                    </h1>
                    <p className="text-gray-600">
                        This is how the EmergencyContext component looks when rendered
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <EmergencyContext />
                </div>
            </div>
        </div>
    );
}

export default PreviewEmergencyContextPage;