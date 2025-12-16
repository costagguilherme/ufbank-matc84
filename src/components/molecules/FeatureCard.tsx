import { ReactNode } from "react";


export function FeatureCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
    return (
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center gap-4 text-center">
            {icon}
            <h3 className="text-purple-700 font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}