import { ReactNode } from "react";

export function ContactCard({
    icon,
    title,
    value,
}: {
    icon: ReactNode;
    title: string;
    value: string;
}) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
                {icon}
            </div>

            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm">{value}</p>
        </div>
    );
}
